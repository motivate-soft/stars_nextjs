import React from "react";
import { NextSeo } from "next-seo";
import {
  NEXTSEO_DEFAULT_SITE_URL,
  NEXTSEO_DEFAULT_DESCRIPTION,
  NEXTSEO_DEFAULT_TITLE,
} from "../../next-seo.config";

export default function CustomHead(props) {
  const { meta, currentUrl } = props;

  const SEO = {
    title: meta.title ? meta.title : NEXTSEO_DEFAULT_TITLE,
    description: meta.description
      ? meta.description
      : NEXTSEO_DEFAULT_DESCRIPTION,
    openGraph: {
      type: getTagValue(meta.og_tags, "type") ?? "website",
      title: getTagValue(meta.og_tags, "title") ?? NEXTSEO_DEFAULT_TITLE,
      description:
        getTagValue(meta.og_tags, "description") ?? NEXTSEO_DEFAULT_DESCRIPTION,
      url:
        getTagValue(meta.og_tags, "url") ??
        `${NEXTSEO_DEFAULT_SITE_URL}${currentUrl}`,
      images: [
        {
          url:
            getTagValue(meta.og_tags, "image_url") ??
            "https://www.example.ie/og-image.jpg",
          width: getTagValue(meta.og_tags, "image_width") ?? 800,
          height: getTagValue(meta.og_tags, "image_height") ?? 600,
          alt: getTagValue(meta.og_tags, "image_alt") ?? "Starsofboston",
        },
      ],
    },
    additionalMetaTags: meta.meta_tags ?? [],
  };

  function getTagValue(array, fieldName) {
    try {
      if (!array) return null;
      const arr = array.filter((item) => item.name === fieldName);
      if (arr.length > 0) {
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
