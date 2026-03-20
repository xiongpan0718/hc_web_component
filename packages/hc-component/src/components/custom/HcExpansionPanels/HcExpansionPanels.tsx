import { defineComponent, computed, ref, provide, inject, watch, nextTick } from 'vue';
import { VExpansionPanels, VExpansionPanel, VSwitch } from 'vuetify/components';
import type { PanelValue, ModelValue, PanelsControl } from './types';
import './HcExpansionPanels.scss';

// 用于父子组件通信的 Symbol / Symbol for parent-child component communication
const HcExpansionPanelsSymbol = Symbol('HcExpansionPanels');

// 用于生成唯一 ID 的计数器 / Counter for generating unique IDs
let panelIdCounter = 0;

// Props type
interface HcExpansionPanelsProps {
  modelValue?: ModelValue;
  [key: string]: any; // Allow other VExpansionPanels props
}

// Props type
interface HcExpansionPanelProps {
  showSwitch?: boolean;
  switchLabel?: string;
  switchValue?: boolean;
  value?: PanelValue;
  title?: string;
  text?: string;
  [key: string]: any; // Allow other VExpansionPanel props
}

/**
 * HcExpansionPanels - 扩展面板容器组件 / Expansion panels container component
 * 管理所有子面板的展开状态 / Manages the expansion state of all child panels
 */
export const HcExpansionPanels = defineComponent({
  name: 'HcExpansionPanels',
  inheritAttrs: false,
  props: {
    ...VExpansionPanels.props,
  },
  setup(props: HcExpansionPanelsProps, { attrs, slots, emit }) {
    // 内部管理的 modelValue / Internally managed modelValue
    const internalModel = ref(props.modelValue);

    // 监听外部 modelValue 变化 / Watch external modelValue changes
    watch(() => props.modelValue, (newVal) => {
      internalModel.value = newVal;
    });

    // 监听内部 modelValue 变化，emit 到外部 / Watch internal modelValue changes and emit to external
    watch(internalModel, (newVal) => {
      emit('update:modelValue', newVal);
    });

    // 提供控制函数给子组件 / Provide control functions to child components
    provide(HcExpansionPanelsSymbol, {
      updatePanel: (panelValue: PanelValue, shouldExpand: boolean) => {
        nextTick(() => {
          // 统一使用数组模式处理（支持多选） / Use array mode uniformly (supports multiple selection)
          const currentValue = Array.isArray(internalModel.value) ? internalModel.value : [];
          if (shouldExpand) {
            if (!currentValue.includes(panelValue)) {
              internalModel.value = [...currentValue, panelValue];
            }
          } else {
            internalModel.value = currentValue.filter((v: PanelValue) => v !== panelValue);
          }
        });
      }
    } satisfies PanelsControl);

    return () => (
      <VExpansionPanels
        {...props}
        {...attrs}
        modelValue={internalModel.value}
        onUpdate:modelValue={(val: unknown) => { internalModel.value = val as ModelValue; }}
        class={['hc-expansion-panels', attrs.class]}
        data-testid="hc-expansion-panels-container-main"
      >
        {slots.default?.()}
      </VExpansionPanels>
    );
  },
});

/**
 * HcExpansionPanel - 扩展面板项组件 / Expansion panel item component
 */
export const HcExpansionPanel = defineComponent({
  name: 'HcExpansionPanel',
  inheritAttrs: false,
  props: {
    ...VExpansionPanel.props,
    // 是否显示 Switch / Whether to show Switch
    showSwitch: {
      type: Boolean,
      default: true,
    },
    // Switch 的标签文本 / Label text for Switch
    switchLabel: {
      type: String,
      default: '',
    },
    // Switch 的值（受控/外部传递） / Switch value (controlled/external)
    switchValue: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:switchValue', 'switch-toggle'],
  setup(props: HcExpansionPanelProps, { slots, emit, attrs }) {
    const uniqueId = `hc-panel-${++panelIdCounter}`;
    // 过滤掉自定义 props，只传递 VExpansionPanel 的 props / Filter out custom props, only pass VExpansionPanel props
    const expansionPanelProps = computed(() => {
      const { showSwitch, switchLabel, switchValue, ...rest } = props;
      return rest;
    });
    const panelValue = computed(() => {
      if (props.value !== undefined && props.value !== null) {
        return props.value;
      }
      return uniqueId;
    });
    const panelsControl = inject<PanelsControl | null>(HcExpansionPanelsSymbol, null);

    // 受控：switchValue变化自动联动面板展开收起 / Controlled: switchValue changes automatically sync panel expand/collapse
    watch(() => props.switchValue, (newVal) => {
      if (props.showSwitch && panelsControl && typeof panelsControl.updatePanel === 'function') {
        panelsControl.updatePanel(panelValue.value, newVal as boolean);
      }
    }, { immediate: true });

    // 处理 Switch 的值变化，仅 emit 事件让外部接管 / Handle Switch value changes, only emit event for external handling
    const handleSwitchChange = (value: boolean | null) => {
      emit('switch-toggle', value ?? false);
    };
    const stopPropagation = (e: Event) => { e.stopPropagation(); };
    return () => {
      const hasSwitch = props.showSwitch;
      const titleSlot = hasSwitch ? () => (
        <div class="hc-expansion-panel-title__content"
          data-testid="hc-expansion-panel-section-title"
        >
          <span class="hc-expansion-panel-title__text">
            {slots.title?.() || props.title || 'Title'}
          </span>
          <div 
            class="hc-expansion-panel-title__switch-wrapper"
            onClick={stopPropagation}
            data-testid="hc-expansion-panel-wrapper-switch"
          >
            <VSwitch
              modelValue={props.switchValue}
              onUpdate:modelValue={handleSwitchChange}
              label={props.switchLabel}
              hideDetails
              inset
              class="hc-expansion-panel-title__switch"
              data-testid="hc-expansion-panel-toggle-switch"
            />
          </div>
        </div>
      ) : slots.title;
      return (
        <VExpansionPanel
          {...expansionPanelProps.value}
          {...attrs}
          value={panelValue.value}
          title={props.title}
          text={props.text}
          hideActions={hasSwitch}
          class={['hc-expansion-panel', attrs.class]}
          readonly={hasSwitch}
          data-testid="hc-expansion-panel-item-panel"
          v-slots={{
            title: titleSlot,
            text: slots.text,
            default: slots.default,
          }}
        />
      );
    };
  },
});
