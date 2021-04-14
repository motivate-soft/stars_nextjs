import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import CheckoutReview from "@components/Guest/Checkout/CheckoutReview";

export default function CheckoutReviewPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Checkout Review</title>
            </Head>
            <GuestLayout>
                <CheckoutReview posts={posts}/>
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

