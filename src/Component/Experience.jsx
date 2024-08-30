import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";

function Experience(props){
    return(<div>
          
          <Fadein>
    <div className="container px-4 py-sm-5 py-2  mt-4 text-center ">

      <div className="overflow-hidden" style={{maxHeight: "1000px"}}>
        <div className="container col-lg-9 px-5">

         <div className="pic-title-div">
           <h3 className={classNames('display-4 fw-bold', {'pic-title': !props.darkMode, 'pic-title-dark': props.darkMode})} >{props.title}</h3>
          </div>

          <div className="carousel-inner" style={{maxHeight: "1000px"}} >

              <Carousel interval={null}>
                <Carousel.Item>
                  <img src={props.img1} className="carousel-img d-block w-100" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                  <img src={props.img2} className="carousel-img d-block w-100" alt=""/>
                </Carousel.Item>

                <Carousel.Item>
                  <img src={props.img3}className="carousel-img d-block w-100" alt=""/>
                </Carousel.Item>
             </Carousel>

        </div>

          <div className="pic-content-div col-lg-7">
            <p className={classNames('lead', {'pic-content': !props.darkMode, 'pic-content-dark': props.darkMode})}>{props.content}</p>
          </div>

          </div>
      </div>
    </div>
    </Fadein>
    </div>)
}

export default Experience;




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