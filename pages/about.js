import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import About from "@components/Guest/About/About";
import postApi from "../service/postApi";

export default function AboutPage(props) {
  const { posts } = props;
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <GuestLayout>
        <About posts={posts} />
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
