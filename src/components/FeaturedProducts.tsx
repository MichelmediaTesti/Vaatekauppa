import { useLanguage } from '@/contexts/LanguageContext';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  const { t } = useLanguage();

  // Get first 4 products as featured
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            {t('featured.title')}
          </h2>
          <Link to="/category/pumps">
            <Button
              variant="ghost"
              className="group text-primary hover:text-primary/80 hover:bg-accent p-0 sm:px-4"
            >
              {t('featured.viewAll')}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product, index) => (
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
      </div>
    </section>
  );
};

export default FeaturedProducts;
