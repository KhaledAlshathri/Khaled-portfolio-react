import React from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";

function About({darkMode}){
    return(<section id="link-to-About">
       <a id="link-to-About" style={{ margin: '0%' }}></a>
      
        <Fadein>
        <div className="container about my-5  col-9">
             <div className={classNames('box row p-3 pb-0 pt-5 pe-lg-0 pt-lg-4 align-items-center rounded-3', {'box-shadow': !darkMode, 'box-shadow-dark': darkMode})}>
                <div className="col-lg-7">
                 <h2 className={classNames(' display-4 fw-bold lh-1', {'About-Title': !darkMode, 'About-Title-dark': darkMode})}> About me </h2>
                 <p className={classNames('lead', {'About-content': !darkMode, 'About-content-dark': darkMode})}>I am a passionate software engineer student with an interest in technology and continuous development. I am marked by a commitment and approach to volunteering for various projects. This hands-on experience has significantly contributed to my growth and expertise in multiple areas.</p>
                </div>
                <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
                 <img className="rounded-lg-3" src={!darkMode ? "../public/images/linePattern1.png" : "../public/images/linePattern1-white.png"} alt="3D line pattern" width="100%"/>
                </div>
            
            </div>
      </div>
      
      </Fadein>

      
    
      </section>)
}

export default About;



function Fadein({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    return (
      <section ref={ref}>
        <div
          style={{
            transform: isInView ? "none" : "translatey(200px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
          }}
        >
          {children}
        </div>
      </section>
    );
  }


  

  