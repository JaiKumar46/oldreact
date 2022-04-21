import React, { Component } from 'react'
import PropTypes from "prop-types"

export default class Employee extends Component {
    render() {
      return (
        <>
        <h1>Employee</h1>
              <div>Name:{this.props.name}</div>
              <div>Id Number:{this.props.id}</div>
              <div>Designation:{this.props.designation}</div>
        </>
        
    )
  }
}

//propstypes
Employee.propTypes = {
    name:PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    designation:PropTypes.string.isRequired
}
