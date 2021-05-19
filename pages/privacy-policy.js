import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import PrivacyPolicy from "@components/Guest/Other/PrivacyPolicy";
import postApi from "../service/postApi";

export default function PrivacyPolicyPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <GuestLayout>
                <PrivacyPolicy posts={posts}/>
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
