import React from "react";
import "../../styles/Home.scss";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  return (
    <>
      <section className="max-w-[1280px] mx-auto">
        <Navbar></Navbar>
        <h2 className="heading-text bg-slate-700">কেন হত্যা, সেই জট খোলেনি</h2>
      </section>
    </>
  );
};

export default Home;
