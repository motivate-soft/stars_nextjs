import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import Home from "@components/Guest/Home";
import postApi from "../service/postApi";
import metaApi from "../service/metaApi";
import companyApi from "../service/companyApi";

export default function HomePage(props) {
  const { posts, meta, companies, currentUrl } = props;
  return (
    <>
      <CustomHead meta={meta} currentUrl={currentUrl} />
      <GuestLayout>
        <Home posts={posts} companies={companies} />
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

  let posts, meta, companies;

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

  try {
    companies = await companyApi.getAll();
  } catch (error) {
    console.log("fetchCompanyLogos:Error", error);
    meta = [];
  }

  return {
    props: {
      currentUrl: resolvedUrl,
      posts,
      meta,
      companies,
    },
  };
}
