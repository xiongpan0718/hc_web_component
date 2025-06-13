export interface HcTableColumn {
  key: string
  title: string
  visible: boolean
  locked: boolean
}

export interface HcTablePageSizeOption {
  title: string
  value: number
}

export interface HcTableProps {
  total?: number
  count?: number
  columns?: HcTableColumn[]
  items?: any[]
  dataPagesizeOptions?: HcTablePageSizeOption[]
}

export interface HcTableEmits {
  'update:showColumns': (columns: HcTableColumn[]) => void
  'update:page': (page: number) => void
  'update:pageSize': (pageSize: number) => void
}

declare const HcTable: import('vue').DefineComponent<HcTableProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, HcTableEmits>

export { HcTable }
export default HcTable 