import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { BiBell, BiMenu, BiSearchAlt2 } from "react-icons/bi";
import "../../styles/Navbar.scss";
import { Link } from "react-router-dom";
import getBanglaDate from "../../utils/getBanglaDate";
const Navbar = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dt = today.getDate();
    let dd = today.getDay();
    const banglaDate = getBanglaDate(dd, dt, mm, yyyy);
    setCurrentDate(banglaDate);
  }, []);

  return (
    <section className="pt-4">
      <header className="header-container max-w-[1280px] mx-auto">
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

      <div className="flex justify-between text-[15px] pb-4 max-w-[1280px] mx-auto">
        <div>
          <p>{currentDate}</p>
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
