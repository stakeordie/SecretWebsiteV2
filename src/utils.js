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
