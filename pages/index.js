import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Home from "@components/Guest/Home";
import postApi from "../service/postApi";

export default function HomePage(props) {
    const {posts, properties} = props
    return (
        <>
            <Head>
                <title>Stars of Boston: Your Short Term Apartment Rental Solution! | Stars of Boston</title>
            </Head>
            <GuestLayout>
                <Home posts={posts} properties={properties}/>
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



