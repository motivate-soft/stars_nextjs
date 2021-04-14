import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import PostList from "@containers/../../components/Admin/Post/PostList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SinglePost from "@containers/../../components/Admin/Post/SinglePost";

const getPostId = (props) => {
  try {
    const { router } = props;
    return {
      postId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { postId, redirectPath } = getPostId(props);

    return (
      <>
        <Head>
          <title>Post listing</title>
        </Head>
        <DashboardLayout>
          {postId ? (
            <SinglePost postId={postId} redirectPath={redirectPath} />
          ) : (
            <PostList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
