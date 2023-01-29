import React from "react";
import FliAdultBox from "../../components/flightComponent/flightBookDetails/FliAdultBox";
import FliBagageBox from "../../components/flightComponent/flightBookDetails/FliBagageBox";
import FliContactInfo from "../../components/flightComponent/flightBookDetails/FliContactInfo";
import FliFlightDetails from "../../components/flightComponent/flightBookDetails/FliFlightDetails";
import FliPayRghtBox from "../../components/flightComponent/flightBookDetails/FliPayRghtBox";
import FliPssngrBox from "../../components/flightComponent/flightBookDetails/FliPssngrBox";
import FliSideCard from "../../components/flightComponent/flightBookDetails/FliSideCard";
import FliWhyUs from "../../components/flightComponent/flightBookDetails/FliWhyUs";

const FlightBookDetails = () => {
  return (
    <>
      <section
        className="pageDetails__banner"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/Rectangle2.png")})`,
        }}
      ></section>

      {/* ================= */}
      <section className="flightBooking__details">
        <div className="container-fluid">
          <div className="row mx-1 mx-md-4">
            <div className="col-xl-8 mb-3 mb-xl-0">
              <FliContactInfo />
              <FliAdultBox />
              <FliBagageBox />
            </div>

            <div className="col-xl-4">
              <FliWhyUs />
              <FliFlightDetails />
              <FliPssngrBox />
              <FliPayRghtBox />
              <FliSideCard />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FlightBookDetails;
