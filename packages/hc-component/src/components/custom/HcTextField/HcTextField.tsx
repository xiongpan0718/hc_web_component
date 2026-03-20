import { defineComponent, computed, ref, watch } from 'vue';
import { useDefaults } from 'vuetify';
import { VTextField } from 'vuetify/components';

interface HcTextFieldProps {
  errorIcon?: string;
  autoErrorIcon?: boolean;
  [key: string]: any;
}

export const HcTextField = defineComponent({
  name: 'HcTextField',
  inheritAttrs: false,
  props: {
    ...VTextField.props,
    errorIcon: {
      type: String,
      default: 'error_outline',
    },
    autoErrorIcon: {
      type: Boolean,
      default: true,
    },
  },
  setup(_props: HcTextFieldProps, { emit, expose }) {
    const props = useDefaults(_props, 'HcTextField');
    const textFieldRef = ref<InstanceType<typeof VTextField>>();
    const internalModelValue = ref(props.modelValue);

    watch(() => props.modelValue, (newValue) => {
      internalModelValue.value = newValue;
    });

    const computedAppendInnerIcon = computed(() => {
      const _ = internalModelValue.value;
      
      if (props.appendInnerIcon !== undefined) {
        return props.appendInnerIcon;
      }

      if (props.autoErrorIcon && (textFieldRef.value as any)?.isValid === false) {
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
      validate: () => textFieldRef.value?.validate(),
      reset: () => textFieldRef.value?.reset(),
      resetValidation: () => textFieldRef.value?.resetValidation(),
      focus: () => textFieldRef.value?.focus(),
      blur: () => textFieldRef.value?.blur(),
      $el: textFieldRef,
    });

    return {
      props,
      textFieldRef,
      internalModelValue,
      computedAppendInnerIcon,
      filteredProps,
      handleUpdateModelValue,
    };
  },
  render() {
    return (
      <VTextField
        ref="textFieldRef"
        {...this.filteredProps}
        {...this.$attrs}
        modelValue={this.internalModelValue}
        appendInnerIcon={this.computedAppendInnerIcon}
        onUpdate:modelValue={this.handleUpdateModelValue}
      >
        {{
          ...this.$slots,
        }}
      </VTextField>
    );
  },
});

