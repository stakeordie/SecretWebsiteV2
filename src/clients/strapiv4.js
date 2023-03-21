const axios = require("axios");
const apiUrl = process.env.GRIDSOME_STRAPI_URL;

const managePromise = (promise) => {
  return new Promise((resolve, reject) => {
    promise
      .then((response) => resolve(response.data))
      .catch((error) => {
        reject(error.response ? error.response.data : error);
      });
  });
};

module.exports = {
  allStrapiDynamicPage() {
    const url = `${apiUrl}/api/dynamic-page-sets?populate=deep`;
    return managePromise(axios.get(url));
  },
  getDynamicPage(name) {
    const url = `${apiUrl}/api/${name}?populate=deep&pagination[limit]=-1`
    return managePromise(axios.get(url));
  },
};
