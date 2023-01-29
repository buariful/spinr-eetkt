import React from "react";
import CarCard from "../../components/carComponent/carHome/CarCard";
import HoliSidebar from "../../components/holiday/holidayHome/HoliSidebar";
import CustomPagination from "../../components/shared/pgination/CustomPagination";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";

export default function CarBooking() {
  return (
    <main>
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
                    <h2>15 Cars Found</h2>
                  </div>
                </div>
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />
                <CarCard />

                <CustomPagination />
              </div>
            </div>
            {/* ----------------- */}
          </div>
        </div>
      </section>
    </main>
  );
}
