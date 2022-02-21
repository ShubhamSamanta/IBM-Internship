import React from 'react'
import  ReactDOM  from 'react-dom'
import CartPage from './Components/CartPage';
import ItemPage from './Components/ItemPage';


const Index = () => {
  return (
    <>
    <ItemPage/>
    {/* <CartPage/> */}
    </>
  )
}
ReactDOM.render(<Index/>,document.getElementById('root'));
