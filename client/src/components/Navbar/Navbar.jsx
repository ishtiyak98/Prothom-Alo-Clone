import React from "react";
import Logo from "../../assets/logo.png";
import { BiBell, BiMenu, BiSearchAlt2 } from "react-icons/bi";
import "../../styles/Navbar.scss";

const Navbar = () => {
  return (
    <section className="py-4">
      <header className="header-container">
        <div className="left-icon">
          <BiMenu className="menu-icon"></BiMenu>
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
            <button className="login-btn">Login</button>
          </div>
        </div>
      </header>
      <div className="flex justify-between">
        <div>
          <p>বুধবার, ২৬ এপ্রিল ২০২৩</p>
        </div>
        <div>
          <p>
            <span className="font-bold">English</span> Edition
          </p>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
