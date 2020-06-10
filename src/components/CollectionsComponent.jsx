import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function CollectionsComponent({ name, tags }) {

    return (
        <Container>
            <Row>
                <Col md={4}><h4>{name}</h4></Col>
            </Row>
            <Row>
                <Col md={4}><h6> {tags}</h6></Col>
            </Row>


        </Container>
    )
}

export default CollectionsComponent;
