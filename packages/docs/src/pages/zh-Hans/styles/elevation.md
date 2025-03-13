---
meta:
  title: 强调效果 (Elevation)
  description: 海拔辅助类允许你控制两个平面之间沿 Z 轴的相对深度或距离。
  keywords: 海拔辅助类、海拔类、Vuetify 海拔
related:
  - /components/cards/
  - /components/sheets/
  - /components/bottom-navigation/
---

# 强调效果 (Elevation)

Elevation 辅助类允许你在**z轴**方向上控制两个元素之间地相对深度，或者说距离。共有 25 种强调效果。可以通过设定元素的 class 为 `elevation-{n}`，其中 `n` 为 0-24 的整数，来实现对应高度的强调效果。

<PageFeatures />

| 类                | Properties                                                   |
| ---------------- | ------------------------------------------------------------ |
| **elevation-0**  | elevation: 0px;                                              |
| **elevation-1**  | elevation: 1px;                                              |
| **elevation-2**  | elevation: 2px;                                              |
| **elevation-3**  | elevation: 3px;                                              |
| **elevation-4**  | elevation: 4px;                                              |
| **elevation-5**  | elevation: 5px;                                              |
| **elevation-6**  | elevation: 6px;                                              |
| **elevation-7**  | elevation: 7px;                                              |
| **elevation-8**  | elevation: 8px;                                              |
| **elevation-9**  | elevation: 9px;                                              |
| **elevation-10** | elevation: 10px;                                             |
| **elevation-11** | elevation: 11px;                                             |
| **elevation-12** | elevation: 12px;                                             |
| **elevation-13** | elevation: 13px;                                             |
| **elevation-14** | elevation: 14px;                                             |
| **elevation-15** | elevation: 15px;                                             |
| **elevation-16** | elevation: 16px;                                             |
| **elevation-17** | elevation: 17px;                                             |
| **elevation-18** | elevation: 18px;                                             |
| **elevation-19** | elevation: 19px;                                             |
| **elevation-20** | elevation: 20px;                                             |
| **elevation-21** | elevation: 21px;                                             |
| **elevation-22** | elevation: 22px;                                             |
| **elevation-23** | elevation: 23px;                                             |
| **elevation-24** | elevation: 24px; { style="max-height: 420px;" fixed-header } |

<PromotedEntry />

## 使用

`海拔` 助手类允许您为任何元素分配一个自定义 **z-deep**。

<ExamplesExample file="elevation/usage" />

## 示例

### 属性

#### 动态强调效果

Numerous components utilize the **elevatable** mixin and are given an **elevation** prop. For components that are not supported, you can dynamically change the class

<ExamplesExample file="elevation/prop-dynamic" />
