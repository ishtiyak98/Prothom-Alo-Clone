import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineNewspaper } from "react-icons/md";
import "../../../styles/Dashboard/DashboardSidebar.scss";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const { dashboardSidebar } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();
  return (
    <aside
      className={`sidebar-container absolute top-0 ${
        dashboardSidebar ? "left-0" : "left-[-100%] lg:left-[-250px]"
      }`}
    >
      <div className="sidebar-link-container">
        <div className="sidebar-link">
          <MdOutlineNewspaper className="text-xl"></MdOutlineNewspaper>
          <Link to={"add-news"}>Add Article</Link>
        </div>
        <div className="sidebar-link">
          <AiOutlineUser className="text-xl"></AiOutlineUser>
          <Link to={"my-profile"}>My Profile</Link>
        </div>
        <div className="sidebar-link">
          <AiOutlineUser className="text-xl"></AiOutlineUser>
          <Link to={"edit-profile"}>Edit Profile</Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
