import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import CheckoutPayment from "@components/Guest/Checkout/CheckoutPayment";

export default function CheckoutPaymentPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Checkout Payment</title>
            </Head>
            <GuestLayout>
                <CheckoutPayment posts={posts}/>
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

