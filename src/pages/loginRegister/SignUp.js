import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [isMail, setMail] = useState(true);

  return (
    <main>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 p-0">
              <img
                src={require("../../assets/img/topDestinationSliderImg/Rectangle 239 (1).png")}
                alt=""
                className="w-100"
              />
            </div>
            <div className="col-12 position-relative login__container">
              <div className="text-center login__wrapper ">
                <div className="login__title">
                  <h3>Sign Up </h3>
                  <p>Sign up to account</p>
                </div>

                {/* =============social sign up================== */}
                <button>
                  <img
                    src={require("../../assets/img/icon/facebook.png")}
                    alt=""
                  />
                  <span>Sign up with Facebook</span>
                </button>
                <button>
                  <img
                    src={require("../../assets/img/icon/Google Plus.png")}
                    alt=""
                  />
                  <span>Sign up with Google</span>
                </button>
                <button>
                  <img
                    src={require("../../assets/img/icon/Instagram.png")}
                    alt=""
                  />
                  <span>Sign up with Instagram</span>
                </button>

                {/*============= divider ===================== */}
                <div className="divider">
                  <div></div>
                  <span>Or Sign up</span>
                  <div></div>
                </div>

                {/* =============sign up form=================== */}
                <form action="">
                  <div className="optionBtn">
                    <button
                      className={isMail ? "optionBtn__active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setMail(true);
                      }}
                    >
                      Email
                    </button>
                    <button
                      className={isMail ? "" : "optionBtn__active"}
                      onClick={(e) => {
                        e.preventDefault();
                        setMail(false);
                      }}
                    >
                      Phone
                    </button>
                  </div>

                  {isMail ? (
                    <>
                      <input
                        type="text"
                        name="signUp_email"
                        id=""
                        placeholder="Email/ Username / Phone Number"
                      />
                      <input
                        type="Password"
                        name="signUp_pass"
                        id=""
                        placeholder="Password"
                      />
                    </>
                  ) : (
                    <>
                      <div className="phoneWrapper">
                        <p>Oman +968</p>
                        <input
                          type="text"
                          name="signUp_phone"
                          id=""
                          placeholder="9654875"
                        />
                        <button>Send OTP</button>
                      </div>
                      <div class="otpNum">
                        <input
                          type="text"
                          name="otp"
                          id="otp1"
                          maxlength="1"
                          onkeyup="clickEvent(this,'otp2')"
                          required
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp2"
                          maxlength="1"
                          onkeyup="clickEvent(this,'otp3')"
                          required
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp3"
                          maxlength="1"
                          onkeyup="clickEvent(this,'otp4')"
                          required
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp4"
                          maxlength="1"
                          onkeyup="clickEvent(this,'otp5')"
                          required
                        />
                        <input
                          type="text"
                          name="otp"
                          id="otp5"
                          maxlength="1"
                          onkeyup="clickEvent(this,'otp6')"
                          required
                        />
                        <input type="text" name="otp" id="otp6" maxlength="1" />
                      </div>
                    </>
                  )}

                  <input
                    type="submit"
                    value="Sign In"
                    className="login__submitBtn"
                  />

                  <div className="login__bottom">
                    <span>Have an account?</span>
                    <Link to="/login"> Sign in</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
