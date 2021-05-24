import React from "react";
import { NextSeo } from "next-seo";
import { NEXTSEO_DEFAULT_SITE_URL } from "../../next-seo.config";

export default function PropertyPageHead(props) {
  const { meta, property, currentUrl } = props;

  const SEO = {
    title: meta.title ? meta.title : property.title,
    description: meta.description ? meta.description : property.title,
    openGraph: {
      type: getTagValue(meta.og_tags, "type") ?? "website",
      title: getTagValue(meta.og_tags, "title") ?? property.title,
      description: getTagValue(meta.og_tags, "description") ?? property.title,
      url:
        getTagValue(meta.og_tags, "url") ??
        `${NEXTSEO_DEFAULT_SITE_URL}${currentUrl}`,
      images: [
        {
          url:
            getTagValue(meta.og_tags, "image_url") ??
            property.featured_img.file,
          width: getTagValue(meta.og_tags, "image_width") ?? 2048,
          height: getTagValue(meta.og_tags, "image_height") ?? 1365,
          alt: getTagValue(meta.og_tags, "image_alt") ?? property.title,
        },
      ],
    },
    additionalMetaTags: meta.meta_tags ?? [],
  };

  function getTagValue(array, fieldName) {
    try {
      const arr = array.filter((item) => item.name === fieldName);
      console.log("getTagValue", array, fieldName, arr);
      if (arr.length > 0) {
        console.log("getTagValue", arr[0]["content"]);
        return arr[0]["content"];
      }
    } catch (error) {
      console.log("error", error);
      return null;
    }
  }

  return (
    <NextSeo
      openGraph={{
        type: "website",
        url: "https://www.example.com/page",
        title: "Starsofboston",
        description: "Open Graph Description",
      }}
      {...SEO}
    />
  );
}
