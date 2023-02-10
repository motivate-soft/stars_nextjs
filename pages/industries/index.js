import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../../containers/Guest/GuestLayout/GuestLayout";
import { BACKEND_URL } from "../../env-config";
import Industries from "@components/Guest/Industries";
import postApi from "../../service/postApi";
import metaApi from "../../service/metaApi";

export default function IndustriesPage(props) {
  const { posts, meta, currentUrl } = props;
  return (
    <>
      <CustomHead meta={meta} currentUrl={currentUrl} />
      <GuestLayout>
        <Industries />
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
