import axios from'axios'

// create and export a connector to API
export default () => {
    return axios.create({
        // baseURL: 'http://localhost:3000'
        baseURL: 'https://api-orftarquua-uw.a.run.app'
    })
}