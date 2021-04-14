import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Home from "@components/guest/Home";
import {BACKEND_URL} from "../env-config";

export default function HomePage(props) {
    const {posts, properties} = props
    return (
        <>
            <Head>
                <title>Stars of Boston: Your Short Term Apartment Rental Solution! | Stars of Boston</title>
            </Head>
            <GuestLayout>
                <Home posts={posts} properties={properties}/>
            </GuestLayout>
        </>
    );
}

export async function getStaticProps() {
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    console.log("posts", posts)
    return {
        props: {
            posts,
        },
    };
}

