import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import CookiePolicy from "@components/Guest/Other/CookiePolicy";
import postApi from "../service/postApi";

export default function CookiePolicyPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Cookie policy</title>
            </Head>
            <GuestLayout>
                <CookiePolicy posts={posts}/>
            </GuestLayout>
        </>
    );
}

export async function getServerSideProps() {
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
