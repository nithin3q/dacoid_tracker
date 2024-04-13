import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faMapMarkerAlt, faCamera, faUser } from "@fortawesome/free-solid-svg-icons";
import home1 from "../assets/home11.png";

const Footer = () => {
  return (
    <div>
      {/* Your existing code */}
      <footer className="flex justify-around py-4 bg-gray-100">
        <div className="cursor-pointer hover:text-blue-500" onClick={() => handleHomeClick()}>
          <img src={home1}  className="h-6 w-8"/>
        </div>
        <div className="cursor-pointer hover:text-blue-500" onClick={() => handleTrackingClick()}>
          <FontAwesomeIcon icon={faMapMarkerAlt} size="lg" />
        </div>
        <div className="cursor-pointer hover:text-blue-500" onClick={() => handleCameraClick()}>
          <FontAwesomeIcon icon={faCamera} size="lg" />
        </div>
        <div className="cursor-pointer hover:text-blue-500" onClick={() => handleProfileClick()}>
          <FontAwesomeIcon icon={faUser} size="lg" />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
