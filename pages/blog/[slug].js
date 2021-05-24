import React from "react";
import { BACKEND_URL } from "../../env-config";
import Head from "next/head";
import GuestLayout from "@containers/Guest/GuestLayout/GuestLayout";
import BlogDetail from "@components/Guest/Blog/SingleBlog/BlogDetail";
import BlogPageHead from "../../components/Guest/BlogPageHead";

export default function BlogDetailPage(props) {
  const { blog, meta, currentUrl } = props;

  return (
    <>
      <BlogPageHead meta={meta} blog={blog} currentUrl={currentUrl} />
      <GuestLayout>
        <BlogDetail blog={blog} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { resolvedUrl, query } = context;
  let pageSlug, blog, meta;

  if (resolvedUrl == "/") {
    pageSlug = "home";
  } else {
    const array = resolvedUrl.split("/");
    pageSlug = array[array.length - 1];
  }

  try {
    meta = await metaApi.getOne(pageSlug);
  } catch (error) {
    console.log("fetchMetatags:Error", error);
    meta = [];
  }

  try {
    const res = await fetch(
      `${BACKEND_URL}/api/blog/post/listing/${query.slug}`
    );
    blog = await res.json();
  } catch (error) {
    console.log("fetchMetaBlog:Error", error);
  }

  return {
    props: { currentUrl: resolvedUrl, blog, meta },
  };
}
