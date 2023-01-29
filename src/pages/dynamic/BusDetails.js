import React from "react";
import BusLftTexts from "../../components/busComponent/busDetails/BusLftTexts";
import BusRightContent from "../../components/busComponent/busDetails/BusRightContent";
import DetailsPageSlider from "../../components/shared/DetailsPageSlider/DetailsPageSlider";
import Map from "../../components/shared/map/Map";
import ServiceInfo from "../../components/shared/serviceInfo/ServiceInfo";

const BusDetails = () => {
  return (
    <div>
      {/* ================== Banner ===================== */}
      <section
        className="pageDetails__banner"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/bBnnr.png")})`,
        }}
      ></section>

      <section className="busStandInfo__section">
        <div className="container-fluid">
          <div className="row mx-1 mx-md-4 gx-5">
            {/*=========== Bus details left ============= */}
            <div className="col-xl-8">
              <ServiceInfo />
              <DetailsPageSlider />
              <BusLftTexts />
            </div>

            {/* ============== Bus details right ========== */}
            <div
              style={{ padding: "0px 0 0 50px" }}
              className="col-xl-4 rentelListing__section"
            >
              <BusRightContent />
            </div>

            {/* ============== Bus Map ================= */}
            <div className="col-xl-12">
              <div className="features m-0">
                <h3>Location</h3>
                <Map />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BusDetails;
