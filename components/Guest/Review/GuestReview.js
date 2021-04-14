import React from 'react';
import GuestReviewCard from './GuestReviewCard';
import Slider from 'react-slick';
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import Container from "@iso/ui/UI/Container/Container";

const settings = {
    dots: false,
    arrows: true,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        }
    ]
};

function NextArrow(props) {
    const {className, onClick} = props;
    return <FaChevronRight className={className} onClick={onClick}/>;
}

function PrevArrow(props) {
    const {className, onClick} = props;
    return <FaChevronLeft className={className} onClick={onClick}/>;
}

export default function GuestReviews({posts}) {
    return (
        <>
            <h2>Guest Reviews</h2>
            <Container>
                <div className="carousel-container">
                    <Slider {...settings}>
                        <GuestReviewCard key={4} index={88} posts={posts} rating={5}/>
                        <GuestReviewCard key={1} index={89} posts={posts} rating={5}/>
                        <GuestReviewCard key={2} index={90} posts={posts} rating={5}/>
                        <GuestReviewCard key={3} index={91} posts={posts} rating={5}/>
                    </Slider>
                </div>
            </Container>
        </>
    );
}
