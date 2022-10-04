import React from "react";
import Photo from "../../Assets/Images/image 1.png";
import "./Footer.scss";
const Footer = () => {
  return (
    <div className=" footer">
      <div className=" footer-row">
        <div className=" footerSide">
          <div className="address">
            <div className="image">
              <img src={Photo} alt="" />
            </div>
            <div className="textSide">
              <span className="contact">İletişim</span>
              <p className="location">
                Meltem, Beach Park, 07030 Muratpaşa/Antalya{" "}
              </p>
              <p className="Email">
                <span className="emailSpan">Email:</span>example@outlook.com
              </p>
            </div>
          </div>
          <div className="map">
            {" "}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12765.756125556725!2d30.65863813506376!3d36.87984412891388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c39134a332ee0f%3A0xea4b3c95461c348d!2sBeach%20Park%2C%20Antalya!5e0!3m2!1str!2str!4v1664790396529!5m2!1str!2str"
            
              height="222"
              style={{ border: "0" }}
             
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
