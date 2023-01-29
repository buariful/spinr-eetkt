import React from "react";
import EventCard from "../../components/eventComponent/eventHome/EventCard";
import EventSidebar from "../../components/eventComponent/eventHome/EventSidebar";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";
import CustomPagination from "../../components/shared/pgination/CustomPagination";

export default function EventBooking() {
  return (
    <>
      <SponsorSlider />

      <section class="flightTransition__section hotelbooking__section">
        <div class="container">
          <div class="row">
            <div class="col-xl-3">
              <EventSidebar />
            </div>

            <div class="col-xl-9">
              <div class="row">
                <div class="col-xl-12">
                  <div class="hotel__title">
                    <h2>20 Events Found</h2>
                  </div>
                </div>

                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />
                <EventCard />

                <CustomPagination />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
