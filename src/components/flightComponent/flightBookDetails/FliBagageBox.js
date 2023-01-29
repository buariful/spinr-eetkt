import React from "react";
import { Link } from "react-router-dom";

const FliBagageBox = () => {
  return (
    <>
      <div className="col-xl-12 mb-5">
        <div className="contactInfoFlgt baggage wt__box">
          <div className="conInfoFlgt__title">
            <h3>Baggage</h3>
            <Link to="#">+ Add Frequent Flyer Number(Optional)</Link>
          </div>
          <div className="baggage__list">
            <ul>
              <li>
                <img
                  src={require("../../../assets/img/icon/Luggage.png")}
                  alt=""
                />{" "}
                One personal item (18 x 14 x 8)
              </li>
              <li>
                <img
                  src={require("../../../assets/img/icon/Luggage.png")}
                  alt=""
                />{" "}
                One carry on bag (7 kg)
              </li>
              <li>
                <img
                  src={require("../../../assets/img/icon/Carry-On Luggage.png")}
                  alt=""
                />{" "}
                No Checked Bag. <Link to="#">Need Checked Luggage?</Link>
              </li>
              <li>
                <img
                  src={require("../../../assets/img/icon/Carry-On Luggage.png")}
                  alt=""
                />{" "}
                SSR Remarks
              </li>
              <li>
                <img
                  src={require("../../../assets/img/icon/Luggage.png")}
                  alt=""
                />{" "}
                One person Item (18 X 14)
              </li>
              <li>
                <img
                  src={require("../../../assets/img/icon/Carry-On Luggage.png")}
                  alt=""
                />{" "}
                No Checked Bag. <Link to="#">Need Checked Luggage?</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="contactInfoFlgt payment wt__box">
          <div className="payment_mode">
            <h3>Paymant Mode</h3>
          </div>
          <div className="payment__method">
            <div className="pay">
              <img
                src={require("../../../assets/img/payment/Group179.png")}
                alt=""
              />
            </div>
            <div className="pay">
              <img
                src={require("../../../assets/img/payment/bKashLogoVector1.png")}
                alt=""
              />
            </div>
            <div className="pay">
              <img
                src={require("../../../assets/img/payment/Nagad-Logo1.png")}
                alt=""
              />
            </div>
            <div className="pay">
              <img
                src={require("../../../assets/img/payment/Payoneer-Logo1.png")}
                alt=""
              />
            </div>
            <div className="pay">
              <img
                src={require("../../../assets/img/payment/PayPal-Logo1.png")}
                alt=""
              />
            </div>
          </div>

          <div className="agrrement__text mt-5">
            <i class="ri-leaf-fill"></i>
            <p>
              By completing this booking I agree that I have read and accept the
              <Link to="#"> Rules and Restrictions</Link>. The Terms of Use and
              the <Link to="#">Privacy Policy</Link>.
            </p>
          </div>

          <div className="ticket mt-4">
            <button className="hold_tic">Hold Ticket</button>
            <button className="confirm_tic">Confirm Ticket</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FliBagageBox;
