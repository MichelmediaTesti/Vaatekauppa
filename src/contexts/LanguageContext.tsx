import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'fi' | 'en';

interface Translations {
  [key: string]: {
    fi: string;
    en: string;
  };
}

const translations: Translations = {
  // Header
  'nav.home': { fi: 'Etusivu', en: 'Home' },
  'nav.categories': { fi: 'Kategoriat', en: 'Categories' },
  'nav.contact': { fi: 'Yhteystiedot', en: 'Contact' },
  
  // Hero
  'hero.title': { fi: 'Naisten palveleva kenkäkauppa vuodesta 2001', en: "Women's Full-Service Shoe Shop Since 2001" },
  'hero.subtitle': { fi: 'Laadukkaat kengät ja laukut jokaiseen makuun.', en: 'Quality shoes and bags for every taste.' },
  'hero.cta': { fi: 'Tutustu valikoimaan', en: 'Browse Collection' },
  
  // Categories
  'categories.title': { fi: 'Kategoriat', en: 'Categories' },
  'category.pumps': { fi: 'Avokkaat ja balleriinat', en: 'Pumps & Ballerinas' },
  'category.sneakers': { fi: 'Kävelykengät ja tennarit', en: 'Walking Shoes & Sneakers' },
  'category.boots': { fi: 'Saappaat ja nilkkurit', en: 'Boots & Ankle Boots' },
  'category.sandals': { fi: 'Sandaalit', en: 'Sandals' },
  'category.bags': { fi: 'Laukut', en: 'Bags' },
  'category.back': { fi: 'Takaisin', en: 'Back' },
  'category.sortBy': { fi: 'Järjestä', en: 'Sort by' },
  'category.sortDefault': { fi: 'Oletus', en: 'Default' },
  'category.sortPriceAsc': { fi: 'Hinta: halvin ensin', en: 'Price: Low to High' },
  'category.sortPriceDesc': { fi: 'Hinta: kallein ensin', en: 'Price: High to Low' },
  'category.sortName': { fi: 'Nimi', en: 'Name' },
  'category.noProducts': { fi: 'Ei tuotteita tässä kategoriassa.', en: 'No products in this category.' },
  
  // Featured Products
  'featured.title': { fi: 'Suositut tuotteet', en: 'Featured Products' },
  'featured.viewAll': { fi: 'Näytä kaikki', en: 'View All' },
  'product.quickView': { fi: 'Pikanäkymä', en: 'Quick View' },
  
  // Quick View
  'quickView.addToCart': { fi: 'Lisää ostoskoriin', en: 'Add to Cart' },
  
  // About
  'about.title': { fi: 'Tervetuloa Vaatekauppaan', en: 'Welcome to Vaatekauppa' },
  'about.text1': { fi: 'Vaatekauppa on vuonna 2001 perustettu naisten kenkiin erikoistunut myymälä Mikkelin keskustassa.', en: 'Vaatekauppa is a women\'s shoe boutique founded in 2001, located in the heart of Mikkeli.' },
  'about.text2': { fi: 'Tuotteemme ovat tarkkaan valittuja ja testattuja yksilöitä, jokaiseen makuun.', en: 'Our products are carefully selected and tested, for every taste.' },
  'about.cta': { fi: 'Tervetuloa ostoksille!', en: 'Welcome to shop with us!' },
  
  // Footer
  'footer.address': { fi: 'Osoite', en: 'Address' },
  'footer.contact': { fi: 'Yhteystiedot', en: 'Contact' },
  'footer.hours': { fi: 'Aukioloajat', en: 'Opening Hours' },
  'footer.weekdays': { fi: 'Ma-Pe 10-17.30', en: 'Mon-Fri 10:00-17:30' },
  'footer.saturday': { fi: 'La 10-14.00', en: 'Sat 10:00-14:00' },
  'footer.rights': { fi: 'Kaikki oikeudet pidätetään.', en: 'All rights reserved.' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('fi');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
