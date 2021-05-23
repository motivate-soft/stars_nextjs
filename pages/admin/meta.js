import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import MetaList from "@components/Admin/Meta/MetaList";
import SingleMeta from "@components/Admin/Meta/SingleMeta";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";

const getMetaSlug = (props) => {
  try {
    const { router } = props;
    return {
      slug: router.query.slug,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { slug, redirectPath } = getMetaSlug(props);

    return (
      <>
        <Head>
          <title>Meta listing</title>
        </Head>
        <DashboardLayout>
          {slug ? (
            <SingleMeta slug={slug} redirectPath={redirectPath} />
          ) : (
            <MetaList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
