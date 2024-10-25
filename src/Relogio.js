import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => setHora(new Date()), 1000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="p-3 mb-3 border rounded bg-light">
      <h3>Hora atual: {hora.toLocaleTimeString()}</h3>
    </div>
  );
}
  
export default Relogio;