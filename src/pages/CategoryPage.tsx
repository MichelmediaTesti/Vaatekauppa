import { useParams, Link } from 'react-router-dom';
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { getProductsByCategory } from '@/data/products';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useState } from 'react';

const CategoryPageContent = () => {
  const { category } = useParams<{ category: string }>();
  const { t } = useLanguage();
  const [sortBy, setSortBy] = useState('default');

  const categoryKey = `category.${category}`;
  const categoryTitle = t(categoryKey);
  
  let products = getProductsByCategory(category || '');

  // Sort products
  if (sortBy === 'price-asc') {
    products = [...products].sort((a, b) => {
      const priceA = parseFloat((a.salePrice || a.price).replace(',', '.').replace(' €', ''));
      const priceB = parseFloat((b.salePrice || b.price).replace(',', '.').replace(' €', ''));
      return priceA - priceB;
    });
  } else if (sortBy === 'price-desc') {
    products = [...products].sort((a, b) => {
      const priceA = parseFloat((a.salePrice || a.price).replace(',', '.').replace(' €', ''));
      const priceB = parseFloat((b.salePrice || b.price).replace(',', '.').replace(' €', ''));
      return priceB - priceA;
    });
  } else if (sortBy === 'name') {
    products = [...products].sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-6 gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              {t('category.back')}
            </Button>
          </Link>

          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
              {categoryTitle}
            </h1>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder={t('category.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">{t('category.sortDefault')}</SelectItem>
                <SelectItem value="price-asc">{t('category.sortPriceAsc')}</SelectItem>
                <SelectItem value="price-desc">{t('category.sortPriceDesc')}</SelectItem>
                <SelectItem value="name">{t('category.sortName')}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Grid */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <ProductCard
                    product={product}
                    image={product.image}
                    brand={product.brand}
                    name={product.name}
                    price={product.price}
                    salePrice={product.salePrice}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">{t('category.noProducts')}</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

const CategoryPage = () => {
  return (
    <LanguageProvider>
      <CategoryPageContent />
    </LanguageProvider>
  );
};

export default CategoryPage;
