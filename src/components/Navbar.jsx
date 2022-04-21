// import React, { Component } from "react";

// export default class Navbar extends Component {
//   render() {
//     // console.log(this.props.username);
//     // let { username, salary, designation, company } = this.props;

//     return (
//       //   <div>my name is {this.props.username.toUpperCase() }</div>
//     //   <div>
//     //     <h1>{username}</h1>
//     //     <p>Company:{company}</p>
//     //     <p>Designation:{ designation}</p>
//     //     <p>Salary:{ salary}</p>
//     //   </div>
//   <div></div> );
//   }
// }




// import React from 'react'

// const Navbar = props => {
//   // console.log(props.users);
  
//   console.log(props);
//   return (
//     <>
//       {
//         props.users.map(emp => {
//           let { empname, empid, empph } = emp;
//           return (
//             <div>
//               <h1>{empname}</h1>
              
//             </div>
//           );
//         })
//       }
//     </>
//   );
     
// } 
//   export default Navbar;

import Logo from "./Logo"
import Menu from "./Menu"
import React from "react"



const Navbar = () => {
  return (
    <div>
      <Logo/>
      <Menu/>
    </div>
  )
}

export default Navbar