import React from "react";
import { Link } from "react-router-dom";
// import "../../assets/css/_login.scss";

const Login = () => {
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
                  <h3>Sign in</h3>
                  <p>Sign in to account</p>
                </div>
                {/* ====== social Login ========= */}
                <button>
                  <img
                    src={require("../../assets/img/icon/facebook.png")}
                    alt=""
                  />
                  <span>Sign in with Facebook</span>
                </button>
                <button>
                  <img
                    src={require("../../assets/img/icon/Google Plus.png")}
                    alt=""
                  />
                  <span>Sign in with Google</span>
                </button>
                <button>
                  <img
                    src={require("../../assets/img/icon/Instagram.png")}
                    alt=""
                  />
                  <span>Sign in with Instagram</span>
                </button>

                {/* ========== divider================= */}
                <div className="divider">
                  <div></div>
                  <span>Or Sign in</span>
                  <div></div>
                </div>

                {/* ===========Login form=============== */}
                <form action="">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Email/ Username / Phone Number"
                  />
                  <input type="Password" name="" id="" placeholder="Password" />

                  <div className="login__rememberForgot">
                    <div>
                      <input type="checkbox" name="" id="" />
                      <span>Remember Me</span>
                    </div>

                    <Link to="/#">Forgot Password</Link>
                  </div>

                  <input
                    type="submit"
                    value="Sign In"
                    className="login__submitBtn"
                  />

                  <div className="login__bottom">
                    <span>Don't have an account?</span>
                    <Link to="/signup"> Sign up</Link>
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

export default Login;
