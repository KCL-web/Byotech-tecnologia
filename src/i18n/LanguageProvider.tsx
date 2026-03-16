import React, { useState, useCallback } from 'react';
import { translations, type Language } from './translations';
import { LanguageContext } from './LanguageContext';

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [lang, setLangState] = useState<Language>(() => {
        const saved = localStorage.getItem('byotec-lang');
        return (saved === 'en' ? 'en' : 'pt') as Language;
    });

    const setLang = useCallback((newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('byotec-lang', newLang);
        document.documentElement.lang = newLang;
    }, []);

    const toggleLang = useCallback(() => {
        setLang(lang === 'pt' ? 'en' : 'pt');
    }, [lang, setLang]);

    return (
        <LanguageContext.Provider
            value={{ lang, t: translations[lang], setLang, toggleLang }}
        >
            {children}
        </LanguageContext.Provider>
    );
};
