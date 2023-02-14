import React, { Component } from 'react'

export default class Example extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <div>
       <p>You clicked {this.state.count} times</p>
        <button className='btn btn-danger px-5 rounded-pill' onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}
