import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import PropertyListing from "@components/Guest/Listing/PropertyListing";
import {useContext} from "react";
import {SearchContext} from "@context/SearchProvider";
// import qs from 'query-string';

export default function PropertyListingPage(props) {
    const {properties, categories, category} = props
    return (
        <>
            <Head>
                <title>Property Listing | Stars of Boston</title>
            </Head>
            <GuestLayout>
                <PropertyListing items={properties} categories={categories} category={category}/>
            </GuestLayout>
        </>
    );
}

export async function getServerSideProps({query}) {
    let queryString='', category, properties, categories;
    for (let key in query) {
        if (queryString !== '') {
            queryString += '&';
        }
        queryString += key + '=' + encodeURIComponent(query[key]);
    }
    try {
        // let res = await fetch(`${BACKEND_URL}/api/accommodation/property/listing?${qs.stringify(query)}`);
        properties =
            await fetch(`${BACKEND_URL}/api/accommodation/property/listing?${queryString}`)
                .then(res => {
                    if (res.ok) {
                        return res.json()
                    }
                    console.log("__res", res)
                    throw Error('Server error')
                })
                .catch(error => {
                    console.log("__err", error)
                    throw Error('Server error')
                });
    } catch (e) {
        properties = []
    }

    try {
        categories =
            await fetch(`${BACKEND_URL}/api/accommodation/category/`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
            }).then(res => {
                if (res.ok) {
                    return res.json()
                }
                throw Error('Server error')
            })
    } catch (e) {
        categories = []
    }

    category = query.category || null
    console.log("__BACKEND_URL__", BACKEND_URL)
    console.log("__propertyListing__", properties, categories, category)

    return {
        props: {properties, categories, category},
    };
}
