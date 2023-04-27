import React from "react";
import { useSelector } from "react-redux";
import BulletinCard from "./BulletinCard";

const BulletinNews = () => {
  const { allNews } = useSelector((state) => state.newsPost);

  return (
    <>
      <section className="grid grid-cols-3 gap-[2px] bg-gray-200">
        {allNews?.map((news, index) => (
          <BulletinCard key={news.id} news={news} index={index}></BulletinCard>
        ))}
      </section>
    </>
  );
};

export default BulletinNews;
