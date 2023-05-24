import React from "react";

const Layout1 = ({ news, index }) => {
  const { title, featureImg, text } = news;

  return (
    <>
      {index === 0 || index === 1 ? (
        <div
          className={`bg-white p-4 ${index === 0 && "lg:col-span-2"} lg:flex`}
        >
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p>{text.substr(0, 100)}...</p>
          </div>
          <div className="">
            {index !== 1 && (
              <div className="lg:w-[320px] h-[220px]">
                <img
                  src={featureImg}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`bg-white p-4 space-y-4 ${index === 0 && "col-span-2"}`}
        >
          <div className="h-[160px]">
            <img
              src={featureImg}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <p>{text.substr(0, 100)}...</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout1;
