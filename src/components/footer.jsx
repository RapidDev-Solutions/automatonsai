import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (     
        <div className="footer">
            <Container>
                <Row>
                    <Col xs={6} sm={6} md={3}>
                        <p><a href="/#home" className="footer-brand">Automatons AI Home</a></p>
                        <p className="mt-2">&copy;2024 Automatons, <br />All rights reserved.</p>
                    </Col>
                    <Col md={3} className="d-none d-md-flex lh-lg">   
                        <p>&nbsp;</p>
                    </Col>
                    <Col xs={6} sm={6} md={6}>
                        <Row>
                            <Col xs={6} sm={6} md={12}>
                                <p className="text-end w-md-100"> 
                                    <a className="automatonsai-icons mb-3" href="https://www.instagram.com/automatonsai/" target="_blank">
                                        <svg><use xlinkHref="/icons/automatonsai-icons.svg#instagram"></use></svg>
                                    </a>
                                    <a className="automatonsai-icons mb-3" href="https://twitter.com/automatonsai" target="_blank">
                                        <svg><use xlinkHref="/icons/automatonsai-icons.svg#X"></use></svg>
                                    </a>  
                                </p>
                            </Col>
                            <Col xs={6} sm={6} md={12}>
                                <p className="mt-lg-2 text-end w-md-100">
                                    <a className="automatonsai-icons mb-3" href="https://www.facebook.com/automatonsai" target="_blank">
                                        <svg><use xlinkHref="/icons/automatonsai-icons.svg#facebook"></use></svg>
                                    </a>
                                    <a className="automatonsai-icons mb-3" href="https://automatonsai.medium.com/" target="_blank">
                                        <svg><use xlinkHref="/icons/automatonsai-icons.svg#medium"></use></svg>
                                    </a>       
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div> 
    ); 
} 

export default Footer;