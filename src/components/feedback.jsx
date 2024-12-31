import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm, ValidationError } from '@formspree/react';

const Feedback = () => {
    const [state, handleSubmit] = useForm("xrgnoozk");
    if (state.succeeded) {
        return (
            <> 
            <div className='feedback'>
                <Container>
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center mt-5">
                            Help Shape the Future of Automatons!
                        </h2>
                    </Col>
                    <Col xl={6}>
                        <div className="feedback-insets feedback-insets-one">
                            <p>Our AI-Powered Cryptocurrency Assistant</p>
                            <p>At Automatons, we believe that your feedback is essential to the growth and success of our AI-powered cryptocurrency assistant. As we continue to develop and improve our platform, we want to hear from you &ndash; our valued users and community members.</p>
                            <p>By taking a few moments to complete this feedback form, you can help us better understand your needs and preferences, which will directly contribute to shaping the future of Automatons. Your insights will be carefully reviewed by our team and used to guide our development roadmap, ensuring that we prioritize the updates and features that matter most to you. <em>You can also email us at <a href="mailto:info@automatonsai.com">info@automatonsai.com</a>.</em></p>                         
                        </div>
                    </Col>
                    <Col xl={6}>
                        <p className="feedback-response">Thank you, Automatons is working hard to build the best AI-powered cryptocurrency assistant on the market. We&rsquo;ll respond to your request right away.</p>
                    </Col>
                </Row>
                </Container>
            </div> 
        </>
        )
    }
    return (  
        <> 
            <div className='feedback'>
                <Container>
                <Row>
                    <Col sm={12}>
                        <h2 className="text-center mt-5">
                            Help Shape the Future of Automatons!
                        </h2>
                    </Col>
                    <Col xl={6}>
                        <div className="feedback-insets feedback-insets-one">
                            <p>Our AI-Powered Cryptocurrency Assistant</p>
                            <p>At Automatons, we believe that your feedback is essential to the growth and success of our AI-powered cryptocurrency assistant. As we continue to develop and improve our platform, we want to hear from you &ndash; our valued users and community members.</p>
                            <p>By taking a few moments to complete this feedback form, you can help us better understand your needs and preferences, which will directly contribute to shaping the future of Automatons. Your insights will be carefully reviewed by our team and used to guide our development roadmap, ensuring that we prioritize the updates and features that matter most to you. <em>You can also email us at <a href="mailto:info@automatonsai.com">info@automatonsai.com</a>.</em></p>                         
                        </div>
                    </Col>
                    <Col xl={6}>
                        <a id="feedback" className="help-drop"></a>
                        <div className="feedback-insets feedback-insets-five">
                        <form onSubmit={handleSubmit} method="POST">
                            <Row>
                            <Col xl={6}>
                                <label htmlFor="full-name">
                                    Name
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    id="full-name" 
                                    required 
                                />
                            </Col>
                            <Col xl={6}>
                                <label htmlFor="email">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email" 
                                    name="email"
                                    required 
                                />
                                <ValidationError 
                                    prefix="Email" 
                                    field="email"
                                    errors={state.errors}
                                />
                            </Col>
                            </Row>
                            <label htmlFor="message">
                                Feedback
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                            />
                            <ValidationError 
                                prefix="Message" 
                                field="message"
                                errors={state.errors}
                            />
                            <button className="automatonsai-contact" type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                        </div>
                    </Col>
                </Row>
                </Container>
            </div> 
        </>
    ); 
} 

export default Feedback;