<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Book, BookList } from '@/types/book'

defineProps<{
  popularReads: BookList
}>()

const router = useRouter()
const handleClick = (book: Book) => {
  router.push({
    name: 'Detail',
    params: { id: book.id.toString() },
    query: { url: book.url },
  })
}
</script>

<template>
  <div class="wrapper recommendation-wrapper">
    <div class="title">Popular Reads</div>
    <div class="today-wrapper">
      <el-table :data="popularReads" style="width: 100%" :show-header="false">
        <el-table-column prop="url" label="=Url" width="180">
          <template #default="scope">
            <img :src="scope.row.url" class="book-cover" @click="handleClick(scope.row)" />
          </template>
        </el-table-column>
        <el-table-column prop="title" label="Title" width="180" />
        <el-table-column prop="author" label="Author" />
      </el-table>
    </div>
  </div>
</template>

<style scoped>
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

.book-cover:hover {
  transform: scale(1.05);
}

.title {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-weight: 800;
  font-size: 1.375rem;
  text-align: center;
}
</style>
