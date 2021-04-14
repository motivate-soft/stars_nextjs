import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import Medical from "@components/Guest/Medical/Medical";

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
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    };
}

