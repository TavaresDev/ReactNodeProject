import React from 'react'
import { Container, Spinner,Col, Row } from 'react-bootstrap';

const Loading = () => {
    return (
        <Container>
            <Row className='text-center '>
                <Col className='m-5'>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                </Col>
            </Row>
        </Container>
    )
}

export default Loading
