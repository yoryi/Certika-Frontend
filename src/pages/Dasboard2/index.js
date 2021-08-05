import './index.css';
import React, { useEffect } from 'react';
import { Col, Button } from "antd";

function Monitoras() {
  
  useEffect(() => {
    document.title = 'Dasboard'
    document.body.style.backgroundColor = '#1D1D2A';
  }, [])

  return (
    <div className={'Contenedor'}>

      <Col className={'Col1'}>
        <h1 className={'TextPrincipal'}>Monitorias</h1>
        <p className={'TextSegundario'}>Tablero Crud</p>
      </Col>

      <Col span={24} className={'Col2'}>
        <Button type="primary" block className={'Button'}>
          <p className={'TextButton'}>Nuevo</p>
        </Button>
      </Col>

    </div>
  );
}

export default Monitoras;
