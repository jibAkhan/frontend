import React from 'react';
import Navbar from '../../Components/Navbar/ Navbar';
import Footer from '../../Components/Footer/footerFile';
import './404.scss';

export default function ErrorPage()
{
    return(
        <div className="page-404-Error">
        <Navbar/>
        <div className="message">
            <h1>404 Page not Found</h1>
            <p>The page you're looking for is not available.</p>
        </div>
        <div className="home-btn-wrapper">
            <button name ="home">Back To Home</button>
        </div>
        <Footer/>
        </div>
    )
}