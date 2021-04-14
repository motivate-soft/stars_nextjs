import React from 'react';
import SearchForm from './SearchForm';
import {SearchWrapper} from './Search.style';
import Container from "@iso/ui/UI/Container/Container";
import Link from 'next/link';
import {FaAsterisk} from "react-icons/fa";

const ListingPageSearch = () => {
    return (
        <Container className="d-flex h-100">
            <SearchWrapper>
                <SearchForm/>
                <p><FaAsterisk/> Please <Link href="/contact">contact us</Link> for the best available price if you want
                    to book for a month or more.</p>
                <p><FaAsterisk/> Our pricing is seasonal and subject to change.</p>
            </SearchWrapper>
        </Container>
    );
};

export default ListingPageSearch;
