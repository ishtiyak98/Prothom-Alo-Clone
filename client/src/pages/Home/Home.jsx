import React, { useState } from "react";
import "../../styles/Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import NavItems from "../../components/Navbar/NavItems";
import Sidebar from "../../components/Navbar/Sidebar";

const Home = () => {
  const [showSideNav, setSideNav] = useState(true);
  return (
    <>
      <Navbar></Navbar>
      <NavItems></NavItems>
      <section className="max-w-[1280px] mx-auto h-[2000px] ">
        <h2 className="heading-text">কেন হত্যা, সেই জট খোলেনি</h2>
      </section>
      {showSideNav && <Sidebar></Sidebar>}
    </>
  );
};

export default Home;
