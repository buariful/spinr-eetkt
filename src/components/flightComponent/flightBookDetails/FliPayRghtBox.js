import React from "react";

const FliPayRghtBox = () => {
  return (
    <div className="wt__box  flightRightContent flightRightContentDetails mb-3">
      <h6>
        <img src={require("../../../assets/img/icon/Debit Card2.png")} alt="" />
        Payment
      </h6>
      <ul className="mb-3">
        <li>
          <span style={{ color: "#4085d6" }}>Fare line Tax:</span>{" "}
          <span>150</span>
        </li>
        <li>
          <span>Payment surcharge:</span> <span>50</span>
        </li>
        <li>
          <span>Cancellation protection:</span> <span>30</span>
        </li>
        <li>
          <span>Lost baggage protection:</span> <span>20</span>
        </li>
        <li>
          <span>Passengers:</span> <span>*2</span>
        </li>
        <li>
          <span>Mark Up</span>
          <div>
            <button>-</button>
            <input type="number" className="markUp__field" />
            <button>+</button>
          </div>
        </li>
        <li>
          <span>Prom code</span>
          <div>
            <input type="text" />
            <button>Apply</button>
          </div>
        </li>
      </ul>
      <ul>
        <li className="pb-3">
          <span>
            <strong>Total:</strong>
          </span>{" "}
          <span>250</span>
        </li>
      </ul>
    </div>
  );
};

export default FliPayRghtBox;
