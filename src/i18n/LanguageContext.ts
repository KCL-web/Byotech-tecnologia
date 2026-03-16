import { createContext } from 'react';
import type { Language, TranslationKeys } from './translations';

export interface LanguageContextType {
    lang: Language;
    t: TranslationKeys;
    setLang: (lang: Language) => void;
    toggleLang: () => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined,
);
