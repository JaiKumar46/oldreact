import React,{useState} from 'react'

export default function Logical() {
    const [messages, setMessages] = useState([
        "notification 1",
        "notification 2",
        "steve view your profile",
        "raj started followed you"
    ])
    let PrintMessages = () => {
        return (
            <>
                <h1>Notification:
                    <strong style={{color:"teal"}}>
                        {messages.length}
                    </strong>
                </h1>
            </>
        )
    }
  return (
      <div>{
        messages.length>0 && <PrintMessages/>
      }



          
    </div>
  )
}
