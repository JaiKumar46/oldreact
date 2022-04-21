import React,{useState,useRef} from "react";
import ""


const Play = () => {
    let [play,setPlay]=useState(true)
  let  videoRef=useRef()
    let playcon=()=>{
        setPlay(!play)
        play===true?videoRef.current.play():videoRef.current.pause();
    }
  return (
      <section>
          <article>
    <div className="playblaock">
        <h1> play===true ? "play":"pause" </h1>
        
    </div>
    <video src={} ref={videoRef} onClick={playcon}></video>
    </article>
  )</section>
}

export default Play