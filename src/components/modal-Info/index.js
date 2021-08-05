import './index.css';
import { Col, Button, Row, Input } from "antd";
import Modal from 'react-modal';

//CONECTAR REDUX
import { connect } from 'react-redux';
import { setValue } from '../../redux/actions/Actions';

const customStyles = {
    content: {
        top: '35%',
        height: '65%',
        width: '35%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-30%',
        transform: 'translate(-50%, -40%)',
        borderRadius: 17,
    }
}

function ModalInfo(props) {

    const text = [
        {
            placeholder: 'Nombre Nuevo',
            value: props.newnombre,
            onchange: 'newnombre'
        },
        {
            placeholder: 'Apellido',
            value: props.apellido,
            onchange: 'apellido'
        },
        {
            placeholder: 'Programa',
            value: props.programa,
            onchange: 'programa'
        },
        {
            placeholder: 'Semestre',
            value: props.semestre,
            onchange: 'semestre'
        },
        {
            placeholder: 'Cedula',
            value: props.cedula,
            onchange: 'cedula'
        },
        {
            placeholder: 'Informacion',
            value: props.informacion,
            onchange: 'informacion'
        }
    ]

    const Inputs = () => {
        return text.map((data) =>
            <div style={{ paddingBottom: 10 }}>
                <Input
                    placeholder={data.placeholder}
                    value={data.value}
                    onChange={(e) => props.setValue(data.onchange, e.target.value)}
                    style={{ borderRadius: 10, height: 45 }} />
            </div>
        )
    }

    const data = [
        {
            placeholder: 'Nombre',
            data: props.nombre
        },
        {
            placeholder: 'Apellido',
            data: props.apellido
        },
        {
            placeholder: 'Programa',
            data: props.programa
        },
        {
            placeholder: 'Semestre',
            data: props.semestre
        },
        {
            placeholder: 'Cedula',
            data: props.cedula
        },
        {
            placeholder: 'Informacion',
            data: props.informacion
        },
    ]

    const Text = () => {
        return data.map((data) =>
            <Row>
                <p className={'textinfo'}>{data.placeholder}:</p>
                <p className={'textinfo2'}>{data.data}</p>
            </Row>
        )
    }

    return (
        <Modal
            isOpen={props.Open}
            onRequestClose={props.Close}
            style={customStyles}
            overlayClassName="Overlay"
        >
            {props.modificar ?
                <>
                    <Col style={{ height: '5vh', width: '35rem', backgroundColor: 'white' }}>
                        <Col span={24} align="start">Modificar</Col>
                    </Col>
                    <Col style={{ height: '43vh', width: '35rem', backgroundColor: 'white', paddingRight: '0%', paddingTop: '2%' }}>
                        {Inputs()}
                    </Col>
                    <Col style={{ height: '10vh', width: '35rem', backgroundColor: 'white' }}>
                        <Col style={{ height: 15 }} />
                        <Button type="primary" block className={'ButtonModal'} >
                            <p className={'TextButton'}>Actualizar</p>
                        </Button>
                    </Col>
                </>
                :
                <>
                    <Col style={{ height: '5vh', width: '35rem', backgroundColor: 'white' }}>
                        <Col span={24} align="start">Informacion</Col>
                    </Col>
                    <Col style={{ height: '37vh', width: '35rem', backgroundColor: 'white', paddingRight: '0%', paddingTop: '2%' }}>
                        {Text()}
                    </Col>
                    <Col style={{ height: '10vh', width: '35rem', backgroundColor: 'white' }}>
                        <Button type="primary" danger block className={'ButtonEliminar'} onClick={props.BtnEliminar}>
                            <p className={'TextButton'}>Eliminar</p>
                        </Button>
                        <Col style={{ height: 15 }} />
                        <Button type="primary" block className={'ButtonModal'} onClick={props.BtnModificar}>
                            <p className={'TextButton'}>Modificar</p>
                        </Button>
                    </Col>
                </>
            }
        </Modal>
    );
}

const mapStateToProps = state => {
    return {
      newnombre: state.Input.newnombre,
      newapellido: state.Input.newapellido,
      newprograma: state.Input.newprograma,
  
    }
  }

const mapDispatchToProps = dispatch => {
    return {
        setValue: (varName, value) => {
            dispatch(setValue(varName, value))
        }
    }
}
export default connect( mapStateToProps, mapDispatchToProps)(ModalInfo)
