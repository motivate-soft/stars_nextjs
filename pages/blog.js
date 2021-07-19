import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import BlogList from "@components/Guest/Blog";
import postApi from "../service/postApi";
import metaApi from "./../service/metaApi";

export default function BlogPage(props) {
  const { posts, meta, currentUrl } = props;
  return (
    <>
      <CustomHead meta={meta} currentUrl={currentUrl} />
      <GuestLayout>
        <BlogList />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { resolvedUrl, query } = context;
  console.log("getServerSideProps", resolvedUrl, query);
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
