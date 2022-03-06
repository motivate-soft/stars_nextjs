import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import CheckoutForm from "@components/Guest/Checkout/CheckoutForm";
import postApi from "../service/postApi";
import metaApi from "../service/metaApi";
import { BACKEND_URL, PAYPAL_CLIENT_ID } from "env-config";

export default function CheckoutFormPage(props) {
    const { posts, meta, currentUrl } = props;
    return (
        <>
            <CustomHead meta={meta} currentUrl={currentUrl} />
            <GuestLayout>
                <CheckoutForm posts={posts} clientID={props.clientID} clientToken={props.clientToken} />
            </GuestLayout>
        </>
    );
}

export async function getServerSideProps(context) {
    const { resolvedUrl, query } = context;
    console.log("getServerSideProps", resolvedUrl, query);
    let pageSlug;
    if (resolvedUrl == "/") {
        pageSlug = "home";
    } else {
        const array = resolvedUrl.split("/");
        pageSlug = array[array.length - 1];
    }

    let posts, meta;

    try {
        posts = await postApi.getAll();
    } catch (error) {
        console.log("fetchPosts:Error", error);
        posts = [];
    }

    try {
        meta = await metaApi.getOne(pageSlug);
    } catch (error) {
        console.log("fetchMetatags:Error", error);
        meta = [];
    }

    // get paypal client token
    let clientToken;
    try {
        const res = await fetch(
            `${BACKEND_URL}/api/accommodation/booking/token`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            }
        );
        const data = await res.json();
        clientToken = data.client_token;

        console.log(`fetchClientToken :>> data`, data)
    } catch (error) {
        console.log(`fetchClientToken :>> data`, error)
    }


    return {
        props: {
            currentUrl: resolvedUrl,
            posts,
            meta,
            clientToken,
            clientID: PAYPAL_CLIENT_ID
        },
    };
}
