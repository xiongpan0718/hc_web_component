import { defineComponent, ref, watch } from 'vue'
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
    /** When true, show expand/collapse button to toggle filter-input slot / 为 true 时显示展开/收起按钮 */
    allowCollapse: {
      type: Boolean,
      default: false,
    },
    /** Number of rows to show when collapsed (default 1) / 收起时显示的行数（默认 1） */
    collapseRows: {
      type: Number,
      default: 1,
    },
    /** Initial collapsed state when allowCollapse is true (default true = collapsed) / allowCollapse 为 true 时的初始收起状态（默认 true = 收起） */
    defaultCollapsed: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['reset', 'search', 'update:isExpand'],
  setup (props, { emit, slots }) {
    const { t } = useI18n()

    const internalExpand = ref(props.isExpand)
    const slotCollapsed = ref(props.defaultCollapsed)

    watch(() => props.isExpand, (newValue) => {
      internalExpand.value = newValue
    })

    const handleReset = () => {
      emit('reset')
    }

    const handleSearch = () => {
      emit('search')
    }

    const handleUpdateModelValue = (value: any) => {
      const isExpanded = value !== undefined && value !== null
      internalExpand.value = isExpanded
      emit('update:isExpand', isExpanded)
    }

    const toggleSlotCollapse = () => {
      slotCollapsed.value = !slotCollapsed.value
    }

    return () => (
      <v-expansion-panels
        eager
        model-value={ internalExpand.value ? 0 : undefined }
        onUpdate:modelValue={ handleUpdateModelValue }
        class="hc-filter"
        data-testid="hc-filter-panels-container"
      >
        <v-expansion-panel title={ t('common.filter') } style={{ backgroundColor: props.backgroundColor }}
          data-testid="hc-filter-panel-main"
        >
          <v-expansion-panel-text
            data-testid="hc-filter-section-content"
          >
            <div
              class={ ['filter-container', props.allowCollapse && slotCollapsed.value && 'hc-filter--slot-collapsed'] }
              style={ props.allowCollapse && slotCollapsed.value ? { '--hc-filter-collapse-rows': props.collapseRows } as any : undefined }
              data-testid="hc-filter-section-input"
            >
              { slots['filter-input']?.() }
            </div>
            <div class="filter-btns"
              data-testid="hc-filter-section-actions"
            >
              { props.allowCollapse && (
                <v-btn
                  class="expand-collapse-btn"
                  prepend-icon={ slotCollapsed.value ? 'expand_more' : 'expand_less' }
                  variant="plain"
                  color="primary"
                  onClick={ toggleSlotCollapse }
                  data-testid="hc-filter-button-expand-collapse"
                >
                  { slotCollapsed.value ? t('public.expandExtraFields') : t('public.collapseExtraFields') }
                </v-btn>
              ) }
              <v-btn
                prepend-icon="replay"
                variant="outlined"
                onClick={ handleReset }
                data-testid="hc-filter-button-reset"
              >
                { t('public.resetting') }
              </v-btn>
              <v-btn
                prepend-icon="search"
                onClick={ handleSearch }
                data-testid="hc-filter-button-search"
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
