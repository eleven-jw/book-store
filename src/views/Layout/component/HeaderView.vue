<style>
.header-wrapper {
  display: flex;
  justify-content: space-between;
  height: 8rem;
  line-height: 8rem;
}

.header-left {
  font:
    Red Hat Text,
    sans-serif;
  font-size: 2rem;
}
.header-middle {
  width: 43rem;
}
.header-middle {
  color: black;
}
.el-input {
  --el-input-text-color: var(--vt-c-black);
  --el-input-border: var(--vt-c-black);
  --el-input-hover-border: var(--el-border-color-hover);
  --el-input-focus-border: var(--vt-c-black);
  --el-input-focus-border-color: var(--vt-c-black);
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const searchContent = ref('')
</script>

<template>
  <div class="wrapper header-wrapper">
    <div class="header-left">
      <img src="@/assets/images/logo.png" />
      Eleven Book Store
    </div>
    <div class="header-middle">
      <el-input
        v-model="searchContent"
        style="max-width: 600px"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #prepend>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
    <!-- <div class="header-right" @click="handleClick">
      <img src="@/assets/images/cart.png" />
      购物车 {{ total }}
    </div> -->
  </div>
</template>
