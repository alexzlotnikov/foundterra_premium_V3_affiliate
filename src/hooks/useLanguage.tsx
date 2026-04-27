import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getContentByLanguage, type SiteContent } from '@/content/siteContent';

type Language = 'en' | 'he' | 'ru';

interface LanguageContextType {
  language: Language;
  content: SiteContent;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getLanguageFromPath = (): Language => {
  if (typeof window === 'undefined') return 'en';
  return window.location.pathname.startsWith('/he') ? 'he' : 'en';
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getLanguageFromPath());
  const content = getContentByLanguage(language);

  useEffect(() => {
    const syncFromPath = () => {
      const detected = getLanguageFromPath();
      setLanguage((prev) => (prev === detected ? prev : detected));
    };

    syncFromPath();
    window.addEventListener('popstate', syncFromPath);
    return () => window.removeEventListener('popstate', syncFromPath);
  }, []);

  useEffect(() => {
    document.documentElement.dir = language === 'he' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, content, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
