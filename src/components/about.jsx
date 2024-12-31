import { useEffect, useState } from "react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Ratio from 'react-bootstrap/Ratio';
import aboutVid from '/vid/AUTOMATON_OVERVIEW_v07.mp4';

const About = () => {
    const [playVid, setPlayVid] = useState(false);

    const playPause = (e) => {
        let vid = document.getElementById('aboutVid'); 
        if (!playVid) {
            vid.play();
            vid.setAttribute('controls', 'controls');
            setPlayVid(true);
        }
    } 

    useEffect(() => {
        let vid = document.getElementById('aboutVid');
        vid.onended = e => {
            vid.removeAttribute('controls');
            setPlayVid(false);
        };
    }, [playVid]);

    return (  
        <> 
            <div className='about'>
                <Container>
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center">
                            The First Real-Time <strong>AI</strong> Powering All Your Crypto Research &amp; Analysis
                        </h2>
                    </Col>
                    <Col sm={12} className="mb-3 mb-md-4 about-vid">
                        <div>
                            <Button variant="primary" onClick={playPause} className={playVid ? 'd-none' : 'd-block'}>
                                <svg className="d-block d-md-none"><use xlinkHref="/icons/automatonsai-icons.svg#litlPlay"></use></svg>
                                <svg className="d-none d-md-block"><use xlinkHref="/icons/automatonsai-icons.svg#bigPlay"></use></svg>
                            </Button>
                            <Ratio aspectRatio="16x9">
                                <video id="aboutVid" width="1920" height="1080" autoPlay={false} loop={false} playsInline={true} muted={false} preload="none" poster="img/about-vid-cover.jpg">
                                    <source src={ aboutVid } type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </Ratio>
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="about-insets about-insets-one">
                            <p>Markets</p>
                            <p>Coin, NFT, and DEX Insights</p>
                            <p>Robust data provides access to cryptocurrency market trends, including price movements, market capitalization, and details for coins, NFT&rsquo;s, and DEX information, ensuring enthusiasts and investors have the latest information.</p>                         
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="about-insets">
                            <p>Engage</p>
                            <p>Chat to Learn</p>
                            <p>Combines expert crypto knowledge with enthusiast vernacular, making complex topics accessible and engaging for a wide audience, from crypto newbies to seasoned traders and developers, enhancing the learning experience.</p>                          
                        </div>
                    </Col>
                    <Col xl={6}>
                        <div className="about-insets">
                            <p>News</p>
                            <p>Comprehensive Information</p>
                            <p>Crypto Fire scours the internet for the most current crypto news, updates, and scholarly articles, helping users stay informed about significant market events and technological advancements.</p>                        
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="about-insets about-insets-five">
                            <p>References</p>
                            <p>Document Analysis</p>
                            <p>References and interprets information from a proprietary knowledge base, including foundational texts and latest research in the cryptocurrency space, to provide detailed explanations, historical context, and theoretical discussions.</p>                         
                        </div>
                    </Col>
                </Row>
                </Container>
            </div> 
        </>
    ); 
} 

export default About;