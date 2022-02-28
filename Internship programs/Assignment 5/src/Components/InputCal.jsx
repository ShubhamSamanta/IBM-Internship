import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {EAT} from '../Actions/Actions1'
import {BURN} from '../Actions/Actions1'

import {ADD} from '../Actions/Actions1'
import {SUB} from '../Actions/Actions1'

const InputCal = () => {
    // const dataIn =useSelector(state=>state.calLog);
    const dispatch=useDispatch();
    //state Name
    const [deci, setdeci] = useState("");
    //state cal
    const [cal, setcal] = useState(0);
    //change name
    const changeDeci=(e)=>{
        setdeci(e.target.value);
    }
    //change cal
    const changeCal=(e)=>{
        setcal(parseInt(e.target.value));
    }
  return (
      <>
      <div className="container">
      <label className='mt-4 bg-primary text-white'>Enter Decision:</label>
      <input type="text" className="form-control" placeholder="Food/Work Name" aria-label="Username" aria-describedby="addon-wrapping"  value={deci} onChange={changeDeci}/>
      <div className="input-group flex-nowrap">
          <span className="input-group-text mt-4" id="addon-wrapping">Enter calories Burnt or consumed</span>
          <input type="number" className="form-control mt-4" placeholder="Enter calories Burnt or consumed" aria-label="Username" xaria-describedby="addon-wrapping" value={cal} onChange={changeCal}/>
      </div>
      <button type="button" onClick={()=>{dispatch( EAT(deci,cal)); dispatch(ADD(cal));setcal(0);setdeci("") }} className=" mt-3 me-3 btn btn-danger">Consumed</button>
      <button type="button" onClick={()=>{dispatch(BURN(deci,cal)); dispatch(SUB(cal));setcal(0);setdeci("") }} className=" mt-3 btn btn-success">Workout</button>
      </div>
      
      </>
  )
}

export default InputCal