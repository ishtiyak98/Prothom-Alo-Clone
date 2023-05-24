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
      <div className="nav-sidebar" onClick={() => dispatch(hideSidebar())}>
        <div
          className="nav-sidebar-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className="sidebar-close"
            onClick={() => dispatch(hideSidebar())}
          >
            <IoMdClose></IoMdClose>
          </div>
          <nav className="sidebar-nav grid grid-cols-2 lg:grid-cols-1 gap-x-5">
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Home
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Bangladesh
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Sports
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Opinion
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Business
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Youth
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Entertainment
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                LifeStyle
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Environment
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Science & Technology
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Corporate
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Photo
              </Link>
            </div>
            <div>
              <Link to={"/"} className="sidebar-nav-text">
                Video
              </Link>
            </div>
          </nav>

          {/*!------- sidebar-social-icons -------*/}
          <div>
            <p>Follow us</p>
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
