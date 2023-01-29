import React from "react";
import BillingLft from "../../components/billingComponent/BillingLft";
import BillingRgt from "../../components/billingComponent/BillingRgt";

const CustomerBilling = () => {
  return (
    <>
      {/* ================== Banner ===================== */}
      <section
        class="flightBooking__section loginBg cusBg d-flex justify-content-center align-items-center"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/customer.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 class="text-white">Customer Details</h1>
      </section>
      {/* ================= */}

      <section class="busStandInfo__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4">
            <div class="col-xl-12">
              <div class="insuranceDetails__title mb-5">
                <h2>
                  Customer Details: Please fill in with valid information.
                </h2>
              </div>
            </div>

            <div class="col-xl-8">
              <BillingLft />
            </div>

            <div
              style={{ padding: "0px 12px" }}
              class="col-xl-4 rentelListing__section"
            >
              <BillingRgt />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CustomerBilling;
