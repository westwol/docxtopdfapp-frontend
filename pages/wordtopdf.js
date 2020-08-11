import React, { useState } from 'react';
import axios from 'axios';
import { Card, Image, Form, Col, Alert } from 'react-bootstrap';
import Layout from '../components/Layout';
 
const PDFToWord = () => {

    const [ selectedFile, setSelectedFile ] = useState(null);
    const [ apiResponse, setApiResponse ] = useState(null);
 
    const handleFileChange = async(e) => {
        let file = e.target.files[0];
        // Prevent default submission
        e.preventDefault();
        // Change status
        file.status = 'Archivo seleccionado';
        // Setting selectedFile
        setSelectedFile(file);
        // Requesting server an upload
        try {
            // Creating formData and preparing to send request
            const data = new FormData()
            data.append('file', file);
            // Sending request to backend
            const response = await axios.post('https://docstransformer-backend.herokuapp.com/docs/upload', data);
            // Creating fake link
            const linkSource = `data:application/pdf;base64,${response.data.file}`;
            const downloadLink = document.createElement("a");
            const fileName = `${Date.now()}_convertido.pdf`;
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
            // Response to client
            setSelectedFile(null);
            setApiResponse('El archivo ha sido convertido y esta siendo descargado :)')
            setTimeout(function() {
                setApiResponse(null);
            }, 10000);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Layout>
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Convertir de PDF a Word</Card.Title>
                    <div className="mt-2 mb-2 form-group">
                        { apiResponse ? (
                            <Alert variant="success">
                                <Alert.Heading>Felicidades</Alert.Heading>
                                <p>
                                    Tu archivo ha sido convertido exitosamente y se encuentra descargando en este momento.
                                </p>
                                <hr />
                                <p className="mb-0">
                                    DocTransformer 2020.
                                </p>
                            </Alert>
                        ) : null }
                    </div>
                    <Card.Text>
                        <div>
                            <Col>
                                <Image src="https://i.imgur.com/DFwaRZj.png" width="400" height="400" thumbnail />
                            </Col>
                            <Col>
                                Selecciona el archivo que deseas convertir
                            </Col>
                        </div>
                    </Card.Text>
                    <div className="mb-2 mt-2 ml-5 mr-5">
                        <Form.File 
                            id="formcheck-api-custom" 
                            custom
                        >
                            <Form.File.Input 
                                isValid={ selectedFile ? true : false }
                                onChange={handleFileChange}
                            />
                            <Form.File.Label data-browse="Seleccionar">
                                { selectedFile ? selectedFile.status : 'No has seleccionado un archivo' }
                            </Form.File.Label>
                            <Form.Control.Feedback type="valid">Archivo válido</Form.Control.Feedback>
                            <Form.Control.Feedback type="invalid">Este archivo es invalido</Form.Control.Feedback>
                        </Form.File>
                    </div>
                </Card.Body>
            </Card>
        </Layout>
    );
}

export default PDFToWord;