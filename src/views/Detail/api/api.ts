import request from '@/apis/request'

export function fetchBookDetailFn(bookId: number) {
  return request.get(`/${bookId}`, {
    extra: {
      showErrorToast: true, // 强制显示错误提示
    },
  })
}

export function purchaseBookFn(bookId: number) {
  return request.post(`/${bookId}/purchase`)
}
