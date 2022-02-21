import React from 'react'
import "./CartPage.css"
import { useState } from 'react'

const CartPage = (props) => {
    // console.log(props.data);
    let store=0;
  return (
      <>
      <div className="itemcontaoner">
          {props.data.map(item=>{
              return(
                  <>
                  <div className="item1 box">
                       <input type="text" className="name" value={item.name} readOnly />
                       <div className="pricequant">
                           {/* <div>{console.log(item.price)}</div> */}
                           <input type="text" className="price" disabled value={item.price} readOnly/>
                           <div className="quantity">
                               <button type="button" className="btn btn-primary" onClick={()=>props.sub(item.name)}>-</button>
                               <input type="text"  className="quant" disabled value={item.quant} />
                               <button type="button" className="btn btn-primary" onClick={()=>props.add(item.name)}>+</button>
                           </div>
                       </div>
                   </div>
                  </>
              )
          })}
      </div>
      

      <div className="total">
          <div className="amnt">
          { props.data.map(item=>{
            store=store+item.price*item.quant;
        })}
        {store}
          </div>
          <div className="amnt2">:Total Payable Amnt</div>
      </div>
      </>


    //   <>
    //   <div className="itemcontaoner">
    //       <div className="item1 box">
    //           <input type="text" className="name" value={data[0].name} readOnly />
    //           <div className="pricequant">
    //               <input type="text" className="price" disabled value={data[0].price} readOnly/>
    //               <div className="quantity">
    //                   <button type="button" className="btn btn-primary" onClick={()=>add(0)}>+</button>
    //                   <input type="text"  className="quant" disabled value={data[0].quant} />
    //                   <button type="button" className="btn btn-primary" onClick={()=>sub(0)}>-</button>
    //               </div>
    //           </div>
    //       </div>

    //       <div className="item2 box">
    //           <div className="name">Item 2</div>
    //           <div className="pricequant">
    //               <div className="price">200</div>
    //               <div className="quantity">
    //                   <div className="plus">+</div>
    //                   <div className="quant">0</div>
    //                   <div className="minus">-</div>
    //               </div>
    //           </div>
    //       </div>

    //       <div className="item3 box">
    //           <div className="name">Item 3</div>
    //           <div className="pricequant">
    //               <div className="price">300</div>
    //               <div className="quantity">
    //                   <div className="plus">+</div>
    //                   <div className="quant">0</div>
    //                   <div className="minus">-</div>
    //               </div>
    //           </div>
    //       </div>

    //   </div>

    //   <div className="pricedetails"></div>
    //   </>
      
  )
}

export default CartPage