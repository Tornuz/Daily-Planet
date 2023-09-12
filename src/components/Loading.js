import React from 'react'
import loading from "../assets/loading.gif"

export default function Loading () {
    return (
      <div className='text-center'>
      <img className='my-3' src={loading} alt="loading" />
      </div>
    )
  }

