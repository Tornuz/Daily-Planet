import React, { Component } from 'react'
import loading from "../assets/loading.gif"

export default class Loading extends Component {
  render() {
    return (
      <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  }
}
