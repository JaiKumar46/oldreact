import React, {useState} from 'react'

export default function CRifElse() {
    const[theme,setTheme]=useState(false)
    let change = () => {
        setTheme((pre)=>!pre)
        if (theme) {
            document.body.style.background="red"
        }
        else {
            document.body.style.background="blue"
        }
    }
  return (
    <div>
        <button onClick={change}>change theme</button>
    </div>
  )
}
