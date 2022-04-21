import React, { Component } from 'react'

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username:"shashi"
    }
  }
  componentDidMount(){
  setTimeout(() => {
    this.setState({
      username:"didi"
    })
  }, 3000);
  }
  render() {
    return (
      <div>
          <h1>{this.state.username}</h1>
      </div>
    )
  }
}
