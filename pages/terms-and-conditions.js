import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import Terms from "@components/Guest/Other/Terms";

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
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    };
}

