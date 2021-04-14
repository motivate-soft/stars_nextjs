import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import Locations from "@components/Guest/Locations/Locations";

export default function LocationsPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Locations | Starsofboston</title>
            </Head>
            <GuestLayout>
                <Locations posts={posts}/>
            </GuestLayout>
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    };
}

