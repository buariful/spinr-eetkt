import CareerCard from "../../components/careerCard/CareerCard";

export function Career() {
  return (
    <main>
      <section
        className="flightBooking__section loginBg cusBg d-flex justify-content-center align-items-center flex-column"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/career.png")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="text-white mb-4 text-center">Career With Us</h1>
        <div className="header__search">
          <div className="search__selector">
            <div className="selector__box">
              <select name="country" id="country">
                <option value="Country">COUNTRY</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              <img
                src={require("../../assets/img/icon/MapMarker.png")}
                alt=""
              />
            </div>
            <div className="selector__box">
              <select name="country" id="country">
                <option value="Country">CITY</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              <img
                style={{ top: "13px", left: "14px" }}
                src={require("../../assets/img/icon/baggg.png")}
                alt=""
              />
            </div>
          </div>
          <div className="search__link">
            <a href="searchJob.html" className="go__btn">
              GO
            </a>
          </div>
        </div>
      </section>

      <section className="busStandInfo__section">
        <div className="container-fluid">
          <div className="row mx-1 mx-md-4 gx-5">
            <div className="col-xl-12 mb-5">
              <div className="career__content">
                <h2>JOB FAMILIES</h2>
                <p>
                  This is a place where your skills, experience and imagination
                  come together across 170+ locations around the world. There
                  are boundless possibilities for you to grow and make your
                  mark.
                </p>
              </div>
            </div>

            {/*============== career card ============== */}
            <div className="col-xl-12 mb-5">
              <div className="row">
                <CareerCard />
                <CareerCard />
                <CareerCard />
                <CareerCard />
              </div>
            </div>
            <div className="col-xl-12 mb-5">
              <div className="career__content">
                <h2>
                  ​​​​​​​TOGETHER,
                  <br />
                  ​​​​​​​EVERYTHING IS POSSIBLE
                </h2>
                <p className="mb-4">
                  We dare to deliver an experience like no other. We’ve grown
                  fast, overcome challenges, and set trends that others follow.
                  But the story doesn’t stop there. Our future is written by our
                  people.
                </p>
                <p className="mb-4">
                  Bring your ideas and passion to a place where you can make a
                  real impact in one of the world’s fastest growing
                  organisations.{" "}
                </p>
                <p>Together, everything is possible. </p>
              </div>
            </div>
            <div className="col-xl-12 mb-5">
              <div className="career__content">
                <h2>
                  JOIN OUR
                  <br />
                  TALENT COMMUNITY
                </h2>
                <p>
                  This is a place where your skills, experience and imagination
                  come together across 170+ locations around the world. There
                  are boundless possibilities for you to grow and make your
                  mark.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
