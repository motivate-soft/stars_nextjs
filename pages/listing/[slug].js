import React from "react";
import { BACKEND_URL } from "../../env-config";
import GuestLayout from "@containers/Guest/GuestLayout/GuestLayout";
import PropertyDetail from "@components/Guest/Property/PropertyDetail";
import PropertyPageHead from "./../../components/Guest/PropertyPageHead";

export default function PropertyDetailPage(props) {
  const { property, meta, currentUrl } = props;

  return (
    <>
      <PropertyPageHead
        meta={meta}
        property={property}
        currentUrl={currentUrl}
      />
      <GuestLayout>
        <PropertyDetail property={property} />
      </GuestLayout>
    </>
  );
}

export async function getServerSideProps(context) {
  const { resolvedUrl, query } = context;

  let pageSlug, property, meta;

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

  try {
    const res = await fetch(
      `${BACKEND_URL}/api/accommodation/property/listing/${query.slug}`
    );
    property = await res.json();
  } catch (error) {
    console.log("fetchProperty:Error", error);
    property = null;
  }

  return {
    props: {
      currentUrl: resolvedUrl,
      property,
      meta,
    },
  };
}
