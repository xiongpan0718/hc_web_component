import { createApp } from "vue";
import App from "./App.vue";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createHcComponent, createThemeConfig, createIconConfig, createHcI18nConfig } from "../src";
import { devI18n } from "./pages/locales/devI18n";
import "../src/styles/index.scss";
import "vuetify/styles";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { createI18n, useI18n } from "vue-i18n";

const hcMessages = createHcI18nConfig();
const messages = Object.fromEntries(
	Object.keys(hcMessages).map((locale) => {
		const dev = devI18n[locale] ?? devI18n.en;
		return [locale, { ...hcMessages[locale], ...dev }];
	}),
);

const i18n = createI18n({
	legacy: false,
	locale: 'en',
	fallbackLocale: 'en',
	messages,
});

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives,
  theme: createThemeConfig(),
  icons: createIconConfig({
    // size: 20
  }),
  // add defaults
  defaults: {
    HcAutocomplete: {
      menuIcon: "expand_more",
      variant: "outlined",
      density: "compact",
      maxLength: 2,
    },
    HcTextarea: {
      variant: "outlined",
    },
    HcTextField: {
      variant: "outlined",
      density: "compact",
    },
    VAutocomplete: {
      menuIcon: "expand_more",
    },
    VChip: {
      closeIcon: "cancel",
    },
    VTextarea: {
      variant: "outlined",
      noResize: true,
    },
    VSelect: {
      menuIcon: "expand_more",
      variant: "outlined",
    },
    VTextField: {
      variant: "outlined",
      density: "compact",
    },
  },
  // add language support
  locale: {
		adapter: createVueI18nAdapter({
			i18n,
			useI18n: useI18n as any,
		}),
	},
});
const hcComponent = createHcComponent();

app.use(i18n);
app.use(vuetify);
app.use(hcComponent);

app.mount("#app");
