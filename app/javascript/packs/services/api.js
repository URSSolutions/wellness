import axios from 'axios'

const ENV = process.env.NODE_ENV
const URL = ENV === 'production' ? 'https://wellness-plataform.herokuapp.com/' : 'http://localhost:5000/'

const TOKEN = document.querySelector("meta[name='csrf-token']").content

axios.defaults.headers.common['X-CSRF-Token'] = TOKEN
axios.defaults.headers.common['Accept'] = 'application/json'

const API = axios.create({
  baseURL: URL,
  timeout: 30000
})

export default API
