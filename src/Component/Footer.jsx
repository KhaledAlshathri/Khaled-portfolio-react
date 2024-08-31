import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";

function Footer({darkMode}){
    return(
      <section id="link-to-Contact ">

        <a id="link-to-Contact" className="navbar-link" style={{ margin: '0%' }}></a>
        <footer className={classNames('d-flex justify-content-between align-items-center py-sm-3 py-1 my-0 border-top mt-5', {'text-bg-dark': !darkMode, 'footer-dark' : darkMode})}>

        <div className="col-sm-6 col-7  d-flex align-items-center justify-content-">
        <Fadein>
          <img className="logo" src={!darkMode ? "../images/logo.svg" : "../images/logo-dark.svg"} alt="K logo"width="30" height="24" style={{marginLeft: "10px", marginBottom: "5px"}}/>
          <span className="signature mb-0 text-body-light" style={{marginLeft: "15px"}}> Khaled Alshathri; </span>
        </Fadein>
        </div>

        
        <ul className="nav col-md-6 col-sm-6 justify-content-end list-unstyled d-flex">
          <Fadein><li className=" ms-sm-3 ms-2 "><a  href="mailto:khaled_sh3@hotmail.com"><img className="app-icon" src={!darkMode ? "../images/email-logo.png" : "../images/email-logo-dark.png"} alt=""  style={{borderRadius: "15%"}}/> </a> </li></Fadein>
          <Fadein><li className=" ms-sm-3 ms-2"><a  href="https://x.com/khaled1salah"><img className="app-icon" src={!darkMode ? "../images/X-logo.png" : "..//images/X-logo-dark.png"} alt="" /></a></li></Fadein>
          <Fadein><li className=" ms-sm-3 ms-2"><a  href="https://www.instagram.com/sh3.__i?igsh=MXM1MjJ4cmozaTZ6dA%3D%3D&utm_source=qr"><img className="app-icon" src={!darkMode ? "../images/insta-logo.png" : "../images/insta-logo-dark.png"} alt="" /></a></li></Fadein>
          <Fadein><li className=" ms-sm-3 ms-2"><a  href="https://snapchat.com/t/XvRhZIoI"><img className="app-icon" src={!darkMode ? "../images/snap-logo.png" : "../images/snap-logo-dark.png"} alt="" /></a></li></Fadein>
          <Fadein><li className=" ms-sm-3 ms-2 ml-2 me-sm-5 me-3"><a  href="https://www.linkedin.com/in/khaled-alshathri?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><img className="app-icon" src={!darkMode ? "../images/linkedin-logo.png" : "../images/linkedin-logo-dark.png"} alt="" /></a></li></Fadein>
        </ul>
        
      </footer>
      </section>
    )
}

export default Footer;



function Fadein({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translatey(15px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}