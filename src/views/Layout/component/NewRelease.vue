<script setup lang="ts">
import type { Book, BookList } from '@/types/common'

defineProps<{
  newRelease: BookList
}>()

const emit = defineEmits(['handleClick'])
const handleClick = (book: Book) => {
  emit('handleClick', book)
}
</script>

<template>
  <div class="wrapper recommendation-wrapper">
    <div class="title">New Releases</div>
    <div class="today-wrapper">
      <el-row :gutter="10">
        <el-col
          :span="6"
          v-for="book in newRelease"
          :key="book"
          class="new-release-col"
          @click="handleClick(book)"
        >
          <img :src="book.url" class="middle" />
          <div class="new-release-col-name">{{ book.title }}</div>
          <div>{{ book.author }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<style scoped>
.today-wrapper {
  width: 60rem;
  margin: 3rem auto;
}

.middle {
  width: 8rem;
  height: 10rem;
  transition: transform 0.3s;
  cursor: pointer;
}

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
