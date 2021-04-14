import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import CookiePolicy from "@components/Guest/Other/CookiePolicy";

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

export async function getStaticProps() {
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    };
}

