import React from "react";
 
 
 function Hero(heroname) {
  
      if (heroname === "Joker") 
        throw new Error("ur not hero")
    
    return(
        <div>
            <h1>Hero{heroname}</h1>
        </div>
    )
   }
 
 
 export default Hero