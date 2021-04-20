import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Locations from "@components/Guest/Locations/Locations";
import postApi from "../service/postApi";

export default function LocationsPage(props) {
    const {posts} = props
    return (
        <>
            <Head>
                <title>Locations | Starsofboston</title>
            </Head>
            <GuestLayout>
                <Locations posts={posts}/>
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

