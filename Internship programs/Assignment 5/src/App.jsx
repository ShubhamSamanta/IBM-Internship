import React from 'react'
import TotalCal from './Components/TotalCal'
import InputCal from './Components/InputCal'
import DisplayLog from './Components/DisplayLog'
const App = () => {
  return (
     <div className="container">
       <TotalCal/>
       <InputCal/>
       <DisplayLog/>
     </div>
  )
}

export default App