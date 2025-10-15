import { defineComponent, computed, ref } from 'vue';
import { VAutocomplete } from '../../source/HcAutocomplete/VAutocomplete';

export const HcAutocomplete = defineComponent({
  name: 'HcAutocomplete',
  inheritAttrs: false,
  props: {
    ...VAutocomplete.props,
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
    menuIcon: {
      type: String,
      default: 'expand_more', // Default menu icon
    },
  },
  setup(props, { emit }) {
    const autocompleteRef = ref<InstanceType<typeof VAutocomplete>>();
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
      if (props.autoErrorIcon && (autocompleteRef.value as any)?.isValid === false) {
        return props.errorIcon;
      }

      return undefined;
    });

    // Filter out custom props AND modelValue to avoid passing them to VAutocomplete
    const filteredProps = computed(() => {
      const { errorIcon, autoErrorIcon, density, variant, menuIcon, modelValue, ...rest } = props;
      return rest;
    });

    // Handle modelValue update - forward to parent and update internal state
    const handleUpdateModelValue = (value: any) => {
      internalModelValue.value = value;
      emit('update:modelValue', value);
    };

    return {
      autocompleteRef,
      internalModelValue,
      computedAppendInnerIcon,
      filteredProps,
      handleUpdateModelValue,
    };
  },
  render() {
    return (
      <VAutocomplete
        ref="autocompleteRef"
        {...this.filteredProps}
        {...this.$attrs}
        modelValue={this.internalModelValue}
        variant={this.variant}
        density={this.density}
        menuIcon={this.menuIcon}
        appendInnerIcon={this.computedAppendInnerIcon}
        onUpdate:modelValue={this.handleUpdateModelValue}
      >
        {/* Pass through all slots */}
        {{
          ...this.$slots,
        }}
      </VAutocomplete>
    );
  },
});

