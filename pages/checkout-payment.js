import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import CheckoutPayment from "@components/Guest/Checkout/CheckoutPayment";
import postApi from "../service/postApi";

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
    let posts;

    try {
        posts = await postApi.getAll()
    } catch (e) {
        console.log("fetchPostsError", e)
        posts = [];
    }

    return {
        props: {
            posts,
        },
    };
}
