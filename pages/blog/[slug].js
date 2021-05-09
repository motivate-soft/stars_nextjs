import React from "react";
import { BACKEND_URL } from "../../env-config";
import Head from "next/head";
import GuestLayout from "@containers/Guest/GuestLayout/GuestLayout";
import BlogDetail from "@components/Guest/Blog/SingleBlog/BlogDetail";

export default function BlogDetailPage({ blog, query }) {
  const pageTitle =
    query.slug.split("-").join(" ").charAt(0).toUpperCase() +
    query.slug.split("-").join(" ").slice(1);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <GuestLayout>
        <BlogDetail blog={blog} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { req, query } = context;

  const res = await fetch(`${BACKEND_URL}/api/blog/post/listing/${query.slug}`);
  const blog = await res.json();

  console.log("BlogDetail", query, blog);
  return {
    props: { blog, query },
  };
}
