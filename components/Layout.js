import React from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap';
import NavbarComponent from '../components/Navbar';
import FooterComponent from '../components/Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Transforma tu DOCX en PDF.</title>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossorigin="anonymous"
                />
            </Head>
            <div>
                <NavbarComponent/>
            </div>
            <div className='mt-3'>
                <Container>
                    { children }
                </Container>
            </div>
            <FooterComponent/>
        </>
    );
} 

export default Layout;