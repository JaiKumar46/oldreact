import React,{useRef,useState} from 'react'

const Menu = () => {
 let demoref=useRef()
let [toggle,setToggle]=useState(true)
let handleToggle=(e)=>{
  setToggle(!toggle)
  e.preventDefault();
  if(toggle===true){
    demoref.current.classList.add("mach")
  }
  else{
    demoref.current.classList.remove("mach")
  }
}
  return (
      <div className='menuBlock'>
          <ul>
              <li><a href="">Home</a></li>
              <li><a href="" onClick={handleToggle} >About</a>
              <ul className='drop' ref={demoref}>
                <li><a href="">left</a></li>
                <li><a href="">midle</a></li>
                <li><a href="">right</a></li>
              </ul>
              
              </li>
              <li><a href="">Login</a></li>
              <li><a href="">Signup</a></li>
          </ul>
    </div>
  )
}

export default Menu