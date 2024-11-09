import React, { useState } from 'react';
import './Top.scss';  // Import the Sass file for styling
import Pop from './Pop';

function BackgroundImageComponent() {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleOutsideClick = (e) => {
    if (e.target.className === 'popup') {
      setShowPopup(false);
    }
  };

  return (
    <div className="background-image">
      {/* Add content over your background image here */}
      <h1>Welcome to TD Club</h1>
      <p>一生中仅定制旅行无贩卖品——成立于2012年</p>
      <button className="open-popup-btn" onClick={togglePopup}>Contact me</button>
      {showPopup && (
        <div className="popup" onClick={handleOutsideClick}>
          <div className="popup-inner">
            <Pop/>
          </div>
        </div>
      )}
    </div>
  );
}

export default BackgroundImageComponent;
