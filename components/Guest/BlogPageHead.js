import React from "react";
import { NextSeo } from "next-seo";
import { NEXTSEO_DEFAULT_SITE_URL } from "../../next-seo.config";

export default function BlogPageHead(props) {
  const { meta, blog, currentUrl } = props;

  const SEO = {
    title: meta.title ? meta.title : blog.title,
    description: meta.description ? meta.description : blog.title,
    openGraph: {
      type: getTagValue(meta.og_tags, "type") ?? "website",
      title: getTagValue(meta.og_tags, "title") ?? blog.title,
      description: getTagValue(meta.og_tags, "description") ?? blog.title,
      url:
        getTagValue(meta.og_tags, "url") ??
        `${NEXTSEO_DEFAULT_SITE_URL}${currentUrl}`,
      images: [
        {
          url: getTagValue(meta.og_tags, "image_url") ?? blog.image,
          width: getTagValue(meta.og_tags, "image_width") ?? 2048,
          height: getTagValue(meta.og_tags, "image_height") ?? 1365,
          alt: getTagValue(meta.og_tags, "image_alt") ?? blog.title,
        },
      ],
    },
    additionalMetaTags: meta.meta_tags ?? [],
  };

  function getTagValue(array, fieldName) {
    try {
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
