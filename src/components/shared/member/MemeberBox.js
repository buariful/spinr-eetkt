import React from "react";

const MemeberBox = () => {
  return (
    <>
      <div className="member__profile mb-4">
        <div className="member__img">
          <img
            src={require("../../../assets/img/icon/Test Account.png")}
            alt=""
          />
        </div>
        <div className="member__content">
          <h6>Kaytlyn Alvapriya</h6>
          <p>Member Since May 2022</p>
        </div>
        <div className="member__batch">
          <img
            src={require("../../../assets/img/icon/Instagram Check Mark.png")}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default MemeberBox;
