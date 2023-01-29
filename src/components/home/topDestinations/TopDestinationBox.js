import boxImage from "../../../assets/img/background/Rectangle149.png";

export function TopDestinationBox() {
  return (
    <div className="col-lg-4 col-md-6 px-4 mb-5">
      <a href="topDestination.html">
        <div className="topDes__box">
          <div className="topDes__content">
            <h5>PARIS</h5>
            <p>9 HOTEL . 15 TOUR</p>
          </div>
          <div className="topDes__img">
            <img src={boxImage} alt="" />
          </div>
        </div>
      </a>
    </div>
  );
}
