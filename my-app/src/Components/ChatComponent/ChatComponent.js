import React from 'react'
import scss from "./ChatComponent.scss"

function Chatbox(props) {
  return (
    <div>
      {props.outgoing ?
        <div className='chatbox-outgoing'>{props.msg}</div>
        : <div className='chatbox-incoming'>{props.msg}</div>}   
    </div>
  )
}
export default function ChatComponent() {
  return (
    <div className="chat">
        <div className="chat-panel">
            <Chatbox msg={"hello"} outgoing={false} />
        </div>
        <div className="input">
            <input type="text" size="50" class="form-control" placeholder="WRITE YOUR MESSAGE..."/>        
        </div>
     </div>
  )
}
