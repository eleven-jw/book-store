<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ref } from 'vue'

// import { defineProps } from 'vue'

// defineProps<{
//   bannerList: BookList
// }>()
const form = ref({
  name: '',
  password: '',
})
const formRef = ref<FormInstance>()
const rules = ref<FormRules>({
  name: [
    { required: true, message: 'Please input name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please input password',
      trigger: 'change',
    },
  ],
})
const handleLogin = () => {
  // to validator
  //  to store the userName and password
}
</script>

<template>
  <div class="login-wrapper">
    <el-card style="max-width: 30rem">
      <template #header>
        <div class="card-header">
          <span>Login</span>
        </div>
      </template>

      <el-form ref="formRef" :model="form" label-width="auto" :rules="rules">
        <el-form-item label="UserName">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Password">
          <el-input v-model="form.password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">Create</el-button>
          <el-button>Cancel</el-button>
        </el-form-item>
      </el-form>
      <!-- <template #footer>Footer content</template> -->
    </el-card>
  </div>
</template>

<style></style>
