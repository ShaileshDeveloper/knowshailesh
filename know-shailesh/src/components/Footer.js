import React from "react";
import "./Footer.css";
import Github from "./github.png";
import Twitter from "./twitter.png";
import Linkedin from "./linkedin.png";
import Hashnode from "./hashnode.png";
import Rectangle from "./reactangle.png";
function Footer() {
  return (
    <>
      <div className="footer__container">
        <div className="">
            <div className="footer__name__container">
            <img className="rectangle" src={Rectangle} />
          <div className="footer__name"> Shailesh Pandey</div>
            </div>
         

          <div className="footer__rights">
            @2022 Shailesh Pandey. All Rights Reserved{" "}
          </div>
          <div className="icons__footer">
            <img className="icons" src={Linkedin}></img>
            <img className="icons" src={Twitter}></img>
            <img className="icons" src={Github}></img>
            <img className="icons" src={Hashnode}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
