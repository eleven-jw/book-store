import request from '@/apis/request'
import type MyResponse from '@/types/globle'
import type { Book } from '@/types/common'

export function fetchBookListFun(): Promise<MyResponse<Book[]>> {
  return request({
    method: 'GET',
    extra: {
      loading: false,
    },
  })
}
