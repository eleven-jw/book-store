<script setup lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { ref, watch } from 'vue'

import { withDefaults, defineProps, defineEmits } from 'vue'

const props = withDefaults(defineProps<{ dialogVisible: boolean }>(), {
  dialogVisible: false,
})

const localVisible = ref(props.dialogVisible)
watch(
  () => props.dialogVisible,
  (newValue) => {
    localVisible.value = newValue
    if (!newValue) resetForm()
  },
)
const emit = defineEmits(['close', 'update:visible', 'cancel', 'confirm'])
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
    { min: 6, message: 'Length should at least 6', trigger: 'blur' },
  ],
})

const resetForm = () => {
  formRef.value?.resetFields()
}
const handleClose = () => {
  emit('update:visible', false)
  emit('close')
}
const handleConfirm = async () => {
  await formRef.value?.validate()
  emit('confirm', { ...form.value })
  handleClose()
}
const handleCancel = () => {
  resetForm()
  handleClose()
}
</script>

<template>
  <div class="login-wrapper">
    <el-dialog
      v-model="localVisible"
      title="Login"
      width="20%"
      :close-on-click-modal="true"
      :before-close="handleClose"
    >
      <template #default>
        <el-form :model="form" ref="formRef" :rules="rules">
          <el-form-item prop="name" label="Username:">
            <el-input v-model="form.name" placeholder="Please input UserName"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="Password:">
            <el-input
              v-model="form.password"
              type="password"
              placeholder="Please input password"
            ></el-input>
          </el-form-item>
        </el-form>
      </template>

      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleCancel">cancel</el-button>
          <el-button type="primary" @click="handleConfirm">confirm</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style></style>
