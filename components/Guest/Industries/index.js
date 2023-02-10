import React, { useEffect, useState } from "react";
import Box from "@iso/ui/Box/Box";
import { Button, Col, Row } from "antd";
import Link from "next/link";

import MedicalImage from "@assets/images/medical_crop.jpg";
import BusinessImage from "@assets/images/business_crop.jpg";
import StudentsImage from "@assets/images/students_crop.jpg";
import HumanresourcesImage from "@assets/images/humanresources_crop.jpg";
import InsuranceImage from "@assets/images/insurance_crop.jpg";
import RealestateImage from "@assets/images/realestate_crop.jpg";
import GovernmentImage from "@assets/images/government_crop.jpg";

import TabItem from "@components/Guest/Industries/TabItem";
import Container from "@iso/ui/UI/Container/Container";
import IndustriesWrapper from "@components/Guest/Industries/Industries.styles";

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
    content:
      "You can rely on STARS to take care of your furnished housing needs whether you’re a travel nurse, a medical patient undergoing treatment, or a family member visiting the hospital. We have units within walking distance of the Longwood Medical Center and other noteworthy Boston-area healthcare establishments. Having the privacy of your own fully-applianced residence is sure to make your time here less burdensome.",
  },
  {
    name: "business",
    title: "Business/Corporate",
    content:
      "We have the modern corporate traveler in mind with many of our premiere apartments located near major business areas. You can rest easy knowing we’ve got all your housing bases covered while you’re working away from home. Relax in our spacious units that feature contemporary conveniences, stylish furnishings, and 24/7 guest services.",
  },
  {
    name: "students",
    title: "Students/Educators",
    content:
      "The diverse range of furnished rental offerings from STARS are perfect for students, interns, educators, and administrators alike. We cater to all education professionals and academic institutions, providing comfortable accommodations conveniently located near many popular Boston-area university campuses, medical schools, internship sites, and more. Our units will make you feel right at home while you fulfill on your academic endeavors.",
  },
  {
    name: "humanresources",
    title: "Human Resources",
    content:
      "We’re here as a reliable resource to make relocating your employees just that much more efficient, affordable, and easy. Our thoughtfully equipped apartments will allow your personnel and their families to live and work both cozily and restfully. Our neighborhood staff will ensure that your hires are living like a local from Day 1.",
  },
  {
    name: "insurance",
    title: "Insurance",
    content:
      "Having housed many families who’ve experienced adverse situations with their place of living, we know how truly stressful it can be to deal with, even when it’s covered by insurance. Our experienced team recognizes the pressing nature of these predicaments, and are ready to provide top-notch service and apartments, that can be a supportive and soothing temporary home away from home.",
  },
  {
    name: "realestate",
    title: "Real Estate",
    content:
      "Whether your client is in the middle of renovations, or desiring the perfect hotel alternative while they hunt for their dream home, we’re here to offer real estate professionals an ideal and supremely comfy interim housing solution to propose when such a need arises.",
  },
  {
    name: "government",
    title: "Government & Military",
    content:
      "We know the unique challenges that military personal and government employees face when it comes to arranging flexible-term housing. Whatever rules and requirements are needing to be worked around, we’re here as a trustable provider of VIP accommodations that can supply a tailored suite of amenities and services. We’ll focus on delivering you a supremely well-appointed apartment, so you can focus on the important assignments at hand.",
  },
];

function Industries(props) {
  const capitalize = (s) => {
    if (s) return s[0].toUpperCase() + s.slice(1);
    else return "";
  };
  return (
    <IndustriesWrapper>
      <Box as="section" className="main-background-2" />
      <Box as="section" className="industries-block">
        <Container>
            <h1>Industries</h1>
        </Container>
      </Box>
      <Box as="section" className="industries-block">
        {tabList.map((item, index) => {
          if (index % 2 == 0) {
            return (
              <Container className="industries-stays-block" key={index}>
                <Row gutter={[32, 32]}>
                  <Col lg={12} sm={24} xs={24}>
                    <TabItem
                      index={36}
                      size="lg"
                      title={item.title}
                      content={item.content}
                    />
                    <Link href={`/industries/${item.name}`}>
                      <a className="ant-btn ant-btn-secondary ant-btn-lg">
                        VIEW MORE
                      </a>
                    </Link>
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <div
                      className="image-wrapper"
                      style={{ backgroundImage: `url(${imageMap[capitalize(item.name) + "Image"]})` }}
                    />
                  </Col>
                </Row>
              </Container>
            );
          } else {
            return (
              <Container className="business-accommodation-block" key={index}>
                <Row gutter={[32, 32]}>
                  <Col lg={12} sm={24} xs={24}>
                    <div
                      className="image-wrapper"
                      style={{ backgroundImage: `url(${imageMap[capitalize(item.name) + "Image"]})` }}
                    />
                  </Col>
                  <Col lg={12} sm={24} xs={24}>
                    <TabItem
                      index={36}
                      size="lg"
                      title={item.title}
                      content={item.content}
                    />
                    <Link href={`/industries/${item.name}`}>
                      <a className="ant-btn ant-btn-secondary ant-btn-lg">
                      VIEW MORE
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Container>
            );
          }
        })}
      </Box>
    </IndustriesWrapper>
  );
}

export default Industries;
