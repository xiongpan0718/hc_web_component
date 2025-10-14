# HcTextarea

基于 Vuetify `v-textarea` 的二次封装组件，自动在验证失败时显示错误图标。

## 特性

- ✅ 完全继承 `VTextarea` 的所有 API
- ✅ 自动在验证失败时显示错误图标
- ✅ 可自定义错误图标
- ✅ 手动设置的 `append-inner-icon` 优先级更高

## 基础用法

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

## 新增 Props

| 属性名 | 类型 | 默认值 | 说明 |
|--------|------|--------|------|
| `autoErrorIcon` | `boolean` | `true` | 是否在验证失败时自动显示错误图标 |
| `errorIcon` | `string` | `'error_outline'` | 自定义错误图标名称 |

## API

支持所有 VTextarea 的 props、events 和 slots。详见 [Vuetify VTextarea 文档](https://vuetifyjs.com/en/components/textareas/)。

## 使用示例

### 自定义错误图标

```vue
<HcTextarea 
  v-model="comment"
  :rules="[v => !!v || 'Required']" 
  label="Comment"
  error-icon="warning"
/>
```

### 禁用自动错误图标

```vue
<HcTextarea 
  v-model="description"
  :rules="[v => !!v || 'Required']" 
  label="Description"
  :auto-error-icon="false"
/>
```

### 手动设置 append-inner-icon

```vue
<HcTextarea 
  v-model="notes"
  :rules="[v => !!v || 'Required']" 
  label="Notes"
  append-inner-icon="edit"
/>
<!-- 手动设置的图标优先级更高，不会被错误图标覆盖 -->
```

### 多行文本

```vue
<HcTextarea 
  v-model="content"
  :rules="[v => !!v || 'Required']" 
  label="Content"
  rows="5"
  auto-grow
/>
```

### 带字符计数

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

### 复杂验证

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

## 与 VTextarea 的区别

HcTextarea 会在验证失败时自动显示错误图标，无需手动绑定。

```vue
<!-- VTextarea - 需要手动处理 -->
<v-textarea
  ref="textareaRef"
  :rules="rules"
  :append-inner-icon="textareaRef?.isValid === false ? 'error_outline' : undefined"
/>

<!-- HcTextarea - 自动处理 -->
<HcTextarea :rules="rules" />
```

## 注意事项

- 只有当 `isValid === false` 时才显示错误图标
- 手动设置的 `append-inner-icon` 会覆盖自动错误图标
- 设置 `:auto-error-icon="false"` 可禁用此功能

