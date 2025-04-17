<template>
  <div :class="['v-text-field-display',themeClasses]">
    <div class="v-text-field-label">
      <div v-if=" prependLabelIcon || $slots.prependLabelIcon" class="v-text-field-label-prepend-icon">
        <slot name="prependLabelIcon">
          <v-icon :icon="prependLabelIcon" size="16" />
        </slot>
      </div>
      <div class="v-text-field-label-name">
        <slot name="label">{{ label }}</slot>
      </div>
      <div v-if=" appendLabelIcon || $slots.appendLabelIcon" class="v-text-field-label-append-icon">
        <slot name="appendLabelIcon">
          <v-icon :icon="appendLabelIcon" size="16" />
        </slot>
      </div>
    </div>
    <div class="v-text-field-text">
      <div v-if=" prependTextIcon || $slots.prependTextIcon" class="v-text-field-text-prepend-icon">
        <slot name="prependTextIcon">
          <v-icon :icon="prependTextIcon" size="20" />
        </slot>
      </div>
      <div class="v-text-field-text-name">
        <slot>
          {{ text }}
        </slot>
        <v-tooltip
          activator="parent"
          location="top"
        >
          <span v-if="$slots.default">
            <slot name="default" />
          </span>
          <span v-else>{{ text }}</span>
        </v-tooltip>
      </div>
      <div v-if=" appendTextIcon || $slots.appendTextIcon" class="v-text-field-text-append-icon">
        <slot name="appendTextIcon">
          <v-icon :icon="appendTextIcon" size="20" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  // Composables
  import { makeThemeProps, provideTheme } from '../../composables/theme'

  // Utilities
  import { defineComponent } from 'vue'
  import { propsFactory } from '../../util'
  export const makeVTextFieldsDisplayProps = propsFactory({
    label: String,
    text: String,
    prependLabelIcon: String,
    appendLabelIcon: String,
    prependTextIcon: String,
    appendTextIcon: String,
    ...makeThemeProps(),
  }, 'VTextFieldsDisplay')

  export const VTextFieldsDisplay = defineComponent({
    name: 'VTextFieldsDisplay',
    props: makeVTextFieldsDisplayProps(),
    setup (props) {
      const { themeClasses } = provideTheme(props)

      return {
        themeClasses,
      }
    },
  })

  export default VTextFieldsDisplay
</script>
