import React from "react";
import footerLogo from "../../assets/logo/logo_flat.png";
import { Link } from "react-router-dom";
import FacebookSVG from "../../assets/social-icons/facebook-1-svgrepo-com.svg";
import TwitterSVG from "../../assets/social-icons/twitter-svgrepo-com.svg";
import YoutubeSVG from "../../assets/social-icons/youtube-svgrepo-com.svg";
import InstagramSVG from "../../assets/social-icons/instagram-1-svgrepo-com.svg";
import playStore from "../../assets/social-icons/google-play-download.svg";
import appStore from "../../assets/social-icons/download-on-the-app-store.svg";
import "../../styles/Footer.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-logo-container">
        <img src={footerLogo} alt="" />
      </div>
      <div className="footer-grid">
        <div className="footer-link-container">
          <Link className="lg:block" to={"/"}>
            Bangladesh
          </Link>
          <Link className="lg:block" to={"/"}>
            Entertainment
          </Link>
          <Link className="lg:block" to={"/"}>
            Video
          </Link>
        </div>
        <div className="footer-link-container">
          <Link className="lg:block" to={"/"}>
            International
          </Link>
          <Link className="lg:block" to={"/"}>
            Lifestyle
          </Link>
          <Link className="lg:block" to={"/"}>
            e-Paper
          </Link>
        </div>
        <div className="footer-link-container">
          <Link className="lg:block" to={"/"}>
            Sports
          </Link>
          <Link className="lg:block" to={"/"}>
            Environment
          </Link>
          <Link className="lg:block" to={"/"}>
            Search
          </Link>
        </div>
        <div className="footer-link-container">
          <Link className="lg:block" to={"/"}>
            Opinion
          </Link>
          <Link className="lg:block" to={"/"}>
            Science & Technology
          </Link>
          <Link className="lg:block" to={"/"}>
            বাংলা সংস্করণ
          </Link>
        </div>
        <div className="footer-link-container">
          <Link className="lg:block" to={"/"}>
            Business
          </Link>
          <Link className="lg:block" to={"/"}>
            Corporate
          </Link>
        </div>
        <div className="footer-link-container">
          <Link className="lg:block" to={"/"}>
            Youth
          </Link>
          <Link className="lg:block" to={"/"}>
            Photo
          </Link>
        </div>
      </div>
      <hr />
      <div className="other-links">
        <div className="social-container">
          <p>Follow us</p>
          <div className="social-icon-container">
            <div className="social-icon-wrapper">
              <img src={FacebookSVG} alt="" />
            </div>
            <div className="social-icon-wrapper">
              <img src={TwitterSVG} alt="" />
            </div>
            <div className="social-icon-wrapper">
              <img src={YoutubeSVG} alt="" />
            </div>
            <div className="social-icon-wrapper">
              <img src={InstagramSVG} alt="" />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm text-center mb-2">Download mobile apps</p>
          <div className="download-app-icon-container">
            <div className="img-wrapper">
              <img src={playStore} alt="playStoreDownload" />
            </div>
            <div className="img-wrapper">
              <img src={appStore} alt="playStoreDownload" />
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="my-[18px] flex flex-wrap space-x-4 lg:space-x-8 justify-center font-serif">
        <Link className="block my-2" to={"/"}>Advertise</Link>
        <Link className="block my-2" to={"/"}>Terms of Use</Link>
        <Link className="block my-2" to={"/"}>Privacy Policy</Link>
        <Link className="block my-2" to={"/"}>Contact Us</Link>
      </div>
      <hr />
      <div className="mt-[20px] flex flex-col lg:flex-row justify-center space-x-1">
        <div className="text-sm text-center order-last lg:order-first">
          Copyright © 2023 Prothom Alo. All Rights Reserved.
        </div>
        <div className="text-sm text-center mb-2 lg:mb-0">
          Editor & Publisher: Matiur Rahman
        </div>
      </div>
    </footer>
  );
};

export default Footer;
