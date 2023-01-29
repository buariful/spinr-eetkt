import { Link } from "react-router-dom";
import ttlogo2 from "../../../assets/img/logo/T&T-Logo 2.png";

export function HeaderNavigation() {
   return (
      <section className="header__navi">
         <div className="container">
            <div className="row">
               <div className="col-xl-12">
                  <div className="nav__bar">
                     <nav className="navbar navbar-expand-lg py-3 py-lg-2">
                        <div className="container-fluid g-0">
                           <Link className="navbar-brand headerLogo" to="/">
                              <img src={ttlogo2} alt="" />
                           </Link>
                           <button
                              className="navbar-toggler"
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target="#navbarSupportedContent"
                              aria-controls="navbarSupportedContent"
                              aria-expanded="false"
                              aria-label="Toggle navigation"
                           >
                              <span className="navbar-toggler-icon"></span>
                           </button>
                           <div
                              className="collapse navbar-collapse mt-3 mt-lg-0"
                              id="navbarSupportedContent"
                           >
                              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 navigation">
                                 <li>
                                    <Link to="/">HOME</Link>
                                 </li>
                                 <li>
                                    <Link to="/">SHOPE</Link>
                                 </li>
                                 <li>
                                    <Link to="/career">CAREERS</Link>
                                 </li>
                                 <li>
                                    <Link to="/">PAGES</Link>
                                 </li>
                                 <li>
                                    <Link to="/">BUY</Link>
                                 </li>
                              </ul>
                              <form
                                 className="d-flex header__search"
                                 role="search"
                              >
                                 <input
                                    className="form-control"
                                    type="search"
                                    placeholder="Name / PNR / Ticket No / Booking Ref"
                                    aria-label="Search"
                                    required
                                 />
                                 <i className="ri-search-line searchIcon"></i>
                              </form>
                           </div>
                        </div>
                     </nav>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
