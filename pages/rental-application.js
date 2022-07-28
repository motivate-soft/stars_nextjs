import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import ApplicationForm from "@components/Guest/ApplicationForm";
import postApi from "../service/postApi";
import metaApi from "../service/metaApi";

export default function RentalApplicationPage(props) {
  const { posts, meta, currentUrl } = props;
  return (
    <>
      <CustomHead meta={meta} currentUrl={currentUrl} />
      <GuestLayout>
        <ApplicationForm posts={posts} />
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

  let posts, meta;

  try {
    posts = await postApi.getAll();
  } catch (error) {
    console.log("fetchPosts:Error", error);
    posts = [];
  }

  try {
    meta = await metaApi.getOne(pageSlug);
  } catch (error) {
    console.log("fetchMetatags:Error", error);
    meta = [];
  }

  return {
    props: {
      currentUrl: resolvedUrl,
      posts,
      meta,
    },
  };
}
