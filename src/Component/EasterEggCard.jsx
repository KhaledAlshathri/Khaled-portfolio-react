import React, { useState, useEffect } from "react";

function EasterEggCard({ easterEgg }) {
    const {eggContent, num, setNum} = easterEgg;
    const [trophyType, setTrophyType] = useState("");

  useEffect(() => {
     
    if(num === 1){
        setTrophyType("../images/bronze-trophy.svg");
        setNum(2)
    } else if(num === 2) {
        setTrophyType("../images/silver-trophy.svg");
        setNum(3)
    } else if(num === 3){
        setTrophyType("../images/gold-trophy.svg");
    }
    
  }, []);

  return (
    <div>
      <div className="easter-egg-card">
        {eggContent}
        <div>
          <img 
            className="trophy"
            src={trophyType}
            alt="trophy"
          />
        </div>
      </div>
    </div>
  );
}

export default EasterEggCard;