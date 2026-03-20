import { defineComponent, computed, ref, watch } from 'vue';
import { useDefaults } from 'vuetify';
import { useI18n } from 'vue-i18n';
import { VSwitch } from 'vuetify/components';
import { useFilter } from '@/composables/filter';
import { useItems } from '@/composables/list-items';
import { VAutocomplete } from '../../source/HcAutocomplete/VAutocomplete';
import './HcAutocomplete.scss';

interface HcAutocompleteProps {
  errorIcon?: string;
  autoErrorIcon?: boolean;
  /** When dropdown options exceed this value, only show first N items and display limitMessage at top / 超出此值时仅显示前 N 项并在顶部展示 limitMessage */
  maxDisplayItems?: number;
  /** Message shown at top of list when options are truncated / 选项被截断时在列表顶部显示的提示文案 */
  limitMessage?: string;
  /** When true, show advance search switch at bottom in both no-data and with-results states. Switch value supports v-model:advanceSearch / 为 true 时在无数据和有结果时底部均显示高级搜索开关，支持 v-model:advanceSearch */
  showAdvanceSearch?: boolean;
  /** Advance search switch value (v-model:advanceSearch) / 高级搜索开关值 (v-model:advanceSearch) */
  advanceSearch?: boolean;
  [key: string]: any; // Allow other VAutocomplete props / 允许其他 VAutocomplete 属性
}

export const HcAutocomplete = defineComponent({
  name: 'HcAutocomplete',
  inheritAttrs: false,
  props: {
    ...VAutocomplete.props,
    errorIcon: {
      type: String,
      default: 'error_outline',
    },
    autoErrorIcon: {
      type: Boolean,
      default: true,
    },
    maxDisplayItems: {
      type: Number,
      default: undefined,
    },
    limitMessage: {
      type: String,
      default: undefined,
    },
    showAdvanceSearch: {
      type: Boolean,
      default: false,
    },
    advanceSearch: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:modelValue', 'update:search', 'update:advanceSearch'],
  setup(_props: HcAutocompleteProps, { emit, expose }) {
    // Use useDefaults to support Vuetify defaults configuration / 使用 useDefaults 支持 Vuetify defaults 配置
    const props = useDefaults(_props, 'HcAutocomplete');
    const { t } = useI18n();

    const autocompleteRef = ref<InstanceType<typeof VAutocomplete>>();
    const internalModelValue = ref(props.modelValue);
    const searchRef = ref(props.search ?? '');
    const internalAdvanceSearch = ref(props.advanceSearch);

    // Sync search with props and emit / 同步 search 与 props 并向外 emit
    watch(() => props.search, (newVal) => {
      searchRef.value = newVal ?? '';
    });

    // Watch props.modelValue changes to sync with internal state / 监听 modelValue 变化以同步内部状态
    watch(() => props.modelValue, (newValue) => {
      internalModelValue.value = newValue;
    });

    // Sync advanceSearch with props / 同步 advanceSearch 与 props
    watch(() => props.advanceSearch, (newVal) => {
      internalAdvanceSearch.value = newVal;
    });

    const handleUpdateAdvanceSearch = (value: boolean) => {
      internalAdvanceSearch.value = value;
      emit('update:advanceSearch', value);
    };

    const handleUpdateSearch = (value: string) => {
      searchRef.value = value;
      emit('update:search', value);
    };

    // When maxDisplayItems is set, filter and limit items in HcAutocomplete / 当设置 maxDisplayItems 时，在 HcAutocomplete 内过滤并限制选项数量
    const { items } = useItems(props as any);
    const { filteredItems } = useFilter(
      props as any,
      items,
      () => searchRef.value,
    );

    const limitedItems = computed(() => {
      const max = props.maxDisplayItems;
      if (max == null || filteredItems.value.length <= max) {
        return filteredItems.value;
      }
      return filteredItems.value.slice(0, max);
    });

    const displayItemsRaw = computed(() =>
      limitedItems.value.map((item) => item.raw),
    );

    const showLimitMessage = computed(
      () =>
        props.maxDisplayItems != null &&
        filteredItems.value.length > props.maxDisplayItems,
    );

    const computedAppendInnerIcon = computed(() => {
      const _ = internalModelValue.value;

      if (props.appendInnerIcon !== undefined) {
        return props.appendInnerIcon;
      }

      if (props.autoErrorIcon && (autocompleteRef.value as any)?.isValid === false) {
        return props.errorIcon;
      }

      return undefined;
    });

    const filteredProps = computed(() => {
      const {
        errorIcon,
        autoErrorIcon,
        modelValue,
        maxDisplayItems,
        limitMessage,
        showAdvanceSearch: _showAdvanceSearch,
        advanceSearch: _advanceSearch,
        search: _search,
        ...rest
      } = props;

      // When maxDisplayItems is set, pass pre-filtered items and control search / 设置 maxDisplayItems 时传入预过滤的 items 并控制 search
      if (maxDisplayItems != null) {
        return {
          ...rest,
          items: displayItemsRaw.value,
          search: searchRef.value,
        };
      }

      // When maxDisplayItems is NOT set: only pass search when parent controls it (v-model:search) / 未设置 maxDisplayItems 时：仅当父组件通过 v-model:search 控制时才传入 search
      const result = { ...rest };
      if (props.search !== undefined) {
        result.search = props.search;
      }
      return result;
    });

    const handleUpdateModelValue = (value: any) => {
      internalModelValue.value = value;
      emit('update:modelValue', value);
    };

    expose({
      validate: () => autocompleteRef.value?.validate(),
      reset: () => autocompleteRef.value?.reset(),
      resetValidation: () => autocompleteRef.value?.resetValidation(),
      focus: () => autocompleteRef.value?.focus(),
      blur: () => autocompleteRef.value?.blur(),
      $el: autocompleteRef,
    });

    return {
      props,
      t,
      autocompleteRef,
      internalModelValue,
      internalAdvanceSearch,
      computedAppendInnerIcon,
      filteredProps,
      handleUpdateModelValue,
      handleUpdateSearch,
      handleUpdateAdvanceSearch,
      showLimitMessage,
    };
  },
  render() {
    const slots = { ...this.$slots };

    // Custom no-data slot with "No results." and specified styles / 自定义 no-data 插槽，显示「无结果」及指定样式
    if (!this.$slots['no-data']) {
      slots['no-data'] = () => [
        <div key="no-data" class="v-autocomplete__no-data">
          {this.t('public.noResults')}
        </div>,
      ];
    }

    // When limit is enabled, inject prepend-item to show hint message / 启用 limit 时注入 prepend-item 显示提示文案
    if (this.maxDisplayItems != null && this.showLimitMessage) {
      const userPrepend = this.$slots['prepend-item']?.();
      slots['prepend-item'] = () => [
        <div key="limit-message" class="v-autocomplete__limit-message">
          {this.limitMessage ?? this.t('public.continueTypingTips')}
        </div>,
        ...(userPrepend
          ? Array.isArray(userPrepend)
            ? userPrepend
            : [userPrepend]
          : []),
      ];
    }

    // When showAdvanceSearch is true: append-item adds switch at bottom when there are results / showAdvanceSearch 为 true 时：有结果时 append-item 在底部追加开关
    if (this.showAdvanceSearch) {
      const userAppend = this.$slots['append-item']?.();
      slots['append-item'] = () => [
        ...(userAppend ? (Array.isArray(userAppend) ? userAppend : [userAppend]) : []),
        <div
          key="advance-search-row"
          class="v-autocomplete__advance-search-row"
          data-testid="hc-autocomplete-advance-search"
        >
          <VSwitch
            modelValue={this.internalAdvanceSearch}
            onUpdate:modelValue={this.handleUpdateAdvanceSearch}
            hideDetails
            inset
            class="v-autocomplete__advance-search-switch"
          />
          <span 
            class="v-autocomplete__advance-search-label"
            onClick={() => this.handleUpdateAdvanceSearch(!this.internalAdvanceSearch)}
          >{this.t('public.advanceSearch')}</span>
        </div>,
      ];
    }

    return (
      <VAutocomplete
        ref="autocompleteRef"
        data-testid="hc-autocomplete"
        {...this.filteredProps}
        {...this.$attrs}
        modelValue={this.internalModelValue}
        appendInnerIcon={this.computedAppendInnerIcon}
        onUpdate:modelValue={this.handleUpdateModelValue}
        onUpdate:search={this.handleUpdateSearch}
      >
        {slots}
      </VAutocomplete>
    );
  },
});
