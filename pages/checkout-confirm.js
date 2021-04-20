import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import CheckoutConfirm from "@components/Guest/Checkout/CheckoutConfirm";
import postApi from "../service/postApi";

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


