import React, { Component } from 'react'

export default class Greet2 extends Component {
  render() {
    return (
      <div >
        <h3 style={{backgroundColor:"skyblue" ,margin:"20px"}}>These Students belongs to {this.props.school}
</h3>
      </div>
    )
  }
}
