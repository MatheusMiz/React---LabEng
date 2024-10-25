import React, { useState, useEffect } from 'react';

function Letreiro() {
  const [texto, setTexto] = useState('');
  const frase = 'Conheça a Fatec!';
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTexto((prevTexto) => prevTexto + frase[index]);
      setIndex((prevIndex) => (prevIndex + 1) % frase.length);
      if (index === frase.length - 1) {
        setTexto('');
      }
    }, 150);

    return () => clearInterval(intervalo);
  }, [index]);

  return (
    <div className="p-3 mb-3 border rounded bg-light">
      <h3>{texto}</h3>
    </div>
  );
}

export default Letreiro;