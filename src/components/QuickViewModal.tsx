import React, { useState } from 'react';
import { Product } from '../data/products';
import { X, Star, ShoppingBag, Truck, ShieldCheck, ArrowRight } from 'lucide-react';

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  onViewFullDetails: (product: Product) => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
  onViewFullDetails
}) => {
  if (!product) return null;

  const [activeImage, setActiveImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl bg-[#ffffff] border border-[#e5e3dc] shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Modal Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/80 hover:bg-white text-[#444444] hover:text-[#111111] rounded-full transition-colors border border-[#e5e3dc] shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Gallery */}
        <div className="w-full md:w-1/2 bg-[#f4f3ef] p-4 flex flex-col justify-between">
          <div className="aspect-[3/4] w-full overflow-hidden relative border border-[#e5e3dc]">
            <img
              src={activeImage}
              alt={product.name}
              className="w-full h-full object-cover transition-all duration-300"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImage(img)}
                className={`w-16 h-20 border transition-all flex-shrink-0 ${
                  activeImage === img ? 'border-[#b89047] opacity-100 ring-1 ring-[#b89047]' : 'border-[#e5e3dc] opacity-60 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`Thumb ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Product Specs & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto space-y-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono text-[#666666]">
              <span>{product.category}</span>
              <div className="flex items-center gap-1 text-[#b89047]">
                <Star className="w-3.5 h-3.5 fill-[#b89047]" />
                <span className="font-bold">{product.rating} ({product.reviewsCount} REVIEWS)</span>
              </div>
            </div>

            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#111111] uppercase tracking-wide">
              {product.name}
            </h2>

            <div className="flex items-baseline gap-3 font-mono text-xl">
              <span className="font-bold text-[#111111]">৳{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-sm text-[#888888] line-through">৳{product.originalPrice.toLocaleString()}</span>
              )}
              <span className="text-xs font-mono text-[#b89047] bg-[#f9f8f6] border border-[#b89047]/40 px-2 py-0.5">
                {product.gsm}
              </span>
            </div>

            <p className="text-xs text-[#555555] font-sans leading-relaxed">
              {product.description}
            </p>

            {/* Colors */}
            <div className="space-y-2 pt-2">
              <label className="text-xs font-mono text-[#555555] uppercase block">
                COLORWAY: <span className="text-[#111111] font-bold">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-7 h-7 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color.name ? 'border-[#b89047] scale-110 shadow-sm' : 'border-[#d5d3cb]'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between text-xs font-mono text-[#555555]">
                <span>SELECT SIZE:</span>
                <span className="text-[10px] text-[#b89047] font-bold">OVERSIZED FIT</span>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 text-xs font-mono border transition-all ${
                      selectedSize === size
                        ? 'bg-[#b89047] text-white border-[#b89047] font-bold'
                        : 'bg-[#f4f3ef] text-[#444444] border-[#e5e3dc] hover:border-[#111111] hover:text-[#111111]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-[#e5e3dc]">
            <button
              onClick={() => {
                onAddToCart(product, selectedSize);
                onClose();
              }}
              className="w-full py-3.5 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <ShoppingBag className="w-4 h-4 text-[#b89047]" />
              <span>ADD SIZE {selectedSize} TO BAG</span>
            </button>

            <button
              onClick={() => {
                onViewFullDetails(product);
                onClose();
              }}
              className="w-full py-3 bg-[#f4f3ef] hover:bg-[#111111] border border-[#e5e3dc] text-[#333333] hover:text-white font-mono text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <span>VIEW FULL PRODUCT PAGE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
