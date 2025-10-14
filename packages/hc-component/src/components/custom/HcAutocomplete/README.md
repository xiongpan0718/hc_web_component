# HcAutocomplete

Based on Vuetify `v-autocomplete`, automatically displays error icon when validation fails.

## Features

- ✅ Fully inherits all `VAutocomplete` APIs
- ✅ Automatically displays error icon when validation fails
- ✅ Customizable error icon
- ✅ Manually set `append-inner-icon` has higher priority

## Basic Usage

```vue
<template>
  <HcAutocomplete 
    v-model="value"
    :items="items"
    :rules="[v => !!v || 'Field is required']" 
    label="Select Country"
  />
</template>

<script setup>
import { ref } from 'vue';
import { HcAutocomplete } from '@/components/custom/HcAutocomplete';

const value = ref('');
const items = ['USA', 'Canada', 'Mexico', 'UK', 'France'];
</script>
```

## Additional Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `autoErrorIcon` | `boolean` | `true` | Auto display error icon when validation fails |
| `errorIcon` | `string` | `'error_outline'` | Custom error icon name |

## API

Supports all VAutocomplete props, events and slots. See [Vuetify VAutocomplete Docs](https://vuetifyjs.com/en/components/autocompletes/).

## Usage Examples

### Custom Error Icon

```vue
<HcAutocomplete 
  v-model="country"
  :items="countries"
  :rules="[v => !!v || 'Required']" 
  label="Country"
  error-icon="warning"
/>
```

### Disable Auto Error Icon

```vue
<HcAutocomplete 
  v-model="city"
  :items="cities"
  :rules="[v => !!v || 'Required']" 
  label="City"
  :auto-error-icon="false"
/>
```

### Manual append-inner-icon

```vue
<HcAutocomplete 
  v-model="search"
  :items="items"
  :rules="[v => !!v || 'Required']" 
  label="Search"
  append-inner-icon="search"
/>
<!-- Manual icon has higher priority, won't be overridden by error icon -->
```

### Multiple Selection

```vue
<HcAutocomplete 
  v-model="selected"
  :items="items"
  :rules="[v => v.length > 0 || 'Select at least one']" 
  label="Tags"
  multiple
  chips
/>
```

### With Items Objects

```vue
<HcAutocomplete 
  v-model="user"
  :items="users"
  :rules="[v => !!v || 'Required']" 
  label="User"
  item-title="name"
  item-value="id"
/>
```

### Custom Filtering

```vue
<HcAutocomplete 
  v-model="value"
  :items="items"
  :rules="[v => !!v || 'Required']" 
  label="Search"
  :custom-filter="customFilter"
/>
```

## Difference from VAutocomplete

HcAutocomplete automatically displays error icon when validation fails.

```vue
<!-- VAutocomplete - Manual handling -->
<v-autocomplete
  ref="autocompleteRef"
  :rules="rules"
  :append-inner-icon="autocompleteRef?.isValid === false ? 'error_outline' : undefined"
/>

<!-- HcAutocomplete - Auto handling -->
<HcAutocomplete :rules="rules" />
```

## Notes

- Error icon only displays when `isValid === false`
- Manually set `append-inner-icon` overrides auto error icon
- Set `:auto-error-icon="false"` to disable this feature

