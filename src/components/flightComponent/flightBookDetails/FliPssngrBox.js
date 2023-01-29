import React from "react";

const FliPssngrBox = () => {
  return (
    <div className="wt__box  flightRightContent flightRightContentDetails mb-3">
      <h6>
        <img src={require("../../../assets/img/icon/User.png")} alt="" />
        Passengers
      </h6>
      <ul className="mb-3">
        <li>
          <span>Adult</span> <span>2</span>
        </li>
        <li>
          <span>Children's</span> <span>0</span>
        </li>
        <li>
          <span>Infants</span> <span>0</span>
        </li>
      </ul>
      <ul>
        <li className="pb-3">
          <span>
            <strong>Total Passengers</strong>
          </span>{" "}
          <span>2</span>
        </li>
      </ul>
    </div>
  );
};

export default FliPssngrBox;
