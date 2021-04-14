import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import Checkout from "@components/Guest/Checkout/Checkout";

export default function QuickBookPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Checkout Page</title>
            </Head>
            <GuestLayout>
                <Checkout posts={posts}/>
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

