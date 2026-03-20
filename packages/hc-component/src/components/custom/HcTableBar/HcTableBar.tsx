import { ref, defineComponent, watch, toRef } from 'vue'
import { useI18n } from 'vue-i18n'
import './HcTableBar.scss'

interface ColumnItem {
	key: string
	title: string
	disabled?: boolean
}

export const HcTableBar = defineComponent({
	name: 'HcTableBar',
	props: {
		filterCount: {
			type: Number,
		},
		total: {
			type: Number,
		},
		columnList: {
			type: Array as () => ColumnItem[],
			default: () => [],
		},
		value: {
			type: Array as () => string[],
			default: () => [],
		},
		by_module: {
			type: String,
			default: 'table-bar',
		},
	},
	emits: ['update:value', 'setColumnCache'],
	setup(props, { emit, slots }) {
		const { t } = useI18n()
		const checkAll = ref(true)
		const indeterminate = ref(false)
		const showColumnList = ref<string[]>([])

		const stateValue = toRef(props, 'value')

		const onCheckAllChange = (checked: boolean) => {
			if (checked) {
				showColumnList.value = props.columnList.map(item => item.key)
				indeterminate.value = false
			} else {
				showColumnList.value = props.columnList.filter(item => item.disabled).map(item => item.key)
			}
			emit('setColumnCache', showColumnList.value)
		}

		const showColumnChange = () => {
			emit('setColumnCache', showColumnList.value)
		}

		const initCheckAll = () => {
			const allCheck = props.columnList.every(item => showColumnList.value.findIndex(i => i === item.key) !== -1)
			if (allCheck) {
				checkAll.value = true
				indeterminate.value = false
			} else if (showColumnList.value.length === 0) {
				checkAll.value = false
				indeterminate.value = false
			} else {
				indeterminate.value = true
			}
		}

		watch(stateValue, newValue => {
			showColumnList.value = newValue
		})

		watch(showColumnList, newValue => {
			emit('update:value', newValue)
			initCheckAll()
		})
		// 初始化时直接使用所有列
    if(stateValue.value && stateValue.value.length > 0) {
      showColumnList.value = [...stateValue.value]
    }else{
      showColumnList.value = props.columnList.map(item => item.key)
    }

		return () => (
			<div class="table-total-column-config"
				data-testid="hc-table-bar-container-main"
			>
				<div class="table-results"
					data-testid="hc-table-bar-section-results"
				>
					{ typeof props.filterCount === 'number' &&
						<div
							data-testid="hc-table-bar-text-filter-count"
						>
							{t("common.filterResults")}
							<span class="number">{props.filterCount}</span>
							{t("common.items")}
						</div>
					}
          { typeof props.total === 'number' && typeof props.filterCount === 'number' &&
            <div class="split-line-hr">
               <v-divider class="divider" thickness="1" vertical style="height:16px"
                data-testid="hc-table-bar-divider-separator"
               ></v-divider>
            </div>
          }
					{ typeof props.total === 'number' && (
						<div
							data-testid="hc-table-bar-text-total-count"
						>
							{t("common.total")}
							<span class="number">{props.total}</span>
							{t("common.items")}
						</div>
					)}
				</div>
				<div class="flex-1 text-right column-box"
					data-testid="hc-table-bar-section-column-config"
				>
					<div class="slot-columns-box">
						{slots.chooseColumns?.() || slots['choose-columns']?.() || <span>{t("tire.chooseColumns")}</span>}
					</div>
					<v-menu
						class="show-columns"
						location="bottom end"
						closeOnContentClick={false}
						data-testid="hc-table-bar-menu-column-selector"
						zIndex={2500}
						v-slots={{
							activator: ({ props: menuProps }: { props: any }) => (
								<v-btn
									{...menuProps}
									variant="text"
									size="small"
									class="show-columns-btn"
									data-testid="hc-table-bar-button-settings"
								>
									<v-icon color="#1A1A1A" icon="settings" size="20"
										data-testid="hc-table-bar-icon-settings"
									/>
								</v-btn>
							),
						}}
					>
						<v-card minWidth={200}
							data-testid="hc-table-bar-card-column-menu"
						>
							<v-card-text class="pa-3">
								<div style={{ height: '36px' }} class="flex items-center">
									<v-checkbox
										v-model={checkAll.value}
										indeterminate={indeterminate.value}
										onUpdate:modelValue={onCheckAllChange}
										density="compact"
										hideDetails
										data-testid="hc-table-bar-checkbox-select-all"
										v-slots={{
											label: () => <span>{t("public.all")}</span>,
										}}
									/>
								</div>
								{props.columnList.map(item => (
									<div key={item.key} class="flex items-center" style={{ height: '36px' }}>
										<v-checkbox
											v-model={showColumnList.value}
											value={item.key}
											disabled={item.disabled}
											onUpdate:modelValue={showColumnChange}
											density="compact"
											hideDetails
											data-testid={`hc-table-bar-checkbox-column-${item.key}`}
											v-slots={{
												label: () => <span>{item.title}</span>,
											}}
										/>
									</div>
								))}
							</v-card-text>
						</v-card>
					</v-menu>
				</div>
			</div>
		)
	},
})
