import React from "react";

import { useNavigate } from "react-router-dom";

const CreateRoom = ({ setRoomID }) => {
  const navigate = useNavigate();

  const create = async (e) => {
   //  e.preventDefault();

    const resp = await fetch("http://localhost:8000/create");
    const { room_id } = await resp.json();
    setRoomID(room_id)
    //navigate(`/room/${room_id}`);
  };
  create()

  return (
    <div>
      <button onClick={create}>Create Room</button>
    </div>
  );
};

export default CreateRoom;