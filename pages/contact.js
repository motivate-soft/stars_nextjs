import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import Contact from "@components/Guest/Contact/Contact";

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
    const response = await fetch(`${BACKEND_URL}/api/content/`)
    const posts = await response.json()
    return {
        props: {
            posts,
        },
    };
}

