import React,{useRef,useState} from 'react'

const CAME = () => {
    let [camera,setCamera]=useState(true);
    let cameraRef=useRef()
    let oncmaera=()=>{
        setCamera(!camera)
        if(camera){
            window.navigator.mediaDevices.getUserMedia({
                audio:true,video:{width:"1200px",height:"800px"}
            }).then(stream =>{
                cameraRef.current.srcObject=stream
                cameraRef.current.play()
            }).catch(err=>{console.log(err);})
        }
        else{
            cameraRef.current.stop();
        }
    }
  return (
    <div>
        <video ref={cameraRef}></video>
        <div style={{display:"flex",flexDirection:"column"}}></div>
        <button onClick={oncmaera}>Play</button>
    </div>
  )
}

export default CAME