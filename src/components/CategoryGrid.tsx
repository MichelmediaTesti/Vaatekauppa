import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import categoryPumps from '@/assets/category-pumps.jpg';
import categorySneakers from '@/assets/category-sneakers.jpg';
import categoryBoots from '@/assets/category-boots.jpg';
import categorySandals from '@/assets/category-sandals.jpg';
import categoryBags from '@/assets/category-bags.jpg';

const CategoryGrid = () => {
  const { t } = useLanguage();

  const categories = [
    { key: 'category.pumps', image: categoryPumps, id: 'pumps' },
    { key: 'category.sneakers', image: categorySneakers, id: 'sneakers' },
    { key: 'category.boots', image: categoryBoots, id: 'boots' },
    { key: 'category.sandals', image: categorySandals, id: 'sandals' },
    { key: 'category.bags', image: categoryBags, id: 'bags' },
  ];

  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-center mb-12 text-foreground">
          {t('categories.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First three categories in top row */}
          {categories.slice(0, 3).map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative aspect-square overflow-hidden rounded-lg shadow-elegant product-card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={category.image}
                alt={t(category.key)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="category-overlay" />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground">
                  {t(category.key)}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom row with two larger categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
          {categories.slice(3).map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.id}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg shadow-elegant product-card-hover"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <img
                src={category.image}
                alt={t(category.key)}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="category-overlay" />
              <div className="absolute inset-0 flex items-end p-6 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-primary-foreground">
                  {t(category.key)}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
