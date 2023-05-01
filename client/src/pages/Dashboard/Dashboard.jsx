import React from "react";
import DashboardNav from "../../components/Dashboard/DashboardNav/DashboardNav";
import Navbar from "../../components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Dashboard/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <section>
      <DashboardNav></DashboardNav>

      <div className="flex">
        <div className="h-screen bg-gray-300">
          <Sidebar></Sidebar>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <h2>sdcscs</h2>
    </section>
  );
};

export default Dashboard;
