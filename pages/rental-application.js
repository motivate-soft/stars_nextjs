import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import ApplicationForm from "@components/Guest/ApplicationForm/ApplicationForm";

export default function RentalApplicationPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Rental Application</title>
            </Head>
            <GuestLayout>
                <ApplicationForm posts={posts}/>
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

