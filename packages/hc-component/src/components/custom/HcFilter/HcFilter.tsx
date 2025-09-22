import { defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import './HcFilter.scss'

export const HcFilter = defineComponent({
  name: 'HcFilter',
  props: {
    isExpand: {
      type: Boolean,
      default: false,
    },
    backgroundColor: {
      type: String,
      default: '#F2F2F2',
    },
  },
  emits: ['reset', 'search'],
  setup (props, { emit, slots }) {
    const { t } = useI18n()
    const columnCount = ref(4)
    const filterContainerRef = ref<HTMLElement>()
    let resizeObserver: ResizeObserver | null = null

    // 根据宽度设置列数的函数
    const updateColumnCount = (width: number) => {
      if (width >= 1000) {
        columnCount.value = 4
      } else if (width > 500) {
        columnCount.value = 3
      } else {
        columnCount.value = 2
      }
    }
    const handleReset = () => {
      emit('reset')
    }

    const handleSearch = () => {
      emit('search')
    }

    // 设置 ResizeObserver
    onMounted(() => {
      if (filterContainerRef.value) {
        resizeObserver = new ResizeObserver(entries => {
          for (const entry of entries) {
            const { width } = entry.contentRect
            updateColumnCount(width)
          }
        })
        resizeObserver.observe(filterContainerRef.value)

        // 初始化时也设置一次列数
        const initialWidth = filterContainerRef.value.offsetWidth
        updateColumnCount(initialWidth)
      }
    })

    // 清理 ResizeObserver
    onUnmounted(() => {
      if (resizeObserver) {
        resizeObserver.disconnect()
        resizeObserver = null
      }
    })

    return () => (
      <v-expansion-panels eager model-value={ props.isExpand ? 0 : undefined } class="hc-filter">
        <v-expansion-panel title={ t('common.filter') } style={{ backgroundColor: props.backgroundColor }}>
          <v-expansion-panel-text>
            <div
              ref={ filterContainerRef }
              class="filter-container"
              style={{ gridTemplateColumns: `repeat(${columnCount.value}, 1fr)` }}
            >
              { slots['filter-input']?.() }
            </div>
            <div class="filter-btns">
              <v-btn
                size="small"
                append-icon="replay"
                variant="outlined"
                onClick={ handleReset }
              >
                { t('public.resetting') }
              </v-btn>
              <v-btn
                size="small"
                append-icon="search"
                onClick={ handleSearch }
              >
                { t('common.filterResults') }
              </v-btn>
            </div>
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    )
  },
})
