<template>
  <div class="wrapper detail-wrappper">
    <div><img class="book-image" width="450" height="450" :src="coverUrl" /></div>
    <div class="book-detail">
      <span class="detail-title">{{ bookDetail.title }}</span>
      <span class="detail-author">Written By: {{ bookDetail.author }}</span>
      <span class="detail-price">Suprised Price: {{ bookDetail.price }} $</span>
      <span class="detail-availableStock">Now we have: {{ bookDetail.availableStock }}</span>

      <div class="footer">
        <el-input-number class="counter" v-model="count" :min="0" :max="maxCount" />
        <el-button
          class="add-button"
          type="primary"
          @click="handleAdd(bookDetail)"
          :disabled="disabled"
        >
          ADD TO CART
        </el-button>
        <el-button class="add-button" type="primary" @click="handleBuy(bookDetail.id)">
          BUY NOW
        </el-button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { fetchBookDetailFn, purchaseBookFn } from './api/api.ts'
import type { Book } from '@/types/common.ts'
import { ElMessage } from 'element-plus'

const route = useRoute()
const bookId = route.params.id
const coverUrl = route.query.url
console.log('bookId', bookId)
console.log('coverUrl', coverUrl)
const bookDetail = ref<Book>({
  id: 0,
  title: '',
  author: '',
  isbn: '',
  price: 0,
  availableStock: 0,
  url: '',
})
const getBookDetail = async () => {
  try {
    const { book } = await fetchBookDetailFn(Number(bookId))
    console.log('book:', book)
    bookDetail.value = book
    console.log('获取图书详情成功:', bookDetail.value)
    maxCount.value = bookDetail.value.availableStock
  } catch (error) {
    console.error('获取图书详情失败:', error)
  }
}

const count = ref(0)
const maxCount = ref(0)
const disabled = ref(false)
const router = useRouter()
const handleAdd = (bookDetail: Book) => {
  router.push({
    name: 'Cart',
    params: {
      bookDetail: JSON.stringify(bookDetail),
    },
  })
}

const handleBuy = async (id: number) => {
  try {
    const { book, message } = await purchaseBookFn(id)
    if (book) {
      ElMessage({
        message: message,
        type: 'success',
      })
    } else {
      ElMessage({
        message: message,
        type: 'error',
      })
    }
  } catch {
    ElMessage({
      message: 'purchase fail',
      type: 'error',
    })
  }
}
onMounted(() => {
  getBookDetail()
})
</script>
<style scoped>
.detail-wrappper {
  display: flex;
}
.book-detail {
  display: flex;
  flex-direction: column;
  margin-left: 2.5rem;
}
.detail-title {
  font-size: 2rem;
  font-weight: 800;
  color: #333333;
}
.detail-author {
  font-size: 1.25rem;
  line-height: 1, 5rem;
  color: #666666;
}

.footer {
  margin-top: 1.25rem;
}
.counter {
  margin-right: 1.25rem;
}
.add-button {
  /* font-size: 1rem; */
  height: 2rem;
}
</style>
