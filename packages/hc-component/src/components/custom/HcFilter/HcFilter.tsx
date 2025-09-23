import { defineComponent } from 'vue'
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

    const handleReset = () => {
      emit('reset')
    }

    const handleSearch = () => {
      emit('search')
    }

    return () => (
      <v-expansion-panels eager model-value={ props.isExpand ? 0 : undefined } class="hc-filter">
        <v-expansion-panel title={ t('common.filter') } style={{ backgroundColor: props.backgroundColor }}>
          <v-expansion-panel-text>
            <div class="filter-container">
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
