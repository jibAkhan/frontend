/*
import React from 'react'
import './footerFile.scss';

export default function Footer() {
    return (
      <div className="footer">
        <p>Logo</p>
      </div>
    );
  }
*/
import React from 'react';
import './footerFile.scss';

export default function Footer() {
  return (
    <div className="footer">
      <div className="left-content">Logo</div>
      <div className="middle-content">In Collaboration With</div>
      <div className="right-content">Github</div>
    </div>
  );
}
