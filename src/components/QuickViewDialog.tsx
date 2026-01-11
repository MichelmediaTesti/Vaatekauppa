import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Product } from '@/data/products';

interface QuickViewDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const QuickViewDialog = ({ product, open, onOpenChange }: QuickViewDialogProps) => {
  const { t } = useLanguage();
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[700px] p-0 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square bg-muted">
            <img
              src={product.image}
              alt={`${product.brand} ${product.name}`}
              className="w-full h-full object-cover"
            />
            {product.salePrice && (
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold bg-destructive text-destructive-foreground rounded">
                ALE
              </span>
            )}
          </div>

          {/* Product Info */}
          <div className="p-6 flex flex-col">
            <DialogHeader className="text-left">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                {product.brand}
              </p>
              <DialogTitle className="font-display text-2xl font-semibold text-foreground">
                {product.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground mt-4 leading-relaxed">
                {product.description}
              </DialogDescription>
            </DialogHeader>

            {/* Price */}
            <div className="mt-6 flex items-center gap-3">
              {product.salePrice ? (
                <>
                  <span className="text-2xl font-semibold text-primary">{product.salePrice}</span>
                  <span className="text-lg text-muted-foreground line-through">{product.price}</span>
                </>
              ) : (
                <span className="text-2xl font-semibold text-foreground">{product.price}</span>
              )}
            </div>

            {/* Actions */}
            <div className="mt-auto pt-6 flex gap-3">
              <Button className="flex-1 gap-2">
                <ShoppingBag className="h-4 w-4" />
                {t('quickView.addToCart')}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFavorite(!isFavorite)}
              >
                <Heart
                  className={`h-5 w-5 ${
                    isFavorite ? 'fill-primary text-primary' : 'text-foreground'
                  }`}
                />
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuickViewDialog;
