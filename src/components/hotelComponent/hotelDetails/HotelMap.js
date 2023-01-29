import React from "react";

const HotelMap = () => {
  return (
    <>
      <div class="col-xl-12">
        <div class="features m-0">
          <h3>Location</h3>
          <div class="google__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29522.27818608554!2d91.8272525444828!3d22.342873706171652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30acd8a7a11e350b%3A0xe1521818b3675579!2sDhaka%20Bank%20Limited!5e0!3m2!1sen!2sbd!4v1654687679468!5m2!1sen!2sbd"
              width="100%"
              height="350"
              style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotelMap;
