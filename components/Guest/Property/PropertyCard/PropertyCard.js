import React, {useContext} from 'react';
import Link from 'next/link';
import PropertyCardWrapper from "@components/Guest/Property/PropertyCard/PropertyCard.styles";
import {FaBath, FaCouch, FaDoorOpen, FaParking, FaPaw, FaUserFriends} from "react-icons/fa";
import {Button} from "antd";
import {BookingContext} from "@context/BookingProvider";
import {useRouter} from "next/router";

function PropertyCard(props) {
    const {
        id,
        title,
        slug,
        category,
        price,
        minPrice,
        minMonthPrice,
        bedroomCount,
        minSleeps,
        sleeps,
        bathroomCount,
        rentalParking,
        sharedBathroom,
        furnished,
        petsConsidered,
        image
    } = props;
    const {state, dispatch} = useContext(BookingContext)
    const router = useRouter();

    const handleQuickBook = () => {
        dispatch({
            type: 'UPDATE_BOOKING_INFORMATION',
            payload: {
                propertyId: id,
                propertySlug: slug
            }
        })
        router.push('/quick-book')
    }

    return (
        <PropertyCardWrapper>
            <div
                style={{backgroundImage: image && image.file ? `url(${image.file})` : ``}}
                className="property-card-image-wrapper">
                <div className="card-title-wrapper">
                    <h4>{title}</h4>
                </div>
            </div>
            <div className="property-card-content">
                <div className="features-wrapper">
                    <ul>
                        {category === 'Private Rooms' ? (
                            <li>
                                <FaDoorOpen/> Private Room
                            </li>
                        ) : category === 'Studios' ? (
                            <li>
                                <FaDoorOpen/> Studio
                            </li>
                        ) : bedroomCount && bedroomCount !== 0 ? (
                            <li>
                                <FaDoorOpen/> {bedroomCount} Bedroom
                            </li>
                        ) : (
                            ''
                        )}
                        {sharedBathroom && sharedBathroom === true ? (
                            <li>
                                <FaBath/>
                                Shared Bathroom
                            </li>
                        ) : (
                            ''
                        )}
                        {bathroomCount &&
                        bathroomCount !== 0 &&
                        sharedBathroom === false ? (
                            <li>
                                <FaBath/> {bathroomCount} Bathroom
                            </li>
                        ) : (
                            ''
                        )}
                        {sleeps && sleeps !== 0 ? (
                            <li>
                                <FaUserFriends/> Sleeps {sleeps}
                            </li>
                        ) : (
                            ''
                        )}
                        {rentalParking === true && (
                            <li>
                                <FaParking/> Rental Parking
                            </li>
                        )}
                        {furnished === true && (
                            <li>
                                <FaCouch/> Furnished
                            </li>
                        )}
                        {petsConsidered && (
                            <li>
                                <FaPaw/> Pets considered
                            </li>
                        )}
                    </ul>
                </div>
                <div className="price-wrapper">
                    <h4>
                        <span>Starting at</span> ${minPrice}/night,
                    </h4>
                    <h4>${minMonthPrice}/month</h4>
                </div>
                <div className="property-buttons-wrapper">
                    <Button type="secondary" size="large" onClick={handleQuickBook}>
                        Quick book
                    </Button>
                    <Link
                        href={`/listing/${slug}`}>
                        <Button type="secondary" size="large">
                            View Property
                        </Button>
                    </Link>
                </div>
            </div>
        </PropertyCardWrapper>
    );
}

export default PropertyCard;
