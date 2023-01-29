import React from "react";

const FliFlightDetails = () => {
  return (
    <div className="wt__box  flightRightContent flightRightContentDetails mb-3">
      <h6>
        <img
          src={require("../../../assets/img/icon/Airplane Take Off2.png")}
          alt=""
        />
        Flight Details
      </h6>
      <ul className="mb-3">
        <li className="pb-3">
          <span>
            <strong>Sun 23 July 2022</strong>
          </span>{" "}
          <span>Salam Air</span>
        </li>
        <li>
          <span>Muscat (MCT)</span> <span>06:25</span>
        </li>
        <li>
          <span>Chittagoang (CGP)</span> <span>12:45</span>
        </li>
      </ul>
      <ul>
        <li className="pb-3">
          <span>
            <strong>Sun 23 July 2022</strong>
          </span>{" "}
          <span>Salam Air</span>
        </li>
        <li>
          <span>Muscat (MCT)</span> <span>06:25</span>
        </li>
        <li>
          <span>Chittagoang (CGP)</span> <span>12:45</span>
        </li>
      </ul>
    </div>
  );
};

export default FliFlightDetails;
