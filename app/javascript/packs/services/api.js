import axios from 'axios'

const TOKEN = document.querySelector("meta[name='csrf-token']").content

axios.defaults.headers.common['X-CSRF-Token'] = TOKEN
axios.defaults.headers.common['Accept'] = 'application/json'

const API = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 5000
})

export default API
