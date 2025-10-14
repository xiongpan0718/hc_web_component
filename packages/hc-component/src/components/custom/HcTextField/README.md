# HcTextField

基于 Vuetify `v-text-field` 的二次封装组件，自动在验证失败时显示错误图标。

## 特性

- ✅ 完全继承 `VTextField` 的所有 API
- ✅ 自动在验证失败时显示错误图标
- ✅ 可自定义错误图标
- ✅ 手动设置的 `append-inner-icon` 优先级更高

## 基础用法

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

## 新增 Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `autoErrorIcon` | `boolean` | `true` | 是否在验证失败时自动显示错误图标 |
| `errorIcon` | `string` | `'error_outline'` | 自定义错误图标名称 |

## API

支持所有 VTextField 的 props、events 和 slots。详见 [Vuetify VTextField 文档](https://vuetifyjs.com/en/components/text-fields/)。

## 使用示例

### 自定义错误图标

```vue
<HcTextField 
  v-model="email"
  :rules="[v => !!v || 'Required']" 
  label="Email"
  error-icon="warning"
/>
```

### 禁用自动错误图标

```vue
<HcTextField 
  v-model="password"
  :rules="[v => !!v || 'Required']" 
  label="Password"
  :auto-error-icon="false"
/>
```

### 手动设置 append-inner-icon

```vue
<HcTextField 
  v-model="search"
  :rules="[v => !!v || 'Required']" 
  label="Search"
  append-inner-icon="search"
/>
<!-- 手动设置的图标优先级更高，不会被错误图标覆盖 -->
```

### 带 suffix

```vue
<HcTextField 
  v-model="pressure"
  :rules="[v => !!v || 'Required']" 
  label="Pressure"
  suffix="bars"
/>
```

### 复杂验证

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

## 与 VTextField 的区别

HcTextField 会在验证失败时自动显示错误图标，无需手动绑定。

```vue
<!-- VTextField - 需要手动处理 -->
<v-text-field
  ref="fieldRef"
  :rules="rules"
  :append-inner-icon="fieldRef?.isValid === false ? 'error_outline' : undefined"
/>

<!-- HcTextField - 自动处理 -->
<HcTextField :rules="rules" />
```

## 注意事项

- 只有当 `isValid === false` 时才显示错误图标
- 手动设置的 `append-inner-icon` 会覆盖自动错误图标
- 设置 `:auto-error-icon="false"` 可禁用此功能

