import React from 'react'

const Log = (props) => {
  return (
      <>
      <div className="container row  mt-3 border border-success">
          <div className='col fs-4'>{props.el.decision}</div>
          <div className='col fs-4'>{props.el.cal}</div>
      </div>
      </>
  )
}

export default Log