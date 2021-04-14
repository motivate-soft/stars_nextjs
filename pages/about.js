import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import {BACKEND_URL} from "../env-config";
import About from "@components/Guest/About/About";

export default function AboutPage(props) {
  const {posts} = props
  return (
      <>
        <Head>
          <title>About</title>
        </Head>
        <GuestLayout>
          <About posts={posts}/>
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

