import { createApp } from 'vue'
import App from './App.vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { createHcComponent, createThemeConfig, createIconConfig } from '../src'
import '../dist/styles/index.css'
import 'vuetify/styles'

const app = createApp(App)
const vuetify = createVuetify({
  components,
  directives,
  theme: createThemeConfig(),
  icons: createIconConfig({
    size: 20
  })
 })
const hcComponent = createHcComponent()

app.use(vuetify)
app.use(hcComponent)

app.mount('#app')