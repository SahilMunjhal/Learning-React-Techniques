import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         error:false
      }
    }
    
    static getDerivedStateFromError() {
        return { error: true };
      };

      componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo);
      }

  render() {
    if(this.state.error){
      return <h1>Something Went Wrong</h1>
    }
    return (
      this.props.children
    )
  }
}

export default ErrorBoundary;