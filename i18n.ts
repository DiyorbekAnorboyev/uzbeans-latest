import { createInstance, i18n } from 'i18next'
import { initReactI18next } from 'react-i18next/initReactI18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import i18nConfig from './next-i18next.config'

export default async function initTranslations (
  locale: string,
  namespaces: string[],
  i18nInstance?: i18n,
  resources?: any
) {
  i18nInstance = i18nInstance || createInstance()

  i18nInstance.use(initReactI18next)

  if (!resources) {
    i18nInstance.use(
      resourcesToBackend(
        (language: string, namespace: string) =>
          import(`./locales/${language}/${namespace}.json`)
      )
    )
  }

  await i18nInstance.init({
    lng: locale,
    resources,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    defaultNS: namespaces[0],
    fallbackNS: namespaces[0],
    ns: namespaces,
    preload: resources ? [] : i18nConfig.locales
  })

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t
  }
}

// import { createInstance, i18n } from "i18next";
// import { initReactI18next } from "react-i18next/initReactI18next";
// import resourcesToBackend from "i18next-resources-to-backend";
// import i18nConfig from "./next-i18next.config";

// let globalI18n: i18n | null = null; // Global instance yaratamiz

// export default async function initTranslations(locale: string, namespaces: string[]) {
//   if (!globalI18n) {
//     globalI18n = createInstance();
//     globalI18n.use(initReactI18next);

//     globalI18n.use(
//       resourcesToBackend((language:string, namespace:string) =>
//         import(`./locales/${language}/${namespace}.json`)
//       )
//     );

//     await globalI18n.init({
//       lng: locale || i18nConfig.defaultLocale,
//       fallbackLng: i18nConfig.defaultLocale,
//       supportedLngs: i18nConfig.locales,
//       defaultNS: namespaces[0],
//       ns: namespaces,
//       preload: false, // Faqat kerakli til yuklanadi
//     });
//   }

//   return {
//     i18n: globalI18n,
//     resources: globalI18n.services.resourceStore.data,
//     t: globalI18n.t,
//   };
// }
