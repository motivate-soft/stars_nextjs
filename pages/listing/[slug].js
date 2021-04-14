import React from 'react'
import {BACKEND_URL} from "../../env-config";
import Head from "next/head";
import GuestLayout from "@containers/Guest/GuestLayout/GuestLayout";
import PropertyDetail from "@components/Guest/Property/PropertyDetail";

export default function PropertyDetailPage({property, query}) {
    const pageTitle =
        query.slug.split("-").join(" ").charAt(0).toUpperCase() +
        query.slug.split("-").join(" ").slice(1);

    return (
        <>
            <Head>
                <title>{pageTitle} | Starsofboston</title>
            </Head>
            <GuestLayout>
                <PropertyDetail property={property}/>
            </GuestLayout>
        </>
    )
}

export async function getServerSideProps(context) {
    const {req, query} = context;

    const res = await fetch(`${BACKEND_URL}/api/accommodation/property/listing/${query.slug}`);
    const property = await res.json()
    console.log("PropertyDetail",query, property)
    return {
        props: {property, query},
    };
}