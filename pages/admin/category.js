import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import CategoryList from "@containers/../../components/Admin/Category/CategoryList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleCategory from "@containers/../../components/Admin/Category/SingleCategory";

const getCategoryId = (props) => {
  try {
    const { router } = props;
    return {
      categoryId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { categoryId, redirectPath } = getCategoryId(props);

    return (
      <>
        <Head>
          <title>Category listing</title>
        </Head>
        <DashboardLayout>
          {categoryId ? (
            <SingleCategory
              categoryId={categoryId}
              redirectPath={redirectPath}
            />
          ) : (
            <CategoryList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
