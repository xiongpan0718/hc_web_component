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


<h2>Run command</h2>
<p>pnpm i</p>
<p>pnpm build vuetify</p>

<p>The Vuetify library is located in packages/vuetify.</p>
<p>CD packages/vuetify enter the project</p>
<p>There is a pages folder in packages/vuetify/dev</p>
<p>components:Each component demo, named after the component name</p>
<p>home：Introduce in the components component to supplement the items and list variables</p>
<p>Note: The ID in items must be consistent with the key in the list, as well as the variable introduced into the component</p>
<p>Pnpm dev will start a development server on localhost: 8090 and load this file.</p>

<h2>directory structure</h2>
<p>src directory</p>
<p>The component is written in the components directory and has an instance VTest. It needs to be introduced in the index.js directory under the components directory</p>
<p>The style file is written in styles/CSS, and a new directory is named after the component name and introduced in the index</p>
<p>All styles require a. v-theme Michelin class package</p>
in compliance with：
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
<p>At present, we use the form of style overlay for processing. In the future, we can try to modify the SASS variable or overwrite the SASS variable for processing</p>
<h3>The following, but not limited to, have not been studied yet and need to be gradually researched</h3>
<p>locale</p>
<p>directives</p>
<p>icons</p>

