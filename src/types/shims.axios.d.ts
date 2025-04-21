import { AxiosRequestConfig } from 'axios'
// AxiosRequestConfig 扩展属性
declare module 'axios' {
  export interface AxiosRequestConfig {
    extra?: {
      /** loading */
      loading?: boolean
      /** handle raw data */
      handleRequestDataBySelf?: boolean
      handleResponseDataByself?: boolean
      showErrorToast?: boolean // show error toast or not
    }
  }
}
