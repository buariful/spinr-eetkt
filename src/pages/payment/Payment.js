import React from "react";

const Payment = () => {
  const handlePayForm = (e) => {
    e.preventDefault();
    e.target.cardNum.value = "";
  };
  return (
    <>
      <section
        class="flightBooking__section loginBg cusBg d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/moneyPayment.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 class="text-white">Payment</h1>
      </section>

      <section class="busStandInfo__section flightBooking__details pay__section">
        <div class="container">
          <div class="col-xl-12">
            <div class="payLogo text-center">
              <img
                src={require("../../assets/img/logo/T&T-Logo 3.png")}
                alt=""
              />
            </div>
          </div>
          <div class="col-xl-12">
            <div class="contactInfoFlgt payment wt__box">
              <div class="conInfoFlgt__title pb-3 border-3 border-bottom border-dark">
                <h3 class="text-dark">Paymant Mode</h3>
              </div>
              <div class="payment__method">
                <div class="pay">
                  <img
                    src={require("../../assets/img/payment/Group179.png")}
                    alt=""
                  />
                </div>
                <div class="pay">
                  <img
                    src={require("../../assets/img/payment/bKashLogoVector1.png")}
                    alt=""
                  />
                </div>
                <div class="pay">
                  <img
                    src={require("../../assets/img/payment/Nagad-Logo1.png")}
                    alt=""
                  />
                </div>
                <div class="pay">
                  <img
                    src={require("../../assets/img/payment/Payoneer-Logo1.png")}
                    alt=""
                  />
                </div>
                <div class="pay">
                  <img
                    src={require("../../assets/img/payment/PayPal-Logo1.png")}
                    alt=""
                  />
                </div>
              </div>
              <p class="d-block text-center fs-3">Or</p>
              <form onSubmit={handlePayForm}>
                <div class="card__method mb-5">
                  <div class="email mb-3">
                    <h6>Card Number</h6>
                    <input
                      type="number"
                      placeholder="Your Card Number"
                      name="cardNum"
                      className="w-100"
                      required
                    />
                  </div>
                  <div class="email mb-3 d-flex justify-content-between">
                    <div class="expr">
                      <h6>Expiration</h6>
                      <div class="expr2">
                        <input
                          type="number"
                          name="exp1"
                          placeholder="Month"
                          required
                        />
                        <input
                          type="number"
                          name="exp2"
                          placeholder="Year"
                          required
                        />
                      </div>
                    </div>

                    <div class="expr">
                      <h6>Security</h6>
                      <div class="expr2">
                        <input
                          type="number"
                          name="cscNum"
                          placeholder="CSC"
                          required
                        />
                        <img
                          src={require("../../assets/img/payment/Mastercard-Logo.png")}
                          alt=""
                        />
                        <img
                          src={require("../../assets/img/payment/Visa_Inc.-Logo.png")}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <div class="pay__check d-flex gap-2">
                    <input
                      type="checkbox"
                      name="payCheck"
                      id="payCheck"
                      style={{ cursor: "pointer" }}
                    />
                    <label for="payCheck" style={{ cursor: "pointer" }}>
                      Remember
                    </label>
                  </div>
                </div>
                <div class="card__method">
                  <div class="email billing">
                    <h6>Billing Infromation</h6>
                    <input
                      class="mb-3"
                      type="text"
                      name="cardName"
                      placeholder="Name On Card"
                      required
                    />
                    <input
                      class="mb-3"
                      type="text"
                      name="address"
                      placeholder="Address"
                      required
                    />
                    <div class="city mb-3">
                      <input
                        type="text"
                        name="city"
                        placeholder="City"
                        required
                      />
                      <select name="states" id="states">
                        <option value="States">States</option>
                        <option value="dhake">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chittagong">Chittagong</option>
                      </select>
                    </div>
                    <div class="city mb-3">
                      <input
                        type="text"
                        name="zipCode"
                        placeholder="Zip Code"
                        required
                      />
                      <select name="states" id="states">
                        <option value="United States">United States</option>
                        <option value="dhake">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Chittagong">Chittagong</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="ticket mt-4">
                  <input
                    type="submit"
                    value="Checkout"
                    className="checkOut__btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Payment;
