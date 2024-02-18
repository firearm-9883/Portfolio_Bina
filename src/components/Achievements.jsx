import React from "react";

const Achievements = (props) => {
  const { title } = props;
  return (
    <>
      <div
        className="rounded-3xl text-center min-h-[600px]"
        style={{ border: "1px solid #2d7570" }}
      >
        <h1 className="text-2xl md:text-4xl mt-10">{title}</h1>
      </div>
    </>
  );
};

export default Achievements;
