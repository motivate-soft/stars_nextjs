import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import Medical from "@components/Guest/Medical/Medical";
import postApi from "../service/postApi";

export default function MedicalPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Medical | Starsofboston</title>
            </Head>
            <GuestLayout>
                <Medical posts={posts}/>
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
