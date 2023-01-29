import React from "react";
import VisaBookingLft from "../../components/visaBooking/VisaBookingLft";
import VisaBookingRight from "../../components/visaBooking/VisaBookingRight";

export default function VisaBooking() {
  return (
    <>
      <section class="busStandInfo__section rentelListing__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4">
            <div class="col-xl-8">
              <VisaBookingLft />
            </div>

            <div
              style={{ padding: "0px 12px" }}
              class="col-xl-4 rentelListing__section visa__package"
            >
              <VisaBookingRight />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
