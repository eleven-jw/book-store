<script setup lang="ts">
import Nav from '@/views/Layout/component/NavView.vue'
import Header from '@/views/Layout/component/HeaderView.vue'
import Banner from '@/views/Layout/component/BannerView.vue'
import Recommendation from '@/views/Layout/component/RecommendationView.vue'
import NewRelease from '@/views/Layout/component/NewRelease.vue'
import PopularReads from '@/views/Layout/component/PopularReads.vue'
import Footer from '@/views/Layout/component/FooterView.vue'
import Login from '@/views/Layout/component/LoginView.vue'
import { ref, onMounted } from 'vue'
import { fetchBookListFun } from './api/api.ts'
import type { Book, User } from '@/types/common.ts'
import bookCover1 from '@/assets/images/cover/1.jpg'
import bookCover2 from '@/assets/images/cover/2.jpg'
import bookCover3 from '@/assets/images/cover/3.jpg'
import bookCover4 from '@/assets/images/cover/4.jpg'
import bookCover5 from '@/assets/images/cover/5.jpg'
import bookCover6 from '@/assets/images/cover/6.jpg'
import bookCover7 from '@/assets/images/cover/7.jpg'
import bookCover8 from '@/assets/images/cover/8.jpg'
import bookCover9 from '@/assets/images/cover/9.jpg'
import defaultCover from '@/assets/images/cover/11.jpg'
import { useUserStore } from '@/stores/user'
onMounted(async () => {
  await fetchBookList()

  if (bookList.value.length) {
    getBannerList()
    getRecommendations()
    getRelease()
    getPopularList()
  }
})

const createImageMap = () => {
  // // 静态导入图片（Vite 模式）
  // const imageModules = import.meta.glob('@/assets/images/cover/*.webp')
  // const staticMap = Object.entries(imageModules).reduce(
  //   (acc, [path, module]) => {
  //     const num = parseInt(path.match(/cover(\d+)\.webp/)?.[1] || 0)
  //     acc[num] = module.default
  //     return acc
  //   },
  //   {} as Record<string, string>,
  // )

  // return new Map(
  //   Array.from({ length: bookList.value.length }, (_, i) => [
  //     i,
  //     staticMap[i] || '/default-banner.webp',
  //   ]),
  // )

  const imageModules = import.meta.glob('@/assets/images/cover/*.webp')
  console.log('imageModules', imageModules)

  const iamgeMap = {
    1: bookCover1,
    2: bookCover2,
    3: bookCover3,
    4: bookCover4,
    5: bookCover5,
    6: bookCover6,
    7: bookCover7,
    8: bookCover8,
    9: bookCover9,
  }
  return iamgeMap
}

const bookList = ref<Book[]>([])
const newMap = createImageMap()
const loading = ref(true)
const fetchBookList = async () => {
  const res = await fetchBookListFun()
  loading.value = false
  bookList.value = res.books || []
  if (bookList.value.length) {
    bookList.value = bookList.value.map((book: Book, index: number) => {
      return {
        ...book,
        url: newMap[index + 1] ? newMap[index + 1] : defaultCover,
      }
    })
  }
  console.log('bookList', bookList.value)
}

const bannerList = ref<Book[]>([])
const getBannerList = () => {
  if (bookList.value.length < 3) {
    bannerList.value = bookList.value.slice(0, bookList.value.length)
  } else {
    bannerList.value = bookList.value.slice(0, 2)
  }

  console.log('bannerList', bannerList.value)
}

const recommendationList = ref<Book[]>([])
const getRecommendations = () => {
  if (bookList.value.length < 3 && bookList.value.length < 8) {
    recommendationList.value = bookList.value.slice(2, 7)
  } else {
    recommendationList.value = bookList.value.slice(2, bookList.value.length)
  }
}

const popularList = ref<Book[]>([])
const getPopularList = () => {
  popularList.value = bookList.value.slice(11)
}
const newReleaseList = ref<Book[]>([])
const getRelease = () => {
  newReleaseList.value = bookList.value.slice(7, 11)
}

const visible = ref(false)
const handleConfirm = (userInfo: User) => {
  //  to store the userName and password
  const store = useUserStore()
  store.login(userInfo)
}
const handleDialogClose = () => {
  visible.value = false
}
const showLoginView = () => {
  visible.value = !visible.value
}
</script>

<template>
  <!-- <Suspense>
    <template #default> -->
  <div style="position: relative">
    <Nav @showLoginView="showLoginView"></Nav>
    <Header></Header>
    <!-- <Empty></Empty> -->
    <div v-loading="loading">
      <Banner :bannerList="bannerList"></Banner>
      <Recommendation :todayRecommendations="recommendationList"></Recommendation>
      <NewRelease :newRelease="newReleaseList"></NewRelease>
      <PopularReads :popularReads="popularList"></PopularReads>
    </div>

    <Footer></Footer>
    <Login
      class="login-view"
      :dialog-visible="visible"
      @confirm="handleConfirm"
      @close="handleDialogClose"
    ></Login>
  </div>

  <!-- </template>
  </Suspense> -->
</template>

<style>
.login-view {
  position: absolute;
  right: 0;
  top: 2rem;
}
</style>
