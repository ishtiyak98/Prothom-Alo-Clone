import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { BiBell, BiMenu, BiSearchAlt2 } from "react-icons/bi";
import "../../styles/Navbar.scss";
import getBanglaDate from "../../utils/getBanglaDate";
import { useDispatch } from "react-redux";
import { showSidebar } from "../../redux/sidebar/sidebarSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <section className="pt-4 px-2 lg:px-0">
      <header className="header-container max-w-[1280px] mx-auto">
        <div className="left-icon">
          <BiMenu
            className="menu-icon"
            onClick={() => dispatch(showSidebar())}
          ></BiMenu>
          <BiSearchAlt2 className="search-icon"></BiSearchAlt2>
        </div>
        <div className="logo-wrapper">
          <img src={Logo} alt="" />
        </div>
        <div className="right-icon">
          <div>
            <BiBell className="bell-icon"></BiBell>
          </div>
          <div>
            <Link to={"/login"} className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </header>

      <div className="flex justify-between text-[15px] pb-4 max-w-[1280px] mx-auto">
        <div>
          <p>
            {new Date().toLocaleDateString("bn-BD", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div>
          <p>
            <span className="font-bold hover:cursor-pointer hover:underline">
              English
            </span>{" "}
            Edition
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
