import React, { useEffect, useState } from "react";
import Box from "@iso/ui/Box/Box";
import { Button, Col, Row } from "antd";
import Link from "next/link";

import Container from "@iso/ui/UI/Container/Container";
import SubPageWrapper from "@components/Guest/Industries/SubPage.styles";

import MedicalImage from "@assets/images/medical.jpg";
import BusinessImage from "@assets/images/business.jpg";
import StudentsImage from "@assets/images/students.jpg";
import HumanresourcesImage from "@assets/images/humanresources.jpg";
import InsuranceImage from "@assets/images/insurance.jpg";
import RealestateImage from "@assets/images/realestate.jpg";
import GovernmentImage from "@assets/images/government.jpg";

const imageMap = {
  MedicalImage,
  BusinessImage,
  StudentsImage,
  HumanresourcesImage,
  InsuranceImage,
  RealestateImage,
  GovernmentImage,
};

const tabList = [
  {
    name: "medical",
    title: "Medical/Healthcare",
    content: `<p>Patients and medical professionals travel across the globe to Boston’s medical areas. Our units are close to the services you need, and are easily available by public transit or private car. Our medical patients and their families appreciate our exceptional attention to providing comfortable, compassionate accommodations. We offer soothing spaces to relax and gather for meals or play with your kids, to enjoy some small amount of normalcy during a chaotic time.</p>
        <p>Healthcare professionals, and travel nurses appreciate our experience with your long hours and on-call location restrictions during medical staffing assignments. Our cozy and well-appointed furnished apartments are the perfect answer to a medical specialist or nurse spending time away from home. We keep the details simple so you can spend your precious time off being off!</p>`,
  },
  {
    name: "business",
    title: "Business/Corporate",
    content: `<p>Life’s too short, just to stay! Even when traveling for business, we want you to live a little! With responsive guest services at your fingertips 24/7, you can stay as long as you need, from days to months, in our stylishly furnished units around Greater Boston. Our units are designed with the working comfort of corporate travelers in mind, and conveniently located near major businesses and government centers.</p>
        <p>You can rely on dedicated laptop-friendly workspaces, complimentary high-speed internet, and fully-applianced kitchens. We believe productivity and comfort are not mutually exclusive! Your corporation’s HR and management staff will also love us for our commitment to providing unsurpassed service and efficiency.</p>`,
  },
  {
    name: "students",
    title: "Students/Educators",
    content: `<p>STARS furnished apartments are perfect for making students, interns, educators, or administrators feel at home anywhere, whether here for an entire semester, or in need of temporary accommodations while permanently relocating. We have a large collection of units conveniently located near many top Boston area universities such as Harvard, MIT, and Boston College.</p>
        <p>Our accommodations will provide you with the peace of mind your need as you get set up, explore your new surroundings, and make the transition to your new home away from home much smoother. Breathe-easy during your collegiate pursuits, knowing you have access to important amenities like laundry facilities, nearby public transportation, and round the clock guest assistance.</p>`,
  },
  {
    name: "humanresources",
    title: "Human Resources",
    content: `<p>At STARS of Boston, we think of our flexible-term furnished apartments as the perfect companion for the HR professional. We know that one of your paramount imperatives is making sure the employees at your company are well taken care of, and we understand how important it is for housing arrangements, during short-term relocations, to be a seamless and trouble-free experience. Sending important personnel out on critical assignments can already be complex and tricky enough without the responsibility of finding them comfortable, well-appointed, accommodations.</p>
        <p>A large part of our portfolio is made up of units with spacious floor plans that feature separate sleeping, dining and living areas, allowing employees, and even their families, to work and live pleasantly. Not only are the accommodations fully-equipped, but come with optional VIP services to ensure a quality living and relocation experience. In addition, our full-service brokerage partner-company Washington Square Residential, can help them find an ideal long-term apartment rental if they discover themselves needing to permanently relocate, or even buy their first Boston area home. </p>`,
  },
  {
    name: "insurance",
    title: "Insurance",
    content: `<p>Having misfortune strike your home is an undeniably burdensome event to deal with. STARS of Boston has had the honor of servicing numerous families while they navigate precisely these types of difficult situations. Our accommodations are the perfect turnkey disaster housing solution allowing you room to breathe while you get your ducks in a row. We have a suite of VIP partner services available to address a wide range of assistances that you may find yourself in need of, such as childcare, pet-care, car-service, and more. </p>
        <p>We pride ourselves on our ability to also directly service insurance adjusters, alongside policyholders. Adjusters will be pleased to find that we have a comprehensive understanding of the relevant procedures, processes, and policies, in order to make the process as efficient and uncomplicated as possible. We’ll follow all the ALE standards, so you can rest assured your policyholder is in good hands.</p>`,
  },
  {
    name: "realestate",
    title: "Real Estate",
    content: `<p>Having misfortune strike your home is an undeniably burdensome event to deal with. STARS of Boston has had the honor of servicing numerous families while they navigate precisely these types of difficult situations. Our accommodations are the perfect turnkey disaster housing solution allowing you room to breathe while you get your ducks in a row. We have a suite of VIP partner services available to address a wide range of assistances that you may find yourself in need of, such as childcare, pet-care, car-service, and more. </p>
        <p>We pride ourselves on our ability to also directly service insurance adjusters, alongside policyholders. Adjusters will be pleased to find that we have a comprehensive understanding of the relevant procedures, processes, and policies, in order to make the process as efficient and uncomplicated as possible. We’ll follow all the ALE standards, so you can rest assured your policyholder is in good hands.</p>`,
  },
  {
    name: "government",
    title: "Government & Military",
    content: `<p>We know that there are unique challenges that military personally and government employees face when needing to coordinate housing for assignments. A trustworthy source for accommodations is of the utmost importance when needing to work within the required rules and requirements around arranging temporary housing. No matter if you’re traveling for relocation, an internship, long details, temporary duty, training and development programs or even as a project team contractor, we’ve got you covered and will ensure you feel right at home.</p>
        <p>Our experience serving the indispensable individuals that serve and protect our nation means that we know how to cater to your specific needs. That means that TDY, TAD, PCS and CRC assignments are all welcome, as are Government-issued credit cards. Rates fit most per diem and sliding scale needs. We also have a suite of VIP partner services to make sure your stay is as trouble-free as we can help make it.</p>`,
  },
];

function SubPage(props) {
  const { tab } = props;
  const capitalize = (s) => {
    if (s) return s[0].toUpperCase() + s.slice(1);
    else return "";
  };
  const item = tabList.find((el) => el.name === tab);
  return (
    <SubPageWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="medical-block">
        <Container className="medical-stays-block">
          <Container className="industries-stays-block">
            <h1 className="text-center">{item.title}</h1>
            <Row gutter={[32, 32]}>
              <Col lg={12} sm={24} xs={24}>
                <div
                  className="image-wrapper"
                  style={{
                    backgroundImage: `url(${
                      imageMap[capitalize(item.name) + "Image"]
                    })`,
                  }}
                />
              </Col>
              <Col lg={12} sm={24} xs={24}>
                <div
                  dangerouslySetInnerHTML={{ __html: item.content }}
                  className="industry-single_content"
                />
              </Col>
            </Row>
          </Container>
        </Container>
      </Box>
    </SubPageWrapper>
  );
}

export default SubPage;
