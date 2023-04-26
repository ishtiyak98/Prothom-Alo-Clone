import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";
import FacebookSVG from "../../assets/social-icons/facebook-1-svgrepo-com.svg";
import TwitterSVG from "../../assets/social-icons/twitter-svgrepo-com.svg";
import YoutubeSVG from "../../assets/social-icons/youtube-svgrepo-com.svg";
import InstagramSVG from "../../assets/social-icons/instagram-1-svgrepo-com.svg";
import "../../styles/Sidebar.scss";
import { useDispatch } from "react-redux";
import { hideSidebar } from "../../redux/sidebar/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="nav-sidebar">
        <div className="nav-sidebar-content">
          <div
            className="sidebar-close"
            onClick={() => dispatch(hideSidebar())}
          >
            <IoMdClose></IoMdClose>
          </div>
          <nav className="sidebar-nav">
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                প্রচ্ছদ
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                সর্বশেষ
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                বিশেষ সংবাদ
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                রাজনীতি
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                করোনাভাইরাস
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                বাংলাদেশ
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                বিশ্ব
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                বাণিজ্য
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                মতামত
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                খেলা
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                বিনোদন
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                চাকরি
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                জীবনযাপন
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                প্রযুক্তি
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                সুস্থতা
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                শিক্ষা
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                ধর্ম
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                ছবি
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                ভিডিও
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                একটু থামুন
              </Link>
            </div>
          </nav>

          {/*!------- sidebar-social-icons -------*/}
          <div>
            <p>অনুসরণ করুন</p>
            <div className="social-container">
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
        </div>
      </div>
    </>
  );
};

export default Sidebar;
