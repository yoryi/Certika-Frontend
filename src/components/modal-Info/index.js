import './index.css';
import { Col, Button, Row } from "antd";
import Modal from 'react-modal';

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
                    <Button type="primary" block className={'ButtonModal'} >
                        <p className={'TextButton'}>Modificar</p>
                    </Button>
                </Col>
            </>
        </Modal>
    );
}

export default ModalInfo
