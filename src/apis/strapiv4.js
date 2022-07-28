const axios = require('axios')

const apiUrl = process.env.GRIDSOME_STRAPI_URL

const managePromise = (promise) => {
    return new Promise((resolve, reject) => {
        promise
            .then(response => resolve(response.data))
            .catch(error => {
                reject(error.response ? error.response.data : error)
            })
    })
}

module.exports = {
    allStrapiDynamicPage() {
        return managePromise(axios.get(`${apiUrl}/api/dynamic-pages?populate=deep`))
    },
    getDynamicPage(name) {
        return managePromise(axios.get(`${apiUrl}/api/${name}?populate=deep`))
    }
}
