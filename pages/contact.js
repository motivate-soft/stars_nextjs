import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Contact from "@components/Guest/Contact/Contact";
import postApi from "../service/postApi";

export default function ContactPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <GuestLayout>
                <Contact posts={posts}/>
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
