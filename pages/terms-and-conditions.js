import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Terms from "@components/Guest/Other/Terms";
import postApi from "../service/postApi";

export default function TermsPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Terms and Conditions</title>
            </Head>
            <GuestLayout>
                <Terms posts={posts}/>
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
