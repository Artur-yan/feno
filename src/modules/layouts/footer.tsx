import React from "react";
import MainSvg from '../../assets/icons/mainLogo.svg';
import TwitSvg from '../../assets/icons/twit.svg';
import FacebookSvg from '../../assets/icons/facebookLogo.svg';
import InstagramSvg from '../../assets/icons/InstagramLogo.svg';
import YoutubeSvg from '../../assets/icons/youtubeLogo.svg';
import TikTokSvg from '../../assets/icons/tiktokLogo.svg';

const Footer = () => {
  return <div className='mainFooter'>
    <div className="topFooter">
      <div className="logo">
        <img src={MainSvg} alt=""/>
      </div>
      <p>We are an open-source library of over <span className='G-white'>400+</span> web components and interactive elements built with the utility classes from Tailwind CSS.</p>
      <div className="footerSocial">
        <div className='socialItem'>
          <img src={TwitSvg} alt=""/>
        </div>
        <div className='socialItem'>
          <img src={FacebookSvg} alt=""/>
        </div>
        <div className='socialItem'>
          <img src={InstagramSvg} alt=""/>
        </div>
        <div className='socialItem'>
          <img src={YoutubeSvg} alt=""/>
        </div>
        <div className='socialItem'>
          <img src={TikTokSvg} alt=""/>
        </div>
      </div>
    </div>
    <div className="footerNav">
      <div className="navGroup">
        <p className="title G-white">COMPANY</p>
        <p>Home</p>
        <p>Comparison</p>
        <p>Why Choose Feno</p>
        <p>Explore Feno</p>
        <p>Our Company Partners</p>
        <p>Feno Subscription</p>
        <p>FAQ</p>
      </div>
      <div className="navGroup">
        <p className="title G-white">Help and support</p>
        <p>Contact Us</p>
      </div>
      <div className="navGroup">
        <p className="title G-white">Legal</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
      </div>
    </div>
    <p>© 2023 Grin Labs, Inc. All rights reserved.</p>
  </div>
}

export default Footer;