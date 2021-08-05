import './index.css';
import { Col, Row, Button } from "antd";
import { useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory()
    const button = (num) => {
        if(num===1){
            history.push('Dasboard')
        }
        if(num===2){
            history.push('Dasboard2')
        }
    }

    return (
        <Row className={'header'}>
            <Col span={6} className={'col1'}>
                <h1 className={'Textlogo'}>Certika</h1>
            </Col>
            <Col span={18} align={'end'} className={'col2'}>
                <Row align={'end'} >
                    <Button type="link" block onClick={() => button(1)} className={'btn1'}><p>Monitores</p></Button>
                    <Button type="link" block onClick={() => button(2)} className={'btn2'}><p>Monitoras</p></Button>
                </Row>
            </Col>
        </Row>
    );
}

export default Header;
