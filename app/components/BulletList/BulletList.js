// BulletList.js

import React from "react";

const BulletList = ({ text, bulletColor, className }) => {
  const paragraphs = text.split("\n").map((paragraph, index) => (
    <p key={index} className="mb-2 md:text-sm">
      <span className={`bullet ${className}`} style={{ color: bulletColor }}>
        &#8226;
      </span>{" "}
      {paragraph.trim()}
    </p>
  ));

  return <div>{paragraphs}</div>;
};

export default BulletList;
