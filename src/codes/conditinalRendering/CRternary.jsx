import React,{useState} from 'react'

export default function CRternary() {
    const [state, setState] = useState(false);

    let change = () => {
        setState(!state)
    }
  return (
      <div>
          <button onClick={change}>{(state)?"LogOut":"LogIn"}</button>
          
    </div>
  )
}
