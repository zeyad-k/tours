// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationAR from "../locales/ar.json";
import translationEN from "../locales/en.json";
import translationDe from "../locales/de.json";

i18n.use(initReactI18next).init({
  interpolation: { escapeValue: false },
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: translationEN,
    },
    ar: {
      translation: translationAR,
    },
    de: {
      translation: translationDe,
  },
},
});

export default i18n;
