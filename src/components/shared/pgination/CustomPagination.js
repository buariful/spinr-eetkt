import React from "react";

const CustomPagination = () => {
  return (
    <div className="centerPagination">
      <div className="pagi">
        <i className="ri-arrow-left-s-line"></i>
        <ul>
          <li>
            <a href="/">1</a>
          </li>
          <li>
            <a href="/">2</a>
          </li>
          <li>
            <a href="/">3</a>
          </li>
          <li>
            <a href="/">4</a>
          </li>
        </ul>
        <i className="ri-arrow-right-s-line"></i>
      </div>
      <p>Showing 1 - 9 of 22 Flights</p>
    </div>
  );
};

export default CustomPagination;
