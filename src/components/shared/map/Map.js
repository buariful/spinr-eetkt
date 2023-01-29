import React from "react";

const Map = () => {
  return (
    <div className="google__map">
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
  );
};

export default Map;
