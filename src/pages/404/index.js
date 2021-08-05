import './index.css';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Error404() {

  const history = useHistory();
  const Temporizador = (url, tiempo) => {
    setTimeout(() => {
      history.push(url);
    }, tiempo)
  }

  useEffect(() => {
    document.body.style.backgroundColor = 'black';
    document.title = '404'
    Temporizador('/', 3000)
  })
  
  return (
    <div className="App">
      <header className="Error">
        <p>
          Error 404
        </p>
      </header>
    </div>
  );
}

export default Error404;
