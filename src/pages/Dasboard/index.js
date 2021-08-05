import './index.css';
import React, { useEffect, useState } from 'react';
import { Col, Button } from "antd";
import Modal from '../../components/modal';
import ModalDate from '../../components/modal-Info';
import List from '../../components/List';

//CONECTAR REDUX
import { connect } from 'react-redux';
import { setValue } from '../../redux/actions/Actions';
import { GetMonitores } from '../../redux/actions/Monitores';

//API
import { DeleteMonitor, SaveMonitores } from '../../services/api';

function Monitores(props) {

  //Modal
  const [ModalInput, setModal] = useState(false)
  const [ModalInfo, setModalInfo] = useState(false)

  //Data Modal
  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Programa, setPrograma] = useState("")
  const [Semestre, setSemestre] = useState("")
  const [Cedula, setCedula] = useState("")
  const [Informacion, setInformacion] = useState("")
  const [Id, setId] = useState("")
  const { data, nombre, apellido, programa, semestre, cedula, informacion } = props

  const closeModal = () => {
    setTimeout(() => {
      props.setValue('nombre', '')
      props.setValue('apellido', '')
      props.setValue('programa', '')
      props.setValue('semestre', '')
      props.setValue('cedula', '')
      props.setValue('informacion', '')
    }, 100)
    setModal(false);
  }

  const closeModalInfo = () => {
    setModalInfo(false);
  }

  const GetMonitores = () => {
    setTimeout(() => {
      props.GetMonitores()
    }, 100)
  }

  useEffect(() => {
    GetMonitores()
  }, [])

  useEffect(() => {
    document.title = 'Dasboard'
    document.body.style.backgroundColor = '#1D1D2A';
  })

  const Select = (nombre, apellido, programa, semestre, cedula, informacion, id) => {
    setNombre(nombre)
    setApellido(apellido)
    setPrograma(programa)
    setSemestre(semestre)
    setCedula(cedula)
    setInformacion(informacion)
    setId(id)
  }

  const Delete = () => {
    DeleteMonitor(Id)
    setModalInfo(false)
    GetMonitores()
  }

  const Save = () => {
    SaveMonitores(nombre,apellido,programa,semestre,cedula,informacion)
    setModalInfo(false)
    GetMonitores()
  }

  const Render = () => {
    return data.map((data) =>
      <>
        <List
          nombre={data.nombre}
          apellido={data.apellido}
          programa={data.programa}
          onClick={() => [setModalInfo(true),
          Select(
            data.nombre,
            data.apellido,
            data.programa,
            data.semestre,
            data.cedula,
            data.informacion,
            data.id
          )
          ]}
        />
        <Col style={{ height: 15 }} />
      </>
    )
  }

  return (
    <div className={'Contenedor'}>
      <Modal
        Open={ModalInput}
        Close={closeModal}
        BtnClose={() => setModal(false)}
        BtnGuardar={() => Save()}
      />

      <ModalDate
        Open={ModalInfo}
        Close={closeModalInfo}
        BtnClose={() => setModalInfo(false)}
        nombre={Nombre}
        apellido={Apellido}
        programa={Programa}
        semestre={Semestre}
        cedula={Cedula}
        informacion={Informacion}
        BtnEliminar={() => Delete()}
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
          {Render()}
        </Col>
      </Col>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    data: state.monitores.datamonitores,

    //Input
    nombre: state.Input.nombre,
    apellido: state.Input.apellido,
    programa: state.Input.programa,
    semestre: state.Input.semestre,
    cedula: state.Input.cedula,
    informacion: state.Input.informacion

  }
}

const mapDispatchToProps = dispatch => {
  return {
    GetMonitores: () => {
      dispatch(GetMonitores())
    },
    setValue: (varName, value) => {
      dispatch(setValue(varName, value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Monitores)