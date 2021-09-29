export function getLocaleNode(query, locale) {
  const res = query.edges.find(({ node }) => node.locale === locale);
  if(!res) {
    const { node } = query.edges.find(({ node }) => node.locale === 'en');
    return node
  } else {
    return res.node
  }
}