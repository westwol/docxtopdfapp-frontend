import React from 'react'
import { Card, Col } from 'react-bootstrap';
import Layout from '../components/Layout';
 
const About = () => {
    return (
        <Layout>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Acerca</Card.Title>
                    <Card.Text>
                        <Col>
                            Estas es la página acerca
                        </Col>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Layout>
    );
}

export default About;