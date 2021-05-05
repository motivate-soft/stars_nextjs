import React from "react";
import Box from "@iso/ui/Box/Box";
import Container from "@iso/ui/UI/Container/Container";
import { Col, Row } from "antd";
import ContactForm from "@components/Guest/Contact/ContactForm";
import Subscription from "@components/Guest/Subscription";
import ContactWrapper from "@components/Guest/Contact/Contact.styles";
import ContactSocialLinks from "@components/Common/ContactSocialLinks";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { RECAPTCHA_KEY } from "env-config";

class ContactUs extends React.Component {
  render() {
    return (
      <GoogleReCaptchaProvider reCaptchaKey={RECAPTCHA_KEY}>
        <ContactWrapper>
          <Box as="section" className="main-background-2" />
          <Container className="contact-info-block">
            <Row gutter={[32, 32]}>
              <Col lg={12} sm={24} xs={24}>
                <h2>Contact us</h2>
                <p>
                  We are available to answer questions and provide suggestions
                  or connect you with some of our additional personalized
                  services. Please contact us using the form or the contact
                  details below:
                </p>
                <h5>(617)-855-9576 </h5>
                <p>info@starsofboston.com </p>
                <p>
                  1583 Beacon Street
                  <br />
                  Brookline, MA 02446
                  <br />
                  USA
                </p>
                <ContactSocialLinks size={28} />
              </Col>
              <Col lg={12} sm={24}>
                <ContactForm />
              </Col>
            </Row>
          </Container>
          <Subscription />
        </ContactWrapper>
      </GoogleReCaptchaProvider>
    );
  }
}

export default ContactUs;
