import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import "./dis.css"
function Discountcalc() {
    const[actualprice,setActualPrice]=useState(0)
    const[savingprice,setSavingPrice]=useState(0)
    const[netamount,setNetAmount]=useState(0)
    const[amt,setAmt]=useState(0)
    const[dis,setDis]=useState(0)

    const calculate=(e)=>
    {
        setActualPrice(amt)
        setSavingPrice(amt*dis/100)
        setNetAmount(amt-(amt*dis/100))
    }
    const clear=(e)=>
    {
        setActualPrice(0)
        setSavingPrice(0)
        setNetAmount(0)
        setDis(0)
        setAmt(0)
    }
  return (
    <div>
       <div className="container1">
        <h2>Discount Calculator</h2>
        <div className="container2">
        <h4> Actual Price:&#x20B9;{actualprice} </h4>
        <h4> Your Savings:&#x20B9;{savingprice} </h4>
        <TextField id="outlined-basic" label="Enter Amount:&#x20B9;" variant="outlined" value={amt||""} onChange={(e)=>setAmt(e.target.value)}/>

        <br/>
        <TextField id="outlined-basic" label="Enter Discount %:" variant="outlined" value={dis||""} onChange={(e)=>setDis(e.target.value)} />
        <div className="btncont">
        <Button variant="contained" color="success" onClick={(e)=>calculate(e)}>
  Calculate
</Button>
<Button variant="outlined"  color="error" onClick={(e)=>clear(e)}>
  Clear
</Button>
        </div>
       
<h4>Net Amount:&#x20B9;{netamount}</h4>
        </div>
        </div> 
    </div>
  )
}

export default Discountcalc