import type MyResponse from '@/types/globle'
import axios from 'axios'
import { ElMessage } from 'element-plus'
const API_URL = import.meta.env.VITE_API_URL

const service = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  },
  baseURL: API_URL + 'books/',
  timeout: 10000,
  method: 'POST',
})

service.interceptors.request.use(
  (config) => {
    console.log('config', config)
    const { extra = {}, data = {} } = config
    // 组件loading
    if (extra.loading !== false) {
      // todo
    }
    if (extra.handleRequestDataBySelf === true) {
      return config
    }

    config.headers = config.headers || {}
    config.data = data
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  (response: MyResponse) => {
    console.log('response', response)
    const {
      config: { extra = {} },
      data,
      message,
      status,
    } = response
    if (extra.loading !== false) {
      // close()
    }
    if (extra.handleResponseDataByself) {
      return response
    }
    if (status === 200) {
      return response.data
    }

    if (extra.showErrorToast !== false) {
      ElMessage({
        message: message,
        type: 'error',
      })
    }
    return Promise.reject(data)
  },
  (error) => {
    // close()
    const {
      config: { extra = {} },
    } = error
    if (extra.showErrorToast !== false) {
      ElMessage({
        message: error,
        type: 'error',
      })
    }
    return Promise.reject(error)
  },
)

export default service
