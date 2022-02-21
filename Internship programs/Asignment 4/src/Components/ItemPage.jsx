import React from 'react'
import { useState } from 'react'
import CartPage from './CartPage';
import "./ItemPage.css"

const ItemPage = () => {
    //name state
    const [newName, setnewName] = useState("");
    //price state
    const [newPrice, setnewPrice] = useState(0);
    //quant state
    const [newQuant, setNewQuant] = useState(0);
    //data of item
    const [data, setdata] = useState([
        {name:"Item 1",price:100,quant:5},
        {name:"Item 2",price:200,quant:2},
        {name:"Item 3",price:300,quant:3}
    ])

    //change name
    const changeName=(event)=>{
        setnewName(event.target.value);
    }
    //change price 
    const changePrice=(event)=>{
        if(event.target.value!=="")
        setnewPrice(parseInt(event.target.value));
    }
    //change quant
    const changeQuant=(event)=>{
        if(event.target.value!=="")
        setNewQuant(parseInt(event.target.value));
    }
    //on clicking submit we update the data
    const submitted=()=>{
        // setdata([[...data],{name:newName,price:newPrice,quant:newQuant}]);
        setdata([...data,{name:newName,price:newPrice,quant:newQuant}]);
        setnewName("");
        setnewPrice(0);
        setNewQuant(0);
    }

    //add quant
    const add=(id)=>{
        const newData=[...data];
        const index=data.findIndex(el=>el.name===id);
        newData[index].quant+=1;
        setdata(newData);
        // console.log(id);
    }

    //subtract quant
    const sub=(id)=>{
        const newData=[...data];
        const index=data.findIndex(el=>el.name===id);
        newData[index].quant-=1;
        setdata(newData);
        if(newData[index].quant===0)
        {
            remove(newData[index].name);
        }
        
        // console.log(id);
    }

    //if quant falls below 0 delete row in the data
    const remove=(id)=>{
        setdata(data.filter(el=>el.name!=id));
    }
  return (
      <>
      <div className="container">
          <form>
              <input type="Text" className="form-control inputbox"  aria-describedby="emailHelp" placeholder='Item Name' onChange={changeName} value={newName} />
              <input type="number" className="form-control inputbox" aria-describedby="emailHelp"placeholder='Price' onChange={changePrice} value={newPrice} />
              <input type="number" className="form-control inputbox" aria-describedby="emailHelp"placeholder='quant' onChange={changeQuant} value={newQuant} />
              <button type="button" className="btn btn-primary" onClick={submitted}>Submit</button> 
          </form>
      </div>
      {/* {console.log(data)} */}
      <CartPage data={data} add={add} sub={sub}/>
      </>
  )
}

export default ItemPage