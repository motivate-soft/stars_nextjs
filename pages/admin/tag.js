import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import TagList from "@components/Admin/Tag/TagList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleTag from "@components/Admin/Tag/SingleTag";

const getTagId = (props) => {
  try {
    const { router } = props;
    return {
      tagId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { tagId, redirectPath } = getTagId(props);

    return (
      <>
        <Head>
          <title>Tag listing</title>
        </Head>
        <DashboardLayout>
          {tagId ? (
            <SingleTag tagId={tagId} redirectPath={redirectPath} />
          ) : (
            <TagList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
