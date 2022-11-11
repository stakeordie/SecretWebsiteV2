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
