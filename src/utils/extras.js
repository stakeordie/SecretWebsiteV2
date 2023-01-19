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

export function addScrollSmooth(to) {
  if (typeof document === "undefined") return;
  if (!to.hash) {
    const html = document.querySelector("html");
    html.style.scrollBehavior = "auto";
    setTimeout(() => (html.style.scrollBehavior = "smooth"), 1000);
  }
}
