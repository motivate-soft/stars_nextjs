import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { SITE_URL, BACKEND_URL } from "env-config";

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`${BACKEND_URL}/api/accommodation/property/listing`);
  const properties = await res.json();

  const fields = properties.map((property) => ({
    loc: `${SITE_URL}/listing/${property.slug}`, // Absolute url
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default () => {};
