<script setup lang="ts">
import logo from '@/assets/images/logo.png'
import Table from '@/components/TableView.vue'
import { CONFIG_TABLE_LIST } from './TABLE_COLUMN_LIST'

const data = []
</script>

<template>
  <div>
    <img :src="logo" />
  </div>

  <section>
    <div>全部书籍</div>
    <Table :data="data" :table-column="CONFIG_TABLE_LIST"> </Table>
  </section>
</template>

<style scoped></style>
