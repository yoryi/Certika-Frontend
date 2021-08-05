import './index.css';
import React, { useEffect, useState } from 'react';
import { Col, Button } from "antd";
import Modal from '../../components/modal';

function Monitores() {
  const [ModalOpen, setModal] = useState(false)
  const closeModal = () => {
    setModal(false);
  }

  useEffect(() => {
    document.title = 'Dasboard'
    document.body.style.backgroundColor = '#1D1D2A';
  }, [])

  return (
    <div className={'Contenedor'}>

      <Modal
        Open={ModalOpen}
        Close={closeModal}
        BtnClose={() => setModal(false)}
      />

      <Col className={'Col1'}>
        <h1 className={'TextPrincipal'}>Monitores</h1>
        <p className={'TextSegundario'}>Tablero Crud</p>
      </Col>

      <Col span={24} className={'Col2'}>
        <Button type="primary" block className={'Button'} onClick={() => setModal(true)}>
          <p className={'TextButton'}>Nuevo</p>
        </Button>
      </Col>

      <Col span={24} className={'Col3'}>
        
        <Col className={'List'}>

        </Col>

      </Col>

    </div>
  );
}

export default Monitores;
