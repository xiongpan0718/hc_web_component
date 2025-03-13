---
meta:
  title: 蓝图
  description: 用预制或自定义的样式和设计风格配置整个应用程序
  keywords: vuetify 蓝图, vuetify 预设, vuetify 方案
related:
  - /features/global-configuration/
  - /features/theme/
  - /features/display-and-platform/
features:
  report: true
---

# 蓝图

Vuetify 蓝图是一种为整个应用程序预配置不同的设计系统的新方法。

<PageFeatures />

<PromotedEntry />

## 使用

蓝图是 Vuetify 配置选项的集合，可为组件、颜色、语言等指定默认值。打开项目的 `vuetify.js` 文件并导入所需的蓝图。下面的示例演示了如何应用 [Material Design 1](#material-design-1) 预设：

```js { resource=plugins/vuetify.js }
import { createVuetify } from 'vuetify'
import { md1 } from 'vuetify/blueprints'

export default createVuetify({
  blueprint: md1,
})
```

### 空白标签概念

虽然 Vuetify 是在 Google 的 [Material Design](https://material.io) 规范的掩盖下构建的，但它仍然足够灵活，可用作任何设计系统的基础。默认情况下，Vuetify 组件没有颜色，其本质是**white-label**。white-label 产品是指由一家公司生产的产品或服务，由其他公司进行品牌重塑，使其看起来像是自己生产的。

## 可用蓝图

| 名称                                      | 发布时间 | 支持状态 | 资源                           |
| --------------------------------------- | ---- | ---- | ---------------------------- |
| [Material Design 1](#material-design-1) | 2014 | ✅ 可用 | [规格](https://m1.material.io) |
| [Material Design 2](#material-design-2) | 2017 | ✅ 可用 | [规格](https://m2.material.io) |
| [Material Design 3](#material-design-3) | 2022 | ✅ 可用 | [规格](https://m3.material.io) |

::: error

蓝图需要使用工具类才能正常运行。

:::

### Material Design 1

最初的 Material Design 设计规格在 2014 年发布，目的是创造一种将原则、设计和创新结合起来的视觉语言。

```javascript { resource=plugins/vuetify.js }
import { md1 } from 'vuetify/blueprints'
```

**预览：**

<ExamplesExample preview file="blueprints/md1" />

### Material Design 2

于 2017 年发布，第 2 版的设计规范获得了大量的新组件更新。 并且以极为成功的第一版设计规范为基础，修改了指导原则。

```javascript { resource=plugins/vuetify.js }
import { md2 } from 'vuetify/blueprints'
```

**预览：**

<ExamplesExample preview file="blueprints/md2" />

### Material Design 3

Material Design 3 目前正在积极开发中，它代表了谷歌的设计系统的新篇章。

```javascript { resource=plugins/vuetify.js }
import { md3 } from 'vuetify/blueprints'
```

**预览：**

<ExamplesExample preview file="blueprints/md3" />
