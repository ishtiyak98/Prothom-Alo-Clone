import React from "react";

const BulletinCard = ({ news, index }) => {
  const { title, featureImg, text } = news;
  console.log(index);
  return (
    <>
      {index === 0 || index === 1 ? (
        <div className={`bg-white p-4 ${index === 0 && "col-span-2"} flex`}>
          <div>
            <h2>{title}</h2>
            <p>{text.substr(0, 100)}...</p>
          </div>
          <div className="">
            {index !== 1 && (
              <img src={featureImg} alt="" className="w-full h-full" />
            )}
          </div>
        </div>
      ) : (
        <div className={`bg-white p-4 ${index === 0 && "col-span-2"}`}>
          <div className="h-[160px]">
            <img src={featureImg} alt="" className="w-full h-full" />
          </div>
          <h2>{title}</h2>
          <p>{text.substr(0, 100)}...</p>
        </div>
      )}
    </>
  );
};

export default BulletinCard;
