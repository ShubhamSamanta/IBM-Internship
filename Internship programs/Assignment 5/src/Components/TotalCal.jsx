import React from 'react'
import { useSelector } from 'react-redux'

const TotalCal = () => {
    const total=useSelector(state=>state.calCounter);
  return (
      <>
      <div className='bg-info fs-1 text-center text-white mt-3'>Total Calories = {total} cal</div>
      </>
  )
}

export default TotalCal