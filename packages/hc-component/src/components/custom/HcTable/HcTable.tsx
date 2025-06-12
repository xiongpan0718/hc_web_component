import { computed, ref, defineComponent } from 'vue'
import { HcTableToolBar } from './HcTableToolBar'
import { Header } from './types'
import './HcTable.scss'

export const HcTable = defineComponent({
  name: 'HcTable',
  inheritAttrs: false,
  props: {
    showToolbar: {
      type: Boolean,
      default: true
    },
    showPagination: {
      type: Boolean,
      default: true
    }
  },
  emits: ['update:headers', 'update:items-per-page', 'update:page'],
  setup(props, { emit, slots, attrs }) {
    const localHeaders = ref<Header[]>((attrs.headers as Header[] || []).map(header => ({
      ...header,
    })))

    const visibleHeaders = computed(() => localHeaders.value.filter((col: Header) => !col.hide))

    const page = ref(1)
    const itemsPerPage = ref(10)
    const itemsPerPageOptions = computed(() => attrs['items-per-page-options'] || [10, 20, 50, 100])

    const pageCount = computed(() => {
      const itemsLength = Number(attrs['items-length']) || 0
      if (!itemsPerPage.value) return 0
      return Math.ceil(itemsLength / itemsPerPage.value)
    })

    const handleItemsPerPageChange = (value: number) => {
      emit('update:items-per-page', value)
    }

    const handlePageChange = (value: number) => {
      emit('update:page', value)
    }

    return () => (
      <div>
        {props.showToolbar && (
          <HcTableToolBar 
            headers={localHeaders.value}
            onUpdate:headers={(val) => {
              localHeaders.value = val
              emit('update:headers', val)
            }}
          >
            {{
              'toolbar-left': slots['toolbar-left'],
              'toolbar-right': slots['toolbar-right']
            }}
          </HcTableToolBar>
        )}
        <v-data-table-server
          {...attrs}
          headers={visibleHeaders.value}
          hideDefaultFooter={!props.showPagination}
        >
          {{
            ...Object.fromEntries(
              Object.entries(slots).map(([name, slot]) => [
                name,
                (slotData: any) => slot?.(slotData)
              ])
            ),
            bottom: props.showPagination ? () => (
              <div class="pagination-content">
                <div class="pagination-content-left">
                  <label class="pagination-content-left-label" for="items-per-page">
                    Items per page
                  </label>
                  <v-select
                    id="items-per-page"
                    v-model={itemsPerPage.value}
                    items={itemsPerPageOptions.value}
                    density="compact"
                    maxWidth={100}
                    hideDetails
                    onUpdate:modelValue={handleItemsPerPageChange}
                    menuIcon="keyboard_arrow_down"
                    variant="outlined"
                  />
                </div>
                <div class="pagination-content-right">
                  <v-pagination
                    v-model={page.value}
                    class="pagination-content-right-pagination"
                    length={pageCount.value}
                    onUpdate:modelValue={handlePageChange}
                  />
                </div>
              </div>
            ) : undefined
          }}
        </v-data-table-server>
      </div>
    )
  }
})
