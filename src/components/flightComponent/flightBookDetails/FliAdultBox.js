import React from "react";

const FliAdultBox = () => {
  return (
    <div className="col-xl-12 mb-5">
      <div className="contactInfoFlgt adult__box wt__box">
        <div className="conInfoFlgt__title">
          <h3>Adult 1</h3>
          <p>
            <span>!</span> Tips for filling out the passage details
          </p>
        </div>
        <p className="mb-2">
          <strong>Note:</strong> This is who we will be in contacted with about
          this booking
        </p>
        <form action="#">
          <div className="contry__code mb-3">
            <div className="code">
              <h6>Title*</h6>
              <div className="dotte">
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  required
                />
                <img
                  src={require("../../../assets/img/icon/Group 133.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="email mb-3">
            <h6>First Name*</h6>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Name list in the travel documents"
              required
            />
          </div>
          <div className="email mb-3">
            <h6>Middle Name*</h6>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Name list in the travel documents"
              required
            />
          </div>
          <div className="email mb-3">
            <h6>Last Name*</h6>
            <input
              type="text"
              name="fName"
              id="fName"
              placeholder="Name list in the travel documents"
              required
            />
          </div>
          <div className="contactInfoFlgt__date">
            <h6>Date Of Birth*</h6>
            <div className="date mb-4">
              <div className="dotte">
                <input
                  type="text"
                  name="day"
                  id="day"
                  placeholder="Day"
                  required
                />
                <img
                  src={require("../../../assets/img/icon/Group 133.png")}
                  alt=""
                />
              </div>
              <div className="dotte">
                <input
                  type="text"
                  name="month"
                  id="month"
                  placeholder="Month"
                  required
                />
                <img
                  src={require("../../../assets/img/icon/Group 133.png")}
                  alt=""
                />
              </div>
              <div className="dotte">
                <input
                  type="text"
                  name="year"
                  id="year"
                  placeholder="Year"
                  required
                />
                <img
                  src={require("../../../assets/img/icon/Group 133.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="contactInfoFlgt__date pass">
            <div className="nan">
              <h6>Nationality*</h6>
              <div className="dotte">
                <input
                  type="text"
                  name="day"
                  id="day"
                  placeholder="Select a Country"
                  required
                />
                <img
                  src={require("../../../assets/img/icon/Group 133.png")}
                  alt=""
                />
              </div>
            </div>
            <div className="nan">
              <h6>Passport No.*</h6>
              <div className="dotte">
                <input
                  type="text"
                  name="month"
                  id="month"
                  placeholder="Passport no."
                  required
                />
              </div>
            </div>
            <div className="nan">
              <p>
                <span>!</span> Passport No. Only For International Flight
              </p>
              <button>
                {" "}
                <i class="ri-upload-2-fill"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FliAdultBox;
