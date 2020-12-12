import axios from 'axios'
import { API_URL } from '../constants'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

export default instance
