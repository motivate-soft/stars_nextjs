import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import CheckoutReview from "@components/Guest/Checkout/CheckoutReview";
import postApi from "../service/postApi";

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

