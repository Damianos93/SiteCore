import React from 'react';
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Breadcrumb from 'react-bootstrap/Breadcrumb'

function CollectionsComponent({ name, tags,subTag,subTagName}) {
    return (
        <div>
            <Row>
                <Card style={{ width: '18rem' }} className="mt-5 ml-5">
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {tags}
                        </Card.Text>
                        <Button variant="primary">Show me!</Button>
                        <Breadcrumb>
                            <Breadcrumb.Item >{tags}</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                {subTag}
                             </Breadcrumb.Item>
                            <Breadcrumb.Item active>{subTagName}</Breadcrumb.Item>
                        </Breadcrumb>
                    </Card.Body>
                    
                </Card>
            </Row>
        </div>
    )
}

export default CollectionsComponent;
