import { Link } from "react-router-dom";

import React, { useState } from 'react';
import './App.css';
function Atv02() {

  const [total, setTotal] = useState(0);
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);


  const incrementHomens = () => {
    setHomens(homens + 1);
    setTotal(total + 1);
  };

  const decrementHomens = () => {
    if (homens > 0) {
      setHomens(homens - 1);
      setTotal(total - 1);
    }
  };

  const incrementMulheres = () => {
    setMulheres(mulheres + 1);
    setTotal(total + 1);
  };

  const decrementMulheres = () => {
    if (mulheres > 0) {
      setMulheres(mulheres - 1);
      setTotal(total - 1);
    }
  };

  
  const resetCounters = () => {
    setTotal(0);
    setHomens(0);
    setMulheres(0);
  };

  return (
    <div className="counter-container">
      <h1>Total</h1>
      < img src="reset.png" width='5%' className="reset-icon" onClick={resetCounters} />
      <div className="total-display">
        <h2>{total}</h2>
      </div>
      <div className="counter-section">
        <div className="counter-item">
          <img src="homem.png" alt="Homens" className="icon" />
          <div className="button-group">
            <img src="mais.png" width="45" height="45" onClick={incrementHomens} className="counter-button" />
            <img src="menos.jpg" width="50" height="50" onClick={decrementHomens} className="counter-button" />
          </div>
          <h3>Homens</h3>
          <div className="count-display">{homens}</div>
        </div>
        <div className="counter-item">
          <img src="mulher.png" alt="Mulheres" className="icon" />
          <div className="button-group">
            <img src="mais.png" width="45" height="45" onClick={incrementMulheres} className="counter-button" />
            <<img src="menos.jpg" width="50" height="50" onClick={decrementMulheres} className="counter-button" />
          </div>
          <h3>Mulheres</h3>
          <div className="count-display">{mulheres}</div>
        </div>
      </div>
    </div>
  );
}

export default Atv02;
