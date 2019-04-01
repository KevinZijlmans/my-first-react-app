import React, { Component } from 'react'

export default class UserBoard extends Component {
  render() {
    console.log(this.props)
    return (<div>
      <p>
        <h3>User Board</h3>
        <div>User: {this.props.names[0]}</div>
        <div>User: {this.props.names[1]}</div>
        <div>User: {this.props.names[2]}</div>
      </p>
    </div>)   
  }
}