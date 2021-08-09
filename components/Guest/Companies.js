import React from "react";
import { Col, Row } from "antd";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import Slider from "react-slick";
import Container from "@iso/ui/UI/Container/Container";

const settings = {
  dots: false,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 1000
  responsive: [
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
};

function NextArrow(props) {
  const { className, onClick } = props;
  return <FaChevronRight className={className} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, onClick } = props;
  return <FaChevronLeft className={className} onClick={onClick} />;
}

export default function Companies({ companies }) {
  return (
    <Container>
      <h2>Certifications</h2>
      <div className="logos-carousel">
        <Slider {...settings}>
          {companies.map((company, index) => (
            <div key={index} className="logo-wrapper">
              <img src={company.image} alt={company.name} />
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}
