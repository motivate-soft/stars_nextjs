import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import BlogList from "@components/Admin/Blog/BlogList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleBlog from "@components/Admin/Blog/SingleBlog";

const getBlogId = (props) => {
  try {
    const { router } = props;
    return {
      blogId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { blogId, redirectPath } = getBlogId(props);

    return (
      <>
        <Head>
          <title>Blog listing</title>
        </Head>
        <DashboardLayout>
            <SingleBlog blogId={blogId} redirectPath={redirectPath} />

          {/*  {blogId ? (*/}
          {/*  <SingleBlog blogId={blogId} redirectPath={redirectPath} />*/}
          {/*) : (*/}
          {/*  <BlogList />*/}
          {/*)}*/}
        </DashboardLayout>
      </>
    );
  })
);
