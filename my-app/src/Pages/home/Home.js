import React, { useState } from 'react';
import { Col, Container, Row, Dropdown } from 'react-bootstrap';
import './home.scss';

const Home = () => {
  const [selectedLanguage1, setSelectedLanguage1] = useState(null);
  const [selectedLanguage2, setSelectedLanguage2] = useState(null);

  const handleLanguageChange1 = (language) => {
    console.log(`Selected language 1: ${language}`);
    setSelectedLanguage1(language);
  };

  const handleLanguageChange2 = (language) => {
    console.log(`Selected language 2: ${language}`);
	 window.location.replace('/app')
    setSelectedLanguage2(language);
  };

  const languages = ["English", "Spanish", "French", "German", "Chinese"]; // Add your supported languages

  return (
    <Container fluid className="contained HomePage">
      <Row className="pb-5">
        <Col md="6">
          <div className="Home-Page">
            <h1>LASSO</h1>
            <p className="lead-text">
              Learn a new language with ease.
            </p>
            
            <div className="learn-dropdown-container">
              <span className="learn-text">I want to learn</span>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdownLanguage1">
                  {selectedLanguage1 ? selectedLanguage1 : "Select Language 1"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {languages.map((language, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleLanguageChange1(language)}
                    >
                      {language}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>

              {/* Second Dropdown with added spacing */}
              <div className="learn-dropdown-container" style={{ marginLeft: '100px' }}>
                <span className="learn-text">I can teach</span>
                <Dropdown>
                  <Dropdown.Toggle variant="secondary" id="dropdownLanguage2">
                    {selectedLanguage2 ? selectedLanguage2 : "Select Language 2"}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    {languages.map((language, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleLanguageChange2(language)}
                      >
                        {language}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
