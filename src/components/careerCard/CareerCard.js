import React from "react";

const CareerCard = () => {
  return (
    <div className="col-xl-4 col-md-6 mb-4">
      <div
        className="career__box"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/Rectangle150.png")})`,
        }}
      >
        <img src={require("../../assets/img/background/shapImg.png")} alt="" />
        <p>Al Darb Qatarisation</p>
        <span>3 Jobs</span>
      </div>
    </div>
  );
};

export default CareerCard;
