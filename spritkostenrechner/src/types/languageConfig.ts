import { DE } from "../constants/de";
import { EN } from "../constants/en";
import type { LanguageKey } from "./types";


export const LANGUAGES = {
  en: EN,
  de: DE,
};

export const DEFAULT_LANGUAGE: LanguageKey = "en";

export const getLanguage = (lang: string): typeof EN => {
  return LANGUAGES[lang as LanguageKey] || LANGUAGES[DEFAULT_LANGUAGE];
};