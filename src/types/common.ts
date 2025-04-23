export interface Book {
  id: number
  author: string
  availableStock: number
  isbn: string
  price: number
  title: string
  url: string
}
export interface BookList {
  bookList: Book[]
}
export interface User {
  name: string
  password: string
}
