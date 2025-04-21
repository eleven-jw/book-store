<script setup lang="ts">
import { useRouter } from 'vue-router'
import book6 from '@/assets/images/cover/6.jpg'
import type { Book, BookList } from '@/types/book'

defineProps<{
  todayRecommendations: BookList
}>()

const router = useRouter()
const handleClick = (book: Book) => {
  console.log('book', book)
  router.push({
    name: 'Detail',
    params: {
      id: book.id,
    },
  })
}
</script>

<template>
  <div class="wrapper recommendation-wrapper">
    <div class="title">Popular Reads</div>
    <div class="today-wrapper">
      <el-row :gutter="10">
        <el-col :span="8"><div>121212</div></el-col>
        <el-col :span="16">
          <el-row :gutter="10">
            <el-col :span="8"><img :src="book6" class="book-cover" /></el-col>
            <el-col :span="16">
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-row :gutter="10">
                    <el-col :span="12"><img :src="book6" class="book-cover" /></el-col>
                    <el-col :span="12"><img :src="book6" class="book-cover" /></el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12"><img :src="book6" class="book-cover" /></el-col>
                    <el-col :span="12"><img :src="book6" class="book-cover" /></el-col>
                  </el-row>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style>
.today-wrapper {
  width: 60rem;
  margin: 3rem auto;
}
.book-cover {
  width: 5rem;
  height: 7rem;
  transition: transform 0.3s;
  cursor: pointer;
}

.big {
  width: 10rem;
  height: 14rem;
}

.middle {
  width: 8rem;
  height: 10rem;
  transition: transform 0.3s;
  cursor: pointer;
}

.book-cover:hover,
.middle:hover {
  transform: scale(1.05);
}

.title {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 800;
  font-size: 1.375rem;
  text-align: center;
}
.new-release-col {
  text-align: center;
}
.new-release-col-name {
  font-weight: 500;
}
</style>
