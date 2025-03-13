---
meta:
  title: 浏览器支持
  description: Vuetify 是一个支持所有主流浏览器的渐进框架。
  keywords: vuetify 浏览器支持
related:
  - /getting-started/installation/
  - /introduction/why-vuetify/
  - /features/sass-variables/
---

# 浏览器支持

Vuetify 3 是下一代框架，它利用了最新的 web 技术功能，需要使用主流浏览器才能运行。

<PageFeatures />

<VoPromotionsCardVuetify />

## 浏览器

这里有经过测试的的浏览器列表（但不是全部）。如果你使用的浏览器不在这个列表里，那它就不是被正式支持的。

| 浏览器名称                      | 支持状态              |
| -------------------------- | ----------------- |
| Chromium 90 (Chrome, Edge) | ✅ 支持 <sup>*</sup> |
| Firefox 88                 | ✅ 支持 <sup>*</sup> |
| Safari 15                  | ✅ 支持              |
| Edge <79                   | ⛔ 不支持             |
| Internet Explorer          | ⛔ 不支持             |
| 其它浏览器                      | ❓ 不被官方支持          |

<p class="text-caption">* 所有的iOS的浏览器都使用了WebKit并且和Safari的支持是相同的</p>

此表格会随着 Vuetify 的次要版本更新而更新。Chrome，Firefox 以及 Safari 的支持从 Vuetify x.x.0 的释出日期至少往后两年。 当前版本的起始日期是 2021 年 5 月。

额外的 [polyfills](https://cdnjs.cloudflare.com/polyfill/) 和 [PostCSS 插件](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-logical)也可以支持较旧的浏览器，但尚未测试，也不作保证。如果您需要支持旧版浏览器，我们建议使用 Vuetify 2。
