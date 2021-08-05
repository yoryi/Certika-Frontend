import './index.css';
import { Col, Button, Row, Input } from "antd";
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
};

const data = [
    {
        placeholder: 'Nombre'
    },
    {
        placeholder: 'Apellido'
    },
    {
        placeholder: 'Programa'
    },
    {
        placeholder: 'Semestre'
    },
    {
        placeholder: 'Cedula'
    },
    {
        placeholder: 'Informacion'
    },
]

function ModalOverlay(props) {

    const Inputs = () => {
        return data.map((data) =>
            <div style={{ paddingBottom: 10 }}>
                <Input placeholder={data.placeholder} style={{ borderRadius: 10, height: 45 }} />
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
                <Col style={{ height: '5vh', width: '35rem', backgroundColor: 'white' }}>
                    <Row>
                        <Col span={21} align="start">Registro Informacion</Col>
                        <Col span={3}>
                            <Button className="facebook" type={'link'} onClick={props.BtnClose}>
                                <h6 style={{ color: 'blue', fontSize: '11px' }}>Cerrar</h6>
                            </Button>
                        </Col>
                    </Row>
                </Col>
                <Col style={{ height: '40vh', width: '35rem', backgroundColor: 'white', paddingRight: '0%', paddingTop: '1%' }}>
                    {Inputs()}
                </Col>

                <Col style={{ height: '10vh', width: '35rem', backgroundColor: 'white', paddingTop: '5%' }}>
                    <Button type="primary" block className={'ButtonModal'} >
                        <p className={'TextButton'}>Guardar</p>
                    </Button>
                </Col>

            </>
        </Modal>
    );
}

export default ModalOverlay
