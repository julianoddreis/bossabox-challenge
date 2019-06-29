import axios from 'axios'

export const __API__ = 'http://localhost:3000'

const defaultOptions = {
  baseURL: __API__
}

const instance = axios.create(defaultOptions)

export default instance
