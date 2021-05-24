import CustomHead from "@components/Guest/CustomHead";
import GuestLayout from "../containers/Guest/GuestLayout/GuestLayout";
import { BACKEND_URL } from "../env-config";
import PropertyListing from "@components/Guest/Listing/PropertyListing";
import qs from "query-string";
import metaApi from "../service/metaApi";

export default function PropertyListingPage(props) {
  const { properties, categories, meta, currentUrl } = props;
  return (
    <>
      <CustomHead meta={meta} currentUrl={currentUrl} />
      <GuestLayout>
        <PropertyListing items={properties} categories={categories} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { resolvedUrl, query } = context;

  console.log("listing:getServerSideProps:query", query);

  let pageSlug, properties, categories, meta;

  if (resolvedUrl == "/") {
    pageSlug = "home";
  } else {
    const array = resolvedUrl.split("/");
    pageSlug = array[array.length - 1];
  }

  try {
    meta = await metaApi.getOne(pageSlug);
  } catch (error) {
    console.log("fetchMetatags:Error", error);
    meta = [];
  }

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
    props: { properties, categories, currentUrl: resolvedUrl, meta },
  };
}
