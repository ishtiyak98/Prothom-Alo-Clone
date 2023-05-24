import React from "react";

const Layout2 = ({ news, index }) => {
  const { title, featureImg, text } = news;
  return (
    <>
      {index === 0 ? (
        <div className={`bg-white p-4 ${index === 0 && "lg:col-span-2"}`}>
          {index !== 1 && (
            <div className="">
              <img
                src={featureImg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          )}
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
          </div>
        </div>
      ) : (
        <div className={`bg-white p-4 ${index === 0 && "col-span-2"} flex`}>
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="w-[150px]">
            <img
              src={featureImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout2;
