import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import ApplicationForm from "@components/Guest/ApplicationForm/ApplicationForm";
import postApi from "../service/postApi";

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

export async function getServerSideProps() {
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
