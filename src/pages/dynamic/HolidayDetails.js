import React from "react";
import HoliFaqs from "../../components/holiday/holiDetails/HoliFaqs";
import HoliItinerary from "../../components/holiday/holiDetails/HoliItinerary";
import HoliRightContent from "../../components/holiday/holiDetails/HoliRightContent";
import HoliTexts from "../../components/holiday/holiDetails/HoliTexts";
import DetailsPageSlider from "../../components/shared/DetailsPageSlider/DetailsPageSlider";
import ServiceInfo from "../../components/shared/serviceInfo/ServiceInfo";

const HolidayDetails = () => {
  return (
    <>
      <section
        class="pageDetails__banner"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/holibg.png")})`,
        }}
      ></section>

      {/* holiday details body */}
      <section class="busStandInfo__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4 gx-5">
            <div class="col-xl-8">
              <ServiceInfo />
              <DetailsPageSlider />
              <HoliTexts />
              <HoliItinerary />
              <HoliFaqs />
            </div>

            {/* ------------- */}
            <div
              style={{ padding: "0px 12px" }}
              class="col-xl-4 rentelListing__section"
            >
              <HoliRightContent />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HolidayDetails;
