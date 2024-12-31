import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, Row, Col} from 'react-bootstrap';

export async function loader({ request }) {
  const url = new URL(request.url);
  return null;
}

export async function action() {
  return null;
}

export default function Contact() {
  const [state, handleSubmit] = useForm("xrgnoozk");
  if (state.succeeded) {
      return <p className="contact-response">Thank you for the feedback. Automatons is working to build the best AI agent for cryptocurrency on the market.</p>;
  }
  return (
    <>
    <a id="top"></a>
      <div className='contact'>
        <Container>
          <Row className="justify-content-md-center">
            <h2 className="pb-1">Contact</h2>
            <Col xl={7}>
              <form onSubmit={handleSubmit} method="POST">
              <label htmlFor="full-name">
                Name
              </label>
              <input 
                type="text" 
                name="name" 
                id="full-name" 
                required 
              />
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
              <label htmlFor="message">
                Message
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
