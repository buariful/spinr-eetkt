import React from "react";
import { Link } from "react-router-dom";

const FliSideCard = () => {
  return (
    <div className="sideCard">
      <div className="wt__box flightRightContent flightRightContentDetails resort mb-3">
        <div className="resort__img mb-4">
          <img
            src={require("../../../assets/img/background/Image + Badges.png")}
            alt=""
          />
        </div>
        <h5>Mermaid Beach Resort: The most joyful way to spend your holiday</h5>
        <div className="placeFlight mb-3">
          <p>
            <i className="ri-map-pin-2-fill"></i> Cox’s Bazar
          </p>
          <p>
            <i className="ri-calendar-fill"></i> 4 days
          </p>
        </div>
        <div className="resortPr__box">
          <div className="resort__price">
            <span className="resort__dis mb-2 d-block">
              <del>$200</del>
            </span>
            <p className="mb-2">
              <span>$175</span>/ Per person
            </p>
            <span className="label__mark">
              <i className="fa-solid fa-tag"></i> -15%
            </span>
          </div>
          <div className="resort__book">
            <Link to="/">Book Now</Link>
            <Link to="/">View Details</Link>
          </div>
        </div>
      </div>
      <div className="wt__box  flightRightContent flightRightContentDetails resort mb-3">
        <div className="resort__img mb-4">
          <img
            src={require("../../../assets/img/background/Image + Badges (1).png")}
            alt=""
          />
        </div>
        <h5>
          Bora Bora: Enjoy a romantic cruise tour of at the sunny side of life
        </h5>
        <div className="placeFlight mb-3">
          <p>
            <i className="ri-map-pin-2-fill"></i> Maldives
          </p>
          <p>
            <i className="ri-calendar-fill"></i> 4 days
          </p>
        </div>
        <div className="resortPr__box">
          <div className="resort__price">
            <span className="resort__dis mb-2 d-block">
              <del>$300</del>
            </span>
            <p className="mb-2">
              <span>$250</span>/ Per person
            </p>
            <span className="label__mark">
              <i className="fa-solid fa-tag"></i> -15%
            </span>
          </div>
          <div className="resort__book">
            <Link to="/">Book Now</Link>
            <Link to="/">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FliSideCard;
