export const CONFIG_TABLE_LIST = [
  {
    prop: 'sid',
    label: '序号',
    render({ $index }: { $index: number }) {
      return <span>{$index + 1}</span>
    },
    width: 80,
    fixed: 'left',
  },
  { prop: 'title', width: 150, label: 'Title' },
  { prop: 'price', label: 'Prioce' },
]
