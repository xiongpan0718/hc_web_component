<p align="center">
  <a href="https://vuetifyjs.com" target="_blank">
    <img alt="Vuetify Logo" width="100" src="https://cdn.vuetifyjs.com/images/logos/logo.svg">
  </a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vuetify">
    <img src="https://img.shields.io/npm/dt/vuetify.svg" alt="Downloads">
  </a>
  <a href="https://www.npmjs.com/package/vuetify">
    <img src="https://img.shields.io/npm/dm/vuetify.svg" alt="Downloads">
  </a>
  <br>
  <a href="https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/vuetify.svg" alt="License">
  </a>
  <a href="https://community.vuetifyjs.com">
    <img src="https://discordapp.com/api/guilds/340160225338195969/widget.png" alt="Chat">
  </a>
  <br>
  <a href="https://www.npmjs.com/package/vuetify">
    <img src="https://img.shields.io/npm/v/vuetify.svg" alt="Version">
  </a>
  <a href="https://cdnjs.com/libraries/vuetify">
    <img src="https://img.shields.io/cdnjs/v/vuetify.svg" alt="CDN">
  </a>
</p>


<h2>运行命令</h2>
<p>pnpm i</p>
<p>pnpm build vuetify</p>

<p>Vuetify 库位于 packages/vuetify 中。</p>
<p>cd packages/vuetify 进入项目</p>
<p>在 packages/vuetify/dev 中你将找到一个 Playground.vue 文件；这是开发测试页面</p>
<p>pnpm dev 将在 localhost:8090 上启动一个开发服务器，并加载此文件。</p>

<h2>目录结构</h2>
<p>src 目录</p>
<p>组件写在components 有个实例VTest，需要在components目录下的index.js中引入</p>
<p>样式文件写在styles/css中，新增目录以组件名命名并在index中引入</p>
<p>所有样式都需要.v-theme--michelin class包裹</p>
如：
<code>
.v-theme--michelin{
    .v-btn{
      &--disabled{
        &.v-btn--variant-elevated{
          background: #E5E5E5;
          color: #999999;
          .v-btn__overlay{
            background: unset;
          }
        }
    }
}
</code>
<p>目前采用样式覆盖的形式处理，后面可以尝试修改sass变量或者覆盖sass变量的形式处理</p>
<h3>以下但不限于这些暂没有研究，有需要慢慢研究</h3>
<p>locale：国际化</p>
<p>directives：指令</p>
<p>iconsets：icon</p>

<h2>需要修改源码部分</h2>
<h3>Icons</h3>
<p>1.目前不支持不支持组件库自身内置icon图标，无法做到内置icon</p>
<h3>EmptyState</h3>
<p>1.目前不支持布局调整，原型需要支持上下和左右布局，组件只支持上下布局，不支持左右布局</p>
<p>2.不支持状态图片内置，无法内置原型涉及的自定义状态图片</p>
<h3>Alert</h3>
<p>1.icon图标根据类型自动显示对应状态图标，组件使用的icon和原型不匹配，无法更改</p>
<h3>Snackbar</h3>
<p>1.组件不支持通过属性在文本前自定义icon标签</p>
<h3>Svg</h3>
<p>1.组件仅支持字体库字体，不支持内置svg文件</p>
<h3>autocomplete</h3>
<p>获取焦点后，label位置在边框线上，无法修改</p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>

