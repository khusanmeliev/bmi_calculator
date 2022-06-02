import React, { useState } from "react";
import "./styles.css";

function BmiCalculator() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter a valid weight and height");
    } else {
      let bmi = (weight / (height * height)) * 10000;
      setBmi(bmi.toFixed(1));
    }

    if (bmi < 25) {
      setMessage("You are underweight");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("You are healthy weight");
    } else {
      setMessage("You are overweight");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <div className="title">
          <h1>BMI Calculator</h1>
        </div>
        <form onSubmit={calcBmi}>
          <div className="inputs">
            <label>Height</label>
            <input value={height} onChange={(e) => setHeight(e.target.value)} />
            <label>Weight</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div className="btn">
            <button>Calculate</button>
          </div>
        </form>
        <div className="result">
          <h3>{bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default BmiCalculator;
