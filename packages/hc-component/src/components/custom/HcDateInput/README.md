# HcDateInput

A wrapper around Vuetify Labs `v-date-input` that automatically shows an error icon when validation fails.

## Features

- ✅ Fully inherits all `VDateInput` APIs (Vuetify Labs)
- ✅ Automatically displays error icon when validation fails
- ✅ Customizable error icon
- ✅ Manually set `append-inner-icon` has higher priority
- ✅ Supports Vuetify defaults configuration via `useDefaults`

## Basic Usage

```vue
<template>
  <HcDateInput 
    v-model="date"
    :rules="[v => !!v || 'Date is required']" 
    label="Date"
    prepend-inner-icon="$calendar"
    variant="outlined"
  />
</template>

<script setup>
import { ref } from 'vue';
import { HcDateInput } from '@/components/custom/HcDateInput';

const date = ref(null);
</script>
```

## Additional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoErrorIcon` | `boolean` | `true` | Whether to auto-display error icon when validation fails |
| `errorIcon` | `string` | `'error_outline'` | Custom error icon name |

## API

Supports all VDateInput props, events and slots. See [Vuetify VDateInput (Labs) Docs](https://vuetifyjs.com/en/labs/date-inputs/).

## Usage Examples

### Custom Error Icon

```vue
<HcDateInput 
  v-model="startDate"
  :rules="[v => !!v || 'Required']" 
  label="Start Date"
  prepend-inner-icon="$calendar"
  error-icon="warning"
/>
```

### Disable Auto Error Icon

```vue
<HcDateInput 
  v-model="endDate"
  :rules="[v => !!v || 'Required']" 
  label="End Date"
  prepend-inner-icon="$calendar"
  :auto-error-icon="false"
/>
```

### Manual append-inner-icon

```vue
<HcDateInput 
  v-model="date"
  :rules="[v => !!v || 'Required']" 
  label="Date"
  prepend-inner-icon="$calendar"
  append-inner-icon="edit"
/>
<!-- Manually set icon has higher priority and won't be overridden by error icon -->
```

### Date range

```vue
<HcDateInput 
  v-model="range"
  :rules="[v => (Array.isArray(v) && v.length === 2) || 'Select a range']" 
  label="Date Range"
  prepend-inner-icon="$calendar"
  variant="outlined"
  multiple="range"
/>
```

## Difference from VDateInput

HcDateInput automatically shows an error icon when validation fails, with no manual binding required.

```vue
<!-- VDateInput - manual handling required -->
<v-date-input
  ref="dateRef"
  :rules="rules"
  :append-inner-icon="dateRef?.isValid === false ? 'error_outline' : undefined"
  prepend-inner-icon="$calendar"
/>

<!-- HcDateInput - handled automatically -->
<HcDateInput :rules="rules" prepend-inner-icon="$calendar" />
```

## Notes

- Error icon is shown only when `isValid === false` (relies on the internal text field ref forwarded by VDateInput)
- Manually set `append-inner-icon` overrides the auto error icon
- Set `:auto-error-icon="false"` to disable this behavior
- Requires `vuetify/labs/VDateInput`; ensure Vuetify Labs components are registered in your app
