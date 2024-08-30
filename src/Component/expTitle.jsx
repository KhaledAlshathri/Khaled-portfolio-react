import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";

function ExpTitle({darkMode}){
    return(<section id="link-to-Experience">
      

        
        <div >
          <a id = "link-to-Experience" style={{margin: "0%"}}></a>
          </div>

        <Fadein2>
        <hr/>
        </Fadein2>

      <Fadein>
        <div className="container Experiences my-5 col-9">
        <div className={classNames('box row pb-0 pe-lg-0 pt-lg-2 align-items-center rounded-3', {'box-shadow': !darkMode, 'box-shadow-dark': darkMode})}>
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h2 className={classNames(' display-4 fw-bold lh-1', {'vol-headline' : !darkMode, 'vol-headline-dark': darkMode})}>Experiences</h2>              
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
              <img className="rounded-lg-3" src={!darkMode ? "../public/images/linePattern3.png" : "../public/images/linePattern3-white.png"} alt="3D line pattern" width="100%"/>
          </div>
        </div>
      </div>
      </Fadein>

      
      </section>)
}

export default ExpTitle;



function Fadein({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translatex(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Fadein2({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translatex(-3000px)",
          opacity: isInView ? 1 : 0,
          transition: "all 2.9s cubic-bezier(0.3, 0.9, 0.85, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}