import ttLogo2 from "../../../assets/img/logo/T&T-Logo 2.png";
import pizzaDeliveryIcon from "../../../assets/img/icon/Pizza Delivery.png";
import shoppingCartIcon from "../../../assets/img/icon/Shopping Cart.png";
import giftIcon from "../../../assets/img/icon/Gift.png";
import debitCardIcon from "../../../assets/img/icon/Debit Card.png";
import technicalSupportIcon from "../../../assets/img/icon/Technical Support.png";
import sponserPreviewXl from "../../../assets/img/sponser/preview-xl.png";
import sponsertravelAgencylogoDesign01 from "../../../assets/img/sponser/travel-agency-logo-design-01.png";
import sponserTravelAgencyLogopalmTree from "../../../assets/img/sponser/travel-agency-logo-design-palm-tree-vector-25827782.png";
import sponserTravelAgencyLogoDesign02 from "../../../assets/img/sponser/Travel-Agency-Logo-Design-Vector.png";


export function Footer(){

    return(
        <footer className="footer__section">
        <div className="container">
            <div className="row">
                <div className="col-xl-2 d-flex align-items-center mb-4">
                    <div className="footer__logo">
                        <img src={ttLogo2} alt=""/>
                    </div>
                </div>
                <div className="col-xl-10 mb-4">
                    <div className="footer__service">
                        <div className="f__service">
                            <div className="fs__img">
                                <img src={pizzaDeliveryIcon} alt="pizza"/>
                            </div>
                            <p>aucibus tristique felis
                            </p>
                            <span>ultrices ornarerhoncus</span>
                        </div>
                        <div className="f__service">
                            <div className="fs__img">
                                <img src={shoppingCartIcon} alt="pizza"/>
                            </div>
                            <p>aucibus tristique felis
                            </p>
                            <span>ultrices ornarerhoncus</span>
                        </div>
                        <div className="f__service">
                            <div className="fs__img">
                                <img src={giftIcon} alt="pizza"/>
                            </div>
                            <p>aucibus tristique felis
                            </p>
                            <span>ultrices ornarerhoncus</span>
                        </div>
                        <div className="f__service">
                            <div className="fs__img">
                                <img src={debitCardIcon} alt="pizza"/>
                            </div>
                            <p>aucibus tristique felis
                            </p>
                            <span>ultrices ornarerhoncus</span>
                        </div>
                        <div className="f__service">
                            <div className="fs__img">
                                <img src={technicalSupportIcon} alt="pizza"/>
                            </div>
                            <p>aucibus tristique felis
                            </p>
                            <span>ultrices ornarerhoncus</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 mb-5">
                    <div className="fsubs">
                        <form action="#" method="get">
                            <input className="femail" type="email" name="subscribe" id="subscribe"
                                placeholder="Email Address Here" required/>
                            <input className="fsubmit" type="submit" value="Subscribe"/>
                        </form>
                    </div>
                </div>
                <div
                    className="col-lg-7 mb-5 d-flex align-items-center justify-content-center justify-content-sm-start justify-content-lg-end">
                    <div className="footerSocial">
                        <h3>Follow Us</h3>
                        <div className="footerSocial__icon">
                            <ul>
                                <li><a href="#"><i className="ri-facebook-fill"></i></a></li>
                                <li><a href="#"><i className="ri-instagram-line"></i></a></li>
                                <li><a href="#"><i className="ri-twitter-fill"></i></a></li>
                                <li><a href="#"><i className="ri-youtube-fill"></i></a></li>
                                <li><a href="#"><i className="ri-mail-fill"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 mb-4 mb-lg-0 col-12">
                    <div className="row">
                        <div className="col-md-3 col-6">
                            <div className="footer__list">
                                <h5>COMPANY</h5>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Community Blog</a></li>
                                    <li><a href="#">Rewards</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="footer__list">
                                <h5>SUPPORT</h5>
                                <ul>
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="footer__list">
                                <h5>COMPANY</h5>
                                <ul>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Community Blog</a></li>
                                    <li><a href="#">Rewards</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-3 col-6">
                            <div className="footer__list">
                                <h5>SUPPORT</h5>
                                <ul>
                                    <li><a href="#">Account</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="sponser__brand">
                        <div className="brand">
                            <img src={sponserPreviewXl} alt=""/>
                        </div>
                        <div className="brand">
                            <img src={sponsertravelAgencylogoDesign01} alt=""/>
                        </div>
                        <div className="brand">
                            <img src={sponserTravelAgencyLogopalmTree} alt=""/>
                        </div>
                        <div className="brand">
                            <img src={sponserTravelAgencyLogoDesign02} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <div className="footer_bottom_text text-start">
                        <p>Copyright © 2019 by Tour & Travels</p>
                    </div>
                </div>
                <div className="col-6 mt-5">
                    <div className="footer_bottom_text text-end">
                        <p>eetkt.com</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}