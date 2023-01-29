import React from "react";

const JobApply = () => {
  return (
    <main>
      <section
        class="pageDetails__banner d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/jobDetailsBg.png")})`,
        }}
      ></section>

      <section class="busStandInfo__section">
        <div class="container">
          <div class="row">
            <div class="col-xl-12 jobDetails__content pb-4 mb-5 border-1 border-secondary border-bottom">
              <div class="insuranceDetails__title mb-4">
                <h2>
                  Applying for :{" "}
                  <span style={{ color: "#4085D6", fontWeight: 600 }}>
                    Human Resources Coordinator
                  </span>
                </h2>
              </div>
              <h4>Privacy Agreement</h4>
              <p>
                Eetkt Group Q.C.S.C, its subsidiaries and branches, (“EETKT”) is
                committed to protecting your privacy and your Personal Data that
                you provide to us via this tool in accordance with the
                applicable laws. Your Personal Data will be processed in
                accordance with our Talent Acquisition Privacy Notice. By
                "Personal Data" we mean any information relating to an
                identified or identifiable natural person.
                <br />
                <br />
                You can opt-out from job alerts at any time by using the
                “unsubscribe” link in our email communications. Our Cookie
                Policy provides information about cookies that we use and our
                Terms of Use about your usage of our careers website. Please
                read these carefully before proceeding.
              </p>
              <div class="jobDetails__btn">
                <button>Decline</button>
                <button>Accept</button>
              </div>
            </div>
            <div class="col-xl-12 jobDetails__info">
              <div class="personal">
                <h4>Personal Information:</h4>
              </div>
              <div class="col-xl-11 offset-xl-1 mb-4">
                <div class="row">
                  <div class="col-md-4 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <img src="img/input-icon/Vector.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <div class="mainInput">
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Middle Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-4 mb-4">
                    <div class="mainInput">
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="mainInput">
                      <h6>Select Your Gender :</h6>
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="mainInput second">
                      <form class="w-100" action="#">
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
                  <div class="col-md-6 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <img src="img/input-icon/Vector (1).png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Death Of Birth"
                      />
                    </div>
                  </div>
                  <div class="col-md-6 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <img
                          style={{ marginRight: "8px" }}
                          src="img/input-icon/Vector (6).png"
                          alt=""
                        />
                      </div>
                      <select name="Residency" id="Residency">
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-12 mb-4">
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
                  <div class="col-md-4 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <img src="img/input-icon/Vector (4).png" alt="" />
                      </div>
                      <select name="Residency" id="Residency">
                        <option value="Country Of Residency">
                          Country Code
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                        <option value="Country Of Residency">
                          Country Of Residency
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-8 mb-4">
                    <div class="mainInput">
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <img src="img/input-icon/Vector (5).png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Email Address"
                      />
                    </div>
                  </div>
                  <div class="col-md-12 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <i class="ri-upload-cloud-fill"></i>
                      </div>
                      <input
                        type="file"
                        class="upload_box p-0"
                        name="file"
                        id="bank"
                      />
                      <label for="bank">
                        Upload Your C.V.
                        <i class="ri-upload-cloud-fill"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 jobDetails__info mb-5">
              <div class="personal">
                <h4>Experience:</h4>
              </div>
              <div class="col-xl-11 offset-xl-1 mb-4">
                <div class="row">
                  <div class="col-xl-4 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <img src="img/input-icon/Vector.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="First name"
                      />
                    </div>
                  </div>
                  <div class="col-xl-4 mb-4">
                    <div class="mainInput">
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Middle Name"
                      />
                    </div>
                  </div>
                  <div class="col-xl-4 mb-4">
                    <div class="mainInput">
                      <input
                        type="text"
                        name="lName"
                        id="lName"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>
                  <div class="col-xl-12 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Current/ Most recent position held"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Country"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4">
                    <div class="mainInput">
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="City"
                      />
                    </div>
                  </div>
                  <div class="col-xl-12 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Main responsibility"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/Vector (1).png" alt="" />
                      </div>
                      <input
                        type="date"
                        name="fName"
                        id="fName"
                        placeholder="Main responsibility"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/Vector (1).png" alt="" />
                      </div>
                      <input
                        type="date"
                        name="fName"
                        id="fName"
                        placeholder="Main responsibility"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/moneyfile.png" alt="" />
                      </div>
                      <input
                        class="mb-3 mb-xl-0"
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="What are your salary expectations?"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <i class="ri-upload-cloud-fill"></i>
                      </div>
                      <input
                        type="file"
                        class="upload_box p-0"
                        name="file"
                        id="bank"
                      />
                      <label for="bank">
                        Upload Your Experience Certificate
                        <i class="ri-upload-cloud-fill"></i>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="employment">
                  <button>
                    <i class="ri-add-line"></i> Add another employment
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-12 jobDetails__info mb-5">
              <div class="personal">
                <h4>Education:</h4>
              </div>
              <div class="col-xl-11 offset-xl-1 mb-4">
                <div class="row">
                  <div class="col-xl-12 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-12 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Qualification title"
                      />
                    </div>
                  </div>
                  <div class="col-xl-12 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Institution"
                      />
                    </div>
                  </div>
                  <div class="col-xl-12 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Institution location"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/file.png" alt="" />
                      </div>
                      <input
                        type="text"
                        name="fName"
                        id="fName"
                        placeholder="Major"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4">
                    <div class="mainInput">
                      <div class="mainInput__img">
                        <i class="ri-upload-cloud-fill"></i>
                      </div>
                      <input
                        type="file"
                        class="upload_box p-0"
                        name="file"
                        id="bank"
                      />
                      <label for="bank">
                        Upload Your Qualification Documents
                        <i class="ri-upload-cloud-fill"></i>
                      </label>
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/Vector (1).png" alt="" />
                      </div>
                      <input
                        class="mb-3 mb-xl-0"
                        type="date"
                        name="fName"
                        id="fName"
                        placeholder="Main responsibility"
                      />
                    </div>
                  </div>
                  <div class="col-xl-6">
                    <div class="mainInput">
                      <div
                        style={{ marginRight: "10px" }}
                        class="mainInput__img"
                      >
                        <img src="img/input-icon/Vector (1).png" alt="" />
                      </div>
                      <input
                        type="date"
                        name="fName"
                        id="fName"
                        placeholder="Main responsibility"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-12">
                <div class="employment">
                  <button>
                    <i class="ri-add-line"></i> Add another employment
                  </button>
                </div>
              </div>
            </div>
            <div class="col-xl-12 jobDetails__info">
              <div class="personal">
                <h4>Job Specific Questions:</h4>
              </div>
              <div class="col-xl-11 offset-xl-1 mb-4">
                <div class="row">
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>Do you have a Diploma or Associate Degree?</p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>
                      Do you have a minimum of four years of job related
                      experience?
                    </p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>Do you have any Medical Background?</p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 jobDetails__info">
              <div class="personal">
                <h4>Additional Information:</h4>
              </div>
              <div class="col-xl-11 offset-xl-1 mb-4">
                <div class="row">
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>Have you previously been employed by EETKT Group?</p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>
                      Do you have a relative currently employed or applying to
                      any business within Qatar Airways Group?
                    </p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>Source type</p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                  <div class="col-xl-6 mb-4 queary d-flex flex-column justify-content-between">
                    <p>Source</p>
                    <div class="mainInput">
                      <select name="type" id="type">
                        <option value="Qualification type">
                          Please select
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                        <option value="Qualification type">
                          Qualification type
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-12 jobDetails__info mb-5">
              <div class="personal">
                <h4>eSignature</h4>
                <p>
                  Please read the following statement carefully, then
                  acknowledge that you have read and approved it by providing
                  the information requested at the bottom of the page. Please
                  note that an esignature is the electronic equivalent of a
                  hand-written signature. I declare that to the best of my
                  knowledge the information I've provided is true and accurate.
                  I'm aware that proving false information during any of the
                  steps of the application process may result in my application
                  being rejected or termination of my employment. Do not e-sign
                  until you have read the above statement. By my eSignature
                  below, I certify that i have read, fully understand and accept
                  all terms of the foregoing statement. Please signify your
                  acceptance by entering the information requested in the fields
                  below.
                </p>
              </div>
            </div>
            <div class="col-xl-6 mb-4">
              <div class="mainInput">
                <div style={{ marginRight: "10px" }} class="mainInput__img">
                  <img src="img/input-icon/Vector.png" alt="" />
                </div>
                <input
                  type="text"
                  name="fName"
                  id="fName"
                  placeholder="Please Full Name"
                />
              </div>
            </div>
            <div class="col-xl-6 mb-4">
              <div class="mainInput">
                <div style={{ marginRight: "10px" }} class="mainInput__img">
                  <img src="img/input-icon/Vector (1).png" alt="" />
                </div>
                <input type="date" name="fName" id="fName" />
              </div>
            </div>
            <div class="col-xl-12">
              <div class="job__submit">
                <button>SUBMIT</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JobApply;
