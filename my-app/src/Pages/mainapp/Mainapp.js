import React, { useState } from 'react';
//import Navbar from '../../Components/Navbar/NavBar';
import Languagetags from '../../Components/LanguageTags/Languagetags';
import Room from '../../Components/Room/Room'
import Popup from '../../Components/PopUp/Popup';
import CreateRoom from '../home/CreateRoom';
import Footer from '../../Components/Footer/Footer';

export default function Mainapp() {
	const [roomID, setRoomID] = useState(null);

	return (
		<div className="Mainapp">
			{/**
				navbar
				languageTags
				videoInterface
			   */}
			<Languagetags items={["ENGLISH","SPANISH"]} />
			{roomID != null && <Room roomID={roomID}/>}
			{roomID == null && <CreateRoom setRoomID={setRoomID}/>}
			<Popup msg="Would you like to send a friend request? " showPopup={false} />
			<Footer /> 
		</div>
	);
}
