import React from "react";
import { HiMenu } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleDashboardSidebar } from "../../../redux/sidebar/sidebarSlice";
import Logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";

const DashboardNav = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center py-2 w-full bg-gray-300 px-4 lg:px-16">
      <div>
        <p>Home</p>
      </div>
      <div>
        <div className="w-[200px]">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      </div>
      <div>
        <HiMenu
          className="text-2xl cursor-pointer"
          onClick={() => dispatch(toggleDashboardSidebar())}
        ></HiMenu>
      </div>
    </div>
  );
};

export default DashboardNav;
