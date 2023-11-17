import React from 'react';
import Navbar from '../../Components/Navbar/ Navbar';
import Languagetags from '../../Components/LanguageTags/Languagetags';
import VideoCallComponent from '../../Components/VideoCall/VideoCallComponent';
import Popup from '../../Components/PopUp/Popup';
import CreateRoom from '../home/CreateRoom';
import Footer from '../../Components/Footer/footerFile';
import ChatComponent from '../../Components/ChatComponent/ChatComponent';

export default function Mainapp() {
	return (
		<div className="Mainapp">
			{/**
				navbar
				languageTags
				videoInterface
			   */}
			<Navbar />
			<Languagetags items={["ENGLISH","SPANISH"]} />
			<VideoCallComponent/>
			<ChatComponent/>
			<CreateRoom/>
			<Popup msg="Would you like to send a friend request? " showPopup={true} />
			<Footer /> 
		</div>
	);
}
