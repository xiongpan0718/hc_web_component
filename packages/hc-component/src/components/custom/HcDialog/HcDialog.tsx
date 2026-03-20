import { defineComponent, computed } from 'vue';
import { VDialog, VCard, VCardTitle, VCardText, VCardActions, VBtn, VIcon } from 'vuetify/components';
import type { DialogActions } from './types';
import './HcDialog.scss';

// Props type
interface HcDialogProps {
  maxWidth?: string | number;
  title?: string;
  titleIcon?: string;
  closable?: boolean;
  actions?: DialogActions;
  modelValue?: boolean;
  [key: string]: any; // Allow other VDialog props
}

export const HcDialog = defineComponent({
  name: 'HcDialog',
  inheritAttrs: false,
  props: {
    ...VDialog.props,
    // 最大宽度 / Max width
    maxWidth: {
      type: [String, Number],
      default: 500,
    },
    // 标题文本 / Title text
    title: {
      type: String,
      default: '',
    },
    // 标题图标 / Title icon
    titleIcon: {
      type: String,
      default: '',
    },
    // 是否显示关闭按钮 / Whether to show close button
    closable: {
      type: Boolean,
      default: true,
    },
    // 按钮配置 / Button configuration
    actions: {
      type: Object as () => DialogActions | undefined,
      default: undefined,
    },
  },
  emits: ['update:modelValue', 'close'],
  setup(props: HcDialogProps, { attrs, slots, emit }) {
    // 处理关闭事件 / Handle close event
    const handleClose = () => {
      emit('update:modelValue', false);
      emit('close');
    };

    // 计算是否有按钮 / Calculate if there are buttons
    const hasActions = computed(() => {
      return props.actions && (
        props.actions.leftButton ||
        props.actions.centerButton ||
        props.actions.rightButton
      );
    });

    // 计算按钮数量 / Calculate button count
    const buttonCount = computed(() => {
      if (!props.actions) return 0;
      let count = 0;
      if (props.actions.leftButton) count++;
      if (props.actions.centerButton) count++;
      if (props.actions.rightButton) count++;
      return count;
    });

    // 处理按钮点击 / Handle button click
    const handleButtonClick = (button: DialogActions['leftButton'] | DialogActions['centerButton'] | DialogActions['rightButton']) => {
      if (button?.onClick) {
        button.onClick();
      }
    };

    return () => {
      const hasTitle = props.title || props.titleIcon || props.closable || slots.title;

      return (
        <VDialog
          {...props}
          {...attrs}
          class={['hc-dialog', attrs.class]}
          onUpdate:modelValue={(val: boolean) => emit('update:modelValue', val)}
          data-testid="hc-dialog-modal-container"
        >
          {{
            default: () => (
              <VCard class="hc-dialog__card"
                data-testid="hc-dialog-card-wrapper"
              >
                {/* 标题区域 / Title area */}
                {hasTitle && (
                  <VCardTitle class="hc-dialog__title"
                    data-testid="hc-dialog-header-title"
                  >
                    {props.titleIcon && (
                      <VIcon
                        icon={props.titleIcon}
                        size="24"
                        class="hc-dialog__title-icon"
                        data-testid="hc-dialog-icon-title"
                      />
                    )}
                    {slots.title ? (
                      <span class="hc-dialog__title-text">{slots.title()}</span>
                    ) : (
                      props.title && <span class="hc-dialog__title-text">{props.title}</span>
                    )}
                    {props.closable && (
                      <VIcon
                        icon="close"
                        size="24"
                        class="hc-dialog__title-close"
                        onClick={handleClose}
                        data-testid="hc-dialog-button-close"
                      />
                    )}
                  </VCardTitle>
                )}

                {/* 内容区域 / Content area */}
                <VCardText class="hc-dialog__content"
                  data-testid="hc-dialog-section-content"
                >
                  {slots.default?.()}
                </VCardText>

                {/* 按钮区域 / Actions area */}
                {hasActions.value && (
                  <VCardActions class="hc-dialog__actions"
                    data-testid="hc-dialog-section-actions"
                  >
                    {/* 左侧按钮（仅当有 3 个按钮时） / Left button (only when there are 3 buttons) */}
                    {buttonCount.value === 3 && props.actions?.leftButton && (
                      <VBtn
                        variant={props.actions.leftButton.variant || "outlined"}
                        color={props.actions.leftButton.color || "primary"}
                        prependIcon={props.actions.leftButton.prependIcon}
                        appendIcon={props.actions.leftButton.appendIcon}
                        disabled={props.actions.leftButton.disabled}
                        onClick={() => handleButtonClick(props.actions?.leftButton)}
                        class="hc-dialog__action-btn hc-dialog__action-btn--left"
                        size="default"
                        data-testid="hc-dialog-button-left"
                      >
                        {props.actions.leftButton.text}
                      </VBtn>
                    )}

                    {/* 右侧按钮组 / Right button group */}
                    <div class="hc-dialog__actions-right">
                      {/* 中间按钮（当有 2-3 个按钮时） / Middle button (when there are 2-3 buttons) */}
                      {buttonCount.value >= 2 && props.actions?.centerButton && (
                        <VBtn
                          variant={props.actions.centerButton.variant || "text"}
                          color={props.actions.centerButton.color || "primary"}
                          prependIcon={props.actions.centerButton.prependIcon}
                          appendIcon={props.actions.centerButton.appendIcon}
                          disabled={props.actions.centerButton.disabled}
                          onClick={() => handleButtonClick(props.actions?.centerButton)}
                          class="hc-dialog__action-btn hc-dialog__action-btn--middle"
                          size="default"
                          data-testid="hc-dialog-button-center"
                        >
                          {props.actions.centerButton.text}
                        </VBtn>
                      )}

                      {/* 右侧按钮（当有 1-3 个按钮时） / Right button (when there are 1-3 buttons) */}
                      {props.actions?.rightButton && (
                        <VBtn
                          variant={props.actions.rightButton.variant || "flat"}
                          color={props.actions.rightButton.color || "primary"}
                          prependIcon={props.actions.rightButton.prependIcon}
                          appendIcon={props.actions.rightButton.appendIcon}
                          disabled={props.actions.rightButton.disabled}
                          onClick={() => handleButtonClick(props.actions?.rightButton)}
                          class="hc-dialog__action-btn hc-dialog__action-btn--right"
                          size="default"
                          data-testid="hc-dialog-button-right"
                        >
                          {props.actions.rightButton.text}
                        </VBtn>
                      )}
                    </div>
                  </VCardActions>
                )}
              </VCard>
            ),
            activator: slots.activator,
          }}
        </VDialog>
      );
    };
  },
});

