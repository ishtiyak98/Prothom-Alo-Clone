import React from "react";
import { NavLink } from "react-router-dom";
import { MdNewspaper } from "react-icons/md";
import "../../../styles/Dashboard/DashboardSidebar.scss";
import { useDispatch, useSelector } from "react-redux";
import { FaUserEdit, FaUsers } from "react-icons/fa";
import { HiUser } from "react-icons/hi";
import { toggleDashboardSidebar } from "../../../redux/sidebar/sidebarSlice";

const Sidebar = () => {
  const { dashboardSidebar } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <aside
      className={`sidebar-container absolute top-0 ${
        dashboardSidebar ? "left-0" : "left-[-100%] lg:left-[-250px]"
      }`}
      onClick={() => dispatch(toggleDashboardSidebar())}
    >
      <div
        className="sidebar-link-container"
        onClick={(e) => e.stopPropagation()}
      >
        <NavLink
          to={"add-news"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <div className="sidebar-link">
            <MdNewspaper className="text-xl"></MdNewspaper>
            <p className="">Add Article</p>
          </div>
        </NavLink>
        <NavLink
          to={"my-profile"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <div className="sidebar-link">
            <HiUser className="text-xl"></HiUser>
            <p className="">My Profile</p>
          </div>
        </NavLink>
        <NavLink
          to={"edit-profile"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <div className="sidebar-link">
            <FaUserEdit className="text-xl"></FaUserEdit>
            <p className="">Edit Profile</p>
          </div>
        </NavLink>
        <NavLink
          to={"all-users"}
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          <div className="sidebar-link">
            <FaUsers className="text-xl"></FaUsers>
            <p className="">All Users</p>
          </div>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
