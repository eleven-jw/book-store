import request from '@/apis/request'
import type { Book } from '@/types/book'
// import type MyResponse from '@/types/globle'

interface BookDetaiResponse {
  book: Book
}
export function fetchBookDetailFn(bookId: number): Promise<BookDetaiResponse> {
  return request.get(`/${bookId}`, {
    extra: {
      showErrorToast: true, // 强制显示错误提示
    },
  })
}

interface PurchaseResponse {
  book: Book
  message: string
}
export function purchaseBookFn(bookId: number): Promise<PurchaseResponse> {
  return request.post(`/${bookId}/purchase`)
}
