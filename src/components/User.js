import React, { Component } from 'react'

export default class User extends Component {
    state = { active: true }

    toggle = () => {
      this.setState({
        active: !this.state.active
      })
    }

    render() {
      return (<div>
        <p>{this.props.names[0]} is <b1>{ this.state.active ? '' : 'not' }</b1> present</p>
        <button onClick={this.toggle}>Toggle</button>
        <div>
          <p>{this.props.names[1]} is <b2>{ this.state.active ? '' : 'not' }</b2> present</p>
          <button2 onClick={this.toggle}>Toggle</button2>
        </div>
        <div>
          <p>{this.props.names[2]} is <b3>{ this.state.active ? '' : 'not' }</b3> present</p>
          <button3 onClick={this.toggle}>Toggle</button3>
        </div>
      </div>)
    }
}