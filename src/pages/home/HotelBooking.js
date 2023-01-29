import React from "react";
import HotelCard from "../../components/hotelComponent/hotelHome/HotelCard";
import HotelSideBar from "../../components/hotelComponent/hotelHome/HotelSideBar";
import CustomPagination from "../../components/shared/pgination/CustomPagination";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";

export default function HotelBooking() {
  return (
    <>
      <SponsorSlider />

      <section className="flightTransition__section hotelbooking__section">
        <div className="container-fluid">
          <div className="row mx-1 mx-md-4">
            {/* ======= side bar ========== */}
            <div className="col-xl-3">
              <HotelSideBar />
            </div>

            {/* ========== hotel card ======== */}
            <div className="col-xl-9">
              <div className="hotel__title">
                <h2>22 Hotels Found</h2>
              </div>
              <HotelCard />
              <HotelCard />
              <HotelCard />
              <HotelCard />
              <HotelCard />

              <CustomPagination />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
