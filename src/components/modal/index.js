import './index.css';
import React from 'react';
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
};

function ModalOverlay(props) {
    const { nombre, apellido, programa, semestre, cedula, informacion } = props

    const data = [
        {
            placeholder: 'Nombre',
            value: nombre,
            onchange: 'nombre'
        },
        {
            placeholder: 'Apellido',
            value: apellido,
            onchange: 'apellido'
        },
        {
            placeholder: 'Programa',
            value: programa,
            onchange: 'programa'
        },
        {
            placeholder: 'Semestre',
            value: semestre,
            onchange: 'semestre'
        },
        {
            placeholder: 'Cedula',
            value: cedula,
            onchange: 'cedula'
        },
        {
            placeholder: 'Informacion',
            value: informacion,
            onchange: 'informacion'
        }
    ]

    const Inputs = () => {
        return data.map((data) =>
            <div style={{ paddingBottom: 10 }}>
                <Input
                    placeholder={data.placeholder}
                    value={data.value}
                    onChange={(e) => props.setValue(data.onchange, e.target.value)}
                    style={{ borderRadius: 10, height: 45 }} />
            </div>
        )
    }

    return (
        <Modal
            isOpen={props.Open}
            onRequestClose={props.Close}
            style={customStyles}
            overlayClassName="Overlay"
        >
            <>
                <Col className={'ContenedorModal'}>
                    <Row>
                        <Col span={24} align="start">Registro Informacion</Col>
                    </Row>
                </Col>

                <Col className={'ContenedorInput'}>
                    {Inputs()}
                </Col>

                <Col className={'ContenedorBtn'}>
                    <Button type="primary" block className={'ButtonModal'} onClick={props.BtnGuardar}>
                        <p className={'TextButton'}>Guardar</p>
                    </Button>
                </Col>
            </>
        </Modal>
    );
}

const mapStateToProps = state => {
    return {
        nombre: state.Input.nombre,
        apellido: state.Input.apellido,
        programa: state.Input.programa,
        semestre: state.Input.semestre,
        cedula: state.Input.cedula,
        informacion: state.Input.informacion,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setValue: (varName, value) => {
            dispatch(setValue(varName, value))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModalOverlay)

