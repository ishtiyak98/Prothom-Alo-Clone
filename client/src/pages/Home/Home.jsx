import React, { useState } from "react";
import "../../styles/Home.scss";
import Navbar from "../../components/Navbar/Navbar";
import NavItems from "../../components/Navbar/NavItems";
import Sidebar from "../../components/Navbar/Sidebar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import BulletinNews from "../../components/HomeComponents/BulletinNews/BulletinNews";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const { showSidebar } = useSelector((state) => state.sidebar);
  const [showSideNav, setSideNav] = useState(false);
  useEffect(() => {
    setSideNav(showSidebar);
  }, [showSidebar]);
  return (
    <>
      <Navbar></Navbar>
      <NavItems></NavItems>
      <section className="max-w-[1280px] mx-auto ">
        <BulletinNews></BulletinNews>
      </section>
      <Footer></Footer>
      {showSideNav && <Sidebar></Sidebar>}
    </>
  );
};

export default Home;
