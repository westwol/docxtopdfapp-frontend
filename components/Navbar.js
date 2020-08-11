import React from 'react'
import Link from 'next/link';
import { useRouter } from  'next/router';
import { Navbar, Nav } from 'react-bootstrap';

const NavbarComponent = () => {
    const router = useRouter();
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">DocTransformer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link href="/wordtopdf">
                        <Nav.Link 
                            active={ router.pathname === '/wordtopdf' ? true : false } 
                            href="#wordtopdf"
                        >
                            Word a PDF
                        </Nav.Link>
                    </Link>
                    <Link href="/privacy">
                        <Nav.Link 
                            active={ router.pathname === '/privacy' ? true : false } 
                            href="#privacy"
                        >
                            Politica de privacidad
                        </Nav.Link>
                    </Link>
                    <Link href="/about">
                        <Nav.Link 
                            active={ router.pathname === '/about' ? true : false } 
                            href="#about"
                        >
                            Acerca
                        </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarComponent;