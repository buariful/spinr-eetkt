export function ContactUs() {
  const handleQuestionForm = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let mail = e.target.mail.value;
    let phone = e.target.phone.value;
    let company = e.target.company.value;
    let msg = e.target.msg.value;

    e.target.name.value = "";
  };

  return (
    <main>
      <section
        class="flightBooking__section loginBg cusBg d-flex justify-content-center align-items-center flex-column"
        style={{
          backgroundImage: `url(${require("../../assets/img/background/contactUs.png")})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h1 class="text-white mb-4">Contact Us</h1>
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
                <option value="Country">AREA</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              <img src="img/icon/Country.png" alt="" />
            </div>
            <div class="selector__box">
              <select name="country" id="country">
                <option value="Country">BRANCH</option>
                <option value="bangladesh">Bangladesh</option>
                <option value="india">India</option>
                <option value="pakistan">Pakistan</option>
              </select>
              <img src="img/icon/Building.png" alt="" />
            </div>
          </div>
          <div class="search__link">
            <a href="#" class="go__btn">
              GO
            </a>
          </div>
        </div>
      </section>
      {/* HERO BANNER END 
         INSURANCE DETAILS SECTION START  */}
      <section className="pay__section py-4 py-lg-5">
        <div className="container-fluid">
          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.342501288929!2d82.6637788116932!3d24.194781377504192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398f3a3714b5ecb1%3A0x5383e73062681b1b!2sCommunity%20Health%20Center%2C%20Morwa%2CSingrauli!5e0!3m2!1sen!2sbd!4v1655892085401!5m2!1sen!2sbd"
              width="100%"
              height="390"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="map"
            ></iframe>
          </div>
        </div>
      </section>
      {/* INSURANCE DETAILS SECTION END  */}
      {/* CONTACT US SECTION START  */}
      <section className="contactUs__section">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mb-5 mb-xl-0">
              <div className="conText">
                <h6>SEND US AN EMAIL</h6>
              </div>
              <div className="contact__from">
                <form action="#" method="get" onSubmit={handleQuestionForm}>
                  <div className="row">
                    <div className="col-xl-6">
                      <label htmlFor="name">Your Name</label>
                      <input type="text" name="name" id="name" required />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="mail">Your E-mail</label>
                      <input type="text" name="mail" id="mail" required />
                    </div>
                    <div className="col-xl-6">
                      <label htmlFor="num">Phone Number</label>
                      <input type="text" name="phone" id="num" required />
                    </div>
                    <div className="col-xl-6">
                      <label className="d-block" htmlFor="Com">
                        Company
                      </label>
                      <input type="text" name="company" id="Com" required />
                    </div>
                    <div className="col-xl-12">
                      <label className="d-block" htmlFor="msg">
                        Your Message
                      </label>
                      <textarea
                        name="msg"
                        id="msg"
                        cols="30"
                        rows="10"
                      ></textarea>
                    </div>
                    <div className="col-xl-6">
                      <input type="submit" value="ASK A QUESTION" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="conText mb-4">
                <h6>FREQUENTLY ASKED QUESTIONS</h6>
                <p className="conPara">
                  Massa inceptos porta a pretium a consectetur phasellus
                  suspendisse ridiculus ipsum senectus lobortis euismod ut
                  blandit sodales justo ligula ullamcorper egestas nulla. Fames
                  parturient vulputate ullamcorper faucibus urna at nunc
                  ridiculus quis. Sagittis posuere id nam quis ullamcorper
                  vestibulum vestibulum a facilisi at elit hendrerit scelerisque
                  sodales nam dis orci non aliquet justo ligula ullamcorper
                  egestas nulla enim.
                </p>
              </div>
              <div className="conText">
                <h6>CONTACT US</h6>
              </div>
              <div className="support">
                <ul>
                  <li>
                    <img src="img/icon/Call male.png" alt="" />
                    <p>Support / 24 Hours</p>
                  </li>
                  <li>
                    <img src="img/icon/Call male.png" alt="" />
                    <p>+1 015 6790 3090</p>
                  </li>
                  <li>
                    <img src="img/icon/MailCon.png" alt="" />
                    <p>tour&travel@gmail.com</p>
                  </li>
                  <li>
                    <img src="img/icon/Location.png" alt="" />
                    <p>
                      1355 Market St, Suite 900 San, Francisco, CA 94103 United
                      States
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
