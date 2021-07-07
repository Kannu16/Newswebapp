import React from "react";
import User from "./User";
import ViewToggle from "./ViewToggle";
import FeedBack from "./FeedBack";
import FeedbackForm from "./FeedbackForm";

const LeftSide = () => {
  return (
    <>
      <div className="left-container">
       <User />
       <ViewToggle />
       <FeedBack />
      </div>  
        <FeedbackForm />
    </>
  );
};

export default LeftSide;
