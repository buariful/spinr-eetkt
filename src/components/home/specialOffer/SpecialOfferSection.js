

export function SpecialOfferSection(){
 
    return(
        <section className="specialOffer__section">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-12 mb-4 mb-lg-0">
                        <div className="specialOffer__box"
                            style={{backgroundImage:`url(${require("../../../assets/img/background/Rectangle224.png")})`}}>
                            <div className="spcial_left_box">
                                {/* <img src={bgImage224} alt="" /> */}
                                <span>HOLIDAY SALE</span>
                                <h3>Special Offers</h3>
                                <p>Find Your Perfect Hotels Get the best prices on 20,000+ properties the best prices
                                    on.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6 mb-4 col-sm-0 col-12">
                        <div className="specialOffer__box specialOffer__box2"
                            style={{backgroundImage: `url(${require("../../../assets/img/background/Rectangle225.png")})`}}>
                            <div className="spOffer__icon">
                                <img src="img/icon/Mail.png" alt=""/>
                            </div>
                            <h2>Newsletters</h2>
                            <p>Join for free and get our
                                tailored newsletters full of
                                hot travel deals.</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-sm-6 col-12">
                        <div className="specialOffer__box specialOffer__box2 specialOffer__box3"
                            style={{backgroundImage: `url(${require("../../../assets/img/background/Rectangle226.png")})`}}>
                            <div className="spOffer__icon">
                                <img src="img/icon/Island On Water.png" alt=""/>
                            </div>
                            <h2>Travel Tips</h2>
                            <p>Tips from our travel experts
                                to make your next trip even
                                better.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}