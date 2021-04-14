import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import PropertyListing from "@components/Guest/Listing/PropertyListing";

export default function PropertyListingPage(props) {
    const {properties, categories} = props
    return (
        <>
            <Head>
                <title>Property Listing | Stars of Boston</title>
            </Head>
            <GuestLayout>
                <PropertyListing items={properties} categories={categories}/>
            </GuestLayout>
        </>
    );
}

export async function getServerSideProps(context) {
    let properties, categories
    let res = await fetch(`${BACKEND_URL}/api/accommodation/property/listing`);
    properties = await res.json()
    res = await fetch(`${BACKEND_URL}/api/accommodation/category/`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
    categories = await res.json()
    return {
        props: {properties, categories},
    };
}
