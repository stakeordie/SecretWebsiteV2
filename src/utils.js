export function getLocaleData(query, locale) {
  let data = query.edges[0].node;
  let localizedData;
  if (!data.localizations) {
    return data;
  } else {
    localizedData = data.localizations.find((it) => it.locale === locale);
  }
  if (!localizedData) {
    return data;
  } else {
    return {
      ...data,
      ...localizedData,
    };
  }
}

export function removeCharacters(string) {
  return string
    .replace(/\s+/g, "-")
    .replace(/[^-A-Za-z0-9]+/g, "")
    .toLowerCase();
}

export const sizes = {
  none: "none",
  small: "small",
  medium: "medium",
  large: "large",
};

export function uppercaseAllFirstLetter(string) {
  return string
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function learnPortalMetaData(page, context) {
  const description =
    "Blockchain-based and open-source protocol that lets anyone perform computations on encrypted data, bringing privacy to smart contracts and public blockchains.";
  const defaultImage = "https://scrt.network/cover.png";
  const currentRoute = context.route;
  const paths = currentRoute.split("/");
  const title = uppercaseAllFirstLetter(
    paths[paths.length - 1].replace(/-+/g, " ")
  );

  const data = page.strapiPages.edges
    .map(({ node }) => node)
    .find((item) => item.route === currentRoute);

  if (data) {
    return {
      route: data.route ? data.route : currentRoute,
      title: data.og_title ? data.og_title : title,
      description: data.meta_description ? data.meta_description : description,
      ogDescription: data.og_description ? data.og_description : description,
      ogImage: data.og_image ? data.og_image.url : defaultImage,
    };
  }

  return {
    route: currentRoute,
    title,
    description,
    ogDescription: description,
    ogImage: defaultImage,
  };
}

export function metaDataArray(metaData) {
  return [
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:image",
      content: metaData.ogImage,
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
    {
      key: "description",
      property: "description",
      content: metaData.description,
    },
    {
      name: "description",
      content: metaData.description,
    },
  ];
}

export function addScrollSmooth(to) {
  if (!to.hash) {
    const html = document.querySelector("html");
    html.style.scrollBehavior = "auto";
    setTimeout(() => (html.style.scrollBehavior = "smooth"), 1000);
  }
}
