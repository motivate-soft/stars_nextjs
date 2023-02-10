import React from "react";
import { BACKEND_URL } from "../../env-config";
import GuestLayout from "@containers/Guest/GuestLayout/GuestLayout";
import metaApi from "../../service/metaApi";
import { useRouter } from "next/router";
import SubPage from "@components/Guest/Industries/SubPage";

// const componentsMap = {
//   Medical
// };

export default function PropertyDetailPage(props) {
  const { meta, currentUrl } = props;

  const capitalize = (s) => {
    if (s) return s[0].toUpperCase() + s.slice(1);
    else return "";
  };

  const router = useRouter();
  const { tab } = router.query;

  // const renderComponent = () => {
  //   const SubComponent = componentsMap[capitalize(tab)];
  //   return <SubComponent/>
  // }
  
  return (
    <>
      <GuestLayout>
        {/* {renderComponent()} */}
        <SubPage tab={tab}/>
      </GuestLayout>
    </>
  );
}


export async function getServerSideProps(context) {
    const { resolvedUrl, query } = context;
    let pageSlug;
    if (resolvedUrl == "/") {
      pageSlug = "home";
    } else {
      const array = resolvedUrl.split("/");
      pageSlug = array[array.length - 1];
    }
  
    let meta;
  
    try {
      meta = await metaApi.getOne(pageSlug);
    } catch (error) {
      console.log("fetchMetatags:Error", error);
      meta = [];
    }
  
    return {
      props: {
        currentUrl: resolvedUrl,
        meta,
      },
    };
  }
  