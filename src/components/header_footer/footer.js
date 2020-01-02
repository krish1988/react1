import React from "react";
import Fade from "react-reveal/Fade";
const Footer = () => {
  return (
    <footer className="bck_red">
      <Fade delay={500}>
        <div className="font_righteous footer_logo_venue">I TECH GSM </div>
        <div className="footer_copyright">
          itechgsm 2020.All right reserved.
        </div>
      </Fade>
    </footer>
  );
};

export default Footer;
