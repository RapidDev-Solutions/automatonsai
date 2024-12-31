import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export async function loader({ request }) {
  const url = new URL(request.url);
  return null;
}

export async function action() {
  return null;
}

export default function Faq() {
  return (
    <>
    <a id="top"></a>
      <div className='faq'>
        <Container>
          <Row className="justify-content-md-center mb-5">
            <h2 className="mt-5 pb-1">FAQs</h2>
            <Col xl={7}>
              <p className="text-center">In development.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
