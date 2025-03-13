---
meta:
  nav: 图像 (Images)
  title: Image 图像
  description: 图像组件提供一个灵活的接口，用于显示不同类型的图像。
  keywords: 图像，vuetify 图像组件，vue 图像组件
related:
  - /components/grids
  - /components/aspect-ratios
  - /components/parallax
features:
  github: /components/VImg/
  label: 'C: VImg'
  report: true
---

# 图像 (Images)

The `v-img` component is packed with features to support rich media. Combined with the [vuetify-loader](https://github.com/vuetifyjs/vuetify-loader), you can add dynamic progressive images to provide a better user experience.

<PageFeatures />

## 使用

`v-img` 组件用于显示具有延迟加载和占位符的响应图像。

<ExamplesUsage name="v-img" />

<PromotedEntry />

## API

| 组件                   | 描述   |
| -------------------- | ---- |
| [v-img](/api/v-img/) | 主要组件 |

<ApiInline hide-links />

## 注意

::: warning
**lazy-src** 属性在没有提供 **height** 和 **aspect-ratio** 属性时不会生效。因为图像容器需要一个非零的高度来渲染临时的图像。
:::

## 示例

### 属性

#### 图像填充 (Cover)

If the provided aspect ratio doesn't match that of the actual image, the default behavior is to fill as much space as possible without cropping. To fill the entire available space use the `cover` prop.

<ExamplesExample file="v-img/prop-cover" />

#### 高度

`v-img` will automatically grow to the size of its `src`, preserving the correct aspect ratio. You can limit this with the `height` and `max-height` props.

<ExamplesExample file="v-img/prop-max-height" />

#### Gradient

The `gradient` prop can be used to apply a simple gradient overlay to the image. More complex gradients should be written as a class on the content slot instead.

<ExamplesExample file="v-img/prop-gradient" />

### 插槽

#### 占位符

`v-img` has a special `placeholder` slot for placeholder to display while image's loading. Note: the example below has bad src which won't load for you to see placeholder.

<ExamplesExample file="v-img/slot-placeholder" />

#### 出错

`v-img` has an `error` slot that can be used to display alternative content if an error occurs while loading your source image. A common use for this slot is to load a fallback image if your original image is not available.

<ExamplesExample file="v-img/slot-error" />

### 其他

#### 未来的图片格式

By default `v-img` will render a basic `<img>` element. If you want to use `.webp` images with a fallback for older browsers, you can pass a list of `<source>` elements to the `sources` slot:

```html
<v-img src="image.jpeg">
  <template #sources>
    <source srcset="image.webp">
  </template>
</v-img>
```

类似于：

```html
<picture>
  <source srcset="image.webp">
  <img src="image.jpeg">
</picture>
```

`srcset` 和 `media` 属性可以用作改变图像大小。具体请参考 [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)。

#### 栅格

您可以使用 `v-img` 来展示图片库。

<ExamplesExample file="v-img/misc-grid" />

#### 复杂的栅格布局

使用 `flex-box` 绘制更为复杂布局的图片库。

<ExamplesExample file="v-img/complex-grid" />
