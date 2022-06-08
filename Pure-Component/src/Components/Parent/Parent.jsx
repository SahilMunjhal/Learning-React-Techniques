import React, { Component } from 'react';
import Pure from '../Pure/Pure';
import {Regular} from '../Regular/Regular';

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Sahil"
      }
    }

    componentDidMount(){
        setInterval(()=>{
           this.setState({
               name:"Sahil"
           })
        },2000)
    }

  render() {
    return (
      <div>
          Welcome to Parent Componnets
          <Pure name={this.state.name}/>
          <Regular name={this.state.name}/>
      </div>
    )
  }
}

export default Parent;