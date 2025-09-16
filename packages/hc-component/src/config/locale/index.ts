// 导入组件库翻译字典
import en from './lang/en.json'
import zhHans from './lang/zhHans.json'
import pl from './lang/pl.json'
import pt from './lang/pt.json'

// 导入 Vuetify 语言包
import { en as vuetifyEn, zhHans as vuetifyZhHans, pt as vuetifyPt, pl as vuetifyPl } from 'vuetify/locale'

/**
 * 组件库翻译字典
 */
const hcTranslations = {
  en,
  zhHans,
  pl,
  pt
}

/**
 * Vuetify 语言包映射
 */
const vuetifyLocales = {
  en: vuetifyEn,
  zhHans: vuetifyZhHans,
  pt: vuetifyPt,
  pl: vuetifyPl
}

/**
 * 创建完整的翻译字典
 * @returns 包含所有语言的翻译字典
 */
export function createHcI18nConfig() {
  // 合并所有语言的翻译
  const messages: Record<string, any> = {}
  
  // 为每种支持的语言创建翻译
  for (const locale of Object.keys(hcTranslations)) {
    const vuetifyLocale = vuetifyLocales[locale as keyof typeof vuetifyLocales] || vuetifyLocales.en
    const hcMessages = hcTranslations[locale as keyof typeof hcTranslations] || hcTranslations.en
    
    messages[locale] = {
      // Vuetify 翻译
      $vuetify: vuetifyLocale,
      // 组件库翻译
      ...hcMessages,
    }
  }

  return messages
}
