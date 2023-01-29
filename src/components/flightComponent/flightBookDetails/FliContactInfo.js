import React from "react";

const FliContactInfo = () => {
  return (
    <div className="col-xl-12 mb-5">
      <div className="contactInfoFlgt wt__box">
        <div className="conInfoFlgt__title">
          <h3>Your Contact Information</h3>
          <p>
            <span>!</span> Tips for filling out the passage details
          </p>
        </div>
        <p className="mb-2">
          <strong>Note:</strong> This is who we will be in contacted with about
          this booking
        </p>
        <p className="mb-4">
          We ask for your contact details in case we need to contact you about
          booking. We will never share this information with anyone else.
        </p>
        <form action="#">
          <div className="contry__code mb-3">
            <div className="code">
              <h6>Country Code*</h6>
              <input
                type="number"
                name="code"
                id="code"
                placeholder="BD (+880)"
                required
              />
            </div>
            <div className="code">
              <h6>Phone Number*</h6>
              <input
                type="phone"
                name="phone"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </div>
            <input type="submit" value="Apply" />
          </div>
          <div className="email">
            <h6>E-mail Address*</h6>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FliContactInfo;
