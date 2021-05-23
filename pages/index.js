import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Home from "@components/Guest/Home";
import postApi from "../service/postApi";
import metaApi from "./../service/metaApi";

export default function HomePage(props) {
  const { posts, meta, properties } = props;
  console.log("HomePage:props", meta);
  return (
    <>
      <Head>
        <title>
          Stars of Boston: Your Short Term Apartment Rental Solution! | Stars of
          Boston
        </title>
      </Head>
      <GuestLayout>
        <Home posts={posts} properties={properties} />
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
  }

  return {
    props: {
      posts,
      meta,
    },
  };
}
