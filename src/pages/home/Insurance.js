import React from "react";
import InsuCard from "../../components/insuranceComponent/insuHome/InsuCard";
import CustomPagination from "../../components/shared/pgination/CustomPagination";
import SponsorSlider from "../../components/shared/sponsorSlider/SponsorSlider";

export default function Insurance() {
  return (
    <>
      <SponsorSlider />

      {/* ========= insurance card ============ */}
      <section class="flightTransition__section insurance__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4">
            <div class="col-xl-12 mb-5">
              <div class="insurance__title">
                <h2>32 Insurance Found</h2>
              </div>
            </div>

            {/* ========== cards ========= */}
            <InsuCard />
            <InsuCard />
            <InsuCard />
            <InsuCard />

            <CustomPagination />
          </div>
        </div>
      </section>
    </>
  );
}
