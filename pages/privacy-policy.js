import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import PrivacyPolicy from "@components/Guest/Other/PrivacyPolicy";

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

export async function getStaticProps() {
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    };
}

