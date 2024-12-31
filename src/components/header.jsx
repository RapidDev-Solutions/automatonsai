import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (     
        <div className={`header`}>
            <Navbar collapseOnSelect expand="lg" className="fixed-top">
            <Container fluid>
                <Navbar.Brand href="/#home">Automatons AI Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="https://automatonsai.medium.com/" target="_blank">Blog</Nav.Link>
                    <Nav.Link href="/#feedback">Feedback</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div> 
    ); 
} 

export default Header;