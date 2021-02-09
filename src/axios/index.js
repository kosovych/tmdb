import axios from 'axios'
import { API_URL, API_KEY } from 'Constants'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  params: {
    api_key: API_KEY
  }
})

export default instance
