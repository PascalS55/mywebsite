import React from "react";

const Service = ({ title = "Title", info = "" }) => {
  return (
    <div className="w-full h-full justify-between flex-row flex py-10 group">
      <div className="w-full flex items-center">
        <h3 className="text-5xl font-bold relative w-3/4">
          <span className="underline group-hover:underline group-hover:decoration-primary decoration-dark duration-700">
            {title}
          </span>
        </h3>
      </div>
      <div className="w-full mt-2">
        <p className="text-lg w-11/12">{info}</p>
      </div>
    </div>
  );
};

export default Service;
