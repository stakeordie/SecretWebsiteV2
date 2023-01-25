import { removeLastSlash } from "./text";

export const pageMetaData = (page, path) => {
  const domain = "https://scrt.network";
  const description =
    "Blockchain-based and open-source protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains.";
  const fullPath = domain + removeLastSlash(path);
  const data = page.strapiPages.edges
    .map(({ node }) => node)
    .find((item) => item.route === path || item.route === path.slice(0, -1));

  const result = {
    domain,
    url: fullPath,
    title: "Secret Network",
    description,
    ogDescription: description,
    ogImage: "https://scrt.network/cover.png",
    canonicalUrl: fullPath,
  };

  if (data) {
    if (data.og_title) result.title = data.og_title;
    if (data.meta_description) result.description = data.meta_description;
    if (data.og_description) result.ogDescription = data.og_description;
    if (data.og_image) result.ogImage = data.og_image.url;
    if (data.canonical_url) result.canonicalUrl = data.canonical_url;
  }

  return result;
};

export const metaDataArray = (metaData) => [
  {
    key: "description",
    property: "description",
    name: "description",
    content: metaData.description,
  },
  //Facebook and other sites metadata
  {
    key: "og:url",
    property: "og:url",
    content: metaData.url,
  },
  {
    key: "og:type",
    property: "og:type",
    content: "website",
  },
  {
    key: "og:title",
    property: "og:title",
    content: metaData.title,
  },
  {
    key: "og:description",
    property: "og:description",
    content: metaData.ogDescription,
  },
  {
    key: "og:image",
    property: "og:image",
    content: metaData.ogImage,
  },
  //Twiter metadata
  {
    name: "twitter:card",
    content: "summary_large_image",
  },
  {
    property: "twitter:domain",
    content: metaData.domain,
  },
  {
    property: "twitter:url",
    content: metaData.url,
  },
  {
    name: "twitter:title",
    content: metaData.title,
  },
  {
    name: "twitter:description",
    content: metaData.ogDescription,
  },
  {
    name: "twitter:image",
    content: metaData.ogImage,
  },
];

export const canonicalTag = (metaData) => [
  {
    rel: "canonical",
    content: metaData.canonicalUrl,
  },
];
