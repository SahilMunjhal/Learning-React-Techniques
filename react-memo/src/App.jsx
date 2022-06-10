import React, { Component } from 'react';
import Memo from './Components/Memo';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       name:"sahil"
    }
  }

  componentDidMount(){
     setInterval(()=>{
         this.setState({
           name:"sahil"
         })
     },2000)
  };

  render() {
    return (
      <div>
          <h1>Welcome to React Memo function</h1> 
          <Memo name={this.state.name}/>
      </div>
    )
  }
}

export default App;