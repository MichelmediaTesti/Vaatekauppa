import { useState } from 'react';
import { Search, Heart, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { key: 'category.pumps', href: '#pumps' },
    { key: 'category.sneakers', href: '#sneakers' },
    { key: 'category.boots', href: '#boots' },
    { key: 'category.sandals', href: '#sandals' },
    { key: 'category.bags', href: '#bags' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="logo-script text-3xl text-primary">Antilop</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.home')}
            </a>
            
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                {t('nav.categories')}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-popover border border-border shadow-elegant">
                {categories.map((cat) => (
                  <DropdownMenuItem key={cat.key} asChild>
                    <a
                      href={cat.href}
                      className="cursor-pointer hover:text-primary"
                    >
                      {t(cat.key)}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#contact"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('nav.contact')}
            </a>
          </nav>

          {/* Right side icons */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === 'fi' ? 'en' : 'fi')}
              className="text-xs font-semibold uppercase px-2 py-1 rounded border border-border hover:bg-accent transition-colors"
            >
              {language === 'fi' ? 'EN' : 'FI'}
            </button>

            <button className="p-2 hover:bg-accent rounded-full transition-colors hidden sm:flex">
              <Search className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors hidden sm:flex">
              <Heart className="h-5 w-5 text-foreground" />
            </button>
            <button className="p-2 hover:bg-accent rounded-full transition-colors">
              <ShoppingBag className="h-5 w-5 text-foreground" />
            </button>

            {/* Mobile menu button */}
            <button
              className="p-2 md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col gap-4">
              <a
                href="#"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {t('nav.home')}
              </a>
              <div className="space-y-2">
                <span className="text-sm font-semibold text-muted-foreground">
                  {t('nav.categories')}
                </span>
                {categories.map((cat) => (
                  <a
                    key={cat.key}
                    href={cat.href}
                    className="block pl-4 text-base text-foreground hover:text-primary transition-colors"
                  >
                    {t(cat.key)}
                  </a>
                ))}
              </div>
              <a
                href="#contact"
                className="text-base font-medium text-foreground hover:text-primary transition-colors"
              >
                {t('nav.contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
