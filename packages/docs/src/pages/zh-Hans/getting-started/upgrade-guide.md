---
emphasized: true
meta:
  nav: 升级指南
  title: 升级指南
  description: 关于如何将 Vuetify 升级到 3.0 的详细说明。
  keywords: 迁移, 升级, 发布, 升级 vuetify, alpha, v3
related:
  - /introduction/roadmap/
  - /introduction/long-term-support/
  - /introduction/enterprise-support/
---

# 升级指南

本页面包含了一个详细的破坏性变动的列表，以及如何将你的应用升级到 Vuetify 3.0 所需的步骤。

<PageFeatures />

::: error
<span class="text-h6">此页面中的许多问题，可以使用 [eslint-plugin-vuetify](https://www.npmjs.com/package/eslint-plugin-vuetify/) 插件完成。</span>
:::

::: info

在升级 Vuetify 3 之前，请参考确认官方的 [ Vue 3 升级指导](https://v3-migration.vuejs.org/)。

:::

::: warning
并非所有的 Vuetify 2 的组件在 Vuetify 3 中都可用；这些组件会在 [Vuetify 实验室](https://vuetifyjs.com/en/labs/introduction/) 中开发并释出。

- [calendar](https://github.com/vuetifyjs/vuetify/issues/13469)
- [overflow-btn](https://github.com/vuetifyjs/vuetify/issues/13493)
- [time-picker](https://github.com/vuetifyjs/vuetify/issues/13516)
:::

## 起步

- **Vuetify** 类已删除，现在使用的是 **createVuetify** 函数。

```js { resource="2.x" }
Vue.use(Vuetify)

const vuetify = new Vuetify({ ... })

const app = new Vue({
  vuetify,
  ...
})
```

```js { resource="3.0" }
const app = createApp()

const vuetify = createVuetify({ ... })

app.use(vuetify)
```

- 现在一般使用 `import ... from 'vuetify'` 单独导入所需的内容，为了导入全部内容，请导入`'vuetify/dist/vuetify.js'` （不推荐）
- `'vuetify/lib'` 不再被使用，请根据情况更改为使用 `'vuetify'` 、 `'vuetify/components'` 、 `'vuetify/directives'` 之一
- 仅组件样式会被导入，全局样式必须从 `'vuetify/styles'` 单独导入。
- [vuetify-loader](https://npmjs.com/package/vuetify-loader) 已更名为 [webpack-plugin-vuetify](https://npmjs.com/package/webpack-plugin-vuetify)，我们还有一个新的 [vite-plugin-vuetify](https://npmjs.com/package/vite-plugin-vuetify) 插件用于vite 。

## 特性

### 布局

- 不再包含以前作为 `.v-application p` 或 `.v-application ul` 包含的全局样式。如果您需要 `p` 的 margin 或 `ul` 和 `ol` 的 padding-left，请在根组件的 `<style>` 标记中手动设置。
- 已从 v-navigation-drawer、v-app-bar 和 v-system-bar 中移除 `stateless`, `clipped`, `clipped-right` 和 `app` 等 props。标记中的位置决定了外观。使用`order="number"` prop 可手动影响其位置。
- `$vuetify.breakpoint` 已更名为 `$vuetify.display`，并拓展了 [新的属性](/features/display-and-platform/)。
  - `*Only` 属性已被移除，请使用 `xs` 而不是 `xsOnly` 等。

### 主题

- 现在支持多个主题，因此已从组件中移除 `light` / `dark` 属性。使用 `v-theme-provider` 为特定的组件树设置主题。
  - 先前有 `dark` 属性的组件，如 v-app-bar，现在使用 `theme="dark"` prop。
- 主题颜色会自动设置前景文字颜色， 如果您正在使用 `light` / `dark` 来获得不同的文本颜色，您可能不再需要它。
- 变式命名办法略有变化，现在只是一个词，而不是两个词。 例如， `primary darken-1` 现在是`primary-darken-1`.
  - 要使用可变命名作为 `color` prop的值，您需要在 `theme.variations.colors` 下的theme中启用您打算使用的变体。. e.g: `colors: ['primary']`
- 颜色类已重命名：
  - Backgrounds have a `bg-` prefix, for example `.primary` is now `.bg-primary`.
  - 文本颜色有一个 `text-` 前缀，例如， `.primary--text` 现在是 `.text-primary`。
  - 变量不再是一个单独的类，例如 `.primary--text.text-darken-1` 现在是 `.text-primary-darken-1`。
- 主题系统现在内部使用 CSS 变量，所以 `customProperties` 不再需要。
  - If you were using `customProperties` in v2, the naming scheme has changed from `--v-primary-base` to `--v-theme-primary`.
  - 自定义属性现在也是一个 rgb 列表，而不是十六进制，因此访问它们必须使用 `rgb()` or `rgba()`， 例如 `color: rgb(var(--v-theme-primary))` 而不是 `color: var(--v-primary-base)`。
- 主题配置中的主题颜色现在嵌套在 `colors` 属性内，例如： `const myTheme = { theme: { themes: { light: { colors: { primary: '#ccc' } } } } }`。

### SASS 变量

- `$headings` was merged with `$typography`: Access font-size of subtitle-2 with `map-get($typography, 'subtitle-2', 'size')`
- 如果您在v2版本中从 `~vuetify/src/styles/settings/_variables`导入了变量，现在则必须使用 `vuetify/settings` 替代。
- Component variables that previously lived in e.g. `~/vuetify/src/components/VIcon/VIcon.sass` can now be imported from `vuetify/settings` directly too.
- `$display-breakpoints` no longer includes `{breakpoint}-only` variables (e.g. xs-only), use `@media #{map-get(v.$display-breakpoints, 'xs')}` instead.
- `$transition` 映射已被移除，请使用独立的 `$standard-easing`、`$decelerated-easing`、`$accelerated-easing` 变量替代。
- `$container-padding-x` is now 16px instead of 12px as in v2. You can replace it with `$spacer * 3` to get to the previous look.
- Too many component variables to list have been renamed or removed. There is no automated way to update these as the element structure has changed significantly, you will need to manually update these along with any custom styles.

### 样式和实用类

- `.hidden-{breakpoint}-only` has been renamed to `.hidden-{breakpoint}`
- `.text-xs-{alignment}` has been renamed to `.text-{alignment}` to reflect the fact that it applies to all breakpoints.
- Typography classes have been renamed for consistency and are all prefixed with `text-`, for example `.display-4` is now `.text-h1`
- Transition easing classes have been removed.

:::info
无法提供完整的类更改列表, 请使用 [eslint-plugin-vuetify](https://www.npmjs.com/package/eslint-plugin-vuetify/) 自动修复它们。
:::

## 组件

### 常规更改

- `value` prop has been replaced by `model-value` on components that support `v-model` usage. (Vue 3 requires this change)
  - Note that this does not apply to `value` used as a *selection value*, for example `v-btn` within `v-btn-toggle`.
- `@input` event has been replaced by `@update:model-value` on components that support `v-model` usage. (Vue 3 requires this change)
- `left` and `right` have been replaced by `start` and `end` respectively. This applies to utility classes too, for example `.rounded-r` is now `.rounded-e`.
- 尺寸 props `small` / `medium` / `large` 等已合并为一个 `size` prop。
- `absolute` 和 `fixed` props 已合并为一个 `position` prop。
- `top` / `bottom` / `left` / `right` props 已合并为一个 `location` prop。
- `background-color` prop 已更名为 `bg-color`。
- 在诸如 v-select、v-btn-toggle、v-alert、v-text-field、v-list 和 v-list-item 等组件上，`dense` prop 已更改为 `density` prop，其可选值有 `default`、`comfortable`、`compact`。
- Activator slots work slightly different. Replace `#activator={ attrs, on }` with `#activator={ props }`, then remove `v-on="on"` and replace `v-bind="attrs"` with `v-bind="props"`
- Some components have structural changes in their markup. Which means you may have to change how you query and assert them in tests. `v-switch` for example now uses an `<input type="checkbox" />` under the hood, which is why the `aria-checked` and `aria-role="switch"` attributes were removed.

### Input组件

- Affix slots are consistent now:
  - `prepend` and `prepend-inner` are the same.
  - `append` has been renamed to `append-inner`.
  - `append-outer` has been renamed to `append`.
- 变量 props `filled`/`outlined`/`solo` 已合并为一个 `variant` prop。
  - 可用的值有 `'underlined'`、 `'outlined'`、 `'filled'`、 `'solo'`，或 `'plain'`。
- `success` 和 `success-messages` props 已被删除。
- `validate-on-blur` prop 已更名为 `validate-on="blur"`。

### v-alert

- `border` prop values `left` and `right` have been renamed to `start` and `end`.
- `colored-border` 属性已更名为 `border-color`。
- `dismissable` 属性已更名为 `closable`。
- `outlined` 和 `text` 属性已合并为 `variant` 属性。
  - 允许的值有 `'elevated'`、`'flat'`、`'tonal'`、`'outlined'`、`'text'`或 `'plain'`。
- `text` 属性有新的用途。它用于代表警告的文字内容，如果保持默认则其不起作用。

### v-badge

- `overlap` has been removed and is now the default style, use `floating` to restore the v2 default.
- 翻译 props 的 `mode` 和 `original` 已被移除。
- `avatar` prop 不再需要，并已被移除。

### v-banner

- The `actions` slot no longer provides a dismiss function.
- `shaped` prop has been removed.
- `icon-color` has been removed.
- `single-line` has been replaced with `lines="one"`.
- `color` now applies to the icon and action text. Use `bg-color` to change the background color.

### v-btn/v-btn-toggle

- `active-class` prop has been renamed to `selected-class`
- `fab` is no longer supported. If you just need a round button, use `icon` prop or apply a `.rounded-circle` class.
- `flat` / `outlined` / `text` / `plain` props 已合并为一个 `variant` prop。
- `depressed` 已更名为 `variant=“flat”`。
- `retain-focus-on-click` 已被移除，使用 [`:focus-visible`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:focus-visible) 代替。
- `v-btn-toggle` 需要 `mandatory=“force”` prop 来实现与 v2 中的 `mandatory` prop 相同的行为。
- 禁用的按钮会使用指定 `color` 的褪色变体而不是灰色（[#15147](https://github.com/vuetifyjs/vuetify/issues/15147)）。
  - 将 sass 变量 `$button-colored-disabled` 设置为 false 以使用灰色。

### v-checkbox/v-radio/v-switch

- `input-value` prop has been renamed to `model-value`. (Vue 3 requires this change)
- `on-icon` 和 `off-icon` props 已更名为 `true-icon` 和 `false-icon`。
- `on-value` 和 `off-value` props 已更名为 `true-value` 和 `false-value`。
- `v-checkbox` 的 slot 标签不应该再包含一个 `<label>` ，因为它已经包装了一个了。

### v-date-picker

- Uses `Date` objects instead of strings. Some utility functions are included to help convert between the two, see [dates](/features/dates/).
- `locale`, `locale-first-day-of-year`, `first-day-of-week`, `day-format`, `weekday-format`, `month-format`, `year-format`, `header-date-format`, and `title-date-format` are now part of the date adapter and use the globally configured [locale](/features/internationalization/) instead of being passed as props.
- `active-picker` has been renamed to `view-mode`.
- `picker-date` has been replaced with separate `month` and `year` props.
- `range` is not currently implemented, will be added as a separate component in the future.

### v-form

- `validate()` now returns a [`Promise<FormValidationResult>`](/api/v-form/#exposed-validate) instead of a boolean. Await the promise then check `result.valid` to determine form state.

### v-list

- `two-line` and `three-line` props have been combined into a single `lines` prop with allowed values `'two'` or `'three'`.
- `v-list-item-group` has been removed, assign the item's key to the `value` prop of each `v-list-item` and bind `v-model:selected` on the `v-list` to get the selected value.
- `v-list-item-icon` and `v-list-item-avatar` have been removed, use `v-list-item` with `icon` or `avatar` props, or put an icon or avatar in the append or prepend slot.
- `v-list-item-content` has been removed, lists use CSS grid for layout now instead.
- `v-list-group` can now be nested arbitrarily deep, `sub-group` prop should be removed.
- `v-list-item` `input-value` prop has been replaced with `active`.
- `v-list-item` `inactive` prop has been replaced with `:active="false" :link="false"`.
- `v-subheader`  has been renamed to `v-list-subheader`.
- `v-list-item`'s `active` scoped slot prop has been renamed to `isActive`

### v-navigation-drawer

- `stateless` prop has been removed, manually control state using `model-value` or `v-model` instead.

### v-rating

- `color` has been renamed to `active-color`.
- `background-color` has been renamed to `color`.

### v-select/v-combobox/v-autocomplete

- v-model values not present in `items` will now be rendered instead of being ignored.
- `cache-items` prop has been removed, caching should be handled externally.
- `item-text` has been renamed to `item-title`, and now looks up the `title` property on item objects by default. `value` is unchanged.
- `item-disabled` has been removed, and `disabled`, `header`, `divider`, and `avatar` properties are ignored on item objects.
  - Additional props to pass to `v-list-item` can be specified with the `item-props` prop. `item-props` can be a function that takes the item object and returns an object of props, or set to boolean `true` to spread item objects directly as props.
- The `item` object in slots is now an `ListItem` object, the original item object is available as `item.raw`.
- The `item` slot will no longer generate a `v-list-item` component automatically, instead a `props` object is supplied with the required event listeners and props:

```html
  <template #item="{ props }">
    <v-list-item v-bind="props"></v-list-item>
  </template>
```

- The `chip` slot should be used instead of `selection` if the `chips` prop is set, this will provide some default values to the chips automatically.
- Non-`multiple` combobox will now update its model as you type (like a text field) instead of only on blur.

### v-simple-table

- `v-simple-table` has been renamed to `v-table`

### v-stepper (vertical)

- `v-stepper-step` has been renamed to `v-stepper-vertical-item`. Move content into the **title** slot.
- `v-stepper-content` has been removed. Move content to the default slot of `v-stepper-vertical-item`.

### v-data-table

- Headers objects:
  - `text` property has been renamed to `title`.
  - `data-table-select` and `data-table-expand` must be defined as `key` instead of `value`.
  - `class` has been replaced with `headerProps`.
  - `cellClass` has been replaced with `cellProps` and now accepts either a function or an object.
  - `filter` function requires `search` to be used in order for it to be triggered.
- Tables requires `search` prop to trigger filtering. `items` array can be pre-filter with a computed.
- Server side tables using `server-items-length` must be replaced with `<v-data-table-server items-length />`.
- Argument order for `@click:*` events is now consistently `(event, data)`.
  - `onRowClick (item, data, event)` should be changed to `onRowClick (event, { item })`.
- `item-class` and `item-style` have been combined into `row-props`, and `cell-props` has been added.
- `sort-desc` and `group-desc` have been combined into `sort-by` and `group-by`. These properties now take an array of `{ key: string, order: 'asc' | 'desc' }` objects instead of strings.
- `current-items` event has been renamed to `update:current-items`.
- `custom-sort` can now be done using the **sort** key in the headers object or by using the `custom-key-sort` prop.

### v-slider/v-range-slider

- `ticks` has been renamed to `show-ticks`.
- `tick-labels` has been renamed to `ticks`.
- `vertical` has been renamed to `direction="vertical"`.
- `step` default value is now 0 instead of 1.

### v-tabs

- `v-tab-item` 已被移除，请使用 `v-window-item` 替代。

### v-img

- `contain` has been removed and is now the default behaviour. Use `cover` to fill the entire container.

### v-menu

- `rounded` prop has been removed. Apply a rounded css class to the menu content element instead. e.g. `.rounded-te`
- `internal-activator` prop has been removed, use a ref or unique selector instead.
- `absolute`, `offset-y` and `offset-x` props have been removed. Manual positioning is now done by passing a `[x, y]` array to the `target` prop.
- `nudge-*` props have been removed. There is no direct replacement but `offset` can be used to achieve similar results.

### v-snackbar

- `action` 插槽已更名为 `actions`。

### v-expansion-panel

- `v-expansion-panel-header` 已更名为 `v-expansion-panel-title`。
- `v-expansion-panel-content` 已更名为 `v-expansion-panel-text`。
- `v-expansion-panel` 现在提供 `text` 和 `title` props 以替代subcomponents。

### v-card

- `v-card` 现在不允许内容溢出元素或是使用更大的 `z-index` 值来使元素显示在它的外面。要禁止这个行为，可以使用 `<v-card style="overflow: initial; z-index: initial">`([#17593](https://github.com/vuetifyjs/vuetify/issues/17593), [#17628](https://github.com/vuetifyjs/vuetify/issues/17628))

### v-sparkline

- `value` 现在是 `model-value`

## 指令

### v-intersect

- Handler argument order has changed from `entries, observer, isIntersecting` to `isIntersecting, entries, observer`
