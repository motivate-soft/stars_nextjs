import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import CancellationPolicy from "@components/Guest/Other/CancellationPolicy";
import postApi from "../service/postApi";

export default function CancellationPolicyPage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>Cancellation</title>
      </Head>
      <GuestLayout>
        <CancellationPolicy posts={posts} />
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
