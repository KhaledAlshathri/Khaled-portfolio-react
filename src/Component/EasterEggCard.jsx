import React, { useState, useEffect } from "react";



function EasterEggCard({ easterEgg }) {
    const {eggContent, num, setNum} = easterEgg;
    const [trophyType, setTrophyType] = useState("");

  useEffect(() => {
     
    if(num === 1){
        setTrophyType("bronze");
        setNum(2)
    } else if(num === 2) {
        setTrophyType("silver");
        setNum(3)
    } else if(num === 3){
        setTrophyType("gold");
    }
    
  }, []);

  return (
    <div>
      <div className="easter-egg-card">
        <audio autoPlay>
          <source src="../sounds/trophy-sound.mp3" type="audio/mpeg" />
        </audio>

        {eggContent}
        <div>
          <img
            className="trophy"
            src={`../images/${trophyType}-trophy.png`}
            alt={`${trophyType} trophy`}
          />
        </div>
      </div>
    </div>
  );
}

export default EasterEggCard;