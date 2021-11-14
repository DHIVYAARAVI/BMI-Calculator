import React from 'react'
import { useState } from 'react';
import './App.css';

export default function Main() {
  
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiResult, setBmiResult] = useState(null);
  const [status, setStatus] = useState("");

  function calculateBMI() {
    let bmi = Number(weight / (height / 100) ** 2).toFixed(2);
    setBmiResult(bmi);

    let bmiStatus = getStatus(bmi);

    setStatus(bmiStatus);

    setHeight("");
    setWeight("");
  }

  function getStatus(bmi) {
    if (bmi < 18.5) 
        return "UNDERWEIGHT";
    else if (bmi >= 18.5 && bmi < 24.9) 
        return "NORMAL";
    else if (bmi >= 25 && bmi < 29.9) 
        return "OVERWEIGHT";
    else 
        return "OBESE";
  }

return (
<div>
    <div>
      <form className="main1">
        <h1 className="header1"> BMI Calculator</h1>
        <div>
          <label className="header2"> Height </label> <br/>
          <input className="inp1" id="Height" type="text" placeholder="Height in cm" value={height} onChange={(e) => setHeight(e.target.value)} />
            <br/>
          <label className="header2"> Weight </label> <br/>
          <input className="inp1" id="Weight" type="Weight in kg" placeholder="Weight in kg" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
          <button className="button1" type="button" onClick={calculateBMI} > CALCULATE </button>
        {bmiResult && (
          <div className="result1">
            <p> Your BMI : <span className="result2"> {bmiResult} </span></p>
            <p> You are currently : <span className="result2"> {status} </span></p>
          </div>
        )}
      </form>
      </div>
</div>
  );
}