import React, { useState } from 'react';
import { Product } from '../data/products';
import { Eye, Heart, ShoppingBag, Star } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  isWishlisted: boolean;
  onToggleWishlist: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  isWishlisted,
  onToggleWishlist
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedQuickSize, setSelectedQuickSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>(product.sizes[0]);
  const [showQuickAddDrawer, setShowQuickAddDrawer] = useState(false);

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] || product.images[0];

  return (
    <div
      className="group relative bg-[#ffffff] border border-[#e5e3dc] hover:border-[#b89047] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowQuickAddDrawer(false);
      }}
    >
      {/* Top Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#f4f3ef] cursor-pointer" onClick={() => onSelectProduct(product)}>
        
        {/* Badge Tag */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`px-2.5 py-1 text-[10px] font-mono tracking-widest font-bold uppercase ${
              product.badge === 'NEW DROP' ? 'bg-[#b89047] text-white' :
              product.badge === 'BESTSELLER' ? 'bg-[#111111] text-white' :
              product.badge === 'LIMITED EDITION' ? 'bg-red-600 text-white' : 'bg-[#e5e3dc] text-[#111111]'
            }`}>
              {product.badge}
            </span>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2 rounded-full transition-colors ${
            isWishlisted 
              ? 'bg-red-600 text-white' 
              : 'bg-white/80 text-[#666666] hover:text-[#111111] hover:bg-white shadow-sm'
          }`}
          title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-white' : ''}`} />
        </button>

        {/* Primary & Secondary Hover Image */}
        <img
          src={primaryImage}
          alt={product.name}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered ? 'opacity-0' : 'opacity-100'
          }`}
          loading="lazy"
        />
        <img
          src={secondaryImage}
          alt={`${product.name} alternate view`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            isHovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
          }`}
          loading="lazy"
        />

        {/* GSM Floating Tag */}
        <div className="absolute bottom-3 left-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="px-2 py-0.5 bg-white/90 backdrop-blur-md border border-[#e5e3dc] text-[#333333] font-mono text-[9px] uppercase font-semibold shadow-sm">
            {product.gsm}
          </span>
        </div>

        {/* Quick View Floating Action */}
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="p-2.5 bg-white/90 hover:bg-[#b89047] text-[#111111] hover:text-white border border-[#e5e3dc] transition-colors shadow-sm"
            title="Quick View"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5 cursor-pointer" onClick={() => onSelectProduct(product)}>
          <div className="flex items-center justify-between text-[11px] font-mono text-[#666666] uppercase">
            <span>{product.category}</span>
            <div className="flex items-center gap-1 text-[#b89047]">
              <Star className="w-3 h-3 fill-[#b89047]" />
              <span className="font-bold">{product.rating}</span>
            </div>
          </div>

          <h3 className="font-sans font-semibold text-sm text-[#111111] line-clamp-1 group-hover:text-[#b89047] transition-colors">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2 pt-1 font-mono text-sm">
            <span className="font-bold text-[#111111]">৳{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-xs text-[#888888] line-through">৳{product.originalPrice.toLocaleString()}</span>
            )}
          </div>
        </div>

        {/* Quick Add Bar / Size Selector Drawer */}
        <div className="pt-2 border-t border-[#f0eee6]">
          {!showQuickAddDrawer ? (
            <button
              onClick={() => setShowQuickAddDrawer(true)}
              className="w-full py-2.5 bg-[#f4f3ef] hover:bg-[#111111] border border-[#e5e3dc] hover:border-[#111111] text-[#111111] hover:text-[#ffffff] font-mono text-xs font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-[#b89047]" />
              <span>SELECT SIZE & ADD</span>
            </button>
          ) : (
            <div className="space-y-2 animate-fadeIn">
              <div className="flex items-center justify-between text-[10px] font-mono text-[#666666]">
                <span>SELECT SIZE:</span>
                <button 
                  onClick={() => setShowQuickAddDrawer(false)}
                  className="text-[#888888] hover:text-[#111111]"
                >
                  CANCEL
                </button>
              </div>

              <div className="grid grid-cols-5 gap-1">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedQuickSize(sz)}
                    className={`py-1 text-xs font-mono border transition-all ${
                      selectedQuickSize === sz
                        ? 'bg-[#b89047] text-white border-[#b89047] font-bold'
                        : 'bg-[#ffffff] text-[#444444] border-[#e5e3dc] hover:text-[#111111]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>

              <button
                onClick={() => {
                  onAddToCart(product, selectedQuickSize);
                  setShowQuickAddDrawer(false);
                }}
                className="w-full py-2 bg-[#111111] hover:bg-[#b89047] text-white font-mono text-xs font-bold uppercase transition-all shadow-sm"
              >
                ADD SIZE {selectedQuickSize} TO BAG
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
