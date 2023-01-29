import React from "react";
import BusSlider from "../../components/busComponent/busDetails/BusSlider";
import EventInfo from "../../components/eventComponent/eventDetails/EventInfo";
import EventTexts from "../../components/eventComponent/eventDetails/EventTexts";
import HoliRightContent from "../../components/holiday/holiDetails/HoliRightContent";

const EventDetails = () => {
  return (
    <div>
      <section
        className="pageDetails__banner"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/eventbg.png")})`,
        }}
      ></section>

      {/* =========== events =========== */}
      <section class="busStandInfo__section">
        <div class="container">
          <div class="row">
            <div class="col-xl-8">
              <EventInfo />
              <BusSlider />
              <EventTexts />
            </div>
            <div
              style={{ padding: "0px 12px" }}
              class="col-xl-4 rentelListing__section"
            >
              <HoliRightContent />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
