import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import BlogList from "@components/Guest/Blog/BlogList/BlogList";

export default function BlogPage(props) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <GuestLayout>
        <BlogList />
      </GuestLayout>
    </>
  );
}

// export async function getStaticProps() {
//   return;
// }
