import React from 'react'
import { useSelector } from 'react-redux'
import Log from './Log';

const DisplayLog = () => {

  const Logs= useSelector(state=>state.calLog);
  console.log("Entered Display");
  return Logs.map(el=>{
    return <Log el={el}/>
  })
}

export default DisplayLog