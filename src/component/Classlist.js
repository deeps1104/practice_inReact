import React, { Component } from 'react'
import ClassList1 from './ClassList1';
let data;
export default class Classlist extends Component {
 
  constructor(props) { 
    super(props)
    this.state = { 
       data:  
       [ 
          { 
             component: 'The first element generated', 
             id: 7 
          }, 
          { 
             component: 'The second element generated', 
             id: 8 
          }, 
          { 
             component: 'The third element generated', 
             id: 9 
          } 
       ] 
    } 
 } 





  render() {
    return ( 
      <div>
    <ul>
      <li>{this.state.data}</li>
    </ul>
      </div>
      
   ); 
} 




  }

