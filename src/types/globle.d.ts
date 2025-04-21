import { AxiosResponse } from 'axios'

// 扩展 AxiosResponse，添加自定义字段（如 message）
interface MyResponse<T = any> extends AxiosResponse {
  message?: string // 自定义字段（根据后端实际返回结构调整）
  status?: number
  data: T // 实际业务数据
}

export default MyResponse
