import React, { Component } from 'react'
import Spinner from './Spinner.gif'
export class spinner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={Spinner} alt="Spinner"/>
      </div>
    )
  }
}

export default spinner
