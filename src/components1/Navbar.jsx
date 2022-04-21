
// import Logo from './Logo';
// import Menu from './Menu';
// const Navbar =props => {
// console.log(props);
//   return (
//       <section id='nav-block'>
//           <article>
//               <Logo />
//               {props.username = "jai"}
//           <Menu />
//           </article>
//       </section>
            
     
//   )
// }

// export default Navbar


import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        // console.log(this.props.username);
        let { username, salary, designation, comapny } = this.props;

      return (

    //   <div>my name is {this.props.username.toUpperCase() }</div>
          <div>my name is {username} work for {comapny} my role is{designation} and i am getting salary of{ salary}</div>
    )
  }
}



