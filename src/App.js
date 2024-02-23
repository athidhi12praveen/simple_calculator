import './App.css';
// react material textfiels API
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {

  const[principle,setPrinciple]=useState("")
  const[rate,setRate]=useState("")
  const[year,setYear]=useState("")
  const[interest,setinterest]=useState(0)

  // console.log(principle,rate,year);

  const calculateInterest=(e)=>{

    // prevent default is used to stop automatic refresh of the page

    e.preventDefault()

    // console.log(principle,rate,year);

    if(!principle||!rate||!year){
      alert ('Please fill the form completely')
    }

    else{
      setinterest(principle*rate*year/100)
    }

  }

  const resetForm=()=>{
    setPrinciple("")
    setRate("")
    setYear("")
    setinterest(0)
  }
  
  return (
    
      <>

        <div className='app'>

          <div className='container'>

            <div className='heading-text'>

              <h1 className='title'>SIMPLE INTEREST CALCULATOR</h1>

              <p className='title-para'>CALCULATE YOUR SIMPLE INTEREST EASILY</p>

              <div className='amount-card'>

                <div className='card-text'>

                  <h3 className='total-amount'>₹{interest}</h3>

                  <p className='total-para'>Total Simple Interest</p>

                </div>

              </div>

              {/* form */}

              <form onSubmit={calculateInterest}>

                <div className='text-fields'>

                  {/* principle amout */}

                  <div className='input'>

                  <TextField value={principle||""} onChange={(e)=>setPrinciple(e.target.value)} id="outlined-basic" label="₹ Principle Amount" variant="outlined" />

                  </div>

                  {/* rate of interest */}

                  <div className='input'>

                  <TextField value={rate||""} onChange={(e)=>setRate(e.target.value)} id="outlined-basic" label="Rate of Interest (p.a) %" variant="outlined" />

                  </div>

                  {/* time period */}

                  <div className='input'>

                  <TextField value={year||""} onChange={(e)=>setYear(e.target.value)} id="outlined-basic" label="Time Period (Year)" variant="outlined" />

                  </div>

                </div>

                <div className='btn-group'>

                <Stack direction="row" spacing={2}>

                <Button type='submit' className='btn' style={{backgroundColor:"green"}} variant="contained">CALCULATE</Button>
                <Button onClick={resetForm} className='btn' style={{backgroundColor:"red"}} variant="contained">RESET</Button>
                  
                </Stack>

                </div>

              </form>

            </div>

          </div>

        </div>

      </>
  
  );
}

export default App;
