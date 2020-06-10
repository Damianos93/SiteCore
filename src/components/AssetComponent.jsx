import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Badge from 'react-bootstrap/Badge'
import Image from 'react-bootstrap/Image'


function AssetComponent({ name, path,id }) {
    return (

        <div>
            <Row>
                <Col>
                <h3>
                <Badge className="right-full mt-5" pill variant="primary">
                    {name}
                    <br />
                  Id: ({id})
                </Badge>
                </h3>
                </Col>
                <Col>
                <Image src={require(`../../public/images/${path}`)} alt={name} roundedCircle  className="mt-5" /></Col>
            </Row>
        </div>
    )
}

export default AssetComponent;
