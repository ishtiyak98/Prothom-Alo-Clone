import React from "react";
import { useSelector } from "react-redux";
import BulletinCard from "./BulletinCard";
import "../../../styles/Home/Bulletin.scss";
import Layout1 from "./Layouts/Layout1";
import Layout2 from "./Layouts/Layout2";

const BulletinNews = () => {
  const { allNews } = useSelector((state) => state.newsPost);

  return (
    <>
      <section className="bulletin-container">
        <div className="bulletin-child-1">
          {allNews?.slice(0, 8)?.map((news, index) => (
            <Layout1 key={news.id} news={news} index={index}></Layout1>
          ))}
        </div>
        <div className="bulletin-child-2">
          {allNews?.slice(0, 3)?.map((news, index) => (
            <Layout2 key={news.id} news={news} index={index}></Layout2>
          ))}
        </div>
      </section>
    </>
  );
};

export default BulletinNews;
