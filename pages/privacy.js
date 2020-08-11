import React from 'react'
import { Card, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
 
const Privacy = () => {
    return (
        <Layout>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Politica de privacidad</Card.Title>
                    <Card.Text>
                        <Col>
                            Estas son las politicas de privacidad
                        </Col>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Layout>
    );
}

export default Privacy;