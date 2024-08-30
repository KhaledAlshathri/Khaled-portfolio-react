import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { TypeAnimation } from 'react-type-animation';
import classNames from "classnames";
import "../darktheme.css"

function Interface({darkMode}){
    return(<section id="link-to-Home">
      <section className="interface">
 
        <div className={classNames(' col-12 px-4 pt-5 ', {'interfaceContainer': !darkMode, 'interfaceContainer-dark': darkMode})} >
        <div className="row flex-lg-row-reverse flex-row-reverse align-items-center g-5 py-5 pb-0 ">

         
            <div className="main-pic col-lg-6 col-md-5 col-sm-5  col-6 justify-content-center">
              <Fadein>
              <img src={!darkMode ? "../images/khaled.png" : "../images/khaled-dark.png"} className="d-block mx-lg-auto col-lg-10 col-md-12 col-sm-12 img-fluid justify-content-center" alt="picture of Khaled Alshathri" width="700" height="500" loading="lazy"/>
              </Fadein>
            </div>
      
          <div className="titleAndabout col-lg-6 col-md-7 col-sm-7 col-6">
            <Fadein>
            <h1 className={classNames(' display-5 fw-bold lh-1 mb-2 justify-content-center' ,{'title ' : !darkMode, 'title-dark ': darkMode})}>Khaled Alshathri </h1>
            </Fadein>
            
            <Fadein3>
              <div className={classNames(' d-flex lead pb-0 ', {'about': !darkMode, 'about-dark': darkMode})}>
            <TypeAnimation  
               sequence={[
                'Junior software engineering at King Saud University',    
                ]}
                speed={20}
             />
             </div>
            </Fadein3>
          </div>
          
        </div>
        <Fadein2>
        <hr />
        </Fadein2>
      </div>
      </section>
     
      </section>
    )
}

export default Interface;


/* Animations */

function Fadein({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translate(0px)",
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
          transition: "all 1.9s cubic-bezier(0, 0.9, 0.85, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function Fadein3({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translatex(0)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0, 0.9, 0.85, 1) 1s",
        }}
      >
        {children}
      </div>
    </section>
  );
}


