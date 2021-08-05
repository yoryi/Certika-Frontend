import './index.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Cargando() {
  
  const history = useHistory();
  const Temporizador = (url, tiempo) => {
    setTimeout(() => {
      history.push(url);
    }, tiempo)
  }

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.title = 'Cargando...'
    Temporizador('/Dasboard', 2000)
  })

  return (
    <div className="App">
      <header className="Cargando">
        <p>
          Certika APP
        </p>
      </header>
    </div>
  );
}

export default Cargando;
