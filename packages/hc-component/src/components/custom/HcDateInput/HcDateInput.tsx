import { defineComponent, computed, ref, watch } from 'vue';
import { useDefaults } from 'vuetify';
import { VDateInput } from 'vuetify/labs/VDateInput';

interface HcDateInputProps {
  errorIcon?: string;
  autoErrorIcon?: boolean;
  [key: string]: any;
}

export const HcDateInput = defineComponent({
  name: 'HcDateInput',
  inheritAttrs: false,
  props: {
    ...VDateInput.props,
    errorIcon: {
      type: String,
      default: 'error_outline',
    },
    autoErrorIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup(_props: HcDateInputProps, { emit, expose }) {
    const props = useDefaults(_props, 'HcDateInput');
    const dateInputRef = ref<InstanceType<typeof VDateInput>>();
    const internalModelValue = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => {
      internalModelValue.value = newValue;
    });

    const computedAppendInnerIcon = computed(() => {
      const _ = internalModelValue.value;

      if (props.appendInnerIcon !== undefined) {
        return props.appendInnerIcon;
      }

      if (props.autoErrorIcon && (dateInputRef.value as any)?.isValid === false) {
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
      validate: () => dateInputRef.value?.validate?.(),
      reset: () => dateInputRef.value?.reset?.(),
      resetValidation: () => dateInputRef.value?.resetValidation?.(),
      focus: () => dateInputRef.value?.focus?.(),
      blur: () => dateInputRef.value?.blur?.(),
      $el: dateInputRef,
    });

    return {
      props,
      dateInputRef,
      internalModelValue,
      computedAppendInnerIcon,
      filteredProps,
      handleUpdateModelValue,
    };
  },
  render() {
    return (
      <VDateInput
        ref="dateInputRef"
        {...this.filteredProps}
        {...this.$attrs}
        modelValue={this.internalModelValue}
        appendInnerIcon={this.computedAppendInnerIcon}
        onUpdate:modelValue={this.handleUpdateModelValue}
      >
        {{
          ...this.$slots,
        }}
      </VDateInput>
    );
  },
});
