<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import type { Book, BookList } from '@/types/common'

defineProps<{
  bannerList: BookList
}>()

const emit = defineEmits(['handleClick'])
const handleClick = (book: Book) => {
  emit('handleClick', book)
}
</script>

<template>
  <div class="wrapper banner-wrapper">
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="book in bannerList" :key="book.id">
        <div @click="handleClick(book)">
          <img :src="book.url" style="width: 100%; height: 100%" />
          <span>{{ book.title }}</span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
.el-carousel {
  --el-carousel-arrow-font-size: 12px;
  --el-carousel-arrow-size: 36px;
  --el-carousel-arrow-background: #eddede;
  --el-carousel-arrow-hover-background: #a85a5a;
  --el-carousel-indicator-width: 80px;
  --el-carousel-indicator-height: 2px;
  --el-carousel-indicator-padding-horizontal: 4px;
  --el-carousel-indicator-padding-vertical: 12px;
  --el-carousel-indicator-out-color: #a85a5a;
}
</style>
