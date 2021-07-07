import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Pagination from "./Pagination";
// https://api.first.org/data/v1/news
const RightSide = () => {
  const [data, setData] = useState([]);

  const [page, setPage] = useState(4);

  const [pagination, setPagination] = useState({
    start: 0,
    end: page,
  });

  const onPageChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  async function getData() {
    const res = await axios.get("https://api.first.org/data/v1/news");
    setData(res.data.data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div
        className="right-container"
        id="rightContainer"
      >
        {data.slice(pagination.start, pagination.end).map((curElem, index) => {
          return (
            <div
              className="news-list"
              id="newsList"
              key={index}
            >
              <h4 className="news-title">{curElem.title}</h4>
              {/* <h5 className="news-summery">{curElem.summary}</h5> */}
              <p className="news-published">{curElem.published}</p>
            </div>
          );
        })}
        <Pagination
          page={page}
          onPageChange={onPageChange}
          total={data.length}
        />
      </div>

      <div
        className="right-container-horizontal"
        id="horizontalContainer"
      >
        {data.slice(pagination.start, pagination.end).map((curElem, index) => {
          return (
            <div
              className="news-list-horizontal"
              id="newsList"
              key={index}
            >
              <h4 className="news-title">{curElem.title}</h4>
              <hr />
              <h5 className="news-summery">{curElem.summary}</h5>
              <strong className="news-published">{curElem.published}</strong>
            </div>
          );
        })}
        <Pagination
          page={page}
          onPageChange={onPageChange}
          total={data.length}
        />
      </div>
    </>
  );
};

export default RightSide;
