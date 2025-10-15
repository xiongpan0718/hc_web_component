import { defineComponent, computed, ref } from 'vue';
import { VTextField } from 'vuetify/components';

export const HcTextField = defineComponent({
  name: 'HcTextField',
  inheritAttrs: false,
  props: {
    ...VTextField.props,
    density: {
      type: String,
      default: 'compact',
    },
    variant: {
      type: String,
      default: 'outlined',
    },
    errorIcon: {
      type: String,
      default: 'error_outline', // Default error icon
    },
    autoErrorIcon: {
      type: Boolean,
      default: true, // Auto display error icon by default
    },
  },
  setup(props, { emit }) {
    const textFieldRef = ref<InstanceType<typeof VTextField>>();
    const internalModelValue = ref(props.modelValue);

    // Watch modelValue changes to trigger computed recalculation
    const computedAppendInnerIcon = computed(() => {
      // Access modelValue to ensure reactive tracking
      const _ = internalModelValue.value;
      
      // If user manually set appendInnerIcon, use user's setting
      if (props.appendInnerIcon !== undefined) {
        return props.appendInnerIcon;
      }

      // If auto error icon is enabled and validation fails, show error icon
      if (props.autoErrorIcon && (textFieldRef.value as any)?.isValid === false) {
        return props.errorIcon;
      }

      return undefined;
    });

    // Filter out custom props AND modelValue to avoid passing them to VTextField
    const filteredProps = computed(() => {
      const { errorIcon, autoErrorIcon, density, variant, modelValue, ...rest } = props;
      return rest;
    });

    // Handle modelValue update - forward to parent and update internal state
    const handleUpdateModelValue = (value: any) => {
      internalModelValue.value = value;
      emit('update:modelValue', value);
    };

    return {
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
        variant={this.variant}
        density={this.density}
        appendInnerIcon={this.computedAppendInnerIcon}
        onUpdate:modelValue={this.handleUpdateModelValue}
      >
        {/* Pass through all slots */}
        {{
          ...this.$slots,
        }}
      </VTextField>
    );
  },
});

