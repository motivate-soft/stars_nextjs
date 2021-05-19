import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Checkout from "@components/Guest/Checkout/Checkout";
import postApi from "../service/postApi";

export default function CheckoutPage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Checkout Page</title>
      </Head>
      <GuestLayout>
        <Checkout posts={posts} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps() {
  let posts;

  try {
    posts = await postApi.getAll();
  } catch (e) {
    console.log("fetchPostsError", e);
    posts = [];
  }

  return {
    props: {
      posts,
    },
  };
}
