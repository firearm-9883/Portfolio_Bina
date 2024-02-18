import React from "react";
import "./loading.css";
const Loading = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen relative  top-[-89px]">
        <div className="absolute inset-0 z-10"></div>
        <div className="🤚 mt-10 md:mt-40">
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="👉"></div>
          <div className="🌴"></div>
          <div className="👍"></div>
        </div>
      </div>
    </>
  );
};

export default Loading;
