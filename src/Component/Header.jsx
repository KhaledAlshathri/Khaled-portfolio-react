import React, { useState, useEffect } from "react";
import { useRef } from "react";
import { useInView } from "framer-motion";
import classNames from "classnames";
import '../darktheme.css'


function Header({theme , easterEgg}) {

  const {darkMode , setDarkMode} = theme
  const {foundEasterEggs , setFoundEasterEggs , eggCounter ,setEggCounter , eggContent , setEggContent} = easterEgg


  const [activeSection, setActiveSection] = useState("Home");

  const sections = ["Home", "About", "Volunteering", "Experience", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = activeSection;

      sections.forEach((section, index) => {
        const element = document.getElementById(`link-to-${section}`);
        const rect = element.getBoundingClientRect();

        if (
          rect.top <= window.innerHeight / 2 &&
          rect.bottom >= window.innerHeight / 2
        ) {
          currentSection = section;
        }

        
        if (index === sections.length - 1 && rect.top <= window.innerHeight) {
          currentSection = section;
        }
      });

      
      if (window.scrollY === 0) {
        currentSection = "Home";
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, sections]);

  
  const handleChangeDarkMode = () => {
    setDarkMode(!darkMode);
    if(!darkMode){
      document.body.style.backgroundColor = "#212529"
    } else {
      document.body.style.backgroundColor = "#EDEDED"
    }
  };

  const handleClickEasterEgg = (egg) => {
    const audio = new Audio("../sounds/trophy-sounds.mp3");
    if (!foundEasterEggs[egg]) {
      setFoundEasterEggs(prevState => ({ ...prevState, [egg]: true }));
      alert(eggContent);
      if(eggCounter === 1){
        setEggContent("Nice! You got the second one! One more left🤩")
        setEggCounter(2)
      }else if (eggCounter === 2){
        setEggContent("Achievement unlocked. Easter Eggs Finder🏆")
        setEggCounter(3)
      }
      if (eggCounter === 3){
        audio.play();
      }
    }
  };

  return (
    <div>
      <a id="link-to-Home" className="navbar-link" style={{ margin: "0%" }}></a>
      <header className={classNames('py-sm-3 pt-2 pb-0 ', {'text-bg-dark': !darkMode, 'header-dark': darkMode})}>
        <div className="container nav-div col-12 mx-0" style={{maxWidth: "100%"}}>
          <div className="align-items-center justify-content-center justify-content-lg-center">
            <div className="container">
              <div className="row">
                <div className="col-1 p-0">
                  <div className="container pt-sm-2 pt-1 ">
                    <Fadein>
                      <img
                        className="logo"
                        src={!darkMode ? "../images/logo.svg": "../images/logo-dark.svg"}
                        alt="K logo"
                        width="30"
                        height="24"
                        onClick={() => handleClickEasterEgg('icon')}
                      />
                    </Fadein>
                  </div>
                </div>
                <div className="col-10">
                  <ul className="nav col-12 mb-2 justify-content-center mb-md-0">
                    {sections.map((section) => (
                      <Fadein key={section}>
                        <li>
                          <a
                            href={`#link-to-${section}`}
                            className={
                              !darkMode ? (`nav-link px-sm-3 px-2 ${ activeSection === section ? "text-secondary " : "text-white fw-bold"}`) : `nav-link px-sm-3 px-2 ${ activeSection === section ? "text-secondary " : "text-black fw-bold"}`
                            }
                          >
                            {section}
                          </a>
                        </li>
                      </Fadein>
                    ))}
                    
                  </ul>
                </div>
                
                <div className="col-1 dark-theme-div" >
                  <Fadein>
                    <label>
                      <input type="checkbox" value={darkMode} onChange={handleChangeDarkMode} />
                      <ion-icon name="sunny" class="sun"></ion-icon>
                      <ion-icon name="moon" class="moon"></ion-icon>
                      <span className="toggle"></span>
                    </label>
                  </Fadein>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;



function Fadein({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <div
        style={{
          transform: isInView ? "none" : "translatey(-50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </div>
    </section>
  );
}

function darkThemeActive(){
  console.log("checked")
}