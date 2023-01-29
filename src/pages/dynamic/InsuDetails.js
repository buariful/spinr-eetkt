import React from "react";
import InsuLeftside from "../../components/insuranceComponent/insuDetails/InsuLeftside";
import InsuRight from "../../components/insuranceComponent/insuDetails/InsuRight";

const InsuDetails = () => {
  return (
    <>
      {/*============== insurance details banner ================== */}
      <section
        className="pageDetails__banner"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/Rectangleoiuio.png")}`,
        }}
      ></section>

      {/* ================== insurance details left side =============== */}
      <section class="busStandInfo__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4">
            <div class="col-lg-12">
              <div class="insuranceDetails__title mb-5">
                <h2>
                  Insurance Details: Please fill in with valid information.
                </h2>
              </div>
            </div>

            <InsuLeftside />
            <InsuRight />
          </div>
        </div>
      </section>
    </>
  );
};

export default InsuDetails;
