import { Link } from "react-router-dom";

export function HeaderTopArea() {
  return (
    <header className="header__section">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 g-0">
            <div className="header_topLeft_content">
              <ul>
                <li className="menu">
                  ENGLISH <i className="ri-arrow-down-s-line"></i>
                  <ul className="sub__menu">
                    <li>
                      <Link to="/">BANGLA</Link>
                    </li>
                    <li>
                      <Link to="/">HINDI</Link>
                    </li>
                    <li>
                      <Link to="/">ARABIC</Link>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  COUNTRY <i className="ri-arrow-down-s-line"></i>
                  <ul className="sub__menu">
                    <li>
                      <a href="#">BANGLADESH</a>
                    </li>
                    <li>
                      <a href="#">INDIA</a>
                    </li>
                    <li>
                      <a href="#">OMAN</a>
                    </li>
                    <li>
                      <a href="#">PAKISTAN</a>
                    </li>
                    <li>
                      <a href="#">AMERICA</a>
                    </li>
                    <li>
                      <a href="#">BRAZIL</a>
                    </li>
                    <li>
                      <a href="#">CANADA</a>
                    </li>
                  </ul>
                </li>
                <li className="menu">
                  CURRENCY <i className="ri-arrow-down-s-line"></i>
                  <ul className="sub__menu">
                    <li>
                      <a href="#">DOLLAR</a>
                    </li>
                    <li>
                      <a href="#">TAKA</a>
                    </li>
                    <li>
                      <a href="#">RUPEE</a>
                    </li>
                    <li>
                      <a href="#">EURO</a>
                    </li>
                    <li>
                      <a href="#">RIAL</a>
                    </li>
                  </ul>
                </li>
                <li className="border-0">
                  FREE SHIPPING FOR ALL ORDERS OF $150
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 g-0">
            <div className="header_topRight_content">
              <ul>
                <li className="">
                  <div className="header__social">
                    <ul>
                      <li>
                        <a href="#">
                          <i className="ri-facebook-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-instagram-line"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-twitter-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-youtube-fill"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="ri-mail-fill"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a href="#">NEWSLETTER</a>
                </li>
                <li>
                  <Link to="/contact_us">CONTACT US</Link>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li className="border-0 headerLog">
                  <Link to="/login">Log In</Link>/
                  <Link to="/signup">Sign Up</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
