import React from "react";

const InsuLeftside = () => {
  return (
    <>
      <div class="col-lg-8">
        <div class="col-lg-12">
          <div class="insDetails__text mb-5">
            <h3>
              <img src={require("../../../assets/img/icon/act.png")} alt="" />{" "}
              Act fast! Pricing and availability may change
            </h3>
            <p>
              <span>!</span> Tips for filling out the passage details
            </p>
          </div>
        </div>
        <div class="col-lg-12 mb-4">
          <div class="personal">
            <h4>Personal Information:</h4>
          </div>
          <div class="row">
            <div class="col-sm-6 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector.png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Firstname (First, Middle, Given Name)"
                />
              </div>
            </div>
            <div class="col-sm-6 mb-4">
              <div class="mainInput">
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Summername (Last Name)"
                />
              </div>
            </div>

            <div class="col-lg-6 mb-4">
              <div class="mainInput">
                <h6>Select Your Gender :</h6>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="mainInput second">
                <form action="#">
                  <label for="male">
                    <input type="radio" name="mainInput" id="male" />
                    <span class="check">Male</span>
                  </label>

                  <label for="female">
                    <input type="radio" name="mainInput" id="female" />
                    <span class="check">Female</span>
                  </label>
                </form>
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (1).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Death Of Birth"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (2).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Passport No."
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img src="img/input-icon/Vector (3).png" alt="" />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Local Address"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (4).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (5).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (6).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Insurance ID"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-12">
          <div class="personal">
            <h4>Spouse Information:</h4>
          </div>
          <div class="row">
            <div class="col-sm-6 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector.png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Firstname (First, Middle, Given Name)"
                />
              </div>
            </div>
            <div class="col-sm-6 mb-4">
              <div class="mainInput">
                <input
                  type="text"
                  name="lName"
                  id="lName"
                  placeholder="Summername (Last Name)"
                />
              </div>
            </div>

            <div class="col-lg-6 mb-4">
              <div class="mainInput mainInput2">
                <h6>Select Your Gender :</h6>
              </div>
            </div>
            <div class="col-lg-6 mb-4">
              <div class="mainInput second">
                <form action="#">
                  <label for="sMale">
                    <input type="radio" name="mainInput" id="sMale" />
                    <span class="check2">Male</span>
                  </label>

                  <label for="sFemale">
                    <input type="radio" name="mainInput" id="sFemale" />
                    <span class="check2">Female</span>
                  </label>
                </form>
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (1).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Death Of Birth"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (2).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Passport No."
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (3).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Local Address"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (4).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (5).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div class="col-lg-12 mb-4">
              <div class="mainInput">
                <div class="mainInput__img">
                  <img
                    src={require("../../../assets/img/input-icon/Vector (6).png")}
                    alt=""
                  />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Insurance ID"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuLeftside;
