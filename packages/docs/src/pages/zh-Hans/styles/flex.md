---
meta:
  title: 弹性布局 (Flex)
  description: Flex 辅助类允许你修改flexbox的父/子布局
  keywords: flex 辅助类, flex 类, vuetify flex
related:
  - /styles/display/
  - /components/grids/
  - /styles/css-reset/
features:
  report: true
---

# 弹性布局（Flex）

可以通过纵向对齐，横向对其以及其他的响应式的弹性盒子 (flexbox) 辅助类来控制弹性容器 (flex container) 的布局。

<PageFeatures />

| 类                                  | 属性值                                                         |
| ---------------------------------- | ----------------------------------------------------------- |
| **d-flex**                         | display: flex;                                              |
| **d-inline-flex**                  | display: inline-flex;                                       |
| **d-sm-flex**                      | display: flex;                                              |
| **d-sm-inline-flex**               | display: inline-flex;                                       |
| **d-md-flex**                      | display: flex;                                              |
| **d-md-inline-flex**               | display: inline-flex;                                       |
| **d-lg-flex**                      | display: flex;                                              |
| **d-lg-inline-flex**               | display: inline-flex;                                       |
| **d-xl-flex**                      | display: flex;                                              |
| **d-xl-inline-flex**               | display: inline-flex;                                       |
| **flex-fill**                      | flex: 1 1 auto;                                             |
| **flex-sm-fill**                   | flex: 1 1 auto;                                             |
| **flex-md-fill**                   | flex: 1 1 auto;                                             |
| **flex-lg-fill**                   | flex: 1 1 auto;                                             |
| **flex-xl-fill**                   | flex: 1 1 auto;                                             |
| **flex-1-1**                       | flex: 1 1 0%;                                               |
| **flex-sm-1-1**                    | flex: 1 1 0%;                                               |
| **flex-md-1-1**                    | flex: 1 1 0%;                                               |
| **flex-lg-1-1**                    | flex: 1 1 0%;                                               |
| **flex-xl-1-1**                    | flex: 1 1 0%;                                               |
| **flex-1-0**                       | flex: 1 0 0%;                                               |
| **flex-sm-1-0**                    | flex: 1 0 0%;                                               |
| **flex-md-1-0**                    | flex: 1 0 0%;                                               |
| **flex-lg-1-0**                    | flex: 1 0 0%;                                               |
| **flex-xl-1-0**                    | flex: 1 0 0%;                                               |
| **flex-0-1**                       | flex: 0 1 auto;                                             |
| **flex-sm-0-1**                    | flex: 0 1 auto;                                             |
| **flex-md-0-1**                    | flex: 0 1 auto;                                             |
| **flex-lg-0-1**                    | flex: 0 1 auto;                                             |
| **flex-xl-0-1**                    | flex: 0 1 auto;                                             |
| **flex-0-0**                       | flex: 0 0 auto;                                             |
| **flex-sm-0-0**                    | flex: 0 0 auto;                                             |
| **flex-md-0-0**                    | flex: 0 0 auto;                                             |
| **flex-lg-0-0**                    | flex: 0 0 auto;                                             |
| **flex-xl-0-0**                    | flex: 0 0 auto;                                             |
| **flex-1-1-0**                     | flex: 1 1 0%;                                               |
| **flex-sm-1-1-0**                  | flex: 1 1 0%;                                               |
| **flex-md-1-1-0**                  | flex: 1 1 0%;                                               |
| **flex-lg-1-1-0**                  | flex: 1 1 0%;                                               |
| **flex-xl-1-1-0**                  | flex: 1 1 0%;                                               |
| **flex-1-1-100**                   | flex: 1 1 100%;                                             |
| **flex-sm-1-1-100**                | flex: 1 1 100%;                                             |
| **flex-md-1-1-100**                | flex: 1 1 100%;                                             |
| **flex-lg-1-1-100**                | flex: 1 1 100%;                                             |
| **flex-xl-1-1-100**                | flex: 1 1 100%;                                             |
| **flex-1-0-0**                     | flex: 1 0 0%;                                               |
| **flex-sm-1-0-0**                  | flex: 1 0 0%;                                               |
| **flex-md-1-0-0**                  | flex: 1 0 0%;                                               |
| **flex-lg-1-0-0**                  | flex: 1 0 0%;                                               |
| **flex-xl-1-0-0**                  | flex: 1 0 0%;                                               |
| **flex-1-0-100**                   | flex: 1 0 100%;                                             |
| **flex-sm-1-0-100**                | flex: 1 0 100%;                                             |
| **flex-md-1-0-100**                | flex: 1 0 100%;                                             |
| **flex-lg-1-0-100**                | flex: 1 0 100%;                                             |
| **flex-xl-1-0-100**                | flex: 1 0 100%;                                             |
| **flex-0-1-0**                     | flex: 0 1 0%;                                               |
| **flex-sm-0-1-0**                  | flex: 0 1 0%;                                               |
| **flex-md-0-1-0**                  | flex: 0 1 0%;                                               |
| **flex-lg-0-1-0**                  | flex: 0 1 0%;                                               |
| **flex-xl-0-1-0**                  | flex: 0 1 0%;                                               |
| **flex-0-1-100**                   | flex: 0 1 100%;                                             |
| **flex-sm-0-1-100**                | flex: 0 1 100%;                                             |
| **flex-md-0-1-100**                | flex: 0 1 100%;                                             |
| **flex-lg-0-1-100**                | flex: 0 1 100%;                                             |
| **flex-xl-0-1-100**                | flex: 0 1 100%;                                             |
| **flex-0-0-0**                     | flex: 0 0 0%                                                |
| **flex-sm-0-0-0**                  | flex: 0 0 0%                                                |
| **flex-md-0-0-0**                  | flex: 0 0 0%                                                |
| **flex-lg-0-0-0**                  | flex: 0 0 0%                                                |
| **flex-xl-0-0-0**                  | flex: 0 0 0%                                                |
| **flex-0-0-100**                   | flex: 0 0 100%;                                             |
| **flex-sm-0-0-100**                | flex: 0 0 100%;                                             |
| **flex-md-0-0-100**                | flex: 0 0 100%;                                             |
| **flex-lg-0-0-100**                | flex: 0 0 100%;                                             |
| **flex-xl-0-0-100**                | flex: 0 0 100%;                                             |
| **ga-0**                           | gap: 0;                                                     |
| **ga-1**                           | gap: 4px;                                                   |
| **ga-2**                           | gap: 8px;                                                   |
| **ga-3**                           | gap: 12px;                                                  |
| **ga-4**                           | gap: 16px;                                                  |
| **ga-5**                           | gap: 20px;                                                  |
| **ga-6**                           | gap: 24px;                                                  |
| **ga-7**                           | gap: 28px;                                                  |
| **ga-8**                           | gap: 32px;                                                  |
| **ga-9**                           | gap: 36px;                                                  |
| **ga-10**                          | gap: 40px;                                                  |
| **ga-11**                          | gap: 44px;                                                  |
| **ga-12**                          | gap: 48px;                                                  |
| **ga-13**                          | gap: 52px;                                                  |
| **ga-14**                          | gap: 56px;                                                  |
| **ga-15**                          | gap: 60px;                                                  |
| **ga-16**                          | gap: 64px;                                                  |
| **ga-sm-0**                        | gap: 0;                                                     |
| **ga-sm-1**                        | gap: 4px;                                                   |
| **ga-sm-2**                        | gap: 8px;                                                   |
| **ga-sm-3**                        | gap: 12px;                                                  |
| **ga-sm-4**                        | gap: 16px;                                                  |
| **ga-sm-5**                        | gap: 20px;                                                  |
| **ga-sm-6**                        | gap: 24px;                                                  |
| **ga-sm-7**                        | gap: 28px;                                                  |
| **ga-sm-8**                        | gap: 32px;                                                  |
| **ga-sm-9**                        | gap: 36px;                                                  |
| **ga-sm-10**                       | gap: 40px;                                                  |
| **ga-sm-11**                       | gap: 44px;                                                  |
| **ga-sm-12**                       | gap: 48px;                                                  |
| **ga-sm-13**                       | gap: 52px;                                                  |
| **ga-sm-14**                       | gap: 56px;                                                  |
| **ga-sm-15**                       | gap: 60px;                                                  |
| **ga-sm-16**                       | gap: 64px;                                                  |
| **ga-md-0**                        | gap: 0;                                                     |
| **ga-md-1**                        | gap: 4px;                                                   |
| **ga-md-2**                        | gap: 8px;                                                   |
| **ga-md-3**                        | gap: 12px;                                                  |
| **ga-md-4**                        | gap: 16px;                                                  |
| **ga-md-5**                        | gap: 20px;                                                  |
| **ga-md-6**                        | gap: 24px;                                                  |
| **ga-md-7**                        | gap: 28px;                                                  |
| **ga-md-8**                        | gap: 32px;                                                  |
| **ga-md-9**                        | gap: 36px;                                                  |
| **ga-md-10**                       | gap: 40px;                                                  |
| **ga-md-11**                       | gap: 44px;                                                  |
| **ga-md-12**                       | gap: 48px;                                                  |
| **ga-md-13**                       | gap: 52px;                                                  |
| **ga-md-14**                       | gap: 56px;                                                  |
| **ga-md-15**                       | gap: 60px;                                                  |
| **ga-md-16**                       | gap: 64px;                                                  |
| **ga-lg-0**                        | gap: 0;                                                     |
| **ga-lg-1**                        | gap: 4px;                                                   |
| **ga-lg-2**                        | gap: 8px;                                                   |
| **ga-lg-3**                        | gap: 12px;                                                  |
| **ga-lg-4**                        | gap: 16px;                                                  |
| **ga-lg-5**                        | gap: 20px;                                                  |
| **ga-lg-6**                        | gap: 24px;                                                  |
| **ga-lg-7**                        | gap: 28px;                                                  |
| **ga-lg-8**                        | gap: 32px;                                                  |
| **ga-lg-9**                        | gap: 36px;                                                  |
| **ga-lg-10**                       | gap: 40px;                                                  |
| **ga-lg-11**                       | gap: 44px;                                                  |
| **ga-lg-12**                       | gap: 48px;                                                  |
| **ga-lg-13**                       | gap: 52px;                                                  |
| **ga-lg-14**                       | gap: 56px;                                                  |
| **ga-lg-15**                       | gap: 60px;                                                  |
| **ga-lg-16**                       | gap: 64px;                                                  |
| **ga-xl-0**                        | gap: 0;                                                     |
| **ga-xl-1**                        | gap: 4px;                                                   |
| **ga-xl-2**                        | gap: 8px;                                                   |
| **ga-xl-3**                        | gap: 12px;                                                  |
| **ga-xl-4**                        | gap: 16px;                                                  |
| **ga-xl-5**                        | gap: 20px;                                                  |
| **ga-xl-6**                        | gap: 24px;                                                  |
| **ga-xl-7**                        | gap: 28px;                                                  |
| **ga-xl-8**                        | gap: 32px;                                                  |
| **ga-xl-9**                        | gap: 36px;                                                  |
| **ga-xl-10**                       | gap: 40px;                                                  |
| **ga-xl-11**                       | gap: 44px;                                                  |
| **ga-xl-12**                       | gap: 48px;                                                  |
| **ga-xl-13**                       | gap: 52px;                                                  |
| **ga-xl-14**                       | gap: 56px;                                                  |
| **ga-xl-15**                       | gap: 60px;                                                  |
| **ga-xl-16**                       | gap: 64px;                                                  |
| **flex-row**                       | flex-direction: row;                                        |
| **flex-row-reverse**               | flex-direction: row-reverse;                                |
| **flex-column**                    | flex-direction: column;                                     |
| **flex-column-reverse**            | flex-direction: column-reverse;                             |
| **flex-sm-row**                    | flex-direction: row;                                        |
| **flex-sm-row-reverse**            | flex-direction: row-reverse;                                |
| **flex-sm-column**                 | flex-direction: column;                                     |
| **flex-sm-column-reverse**         | flex-direction: column-reverse;                             |
| **flex-md-row**                    | flex-direction: row;                                        |
| **flex-md-row-reverse**            | flex-direction: row-reverse;                                |
| **flex-md-column**                 | flex-direction: column;                                     |
| **flex-md-column-reverse**         | flex-direction: column-reverse;                             |
| **flex-lg-row**                    | flex-direction: row;                                        |
| **flex-lg-row-reverse**            | flex-direction: row-reverse;                                |
| **flex-lg-column**                 | flex-direction: column;                                     |
| **flex-lg-column-reverse**         | flex-direction: column-reverse;                             |
| **flex-xl-row**                    | flex-direction: row;                                        |
| **flex-xl-row-reverse**            | flex-direction: row-reverse;                                |
| **flex-xl-column**                 | flex-direction: column;                                     |
| **flex-xl-column-reverse**         | flex-direction: column-reverse;                             |
| **justify-start**                  | justify-content: flex-start;                                |
| **justify-end**                    | justify-content: flex-end;                                  |
| **justify-center**                 | justify-content: center;                                    |
| **justify-space-between**          | justify-content: space-between;                             |
| **justify-space-around**           | justify-content: space-around;                              |
| **justify-space-evenly**           | justify-content: space-evenly;                              |
| **justify-sm-start**               | justify-content: flex-start;                                |
| **justify-sm-end**                 | justify-content: flex-end;                                  |
| **justify-sm-center**              | justify-content: center;                                    |
| **justify-sm-space-between**       | justify-content: space-between;                             |
| **justify-sm-space-around**        | justify-content: space-around;                              |
| **justify-sm-space-evenly**        | justify-content: space-evenly;                              |
| **justify-md-start**               | justify-content: flex-start;                                |
| **justify-md-end**                 | justify-content: flex-end;                                  |
| **justify-md-center**              | justify-content: center;                                    |
| **justify-md-space-between**       | justify-content: space-between;                             |
| **justify-md-space-around**        | justify-content: space-around;                              |
| **justify-md-space-evenly**        | justify-content: space-evenly;                              |
| **justify-lg-start**               | justify-content: flex-start;                                |
| **justify-lg-end**                 | justify-content: flex-end;                                  |
| **justify-lg-center**              | justify-content: center;                                    |
| **justify-lg-space-between**       | justify-content: space-between;                             |
| **justify-lg-space-around**        | justify-content: space-around;                              |
| **justify-lg-space-evenly**        | justify-content: space-evenly;                              |
| **justify-xl-start**               | justify-content: flex-start;                                |
| **justify-xl-end**                 | justify-content: flex-end;                                  |
| **justify-xl-center**              | justify-content: center;                                    |
| **justify-xl-space-between**       | justify-content: space-between;                             |
| **justify-xl-space-around**        | justify-content: space-around;                              |
| **justify-xl-space-evenly**        | justify-content: space-evenly;                              |
| **align-start**                    | align-items: flex-start;                                    |
| **align-end**                      | align-items: flex-end;                                      |
| **align-center**                   | align-items: center;                                        |
| **align-baseline**                 | align-items: baseline;                                      |
| **align-stretch**                  | align-items: stretch;                                       |
| **align-sm-start**                 | align-items: flex-start;                                    |
| **align-sm-end**                   | align-items: flex-end;                                      |
| **align-sm-center**                | align-items: center;                                        |
| **align-sm-baseline**              | align-items: baseline;                                      |
| **align-sm-stretch**               | align-items: stretch;                                       |
| **align-md-start**                 | align-items: flex-start;                                    |
| **align-md-end**                   | align-items: flex-end;                                      |
| **align-md-center**                | align-items: center;                                        |
| **align-md-baseline**              | align-items: baseline;                                      |
| **align-md-stretch**               | align-items: stretch;                                       |
| **align-lg-start**                 | align-items: flex-start;                                    |
| **align-lg-end**                   | align-items: flex-end;                                      |
| **align-lg-center**                | align-items: center;                                        |
| **align-lg-baseline**              | align-items: baseline;                                      |
| **align-lg-stretch**               | align-items: stretch;                                       |
| **align-xl-start**                 | align-items: flex-start;                                    |
| **align-xl-end**                   | align-items: flex-end;                                      |
| **align-xl-center**                | align-items: center;                                        |
| **align-xl-baseline**              | align-items: baseline;                                      |
| **align-xl-stretch**               | align-items: stretch;                                       |
| **align-self-start**               | align-self: flex-start;                                     |
| **align-self-end**                 | align-self: flex-end;                                       |
| **align-self-center**              | align-self: center;                                         |
| **align-self-baseline**            | align-self: baseline;                                       |
| **align-self-auto**                | align-self: auto;                                           |
| **align-self-stretch**             | align-self: stretch;                                        |
| **align-self-sm-start**            | align-self: flex-start;                                     |
| **align-self-sm-end**              | align-self: flex-end;                                       |
| **align-self-sm-center**           | align-self: center;                                         |
| **align-self-sm-baseline**         | align-self: baseline;                                       |
| **align-self-sm-auto**             | align-self: auto;                                           |
| **align-self-sm-stretch**          | align-self: stretch;                                        |
| **align-self-md-start**            | align-self: flex-start;                                     |
| **align-self-md-end**              | align-self: flex-end;                                       |
| **align-self-md-center**           | align-self: center;                                         |
| **align-self-md-baseline**         | align-self: baseline;                                       |
| **align-self-md-auto**             | align-self: auto;                                           |
| **align-self-md-stretch**          | align-self: stretch;                                        |
| **align-self-lg-start**            | align-self: flex-start;                                     |
| **align-self-lg-end**              | align-self: flex-end;                                       |
| **align-self-lg-center**           | align-self: center;                                         |
| **align-self-lg-baseline**         | align-self: baseline;                                       |
| **align-self-lg-auto**             | align-self: auto;                                           |
| **align-self-lg-stretch**          | align-self: stretch;                                        |
| **align-self-xl-start**            | align-self: flex-start;                                     |
| **align-self-xl-end**              | align-self: flex-end;                                       |
| **align-self-xl-center**           | align-self: center;                                         |
| **align-self-xl-baseline**         | align-self: baseline;                                       |
| **align-self-xl-auto**             | align-self: auto;                                           |
| **align-self-xl-stretch**          | align-self: stretch;                                        |
| **flex-sm-nowrap**                 | flex-wrap: nowrap;                                          |
| **flex-sm-wrap**                   | flex-wrap: wrap;                                            |
| **flex-sm-wrap-reverse**           | flex-wrap: wrap-reverse;                                    |
| **flex-md-nowrap**                 | flex-wrap: nowrap;                                          |
| **flex-md-wrap**                   | flex-wrap: wrap;                                            |
| **flex-md-wrap-reverse**           | flex-wrap: wrap-reverse;                                    |
| **flex-lg-nowrap**                 | flex-wrap: nowrap;                                          |
| **flex-lg-wrap**                   | flex-wrap: wrap;                                            |
| **flex-lg-wrap-reverse**           | flex-wrap: wrap-reverse;                                    |
| **flex-xl-nowrap**                 | flex-wrap: nowrap;                                          |
| **flex-xl-wrap**                   | flex-wrap: wrap;                                            |
| **flex-xl-wrap-reverse**           | flex-wrap: wrap-reverse;                                    |
| **order-first**                    | order: -1;                                                  |
| **order-0**                        | order: 0;                                                   |
| **order-1**                        | order: 1;                                                   |
| **order-2**                        | order: 2;                                                   |
| **order-3**                        | order: 3;                                                   |
| **order-4**                        | order: 4;                                                   |
| **order-5**                        | order: 5;                                                   |
| **order-6**                        | order: 6;                                                   |
| **order-7**                        | order: 7;                                                   |
| **order-8**                        | order: 8;                                                   |
| **order-9**                        | order: 9;                                                   |
| **order-10**                       | order: 10;                                                  |
| **order-11**                       | order: 11;                                                  |
| **order-12**                       | order: 12;                                                  |
| **order-last**                     | order: 13;                                                  |
| **order-sm-first**                 | order: -1;                                                  |
| **order-sm-0**                     | order: 0;                                                   |
| **order-sm-1**                     | order: 1;                                                   |
| **order-sm-2**                     | order: 2;                                                   |
| **order-sm-3**                     | order: 3;                                                   |
| **order-sm-4**                     | order: 4;                                                   |
| **order-sm-5**                     | order: 5;                                                   |
| **order-sm-6**                     | order: 6;                                                   |
| **order-sm-7**                     | order: 7;                                                   |
| **order-sm-8**                     | order: 8;                                                   |
| **order-sm-9**                     | order: 9;                                                   |
| **order-sm-10**                    | order: 10;                                                  |
| **order-sm-11**                    | order: 11;                                                  |
| **order-sm-12**                    | order: 12;                                                  |
| **order-sm-last**                  | order: 13;                                                  |
| **order-md-first**                 | order: -1;                                                  |
| **order-md-0**                     | order: 0;                                                   |
| **order-md-1**                     | order: 1;                                                   |
| **order-md-2**                     | order: 2;                                                   |
| **order-md-3**                     | order: 3;                                                   |
| **order-md-4**                     | order: 4;                                                   |
| **order-md-5**                     | order: 5;                                                   |
| **order-md-6**                     | order: 6;                                                   |
| **order-md-7**                     | order: 7;                                                   |
| **order-md-8**                     | order: 8;                                                   |
| **order-md-9**                     | order: 9;                                                   |
| **order-md-10**                    | order: 10;                                                  |
| **order-md-11**                    | order: 11;                                                  |
| **order-md-12**                    | order: 12;                                                  |
| **order-md-last**                  | order: 13;                                                  |
| **order-lg-first**                 | order: -1;                                                  |
| **order-lg-0**                     | order: 0;                                                   |
| **order-lg-1**                     | order: 1;                                                   |
| **order-lg-2**                     | order: 2;                                                   |
| **order-lg-3**                     | order: 3;                                                   |
| **order-lg-4**                     | order: 4;                                                   |
| **order-lg-5**                     | order: 5;                                                   |
| **order-lg-6**                     | order: 6;                                                   |
| **order-lg-7**                     | order: 7;                                                   |
| **order-lg-8**                     | order: 8;                                                   |
| **order-lg-9**                     | order: 9;                                                   |
| **order-lg-10**                    | order: 10;                                                  |
| **order-lg-11**                    | order: 11;                                                  |
| **order-lg-12**                    | order: 12;                                                  |
| **order-lg-last**                  | order: 13;                                                  |
| **order-xl-first**                 | order: -1;                                                  |
| **order-xl-0**                     | order: 0;                                                   |
| **order-xl-1**                     | order: 1;                                                   |
| **order-xl-2**                     | order: 2;                                                   |
| **order-xl-3**                     | order: 3;                                                   |
| **order-xl-4**                     | order: 4;                                                   |
| **order-xl-5**                     | order: 5;                                                   |
| **order-xl-6**                     | order: 6;                                                   |
| **order-xl-7**                     | order: 7;                                                   |
| **order-xl-8**                     | order: 8;                                                   |
| **order-xl-9**                     | order: 9;                                                   |
| **order-xl-10**                    | order: 10;                                                  |
| **order-xl-11**                    | order: 11;                                                  |
| **order-xl-12**                    | order: 12;                                                  |
| **order-xl-last**                  | order: 13;                                                  |
| **align-content-start**            | align-content: flex-start;                                  |
| **align-content-end**              | align-content: flex-end;                                    |
| **align-content-center**           | align-content: center;                                      |
| **align-content-space-between**    | align-content: space-between;                               |
| **align-content-space-around**     | align-content: space-around;                                |
| **align-content-space-evenly**     | align-content: space-evenly;                                |
| **align-content-stretch**          | align-content: stretch;                                     |
| **align-content-sm-start**         | align-content: flex-start;                                  |
| **align-content-sm-end**           | align-content: flex-end;                                    |
| **align-content-sm-center**        | align-content: center;                                      |
| **align-content-sm-space-between** | align-content: space-between;                               |
| **align-content-sm-space-around**  | align-content: space-around;                                |
| **align-content-sm-space-evenly**  | align-content: space-evenly;                                |
| **align-content-sm-stretch**       | align-content: stretch;                                     |
| **align-content-md-start**         | align-content: flex-start;                                  |
| **align-content-md-end**           | align-content: flex-end;                                    |
| **align-content-md-center**        | align-content: center;                                      |
| **align-content-md-space-between** | align-content: space-between;                               |
| **align-content-md-space-around**  | align-content: space-around;                                |
| **align-content-md-space-evenly**  | align-content: space-evenly;                                |
| **align-content-md-stretch**       | align-content: stretch;                                     |
| **align-content-lg-start**         | align-content: flex-start;                                  |
| **align-content-lg-end**           | align-content: flex-end;                                    |
| **align-content-lg-center**        | align-content: center;                                      |
| **align-content-lg-space-between** | align-content: space-between;                               |
| **align-content-lg-space-around**  | align-content: space-around;                                |
| **align-content-lg-space-evenly**  | align-content: space-evenly;                                |
| **align-content-lg-stretch**       | align-content: stretch;                                     |
| **align-content-xl-start**         | align-content: flex-start;                                  |
| **align-content-xl-end**           | align-content: flex-end;                                    |
| **align-content-xl-center**        | align-content: center;                                      |
| **align-content-xl-space-between** | align-content: space-between;                               |
| **align-content-xl-space-around**  | align-content: space-around;                                |
| **align-content-xl-space-evenly**  | align-content: space-evenly;                                |
| **align-content-xl-stretch**       | align-content: stretch;                                     |
| **flex-nowrap**                    | flex-wrap: nowrap;                                          |
| **flex-wrap**                      | flex-wrap: wrap;                                            |
| **flex-wrap-reverse**              | flex-wrap: wrap-reverse;                                    |
| **flex-grow-0**                    | flex-grow: 0;                                               |
| **flex-grow-1**                    | flex-grow: 1;                                               |
| **flex-shrink-0**                  | flex-shrink: 0;                                             |
| **flex-shrink-1**                  | flex-shrink: 1;                                             |
| **flex-sm-grow-0**                 | flex-grow: 0;                                               |
| **flex-md-grow-0**                 | flex-grow: 0;                                               |
| **flex-lg-grow-0**                 | flex-grow: 0;                                               |
| **flex-xl-grow-0**                 | flex-grow: 0;                                               |
| **flex-sm-grow-1**                 | flex-grow: 1;                                               |
| **flex-md-grow-1**                 | flex-grow: 1;                                               |
| **flex-lg-grow-1**                 | flex-grow: 1;                                               |
| **flex-xl-grow-1**                 | flex-grow: 1;                                               |
| **flex-sm-shrink-0**               | flex-shrink: 0;                                             |
| **flex-md-shrink-0**               | flex-shrink: 0;                                             |
| **flex-lg-shrink-0**               | flex-shrink: 0;                                             |
| **flex-xl-shrink-0**               | flex-shrink: 0;                                             |
| **flex-sm-shrink-1**               | flex-shrink: 1;                                             |
| **flex-md-shrink-1**               | flex-shrink: 1;                                             |
| **flex-lg-shrink-1**               | flex-shrink: 1;                                             |
| **flex-xl-shrink-1**               | flex-shrink: 1; { style="max-height: 420px;" fixed-header } |

<VoPromotionsCardVuetify />

## 启用 flexbox

使用 `display` 实用工具，您可以将任何元素转换为 flexbox 容器，并将 **直接子元素** 转换为 flex 项目。使用额外的 flex 属性实用工具，您甚至可以进一步自定义它们的交互。

<ExamplesExample file="flex/flexbox" />

<ExamplesExample file="flex/flexbox-inline" />

您还可以基于各种断点应用自定义的 flex 工具类。

### 注意

::: info
需要注意的是，使用上述任何 display 类将导致之前添加的任何显示样式被覆盖。这是因为这些类在其显示样式中使用了 `!important`。
:::

## Flex 速记

flex 实用类可以用来修改 **flex** CSS属性。这使得在 flex 容器内定位 flex 项目变得容易。

<ExamplesExample file="flex/flex-flex" />

## Flex 方向

默认情况下，`d-flex` 应用了 `flex-direction: row`，通常可以省略。然而，可能存在您需要显式定义它的情况。

<ExamplesExample file="flex/flex-direction" />

`flex-column` 和 `flex-column-reverse` 是用来改变 flexbox 容器方向的实用类。

<ExamplesExample file="flex/flex-column" />

## Flex 横轴对齐

可以使用 flex justify 类来更改 `justify-content` 的 flex 设置。默认情况下，这将在 **x轴** 上修改 flexbox 项目，但在使用 `flex-direction: column` 时会反转，修改 **y轴**。您可以选择 `start`（浏览器默认值）、`end`、`center`、`space-between`、`space-around` 或 `space-evenly`。

<ExamplesExample file="flex/flex-justify" />

## Flex 纵轴对齐

可以使用 flex align 类来更改 `align-items` 的 flex 设置。默认情况下，这将在 **y轴** 上修改 flexbox 项目，但在使用 `flex-direction: column` 时会反转，修改 **x轴**。您可以选择 `start`、`end`、`center`、`baseline` 或 `stretch`（浏览器默认值）。

<ExamplesExample file="flex/flex-align" />

## Flex 自对齐

可以使用 flex align-self 类来更改 `align-self` 的 flex 设置。默认情况下，这将在 **y轴** 上修改单个 flexbox 项目，但在使用 `flex-direction: column` 时会反转，修改 **x轴**。您可以选择 `start`、`end`、`center`、`baseline`、`stretch` 或 `auto`（浏览器默认值，应用来自 flex 容器的 align-items 属性）。

<ExamplesExample file="flex/flex-align-self" />

## 自动边距

在flexbox容器中使用 `flex-row` 或 `flex-column` 这样的边距辅助类, 你可以分别控制 flex 项目在 **x轴** 和 **y轴** 上的位置.

<ExamplesExample file="flex/margins" />

### 使用 align-items

混合 `flex-direction: column` 和 `align-items`, 你可以利用 `.mt-auto` 和 `.mb-auto` 辅助类来调整 flex 项目的位置.

<ExamplesExample file="flex/margins-align-items" />

## Flex 堆叠

默认情况下，`.d-flex` 不提供任何换行（行为类似于 `flex-wrap: nowrap`）。这可以通过应用格式为 `flex-{condition}` 的 flex-wrap 辅助类来修改，其中 condition 可以是 `nowrap`、`wrap` 或 `wrap-reverse`。

<ExamplesExample file="flex/flex-nowrap" />

<ExamplesExample file="flex/flex-wrap" />

<ExamplesExample file="flex/flex-wrap-reverse" />

这些辅助类也可以以 `flex-{breakpoint}-{condition}` 的格式应用，以创建基于断点的更多响应式变体。以下组合是可用的：

## Flex 排序

您可以使用 `order` 工具类改变 flex 项目的视觉排序.

<ExamplesExample file="flex/flex-order" />

## Flex 内容对齐

可以使用 flex align-content 类来更改 `align-content` 的 flex 设置。默认情况下，这将在 **y轴** 上修改换行的 flexbox 内容，但在使用 `flex-direction: column` 时会反转，修改 **x轴**。您可以选择 `start`、`end`、`center`、`space-between`、`space-around`、`space-evenly` 或 `stretch`（浏览器默认值）。

<ExamplesExample file="flex/flex-align-content-start" />

<ExamplesExample file="flex/flex-align-content-end" />

<ExamplesExample file="flex/flex-align-content-center" />

<ExamplesExample file="flex/flex-align-content-between" />

<ExamplesExample file="flex/flex-align-content-around" />

## Flex 增长系数和收缩系数

Vuetify 提供了辅助类来手动应用扩展和收缩。这些可以通过添加格式为 `flex-{condition}-{value}` 的辅助类来应用，其中 condition 可以是 `grow` 或 `shrink`，value 可以是 `0` 或 `1`。condition `grow` 将允许元素扩展以填充可用空间，而 `shrink` 将允许元素收缩到仅需要其内容的空间。然而，这只会在元素必须收缩以适应其容器时发生，例如容器大小调整或受到 `flex-grow-1` 的影响。值 `0` 将阻止条件发生，而 `1` 将允许条件。以下是可用的类：

<ExamplesExample file="flex/grow-shrink" />

这些辅助类也可以以 `flex-{breakpoint}-{condition}-{state}` 的格式应用，以创建基于断点的更多响应式变体。以下是可用的组合：
