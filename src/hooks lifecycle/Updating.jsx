import React, { Component } from 'react'

export default class Updating extends Component {
    state = {
    food:"chicken kabbab"    
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ food: "fish" });
        }, 2000);
    }
  render() {
    return (
        <div>Updating
            <h1>{ this.state.food}</h1>
      </div>
    )
  }
}
