<script setup lang="ts">
import { defineEmits } from 'vue'
import Avatar from '@/assets/images/avatar.jpg'
import { useUserStore } from '@/stores/user'

const store = useUserStore()
const emit = defineEmits(['showLoginView'])
const handleContact = () => {
  console.log('CONTACT')
}
const handleAbout = () => {
  console.log('About')
}

const handleSignIn = () => {
  console.log('showLoginView')
  emit('showLoginView')
}
const handleLogout = () => {
  store.logout()
}
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
          <!-- <div class="nav-content register" @click="handleRegister">Register</div>
          <div class="nav-content">|</div> -->
          <div v-if="store.userInfo.name.length" class="nav-content sign">
            <img width="25" height="25" class="avatar" :src="Avatar" />
            <el-popover class="box-item" placement="bottom">
              <div @click="handleLogout">Logout</div>
              <template #reference>
                <span>{{ store.userInfo.name }}</span>
              </template>
            </el-popover>
          </div>
          <div v-else class="nav-content sign" @click="handleSignIn">Sign</div>
        </div>
      </div>
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.sign {
  padding: 0 1.25rem 0 0.65rem;
}
.register {
  padding-right: 0.65rem;
}
.avatar {
  border-radius: 50%;
  margin-right: 0.5rem;
}
</style>
