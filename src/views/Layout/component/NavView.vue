<script setup lang="ts">
import { defineEmits } from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter()
const emit = defineEmits(['showLoginView'])
const handleContact = () => {
  console.log('CONTACT')
}
const handleAbout = () => {
  console.log('About')
}
const handleRegister = () => {
  console.log('register')
}
const handleSignIn = () => {
  console.log('showLoginView')
  emit('showLoginView')
}
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }
</script>

<template>
  <el-row :gutter="20" class="nav-wrapper">
    <el-col :span="16"></el-col>
    <el-col :span="8">
      <div style="display: flex; justify-content: space-between">
        <div style="color: white">
          <!-- <img :src="logo" style="width: 1rem; height: 1rem" /> -->
          <div class="nav-content" @click="handleContact">Contact Us</div>
        </div>
        <div style="color: white">
          <!-- <img :src="logo" style="width: 1rem; height: 1rem" /> -->
          <div class="nav-content" @click="handleAbout">About Us</div>
        </div>
        <div style="color: white; display: flex">
          <div class="nav-content register" @click="handleRegister">Register</div>
          <div class="nav-content">|</div>
          <div class="nav-content sign" @click="handleSignIn">Sign</div>
          <!-- <el-link target="_blank" :underline="false" @click="handleRegister">Register</el-link>
          |
          <el-link target="_blank" :underline="false" @click="handleSignIn">Sign in</el-link> -->
        </div>
      </div>
      <!-- <el-menu
        class="el-menu-demo"
        mode="horizontal"
        style="background-color: black; text-color: white"
        @select="handleSelect"
      >
        <el-menu-item index="1">About Us</el-menu-item>
        <el-menu-item index="1">Contact Us</el-menu-item>
        <el-menu-item index="3">Sign in</el-menu-item>
        <el-menu-item index="4">Register</el-menu-item>
      </el-menu> -->
    </el-col>
  </el-row>
</template>

<style scoped>
.nav-wrapper {
  height: 2rem;
  background-color: black;
}
.nav-content {
  line-height: 2rem;
}
.sign {
  padding: 0 1.25rem 0 0.65rem;
}
.register {
  padding-right: 0.65rem;
}
</style>
