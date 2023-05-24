import React, { useState } from "react";
import Logo from "../../assets/logo/prothomalo_logo_eng.png";
import { BiBell, BiMenu, BiSearchAlt2 } from "react-icons/bi";
import "../../styles/Navbar.scss";
import { useDispatch, useSelector } from "react-redux";
import { showSidebar } from "../../redux/sidebar/sidebarSlice";
import { Link } from "react-router-dom";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase.init";
import { userLogOut } from "../../redux/user/userSlice";
import AvatarLogo from "../../assets/avatar.png";

const Navbar = () => {
  const { user } = useSelector((state) => state.userSlice);
  const [signOut, loading, error] = useSignOut(auth);
  const [logoutSuccess, setLogoutSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    const success = await signOut();
    if (success) {
      dispatch(userLogOut());
      setLogoutSuccess(true);
    }
  };

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
          <Link to={"/"}>
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="right-icon">
          <div>
            <BiBell className="bell-icon"></BiBell>
          </div>
          {user.email ? (
            <div>
              <div>
                <Link to={"/dashboard"}>
                  <img src={AvatarLogo} className="nav-avatar" alt="" />
                </Link>
              </div>
            </div>
          ) : (
            <div>
              <Link to={"/login"} className="login-btn">
                Login
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className="flex justify-between text-[15px] pb-4 max-w-[1280px] mx-auto">
        <div>
          <p className="">
            {new Date().toLocaleDateString("en-US", {
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
