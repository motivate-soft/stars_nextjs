import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import CheckoutConfirm from "@components/Guest/Checkout/CheckoutConfirm";

export default function CheckoutConfirmPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Checkout Confirm</title>
            </Head>
            <GuestLayout>
                <CheckoutConfirm posts={posts}/>
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

