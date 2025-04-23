import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { User } from '@/types/common.ts'
import { USER_INFO_KEY } from '@/const'
export const useUserStore = defineStore('user', () => {
  const userInfo = ref({ ...getData() })
  function login(data: User) {
    userInfo.value.name = data.name
    userInfo.value.password = data.password
    localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo.value))
  }
  function logout() {
    userInfo.value = {
      name: '',
      password: '',
    }
    localStorage.removeItem(USER_INFO_KEY)
  }

  function getData() {
    const { name = '', password = '' } = JSON.parse(localStorage.getItem(USER_INFO_KEY) || '{}')
    return { name, password }
  }

  return { userInfo, login, logout }
})
