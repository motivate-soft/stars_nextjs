import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import CancellationPolicy from "@components/Guest/Other/CancellationPolicy";

export default function CancellationPolicyPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Cancellation</title>
            </Head>
            <GuestLayout>
                <CancellationPolicy posts={posts}/>
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

