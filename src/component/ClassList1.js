import React, { Component } from 'react'
import {componentData} from "../component/Classlist"
export default class ClassList1 extends Component {
  constructor(props){
    super(props)
  }
  render() {
    return (
      <div> 
      <div>{this.props.componentData.component}</div> 
      <div>{this.props.componentData.id}</div> 
   </div> 
        
    )
  }
}
