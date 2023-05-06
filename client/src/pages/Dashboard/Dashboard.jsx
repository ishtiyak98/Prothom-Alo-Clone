import React from "react";
import DashboardNav from "../../components/Dashboard/DashboardNav/DashboardNav";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";
import { useSelector } from "react-redux";
import "../../styles/Dashboard/Dashboard.scss";

const Dashboard = () => {
  const { dashboardSidebar } = useSelector((state) => state.sidebar);
  console.log(dashboardSidebar);
  return (
    <section>
      <div className="flex">
        <div className="">
          <Sidebar></Sidebar>
        </div>
        <div
          className={`w-full transition-all duration-[0.25s] bg-[#F7F9FA] min-h-screen ${
            dashboardSidebar ? "pl-[0px] lg:pl-[250px]" : "pl-[0px]"
          }`}
        >
          <DashboardNav></DashboardNav>
          <div className="dashboard-data-container">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
