import Head from "next/head";
import BlogList from "@components/Guest/Blog/BlogList/BlogList";
import GuestLayout from "@containers/Guest/GuestLayout/GuestLayout";
import { BACKEND_URL } from "../../../env-config";

export default function TaggedBlogPage(props) {
  const { tag } = props;
  return (
    <>
      <Head>
        <title>Tagged Blog</title>
      </Head>
      <GuestLayout>
        <BlogList tag={tag} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { query } = context;
  let tag;
  try {
    const res = await fetch(`${BACKEND_URL}/api/blog/tag/${query.slug}`);
    tag = await res.json();
  } catch (error) {
    tag = null;
    console.log("error", error);
  }

  return {
    props: { tag },
  };
}
