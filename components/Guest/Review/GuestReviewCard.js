import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import EditPost from "@components/Common/PostBlock/EditPost";
import {FaStar} from "react-icons/fa";

function GuestReviewCard(props) {
    const {index, posts, rating} = props;

    return (
        <div className="review-card">
            <EditPost index={index} content posts={posts}/>
            <div className="reviewer-box">
                <EditPost title index={index} posts={posts}/>
                <StarRatingComponent
                    name="GuestRating"
                    editing={false}
                    starCount={5}
                    value={parseInt(rating)}
                    renderStarIcon={() => (<FaStar/>)}
                />
            </div>
        </div>
    );
}

export default GuestReviewCard;
