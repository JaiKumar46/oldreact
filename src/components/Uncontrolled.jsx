// import React,{useRef} from 'react'

// const Uncontrolled = () => {

//         let emaRef=useRef();    
//         let passRef=useRef();
    
//     let handleSubmit=e=>{
//         e.preventDefault();
//         let email=emaRef.current.value;
//         let password=passRef.current.value;
//         console.log(email,password);
//     }
//   return (
//    <section className='autoBox'>
//        <article>
//            <h1>Login</h1> 
//            < form action="">
//            <div className='form-group' action="">
              
//                 <label htmlFor="email">Email</label>
//             <input type="email" name="email" id="ema" ref={emaRef} placeholder='Enter the email Address'/>
                
//            </div>
//            <div className='form-group' action="">
           
              
//                 <label htmlFor="password">Password</label>
//             <input type="password" name="password" id="pass" ref={passRef} placeholder='Enter your Password'/>
                
//            </div>
//            <div className='form-group' action="">
//            <button type="submit" onClick={handleSubmit}>Submit</button>
//            </div>
//            </form>
//        </article>
//    </section>
//   )
// }

// export default Uncontrolled




import React, { Component, } from 'react'

export default class Uncontrolled extends Component {
    constructor(){
        super()
        this.emaRef=React.createRef();
        this.passRef=React.createRef();
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        let email=this.emaRef.current.value;
                let password=this.passRef.current.value;
                console.log({email,password});
    }
  render() {
    return (
        <section className='autoBox'>
        <article>
            <h1>Login</h1> 
            < form action="">
            <div className='form-group' action="">
               
                 <label htmlFor="email">Email</label>
             <input type="email" name="email" id="ema" ref={this.emaRef} placeholder='Enter the email Address'/>
                 
            </div>
            <div className='form-group' action="">
            
               
                 <label htmlFor="password">Password</label>
             <input type="password" name="password" id="pass" ref={this.passRef} placeholder='Enter your Password'/>
                 
            </div>
            <div className='form-group' action="">
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
            </form>
        </article>
    </section>
    )
  }
}
