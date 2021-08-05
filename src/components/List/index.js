import './index.css';
import { Col, Row, Button } from "antd";

function List(props) {
    return (
        <Col className={'contenedorlist'}>
            <Row justify="center" align="middle">
                <Col span={3} xs={9} sm={5} md={3} >
                    <Button type="primary" onClick={props.onClick} style={{ backgroundColor: '#403EF7', borderColor: '#403EF7', height: 100, borderRadius: 10, width: '80%' }}> </Button>
                </Col>
                <Col span={21} xs={15} sm={19} md={21} >
                    <h1 style={{ color: 'white' }}>{props.nombre} {props.apellido}</h1>
                    <p style={{ marginTop: -10, color: '#7E8892' }}>{props.programa}</p>
                </Col>
            </Row>
        </Col>
    );
}

export default List;
