/**
 * HC Component Locale Configuration
 * 组件库国际化配置
 *
 * Merges Vuetify locale with HC component translations for each supported language.
 * 为每种支持的语言合并 Vuetify 语言包与组件库翻译。
 */

// Import HC component translation dictionaries
// 导入组件库翻译字典
import en from './lang/en.json'
import zhHans from './lang/zhHans.json'
import zhHant from './lang/zhHant.json'
import pl from './lang/pl.json'
import pt from './lang/pt.json'
import es from './lang/es.json'
import fr from './lang/fr.json'
import de from './lang/de.json'
import ro from './lang/ro.json'

// Import Vuetify locale packages
// 导入 Vuetify 语言包
import {
  en as vuetifyEn,
  zhHans as vuetifyZhHans,
  zhHant as vuetifyZhHant,
  pt as vuetifyPt,
  pl as vuetifyPl,
  es as vuetifyEs,
  fr as vuetifyFr,
  de as vuetifyDe,
  ro as vuetifyRo,
} from 'vuetify/locale'

/**
 * HC component translation dictionaries
 * 组件库翻译字典
 */
const hcTranslations = {
  en,
  zhHans,
  zhHant,
  pl,
  pt,
  es,
  fr,
  de,
  ro,
}

/**
 * Vuetify locale mapping
 * Vuetify 语言包映射
 */
const vuetifyLocales = {
  en: vuetifyEn,
  zhHans: vuetifyZhHans,
  zhHant: vuetifyZhHant,
  pt: vuetifyPt,
  pl: vuetifyPl,
  es: vuetifyEs,
  fr: vuetifyFr,
  de: vuetifyDe,
  ro: vuetifyRo,
}

/**
 * Create complete translation dictionary for all supported languages
 * 创建包含所有支持语言的完整翻译字典
 *
 * Each locale merges Vuetify translations ($vuetify) with HC component messages.
 * 每种语言会合并 Vuetify 翻译 ($vuetify) 与组件库消息。
 *
 * @returns Messages object for vue-i18n
 * @returns 供 vue-i18n 使用的 messages 对象
 */
export function createHcI18nConfig() {
  const messages: Record<string, any> = {}

  for (const locale of Object.keys(hcTranslations)) {
    const vuetifyLocale = vuetifyLocales[locale as keyof typeof vuetifyLocales] || vuetifyLocales.en
    const hcMessages = hcTranslations[locale as keyof typeof hcTranslations] || hcTranslations.en

    messages[locale] = {
      $vuetify: vuetifyLocale,
      ...hcMessages,
    }
  }

  return messages
}
