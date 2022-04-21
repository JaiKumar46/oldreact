import React, { Component } from 'react'

export default class Unmounting extends Component {
    state = {
        show: true
    }
    handleChange=()=>{
        this.setState({ show: false})
    }
  render() {
    return (
        <div>
            {
                this.state.show ? <Emp/>:null
            }
            <button onClick={this.handleChange}>delete Message</button>

      </div>
    )
  }
}
class Emp extends Component {
    componentWillUnmount() {
        alert("Are you sure you want to delete the employment");

        
     }
  render() {
    return (
        <div><h1>In an Employmee Component</h1></div>
        
    )
  }
}

