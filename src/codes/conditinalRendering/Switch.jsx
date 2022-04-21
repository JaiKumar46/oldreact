import React,{useState} from 'react'

export default function Switch() {
  const [auth, setAuth] = useState(true)
  
 
 switch (auth) {
   case true:
     return <button>Login</button>;
   case false:
     return <button>Register</button>;
   default:
     return null;
 }
}
