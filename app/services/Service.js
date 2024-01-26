import React from "react";

const Service = ({ title = "Title", info = "" }) => {
  return (
    <div className="w-full h-full justify-between flex-row flex py-10 group lg:py-7 md:py-5 xs:py-2">
      <div className="w-full flex items-center lg:w-2/3">
        <h3 className="text-5xl font-bold relative w-3/4 lg:text-3xl md:text-xl xs:text-base">
          <span className="underline group-hover:underline group-hover:decoration-primary decoration-dark duration-700">
            {title}
          </span>
        </h3>
      </div>
      <div className="w-full mt-2">
        <p className="text-lg  w-11/12 lg:w-full lg:text-base md:text-base xs:text-xs">
          {info}
        </p>
      </div>
    </div>
  );
};

export default Service;
