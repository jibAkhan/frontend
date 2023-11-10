import React from 'react'
import scss from "./Popup.scss"
export default function Popup(props) {
  //const [showPopup, SetShowPopup]
  

return (
  <div className="Popup">
     
      {/* <button onClick={togglePopup}>Friend Request</button> */}
      {props.showPopup && (
        <div className="popup">
          <div className="popup-content">
					<span>{props.msg}</span>
            <div className = "buttonWrapper">
              <button name = "yes" onClick={props.yesFunction}>YES</button>
              <button name = "no" onClick={props.noFunction}>NO</button>
            </div>
          </div>
        </div>
      )}
   
  </div>
  
)
}

// /*
//  export default function Popup(props) {
//    const FriendRequest = () => {
//     const [requestSent, setRequestSent] = useState(false);

//     const prompSendRequest = () => {
//       setRequestSent(true)

//     }

//   };
  
// /*
// /props.text 

//   return (
// 	  <div className="Popup">
//       {requestSent ? (
//         <h1>Friend Request Sent!</h1>
//       ) : (
//         <button onClick={prompSendRequest}>Send Friend Request</button>
//       )}
// 	 </div>
//   )
