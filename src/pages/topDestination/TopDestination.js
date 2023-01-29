import React from "react";
import DetailsPageSlider from "../../components/shared/DetailsPageSlider/DetailsPageSlider";
import SideBarRentalCard from "../../components/shared/sideBarRentalCard/SideBarRentalCard";

const TopDestination = () => {
  return (
    <main>
      <section
        class="pageDetails__banner d-flex justify-content-center align-items-center flex-column"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/eventbg.png")})`,
        }}
      >
        <h1 class="text-white mb-4 text-center">Top Destinations</h1>
        <div class="header__search">
          <div class="search__selector">
            <div class="selector__box">
              <select name="country" id="country">
                <option value="Country">COUNTRY</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              <img src="img/icon/Map Marker.png" alt="" />
            </div>
            <div class="selector__box">
              <select name="country" id="country">
                <option value="Country">CITY</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              <img src="img/icon/Country.png" alt="" />
            </div>
          </div>
          <div class="search__link">
            <a href="#" class="go__btn">
              GO
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ================= HERO BANNER END ================== --> */}
      {/* <!-- ====================== DESTINATION TITLE START ===================== --> */}
      <section class="des__title">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4 gx-5">
            <div class="col-xl-12">
              <h1 class="text-center">Explore</h1>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ====================== DESTINATION TITLE END ===================== --> */}
      {/* <!-- ======================= BUS STAND INFO SECTION START ======================= --> */}
      <section class="busStandInfo__section">
        <div class="container-fluid">
          <div class="row mx-1 mx-md-4 gx-5">
            <div class="col-xl-8">
              <div class="col-xl-12">
                <div class="desSearch__content">
                  <h6>USA</h6>
                  <p>New York</p>
                </div>
              </div>
              <div class="col-xl-12">
                <DetailsPageSlider />
              </div>
              <div class="col-xl-12">
                <div class="be__discription">
                  <h3>Morning in the New York City</h3>
                  <p>
                    From the iconic to the unexpected, the city of San Francisco
                    never ceases to surprise. Kick-start your effortlessly
                    delivered Northern California holiday in the cosmopolitan
                    hills of The City. <a href="#">Read more...</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-12">
                <DetailsPageSlider />
              </div>
              <div class="col-xl-12">
                <div class="be__discription">
                  <h3>Morning in the New York City</h3>
                  <p>
                    From the iconic to the unexpected, the city of San Francisco
                    never ceases to surprise. Kick-start your effortlessly
                    delivered Northern California holiday in the cosmopolitan
                    hills of The City. <a href="#">Read more...</a>
                  </p>
                </div>
              </div>
              <div class="col-xl-12">
                <DetailsPageSlider />
              </div>
            </div>

            {/* ------ right sidebar -------- */}
            <div
              style={{ padding: "0px 12px" }}
              class="col-xl-4 rentelListing__section"
            >
              <div class="conText mb-4">
                <h6>About City</h6>
                <p class="conPara text-dark">
                  Nam dapibus nisl vitae elit fringilla rutrum. Aenean
                  sollicitudin, erat a elementum rutrum, neque sem pretium
                  metus, quis mollis nisl nunc et massa.
                </p>
              </div>
              <div class="conText mb-4">
                <h6>City Events</h6>
                <div class="eventSearch mb-3">
                  <div class="event__img">
                    <img
                      src={require("../../assets/img/eventCity/Rectangle242(3).png")}
                      alt=""
                    />
                  </div>
                  <div class="event__text">
                    <h5>Adventure</h5>
                    <p>
                      Morning in the Northern sea.Morning in the Northern sea
                    </p>
                  </div>
                </div>
                <div class="eventSearch mb-3">
                  <div class="event__img">
                    <img
                      src={require("../../assets/img/eventCity/Rectangle242(1).png")}
                      alt=""
                    />
                  </div>
                  <div class="event__text">
                    <h5>Hosted Tour</h5>
                    <p>
                      Morning in the Northern sea.Morning in the Northern sea
                    </p>
                  </div>
                </div>
                <div class="eventSearch mb-3">
                  <div class="event__img">
                    <img
                      src={require("../../assets/img/eventCity/Rectangle242.png")}
                      alt=""
                    />
                  </div>
                  <div class="event__text">
                    <h5>Adventure</h5>
                    <p>
                      Morning in the Northern sea.Morning in the Northern sea
                    </p>
                  </div>
                </div>
                <div class="eventSearch mb-3">
                  <div class="event__img">
                    <img
                      src={require("../../assets/img/eventCity/Rectangle242(2).png")}
                      alt=""
                    />
                  </div>
                  <div class="event__text">
                    <h5>Sea Travel</h5>
                    <p>
                      Morning in the Northern sea.Morning in the Northern sea
                    </p>
                  </div>
                </div>
              </div>
              <div class="conText mb-4">
                <h6>Categories</h6>
                <div class="event__ul">
                  <ul>
                    <li>Adventure Travel</li>
                    <li>Ecotourism</li>
                    <li>Sea Travel</li>
                    <li>Hosted Tour</li>
                    <li>City trips</li>
                  </ul>
                </div>
              </div>
              <div class="susgest__trip rentelSlider">
                <h4>You might also like</h4>
                <SideBarRentalCard />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TopDestination;
