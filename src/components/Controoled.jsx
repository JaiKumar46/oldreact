// import React, { Component } from 'react'

// export default class Controoled extends Component {
//     state={
//         email:"",password:""
//     }    
//     handleChange=(e)=>{
//         // this.setState({email:e.target.value})
//         this.setState({[e.target.name]:e.target.value})
//     }
//     // handlePassword=(e)=>{
//     //     // this.setState({password:e.target.value})
//     // }
//     handleSubmit=e=>{
//         e.preventDefault();
//         console.log(this.state);
//     }
//   render() {
//     return (
//         <section className='autoBox'>
//         <article>
//             <h1>Login</h1> 
//             < form action="">
//             <div className='form-group'  onChange={this.handleChange}>
               
//                  <label htmlFor="email">Email</label>
//              <input type="email" name="email" id="ema" value={this.state.email}  placeholder='Enter the email Address'/>
                 
//             </div>
//             <div className='form-group'  onChange={this.handleChange} action="">
            
               
//                  <label htmlFor="password">Password</label>
//              <input type="password" name="password" id="pass"  value={this.state.password} placeholder='Enter your Password'/>
                 
//             </div>
//             <div className='form-group' action="" >
//             <button onClick={this.handleSubmit}>Submit</button>
//             </div>
//             </form>
//         </article>
//     </section>

//     )
//   }
// }



import React,{useState} from 'react'

const Controoled = () => {
    // let [state,setState]=useState({
        // email:"",
        // password:""
    // })=
    let [email,setEmail]=useState("")
    let [password,setPassw]=useState("")
    let [photo,setPhoto]=useState("")
    
    // let handleChange=e=>{
        // setState({...state,[e.target.name]:e.target.value});
        
    // }
   let handleSubmit=e=>{
                e.preventDefault();
                console.log({email,password,photo});
            }
  return (
    <section className='autoBox'>
            <article>
                <h1>Login</h1> 
                < form action="">
                <div className='form-group'  >
            
                     <label htmlFor="email">Email</label>
                 <input type="email" onChange={(e)=>{
                     setEmail(e.target.value)
                 }} id="ema"  placeholder='Enter the email Address'/>
                     
                </div>
                <div className='form-group'   action="">
                
                   
                     <label htmlFor="password">Password</label>
                 <input type="password" onChange={(e)=>{
                     setPassw(e.target.value)}} id="pass"  placeholder='Enter your Password'/>
                     
                </div>
                <div className='form-group'   action="">
                
                   
                     
                 <input type="file" onChange={(e)=>{
                     setPhoto(e.target.files(0))}} id="pass"  placeholder='Enter your Password' />
                     
                </div>

                <div className='form-group' action="" >
                <button onClick={handleSubmit}>Submit</button>
                </div>
                </form>
            </article>
        </section>
  )
}

export default Controoled