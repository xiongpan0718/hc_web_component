# HcTextField

A wrapper around Vuetify `v-text-field` that automatically shows an error icon when validation fails.

## Features

- ✅ Fully inherits all `VTextField` APIs
- ✅ Automatically displays error icon when validation fails
- ✅ Customizable error icon
- ✅ Manually set `append-inner-icon` has higher priority

## Basic Usage

```vue
<template>
  <HcTextField 
    v-model="value"
    :rules="[v => !!v || 'Field is required']" 
    label="Username"
  />
</template>

<script setup>
import { ref } from 'vue';
import { HcTextField } from '@/components/custom/HcTextField';

const value = ref('');
</script>
```

## Additional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoErrorIcon` | `boolean` | `true` | Whether to auto-display error icon when validation fails |
| `errorIcon` | `string` | `'error_outline'` | Custom error icon name |

## API

Supports all VTextField props, events and slots. See [Vuetify VTextField Docs](https://vuetifyjs.com/en/components/text-fields/).

## Usage Examples

### Custom Error Icon

```vue
<HcTextField 
  v-model="email"
  :rules="[v => !!v || 'Required']" 
  label="Email"
  error-icon="warning"
/>
```

### Disable Auto Error Icon

```vue
<HcTextField 
  v-model="password"
  :rules="[v => !!v || 'Required']" 
  label="Password"
  :auto-error-icon="false"
/>
```

### Manual append-inner-icon

```vue
<HcTextField 
  v-model="search"
  :rules="[v => !!v || 'Required']" 
  label="Search"
  append-inner-icon="search"
/>
<!-- Manually set icon has higher priority and won't be overridden by error icon -->
```

### With suffix

```vue
<HcTextField 
  v-model="pressure"
  :rules="[v => !!v || 'Required']" 
  label="Pressure"
  suffix="bars"
/>
```

### Complex validation

```vue
<HcTextField 
  v-model="password"
  :rules="[
    v => !!v || 'Password is required',
    v => v.length >= 8 || 'Min 8 characters',
    v => /[A-Z]/.test(v) || 'Need uppercase',
    v => /[0-9]/.test(v) || 'Need number',
  ]" 
  label="Password"
  type="password"
/>
```

## Difference from VTextField

HcTextField automatically shows an error icon when validation fails, with no manual binding required.

```vue
<!-- VTextField - manual handling required -->
<v-text-field
  ref="fieldRef"
  :rules="rules"
  :append-inner-icon="fieldRef?.isValid === false ? 'error_outline' : undefined"
/>

<!-- HcTextField - handled automatically -->
<HcTextField :rules="rules" />
```

## Notes

- Error icon is shown only when `isValid === false`
- Manually set `append-inner-icon` overrides the auto error icon
- Set `:auto-error-icon="false"` to disable this behavior
