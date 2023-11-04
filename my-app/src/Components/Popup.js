import React from 'react'
export default function Popup(props) {
  //const [showPopup, SetShowPopup]
  

return (
  <div className="Popup">
     
      {/* <button onClick={togglePopup}>Friend Request</button> */}
      {props.showPopup && (
        <div className="popup">
          <div className="popup-content">
					<span>{props.msg}</span>
            <button onClick={props.yesFunction}>Yes</button>
            <button onClick={props.noFunction}>No</button>
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
