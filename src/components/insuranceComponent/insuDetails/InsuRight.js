import React from "react";

const InsuRight = () => {
  return (
    <>
      <div
        style={{ padding: "0px 12px" }}
        class="col-lg-4 rentelListing__section"
      >
        <div class="insDetails__right">
          <div class="wt__box border-bottom border-2 border-dark">
            <h6>Why book with Tour &amp; Travel ?</h6>
            <ul>
              <li>
                <i class="ri-star-s-fill"></i> Competitive prices. One of the
                main factors to consider when choosing a trip is its price.
              </li>
              <li>
                <i class="ri-star-s-fill"></i> Everything possible even with
                complicated dates.
              </li>
              <li>
                <i class="ri-star-s-fill"></i> Saving time &amp; Security
                guarantee.
              </li>
              <li>
                <i class="ri-star-s-fill"></i> We know your time is valuable, so
                our team is committed to providing you with the best travel
                experience possible, from before you book your holiday to after
                your journey has ended.
              </li>
            </ul>
          </div>
          <div class="wt__box border-bottom border-2 border-dark">
            <h6>Select Discount Option</h6>
            <div class="disPoint mb-4">
              <form action="#">
                <p>
                  <input type="radio" name="check" id="check" />I want to Redeem
                  TripCoins
                </p>
                <p>
                  <input type="radio" name="check" id="check" />I want to use
                  Coupon Code
                </p>
              </form>
            </div>
            <div class="couponCode">
              <form action="#">
                <input
                  type="text"
                  name="code"
                  id="code"
                  placeholder="Enter Coupon Code"
                  required
                />
                <button class="coupn">
                  <i class="ri-check-line"></i>
                </button>
              </form>
            </div>
          </div>
          <div class="wt__box ">
            <h6>Your Price Summary</h6>
            <div class="priceSummary mb-2">
              <ul>
                <li>
                  <span>
                    <strong>Details</strong>
                  </span>{" "}
                  <span>
                    <strong>Amount</strong>
                  </span>
                </li>
                <li>
                  <span>
                    <strong>Insurance Of Traveller(s) X2</strong>
                  </span>
                </li>
                <li>
                  <span>Emergency Medical</span> <span>3,550</span>
                </li>
                <li>
                  <span>Transportation</span> <span>450</span>
                </li>
                <li>
                  <span>Markup</span>{" "}
                  <input
                    type="text"
                    name="agent"
                    id="agent"
                    placeholder="Only For Agent"
                  />
                </li>
                <li class="border-2 border-bottom mb-3 border-dark">
                  <span>Covid - 19 Fee</span> <span>0</span>
                </li>
                <li>
                  <span>
                    <strong>Total Payable</strong>
                  </span>{" "}
                  <span>4,000</span>
                </li>
              </ul>
            </div>
            <p class="mb-3">
              <input type="checkbox" name="con" id="con" /> I agree to the Terms
              & Condition and Privacy Policy
            </p>
            <div class="priceSummary__btn d-flex">
              <a href="payment.html">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InsuRight;
