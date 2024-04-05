import React from 'react';
import './about.css';
import aboutpic from './emperor-penguin-chicks.avif';
import Footer from '../../Components/Footer/Footer';

const About = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 h-full w-full bg-black [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        <div className="relative">
          <div className="AboutPage">
            <div className="content-container">
              <div className="heading-container">
                <h1 className="text-4xl font-bold text-purple-700 mb-4 text-left">About Lasso</h1>
              </div>
              <div className="about-content">
                <div className="about-text">
                  <p className="text-lg text-gray-200">
                    Lasso is a language learning platform that connects learners with native speakers. Our mission is to make language learning accessible and enjoyable by providing a seamless way to practice speaking with native speakers from around the world.
                  </p>
                  <p className="text-lg text-gray-200">
                    With Lasso, you can choose the language you want to learn and the language you can teach. We'll match you with a language partner who shares your interests and learning goals. Start having real conversations and improve your language skills today!
                  </p>
                </div>
                <div className="about-image">
                  <div className="minip">
                    <div className="mg">
                      <div className="clr"></div>
                      <div className="group">
                        <span>About Lasso</span>
                      </div>
                    </div>
                    <div className="av" style={{ backgroundImage: `url(${aboutpic})` }}></div>
                    <div className="info">
                      <name>Lasso</name>
                      <deets>
                        Language Learning Platform
                      </deets>
                    </div>
                    <a className="plot" title="Learn More" href="/">
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default About;