import React from "react";
import { useState, useEffect } from "react";

const Pagination = ({ page, onPageChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = page * counter;
    onPageChange(value - page, value);
  }, [counter]);

  const onBtnClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / page) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };

  return (
    <div className="pagination-container">
      <button className="btn privious" onClick={() => onBtnClick("prev")}>
      <i class="fas fa-arrow-circle-left"></i>  Previous
      </button>
       <button className="btn next" onClick={() => onBtnClick("next")}>
          Next <i class="fas fa-arrow-circle-right"></i> 
      </button>
    </div>
  );
};

export default Pagination;
