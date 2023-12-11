import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="left-content">
        <div className="brand">Lasso</div>
      </div>
      <div className="middle-content">
        In Collaboration With Code[Coogs]
        {/* Maybe add collaborator logos here */}
      </div>
      <div className="right-content">
        <a href="https://github.com/Polyguins" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  );
}

