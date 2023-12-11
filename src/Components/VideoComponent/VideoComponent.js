import React, { useEffect, useRef } from "react";
import "./VideoComponent.scss";

const VideoComponent = (props) => {
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();
  const webSocketRef = useRef();
  const { roomID } = props;

  useEffect(() => {
    const openCamera = async () => {
      const constraints = {
        audio: true,
        video: true
      };
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        userVideo.current.srcObject = stream;
        return stream;
      } catch (err) {
        console.error("Failed to get user media", err);
      }
    };

    openCamera().then((stream) => {
      if (!stream) {
        console.error("Failed to get user stream");
        return;
      }

      peerRef.current = createPeer();
      stream.getTracks().forEach((track) => {
        peerRef.current.addTrack(track, stream);
      });

      webSocketRef.current = new WebSocket(`ws://localhost:8000/join?roomID=${roomID}`);

      webSocketRef.current.onopen = () => {
        console.log("WebSocket Connected");
        webSocketRef.current.send(JSON.stringify({ join: true }));
      };

      webSocketRef.current.onmessage = async (event) => {
        const message = JSON.parse(event.data);

        if (message.offer) {
          await peerRef.current.setRemoteDescription(new RTCSessionDescription(message.offer));
          const answer = await peerRef.current.createAnswer();
          await peerRef.current.setLocalDescription(answer);
          webSocketRef.current.send(JSON.stringify({ answer }));
        } else if (message.answer) {
          await peerRef.current.setRemoteDescription(new RTCSessionDescription(message.answer));
        } else if (message.iceCandidate) {
          try {
            await peerRef.current.addIceCandidate(message.iceCandidate);
          } catch (err) {
            console.error("Error adding received ice candidate", err);
          }
        }
      };
    });
  }, [roomID]);

  const createPeer = () => {
    const peer = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    peer.onicecandidate = (event) => {
      if (event.candidate) {
        webSocketRef.current.send(JSON.stringify({ iceCandidate: event.candidate }));
      }
    };

    peer.ontrack = (event) => {
      partnerVideo.current.srcObject = event.streams[0];
    };

    return peer;
  };

  return (
    <div>
      <div className="videoContainer">
        <video autoPlay controls ref={userVideo} className="userVideo"></video>
        <video autoPlay controls ref={partnerVideo} className="partnerVideo"></video>
      </div>
    </div>
  );
};

export default VideoComponent;