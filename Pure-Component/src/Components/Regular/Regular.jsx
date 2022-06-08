import React, { Component } from 'react'

export class Regular extends Component {
  render() {
      console.log('Regular Component')
    return (
      <div>
          Regular Component {this.props.name}
      </div>
    )
  }
}

export default Regular