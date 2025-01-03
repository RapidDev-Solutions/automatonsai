import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

export async function loader({ request }) {
  const url = new URL(request.url);
  return null;
}

export async function action() {
  return null;
}

export default function Tos() {
  return (
    <>
    <a id="top"></a>
      <div className='tos'>
        <Container>
          <Row className="justify-content-md-center mb-5">
            <h2 className="mt-5 pb-1">Terms of Service</h2>
            <Col xl={7}>
              <p><strong>Terms and Conditions for Automatons</strong><br />
              Effective Date: June 1, 2024</p>

              <p>Welcome to Automatons, the informational website for the open-source AI chat platform, available at  <a href="https://automatonsai.com">https://automatonsai.com</a>. These Terms of Service ("Terms") govern your use of our website and the services we offer. By accessing or using the Website, you agree to be bound by these Terms and our Privacy Policy, accessible at  <a href="https://automatonsai.com/privacy-policy">https://automatonsai.com/privacy-policy</a>.</p>

              <p><strong>1. Ownership</strong><br />
              Upon purchasing a package from Automatons, you are granted the right to download and use the code for accessing an admin panel for Automatons. While you own the downloaded code, you are expressly prohibited from reselling, redistributing, or otherwise transferring the code to third parties without explicit permission from Automatons.</p>

              <p><strong>2. User Data</strong><br />
              We collect personal data, such as your name, email address, and payment information, as described in our Privacy Policy. This information is collected to provide and improve our services, process transactions, and communicate with you.</p>

              <p><strong>3. Non-Personal Data Collection</strong><br />
              The Website uses cookies to enhance user experience, analyze site usage, and facilitate certain functionalities. By using the Website, you consent to the use of cookies in accordance with our Privacy Policy.</p>

              <p><strong>4. Use of the Website</strong><br />
              You agree to use the Website only for lawful purposes and in a manner that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the Website. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within the Website.</p>

              <p><strong>5. Governing Law</strong><br />
              These Terms shall be governed by and construed in accordance with the laws of the United States, without giving effect to any principles of conflicts of law.</p>

              <p><strong>6. Changes to the Terms</strong><br />
              We reserve the right to modify these Terms at any time. We will notify users of any changes by email. Your continued use of the Website after such changes have been notified will constitute your consent to such changes.</p>

              <p><strong>7. Disclaimer of Financial Advice</strong><br />
              Automatons is not a financial advisor and does not provide financial advice. Any information, content, or responses generated by the AI on the Website are for educational and informational purposes only. The AI&rsquo;s responses should not be construed as professional financial advice, investment recommendations, or a substitute for consultation with a qualified financial advisor. Users are solely responsible for any financial decisions or actions taken based on information obtained from the Website or the AI. Automatons expressly disclaims any liability for financial losses or damages resulting from reliance on information provided through the Website or the AI. Users are strongly advised to consult with a licensed financial professional before making any investment or financial decisions.</p>

              <p><strong>8. Contact Information</strong><br />
              If you have any questions about these Terms, please contact us at <a href="mailto:info@automatonsai.com">info@automatonsai.com</a>.</p>

              <p>By using the Website, you acknowledge that you have read these Terms of Service and agree to be bound by them.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
