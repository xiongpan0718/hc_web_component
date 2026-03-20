# HcTextarea

A wrapper around Vuetify `v-textarea` that automatically shows an error icon when validation fails.

## Features

- ✅ Fully inherits all `VTextarea` APIs
- ✅ Automatically displays error icon when validation fails
- ✅ Customizable error icon
- ✅ Manually set `append-inner-icon` has higher priority

## Basic Usage

```vue
<template>
  <HcTextarea 
    v-model="value"
    :rules="[v => !!v || 'Field is required']" 
    label="Description"
  />
</template>

<script setup>
import { ref } from 'vue';
import { HcTextarea } from '@/components/custom/HcTextarea';

const value = ref('');
</script>
```

## Additional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoErrorIcon` | `boolean` | `true` | Whether to auto-display error icon when validation fails |
| `errorIcon` | `string` | `'error_outline'` | Custom error icon name |

## API

Supports all VTextarea props, events and slots. See [Vuetify VTextarea Docs](https://vuetifyjs.com/en/components/textareas/).

## Usage Examples

### Custom Error Icon

```vue
<HcTextarea 
  v-model="comment"
  :rules="[v => !!v || 'Required']" 
  label="Comment"
  error-icon="warning"
/>
```

### Disable Auto Error Icon

```vue
<HcTextarea 
  v-model="description"
  :rules="[v => !!v || 'Required']" 
  label="Description"
  :auto-error-icon="false"
/>
```

### Manual append-inner-icon

```vue
<HcTextarea 
  v-model="notes"
  :rules="[v => !!v || 'Required']" 
  label="Notes"
  append-inner-icon="edit"
/>
<!-- Manually set icon has higher priority and won't be overridden by error icon -->
```

### Multi-line text

```vue
<HcTextarea 
  v-model="content"
  :rules="[v => !!v || 'Required']" 
  label="Content"
  rows="5"
  auto-grow
/>
```

### With character counter

```vue
<HcTextarea 
  v-model="bio"
  :rules="[
    v => !!v || 'Bio is required',
    v => v.length <= 200 || 'Max 200 characters'
  ]" 
  label="Bio"
  counter
  maxlength="200"
/>
```

### Complex validation

```vue
<HcTextarea 
  v-model="message"
  :rules="[
    v => !!v || 'Message is required',
    v => v.length >= 10 || 'Min 10 characters',
    v => v.length <= 500 || 'Max 500 characters',
  ]" 
  label="Message"
  rows="3"
  counter
/>
```

## Difference from VTextarea

HcTextarea automatically shows an error icon when validation fails, with no manual binding required.

```vue
<!-- VTextarea - manual handling required -->
<v-textarea
  ref="textareaRef"
  :rules="rules"
  :append-inner-icon="textareaRef?.isValid === false ? 'error_outline' : undefined"
/>

<!-- HcTextarea - handled automatically -->
<HcTextarea :rules="rules" />
```

## Notes

- Error icon is shown only when `isValid === false`
- Manually set `append-inner-icon` overrides the auto error icon
- Set `:auto-error-icon="false"` to disable this behavior
