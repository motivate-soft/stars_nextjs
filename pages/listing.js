import Head from "next/head";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import { BACKEND_URL } from "../env-config";
import PropertyListing from "@components/Guest/Listing/PropertyListing";
import qs from "query-string";

export default function PropertyListingPage(props) {
  const { properties, categories } = props;
  return (
    <>
      <Head>
        <title>Property Listing | Stars of Boston</title>
      </Head>
      <GuestLayout>
        <PropertyListing
          items={properties}
          categories={categories}
        />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps({ query }) {
  console.log("listing:getServerSideProps:query", query);

  let properties, categories;

  //   let queryString = "";
  //   for (let key in query) {
  //     if (queryString !== "") {
  //       queryString += "&";
  //     }
  //     queryString += key + "=" + encodeURIComponent(query[key]);
  //   }

  try {
    const res = await fetch(
      `${BACKEND_URL}/api/accommodation/property/listing?${qs.stringify(query)}`
    );
    properties = await res.json();
    console.log("listing:getServerSideProps:properties:success", properties);
  } catch (error) {
    console.log("listing:getServerSideProps:properties:error", error);
    properties = [];
  }

  try {
    categories = await fetch(`${BACKEND_URL}/api/accommodation/category/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw Error("Server error");
    });
  } catch (e) {
    categories = [];
  }

  return {
    props: { properties, categories },
  };
}
