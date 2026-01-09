import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

import product1 from '@/assets/product-1.jpg';
import product2 from '@/assets/product-2.jpg';
import product3 from '@/assets/product-3.jpg';
import product4 from '@/assets/product-4.jpg';

const FeaturedProducts = () => {
  const { t } = useLanguage();

  const products = [
    {
      image: product1,
      brand: 'Ara',
      name: 'Klassinen avokaskenkä',
      price: '119,90 €',
    },
    {
      image: product2,
      brand: 'Tamaris',
      name: 'Nahkanilkkuri',
      price: '149,95 €',
      salePrice: '119,00 €',
    },
    {
      image: product3,
      brand: 'Hedgren',
      name: 'Premium nahkalaukku',
      price: '89,90 €',
    },
    {
      image: product4,
      brand: 'Caprice',
      name: 'Punainen ballerina',
      price: '79,95 €',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            {t('featured.title')}
          </h2>
          <Button
            variant="ghost"
            className="group text-primary hover:text-primary/80 hover:bg-accent p-0 sm:px-4"
          >
            {t('featured.viewAll')}
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
