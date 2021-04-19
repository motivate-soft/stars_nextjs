import React from "react";
import Container from "@iso/ui/UI/Container/Container";
import {Col, Row} from "antd";
import Link from "next/link";
import SocialLinks from "@components/Common/SocialLinks";
import {palette} from "styled-tools";
import styled from "styled-components";
import LogoNext from "@iso/ui/Logo/LogoNextJs";
import logo from "@iso/assets/images/logo-horizontal.png";

const FooterWrapper = styled.div`
  padding: 105px 24px 93px;
  background-color: #eeeeee;
  font-size: 16px;

  .footer-logo {
    img {
      max-width: 300px;
      width: 100%;
    }
  }

  h5 {
    color: ${palette("primary", 1)};
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
  }

  .social-icons-group {
    svg {
      color: #3a3a3a;
      fill: #3a3a3a;
      margin: 1rem 1.5rem 1rem 0;

      &:hover {
        color: #949494;
      }
    }
  }

  a {
    font-family: "Raleway", sans-serif;
    color: #3a3a3a !important;
    word-wrap: break-word;
  }

  @media (max-width: 992px) {
    padding: 2rem;
  }
`;

function Footer() {
    return (
        <FooterWrapper>
            <Container>
                <Row gutter={16}>
                    <Col lg={{span: 6}} md={{span: 8}} xs={{span: 24}}>
                        <LogoNext
                            withLink
                            className="footer-logo"
                            linkTo="/"
                            title="StarsOfBoston"
                            src={logo}
                        />
                        <p>Your short-term apartment rental solution in greater Boston.</p>
                    </Col>
                    <Col lg={{span: 6}} md={{span: 16}} xs={{span: 12}}>
                        <h5>Quick Links</h5>
                        <Row gutter={24}>
                            <Col lg={{span: 12}} xs={{span: 12}}>
                                <ul>
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/medical">Medical Travel</Link>
                                    </li>
                                    <li>
                                        <Link href="/medical">Business Travel</Link>
                                    </li>
                                    <li>
                                        <Link target="_blank"
                                              href={"//www.travelmag.com/articles/short-term-rentals-boston/"}>Press</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={{span: 12}} xs={{span: 12}}>
                                <ul>
                                    <li>
                                        <Link href="/contact">Contact us</Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">Blog</Link>
                                    </li>
                                    <li>
                                        <Link href="/terms-and-conditions">Terms & Conditions</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy-policy">Privacy Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/cancellation-policy">Refund Policy</Link>
                                    </li>
                                    <li>
                                        <Link href="/cookie-policy">Cookie Policy</Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{span: 6}} md={{span: 16}} xs={{span: 12}}>
                        <Row gutter={16}>
                            <Col lg={{span: 12}} xs={{span: 12}}>
                                <h5>Locations</h5>
                                <ul className="list-unstyled my-3">
                                    <li>
                                        <Link href="/services">Services</Link>
                                    </li>
                                    <li>
                                        <Link href="/about">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/medical">Medical Travel</Link>
                                    </li>
                                    <li>
                                        <Link href="/medical">Business Travel</Link>
                                    </li>
                                    <li>
                                        <Link target="_blank"
                                              href={"//www.travelmag.com/articles/short-term-rentals-boston/"}>Press</Link>
                                    </li>
                                </ul>
                            </Col>
                            <Col lg={{span: 12}} xs={{span: 12}}>
                                <h5>Explore</h5>
                                <ul className="list-unstyled  my-3">
                                    <li>
                                        <Link href="/">Sports</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Historical Sites</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Events</Link>
                                    </li>
                                    <li>
                                        <Link href="/">Museums</Link>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={{span: 6}} sm={{span: 8}} xs={{span: 24}}>
                        <h5>Get in touch</h5>
                        <SocialLinks size={25}/>
                        <p>
                            <Link href="/rental-application">Rental Application Form</Link>
                        </p>
                        <p>
                            <a href="tel:6178559576">(617)-855-9576</a>
                            <br/>
                            <a href="mailto:info@starsofboston.com">info@starsofboston.com</a>
                        </p>
                        <p>
                            1583 Beacon Street
                            <br/>
                            Brookline, MA 02446
                            <br/>
                            USA
                        </p>
                    </Col>
                </Row>
                <h6 className="text-left">
                    © 2019-2020 Stars of Boston LLC. All rights reserved.
                </h6>
            </Container>
        </FooterWrapper>
    );
}

export default Footer;
