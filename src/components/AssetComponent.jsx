import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
function AssetComponent({ name, path }) {
    return (
        <div>
            <Row>
                <Col>{name}</Col>
                <Col><img src={require(`../../public/images/${path}`)} alt={name}/></Col>
            </Row>
        </div>
    )
}

export default AssetComponent;
