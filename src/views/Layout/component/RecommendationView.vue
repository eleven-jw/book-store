<script setup lang="ts">
import { useRouter } from 'vue-router'
import type { Book, BookList } from '@/types/common'

defineProps<{
  todayRecommendations: BookList
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
    <div class="title">Today's Recommendations</div>
    <div class="today-wrapper">
      <el-row :gutter="10">
        <el-col :span="8">
          <div>
            The child who is decked with prince's robes and who has jewelled chains round his neck
            loses all pleasure in his play; his dress hampers him at every step.
            <div style="text-align: right">——Rabindranath Tagore</div>
          </div>
        </el-col>
        <el-col :span="16">
          <el-row :gutter="10">
            <el-col :span="8" @click="handleClick(todayRecommendations[0])">
              <img :src="todayRecommendations[0]?.url" class="book-cover big" />
            </el-col>
            <el-col :span="16">
              <el-row :gutter="10">
                <el-col :span="12">
                  <el-row :gutter="10">
                    <el-col :span="12" @click="handleClick(todayRecommendations[1])">
                      <img :src="todayRecommendations[1]?.url" class="book-cover" />
                    </el-col>
                    <el-col :span="12" @click="handleClick(todayRecommendations[2])">
                      <img :src="todayRecommendations[2]?.url" class="book-cover" />
                    </el-col>
                  </el-row>
                  <el-row :gutter="10">
                    <el-col :span="12" @click="handleClick(todayRecommendations[3])">
                      <img :src="todayRecommendations[3]?.url" class="book-cover" />
                    </el-col>
                    <el-col :span="12" @click="handleClick(todayRecommendations[4])">
                      <img :src="todayRecommendations[4]?.url" class="book-cover" />
                    </el-col>
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
</style>
