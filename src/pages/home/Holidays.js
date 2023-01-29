import React from "react";
import HoliCard from "../../components/holiday/holidayHome/HoliCard";
import HoliSidebar from "../../components/holiday/holidayHome/HoliSidebar";
import CustomPagination from "../../components/shared/pgination/CustomPagination";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";

export default function Holidays() {
  return (
    <>
      <SponsorSlider />

      <section class="flightTransition__section hotelbooking__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4">
            <div class="col-xl-3">
              <HoliSidebar />
            </div>

            {/* ----- holidays card ------- */}
            <div class="col-xl-9">
              <div className="row">
                <div class="col-xl-12">
                  <div class="hotel__title">
                    <h2>22 Holidays Found</h2>
                  </div>
                </div>
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />
                <HoliCard />

                <CustomPagination />
              </div>
            </div>
            {/* ----------------- */}
          </div>
        </div>
      </section>
    </>
  );
}
