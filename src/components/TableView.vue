<script setup lang="ts">
interface Column {
  prop: string
  label: string
  width?: number
  fixed?: string
  render?: (index: number) => string
}
defineProps<{
  data: {
    type: Array<Column>
  }
  tableColumn: {
    type: Array<Column>
  }
}>()
</script>

<template>
  <el-table :data="data" style="width: 100%">
    <template v-for="column in tableColumn">
      <el-table-column v-if="column.render" :key="column.prop" v-bind="column">
        <template #default="scope">
          <component :is="column.render(scope)" />
        </template>
      </el-table-column>
      <el-table-column v-else :key="column.prop" v-bind="column" />
    </template>
    <el-table-column label="操作" key="console" min-width="100px" fixed="right">
      <template #default="scope">
        <slot v-bind="scope"></slot>
      </template>
    </el-table-column>
  </el-table>
</template>
