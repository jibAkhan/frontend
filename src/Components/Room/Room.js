import React from "react";
import "./Room.scss";
import VideoComponent from "../VideoComponent/VideoComponent";
import ChatComponent from "../ChatComponent/ChatComponent";

const Room = (props) => {
  return (
    <div className="room">
      <div className="video-container">
        <VideoComponent roomID={props.roomID} />
      </div>
      <div className="chat-container">
        <ChatComponent />
      </div>
    </div>
  );
};

export default Room;
