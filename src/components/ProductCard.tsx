import { useState } from 'react';
import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import QuickViewDialog from './QuickViewDialog';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product?: Product;
  image: string;
  brand: string;
  name: string;
  price: string;
  salePrice?: string;
}

const ProductCard = ({ product, image, brand, name, price, salePrice }: ProductCardProps) => {
  const { t } = useLanguage();
  const [isFavorite, setIsFavorite] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  // Create a product object for the dialog if not provided
  const productData: Product = product || {
    id: '0',
    image,
    brand,
    name,
    description: 'Laadukas tuote Vaatekauppa-myymälästä.',
    price,
    salePrice,
    category: 'pumps',
  };

  return (
    <>
      <div className="group relative bg-card rounded-lg overflow-hidden shadow-elegant product-card-hover">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={`${brand} ${name}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Favorite Button */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background transition-colors z-10"
          >
            <Heart
              className={`h-5 w-5 transition-colors ${
                isFavorite ? 'fill-primary text-primary' : 'text-foreground'
              }`}
            />
          </button>

          {/* Quick View Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300">
            <Button
              variant="secondary"
              className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 bg-background text-foreground hover:bg-accent"
              onClick={() => setQuickViewOpen(true)}
            >
              {t('product.quickView')}
            </Button>
          </div>

          {/* Sale Badge */}
          {salePrice && (
            <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-destructive text-destructive-foreground rounded">
              ALE
            </span>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            {brand}
          </p>
          <h3 className="font-body text-sm font-medium text-foreground mb-2 line-clamp-2">
            {name}
          </h3>
          <div className="flex items-center gap-2">
            {salePrice ? (
              <>
                <span className="font-semibold text-primary">{salePrice}</span>
                <span className="text-sm text-muted-foreground line-through">{price}</span>
              </>
            ) : (
              <span className="font-semibold text-foreground">{price}</span>
            )}
          </div>
        </div>
      </div>

      <QuickViewDialog
        product={productData}
        open={quickViewOpen}
        onOpenChange={setQuickViewOpen}
      />
    </>
  );
};

export default ProductCard;
