import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsTwitter />
      </div>
      <div>
      <a href="https://www.facebook.com/profile.php?id=100091468059551" target="_blank" rel="noopener noreferrer">
      <FaFacebookF />
    </a>
    
        {/* <FaFacebookF /> */}
      </div>
      <div>
        <BsInstagram />
      </div>
    </div>
  );
};

export default SocialMedia;
