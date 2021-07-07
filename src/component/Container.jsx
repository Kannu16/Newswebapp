import React from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

const Container = () => {
  return (
    <div>
      <div className="container">
        <LeftSide />
        <RightSide />
      </div>
    </div>
  );
};

export default Container;
