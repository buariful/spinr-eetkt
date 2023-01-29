import React from "react";

const BillingLft = () => {
  return (
    <>
      <div class="col-xl-12">
        <div class="insDetails__text mb-5">
          <h3>
            <img src={require("../../assets/img/icon/act.png")} alt="" /> Act
            fast! Pricing and availability may change
          </h3>
          <p>
            <span>!</span> Tips for filling out the passage details
          </p>
        </div>
      </div>
      <div class="col-xl-12 mb-4">
        <div class="personal">
          <h4>Traveller 1 (Primary Contact)</h4>
        </div>
        <div class="row">
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/grp.png")}
                  alt=""
                />
              </div>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Select Travellers From Your Favorties List"
              />
            </div>
          </div>
          <div class="col-xl-6 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector.png")}
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
          <div class="col-xl-6 mb-4">
            <div class="mainInput">
              <input
                type="text"
                name="lName"
                id="lName"
                placeholder="Summername (Last Name)"
              />
            </div>
          </div>

          <div class="col-xl-6 mb-4">
            <div class="mainInput">
              <h6>Select Your Gender :</h6>
            </div>
          </div>
          <div class="col-xl-6 mb-4">
            <div class="mainInput second">
              <form action="#">
                <label for="male">
                  <div className="check">
                    <i class="ri-men-fill btn__icon"></i>
                    <input type="radio" name="mainInput" id="male" />
                    Male{" "}
                  </div>
                </label>

                <label for="female">
                  <div className="check">
                    <i class="ri-women-fill btn__icon"></i>
                    <input type="radio" name="mainInput" id="female" />
                    Female
                  </div>
                </label>
              </form>
            </div>
          </div>
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (1).png")}
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
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/flag.png")}
                  alt=""
                />
              </div>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Nationality"
              />
            </div>
          </div>
          <div class="col-xl-8 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (2).png")}
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
          <div class="col-xl-4 mb-4">
            <div class="mainInput">
              <input type="file" class="upload_box p-0" name="file" id="docu" />
              <label for="docu">
                Document Upload
                <i class="ri-upload-cloud-fill"></i>
              </label>
            </div>
          </div>
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (2).png")}
                  alt=""
                />
              </div>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Passport Expiry Date"
              />
            </div>
          </div>
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/tie.png")}
                  alt=""
                />
              </div>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Profession"
              />
            </div>
          </div>
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (3).png")}
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
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (3).png")}
                  alt=""
                />
              </div>
              <input
                type="text"
                name="fName"
                id="fName"
                placeholder="Foriegn Address"
              />
            </div>
          </div>
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (4).png")}
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
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  src={require("../../assets/img/input-icon/Vector (5).png")}
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
          <div class="col-xl-12 mb-4">
            <div class="mainInput">
              <div class="mainInput__img">
                <img
                  style={{ marginRight: "8px" }}
                  src={require("../../assets/img/input-icon/Vector (6).png")}
                  alt=""
                />
              </div>
              <input type="file" class="upload_box p-0" name="file" id="bank" />
              <label for="bank">
                Bank Statement Upload
                <i class="ri-upload-cloud-fill"></i>
              </label>
            </div>
          </div>
          <div class="col-xl-12">
            <h3 class="text-center mb-3">Personal Info:</h3>
            <div class="row">
              <div class="col-xl-6 mb-4">
                <div class="mainInput">
                  <input
                    type="file"
                    class="upload_box p-0"
                    name="file"
                    id="photo"
                  />
                  <label for="photo">
                    Photograp
                    <i class="ri-upload-cloud-fill"></i>
                  </label>
                </div>
              </div>
              <div class="col-xl-6 mb-4">
                <div class="mainInput">
                  <input
                    type="file"
                    class="upload_box p-0"
                    name="file"
                    id="Certificate"
                  />
                  <label for="Certificate">
                    Certificate (Marriage)
                    <i class="ri-upload-cloud-fill"></i>
                  </label>
                </div>
              </div>
              <div class="col-xl-6 mb-4">
                <div class="mainInput">
                  <input
                    type="file"
                    class="upload_box p-0"
                    name="file"
                    id="NID"
                  />
                  <label for="NID">
                    NID or Birth Certificate
                    <i class="ri-upload-cloud-fill"></i>
                  </label>
                </div>
              </div>
              <div class="col-xl-6 mb-4">
                <div class="mainInput">
                  <input
                    type="file"
                    class="upload_box p-0"
                    name="file"
                    id="Employee"
                  />
                  <label for="Employee">
                    Business or Employee ID Card
                    <i class="ri-upload-cloud-fill"></i>
                  </label>
                </div>
              </div>
              <div class="col-xl-6 mb-4">
                <div class="mainInput">
                  <input
                    type="file"
                    class="upload_box p-0"
                    name="file"
                    id="NOC"
                  />
                  <label for="NOC">
                    NOC
                    <i class="ri-upload-cloud-fill"></i>
                  </label>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="mainInput">
                  <input
                    type="file"
                    class="upload_box p-0"
                    name="file"
                    id="Solvency"
                  />
                  <label for="Solvency">
                    Bank Solvency Certificate
                    <i class="ri-upload-cloud-fill"></i>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillingLft;
