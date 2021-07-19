import React from "react";
import Head from "next/head";
import DashboardLayout from "../../containers/Admin/DashboardLayout/DashboardLayout";
import CompanyList from "@components/Admin/Company/CompanyList";
import { withRouter } from "next/router";
import { withAuthSync } from "@redux/authentication/auth.utils";
import SingleCompany from "@components/Admin/Company/SingleCompany";

const getCompanyId = (props) => {
  try {
    const { router } = props;
    return {
      companyId: router.query.id,
      redirectPath: router.pathname,
    };
  } catch (e) {}
};

export default withRouter(
  withAuthSync((props) => {
    let { companyId, redirectPath } = getCompanyId(props);

    return (
      <>
        <Head>
          <title>Company listing</title>
        </Head>
        <DashboardLayout>
          {companyId ? (
            <SingleCompany companyId={companyId} redirectPath={redirectPath} />
          ) : (
            <CompanyList />
          )}
        </DashboardLayout>
      </>
    );
  })
);
