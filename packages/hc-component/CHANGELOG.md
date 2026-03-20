## 更新日志

查看 [CHANGELOG.md](./CHANGELOG.md) 了解详细的版本更新记录。

## 版本信息

当前版本：`0.2.6-SNAPSHOT.1`

### 最新更新 (v0.2.6-SNAPSHOT.1)
- ✨ `HcAutocomplete` 组件新增 `showAdvanceSearch` 和 `advanceSearch`（`v-model:advanceSearch`）属性，支持在无数据和有结果时底部显示高级搜索开关
- ✨ `HcFilter` 组件新增 `allowCollapse`、`collapseRows`（收起时显示行数，默认 1）、`defaultCollapsed`（初始收起状态，默认 true）属性，支持展开/收起筛选区域

### 历史更新 (v0.2.5-SNAPSHOT.1)
- ✨ `HcAutocomplete` 组件新增 `maxDisplayItems` 属性，支持限制下拉选项显示数量，超出时展示提示信息
- 🌐 新增西班牙语 (es) 和法语 (fr) 语言支持
- ✨ 新增 `HcDateInput` 组件，基于 Vuetify Labs `VDateInput` 封装，支持验证失败时自动显示错误图标

### 历史更新 (v0.2.4-SNAPSHOT.1)
- 🌐 轮位图新增翻译字段

### 历史更新 (v0.2.3-SNAPSHOT.6)
- ✨ 为 `HcTableBar` 组件添加 `data-testid` 属性，支持自动化测试
- 🔧 优化了 `HcTableBar` 组件

### 历史更新 (v0.2.3-SNAPSHOT.5)
- 🔧 修复了 `VNumberInput` 组件，及通用input组件的样式问题

### 历史更新 (v0.2.3-SNAPSHOT.4)
- 🔧 修复了 `HcAlert` 组件的样式问题

### 历史更新 (v0.2.3-SNAPSHOT.3)
- 🔧 修复了 `HcTextarea` 组件显示时 label 与内容重合的问题

### 历史更新 (v0.2.3-SNAPSHOT.2)
- 🔧 修复了 `HcFilter` 组件的悬浮背景问题

### 历史更新 (v0.2.3-SNAPSHOT.1)
- 🎨 更新了 `HcVehicleSchema` 组件中 `observationLevel` 对应的样式映射关系
- 🎨 优化了 `HcVehicleSchema` 和 `HcWheelSchema` 组件中备胎列表的布局，支持一行最多显示3个并自动换行
- 🔧 修复了 `HcAutocomplete`、`HcTextarea`、`HcTextField` 组件，支持 Vuetify defaults 配置

### 历史更新 (v0.2.2-SNAPSHOT.1)
- 🔧 修复了 `HcProgressLinear` 组件的 TypeScript 类型报错问题
- ✨ `HcTireIcon` 组件已暴露可用，支持通过 `size` 属性自定义图标尺寸（默认 16px）

### 历史更新 (v0.2.1-SNAPSHOT.5)
- ✨ 新增 `HcProgressLinear` 组件，支持尺寸配置（small/medium/large）、标签文本、标题文本、图标显示和点击事件

### 历史更新 (v0.2.1-SNAPSHOT.4)
- ✨ 新增 `HcDialog` 组件，支持标题、图标、关闭按钮和自定义按钮配置
- ✨ 新增 `HcExpansionPanels` 组件，支持 Switch 开关控制面板展开/收起状态
- 🎨 新增 `ButtonToggle` 组件样式定制
- 🎨 优化了 `ExpansionPanels`、`Divider`、`Switch` 等组件的样式

### 历史更新 (v0.2.1-SNAPSHOT.3)
- 🚀 升级 Vuetify 依赖从 `3.7.16` 到 `3.10.8`
- ⬆️ 升级 Vue 依赖从 `3.4.38` 到 `3.5.0`（Vuetify 3.10.8 要求 Vue ^3.5.0）

### 历史更新 (v0.2.1-SNAPSHOT.1)
- 🔧 修复了 `HcFilter` 组件双向绑定问题，支持 `v-model:is-expand` 正确响应手动展开/收起操作

### 历史更新 (v0.2.0-SNAPSHOT.13)
- 🐛 修复了 `HcTire` 组件中 `observationLevel` 响应式问题
- 🎨 优化了图标资源处理，采用内联 base64 方式避免静态资源路径问题

### 历史更新 (v0.2.0-SNAPSHOT.11)
- 🔧 改进了组件方法暴露机制，支持 `validate`、`reset` 等方法

### 历史更新 (v0.2.0-SNAPSHOT.10)
- ✨ 重新封装了 `HcAutocomplete`、`HcTextarea`、`HcTextField` 组件，支持自动错误图标显示（仅在验证失败时）
- 🚀 更新了 `HcVehicleSchema` 组件