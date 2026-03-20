import { defineComponent, computed, ref, watch } from 'vue';
import { useDefaults } from 'vuetify';
import { VTextarea } from 'vuetify/components';

interface HcTextareaProps {
  rows?: number | string;
  errorIcon?: string;
  autoErrorIcon?: boolean;
  [key: string]: any;
}

export const HcTextarea = defineComponent({
  name: 'HcTextarea',
  inheritAttrs: false,
  props: {
    ...VTextarea.props,
    rows: {
      type: [Number, String],
      default: 3,
    },
    errorIcon: {
      type: String,
      default: 'error_outline',
    },
    autoErrorIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup(_props: HcTextareaProps, { emit, expose }) {
    const props = useDefaults(_props, 'HcTextarea');
    const textareaRef = ref<InstanceType<typeof VTextarea>>();
    const internalModelValue = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => {
      internalModelValue.value = newValue;
    });

    const computedAppendInnerIcon = computed(() => {
      const _ = internalModelValue.value;
      
      if (props.appendInnerIcon !== undefined) {
        return props.appendInnerIcon;
      }

      if (props.autoErrorIcon && (textareaRef.value as any)?.isValid === false) {
        return props.errorIcon;
      }

      return undefined;
    });

    const filteredProps = computed(() => {
      const { errorIcon, autoErrorIcon, modelValue, ...rest } = props;
      return rest;
    });

    const handleUpdateModelValue = (value: any) => {
      internalModelValue.value = value;
      emit('update:modelValue', value);
    };

    expose({
      validate: () => textareaRef.value?.validate(),
      reset: () => textareaRef.value?.reset(),
      resetValidation: () => textareaRef.value?.resetValidation(),
      focus: () => textareaRef.value?.focus(),
      blur: () => textareaRef.value?.blur(),
      $el: textareaRef,
    });

    return {
      props,
      textareaRef,
      internalModelValue,
      computedAppendInnerIcon,
      filteredProps,
      handleUpdateModelValue,
    };
  },
  render() {
    const props = this.props;
    return (
      <VTextarea
        ref="textareaRef"
        {...this.filteredProps}
        {...this.$attrs}
        modelValue={this.internalModelValue}
        rows={props.rows}
        appendInnerIcon={this.computedAppendInnerIcon}
        onUpdate:modelValue={this.handleUpdateModelValue}
      >
        {{
          ...this.$slots,
        }}
      </VTextarea>
    );
  },
});

