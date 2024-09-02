import React, {useState , useEffect} from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";
import EasterEggCard from "./EasterEggCard"

function Voltitle({darkMode , easterEgg}){

  const {foundEasterEggs , setFoundEasterEggs , eggCounter ,setEggCounter , eggContent , setEggContent , showEasterEggCard , setShowEasterEggCard, num, setNum} = easterEgg;
  var audio = new Audio("../sounds/trophy-sound.mp3");

  const handleClickEasterEgg = (egg) => {


    if (!foundEasterEggs[egg]) {
      audio.play()
      setFoundEasterEggs(prevState => ({ ...prevState, [egg]: true }));
      
      if(eggCounter === 0){
        setShowEasterEggCard(true);
        setEggCounter(1)
      } else if (eggCounter === 1) {
        setShowEasterEggCard(true);
        setEggContent("Nice! You got the second one! One more left");
        setEggCounter(2);
      } else if (eggCounter === 2) {
        setShowEasterEggCard(true);
        setEggContent("Achievement unlocked. Easter Eggs Finder");
        setEggCounter(3);
      } 
      
      if (eggCounter === 3) {
        setShowEasterEggCard(true);
      }
    }
  };

  useEffect(() => {
    if (showEasterEggCard) {
      const timer = setTimeout(() => {
        setShowEasterEggCard(false);
      }, 5000); 
      return () => clearTimeout(timer);
    }
  }, [showEasterEggCard]);

    return(<section id="link-to-Volunteering">

      <Fadein2>
      <hr />
      </Fadein2>


      <Fadein>
        <div className="container Volunteering mt-5  col-9">
          <div className={classNames('box row pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3', {'box-shadow': !darkMode, 'box-shadow-dark': darkMode})}>
             <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
               <h2 className={classNames(' display-4 fw-bold lh-1', {'vol-headline': !darkMode, 'vol-headline-dark': darkMode})}> Volunteering</h2>              
             </div>
           <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden ">
               <img className="rounded-lg-3" src={!darkMode ? "../images/linePattern2.png" : "../images/linePattern2-white.png"} alt="3D line pattern" width="100%" onClick={() => handleClickEasterEgg('image')} />
               {showEasterEggCard && (<EasterEggCard easterEgg={{eggContent, num, setNum}} />)}
           </div>
          </div>
        </div>
      </Fadein>
      <a id="link-to-Volunteering" className="navbar-link" style={{ margin: '0%' }}></a>
    </section>)
}

export default Voltitle;



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
          transition: "all 1.9s cubic-bezier(0, 0.9, 0.85, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}