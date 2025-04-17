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
  import { provideTheme } from '@/composables/theme'

  // Utilities
  import { ref } from 'vue'
  import { genericComponent, propsFactory } from '@/util'
  export const makeVTextFieldsDisplayProps = propsFactory({
    label: String,
    text: String,
    prependLabelIcon: String,
    appendLabelIcon: String,
    prependTextIcon: String,
    appendTextIcon: String,
  }, 'VTextFieldsDisplay')

  export type VTextFieldsDisplaySlots = {
    prependLabelIcon: never
    appendLabelIcon: never
    prependTextIcon: never
    appendTextIcon: never
    label: never
    text: never
  }

  export const VTextFieldsDisplay = genericComponent<VTextFieldsDisplaySlots>()({
    name: 'VTextFieldsDisplay',
    props: makeVTextFieldsDisplayProps(),
    setup (props) {
      const { themeClasses } = provideTheme(props)

      return {
        themeClasses,
      }
    },
  })

  export type VToolbar = InstanceType<typeof VTextFieldsDisplay>
  export default VTextFieldsDisplay
</script>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.v-text-field-display{
  min-height: 41px;
  display: flex;
  flex-direction: column;
  .v-text-field-label{
    height: 19px;
    color: #666;
    font-size: 14px;
    display: flex;
    align-items: center;
    font-weight: 400;

    .v-text-field-label-prepend-icon{
      margin-right: 4px;
      font-size: 16px;
      display: flex;
      align-items: center;
      height: 24px;
    }
    .v-text-field-label-append-icon{
      margin-left: 4px;
      font-size: 16px;
      display: flex;
      align-items: center;
      height: 24px;
    }
  }
  .v-text-field-text{
    flex: 1;
    color: #1A1A1A;
    font-size: 16px;
    display: flex;
    align-items: center;
    font-weight: 400;
    .v-text-field-text-prepend-icon{
      margin-right: 8px;
      display: flex;
      align-self: flex-start;
      font-size: 20px;
      height: 24px;
      align-items: center;
      color: #27509B;
    }
    .v-text-field-text-name{
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      max-height: 50px;
    }
    .v-text-field-text-append-icon{
      margin-left: 8px;
      align-self: flex-start;
      display: flex;
      font-size: 20px;
      height: 24px;
      align-items: center;
      color: #27509B;
    }
  }
}
</style>
