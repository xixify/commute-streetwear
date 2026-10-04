import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Star, ShoppingBag, Truck, RefreshCw, ShieldCheck, Heart, Share2, CheckCircle, ChevronDown, ChevronUp, ArrowLeft } from 'lucide-react';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  wishlist: string[];
  onToggleWishlist: (product: Product) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({
  product,
  onBack,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  wishlist,
  onToggleWishlist
}) => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L' | 'XL' | 'XXL'>(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [openAccordion, setOpenAccordion] = useState<string | null>('fabric');
  const [addedToast, setAddedToast] = useState(false);

  // Filter related items in same category
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);

  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCartClick = () => {
    onAddToCart(product, selectedSize);
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 3500);
  };

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Breadcrumb & Back Navigation */}
        <div className="flex items-center justify-between text-xs font-mono text-[#666666] pb-4 border-b border-[#e5e3dc]">
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:text-[#111111] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#b89047]" />
            <span>BACK TO COLLECTION</span>
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <span>HOME</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-[#111111] font-bold">{product.name}</span>
          </div>
        </div>

        {/* Main Product Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Column (7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Main Featured Image */}
            <div className="relative aspect-[3/4] w-full bg-[#ffffff] border border-[#e5e3dc] overflow-hidden group shadow-sm">
              <img
                src={selectedImage}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {product.badge && (
                <span className="absolute top-4 left-4 z-10 px-3 py-1 bg-[#b89047] text-white font-mono text-xs font-bold uppercase shadow-sm">
                  {product.badge}
                </span>
              )}
            </div>

            {/* Thumbnails Row */}
            <div className="grid grid-cols-4 gap-3">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-[3/4] bg-[#ffffff] border transition-all overflow-hidden ${
                    selectedImage === img ? 'border-[#b89047] ring-1 ring-[#b89047]' : 'border-[#e5e3dc] opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`View ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Actions Column (5 cols on desktop) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#666666]">
                <span>{product.category}</span>
                <div className="flex items-center gap-1.5 text-[#b89047]">
                  <Star className="w-4 h-4 fill-[#b89047]" />
                  <span className="font-bold">{product.rating} ({product.reviewsCount} REVIEWS)</span>
                </div>
              </div>

              <h1 className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#111111] uppercase tracking-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-4 font-mono text-2xl pt-1">
                <span className="font-bold text-[#111111]">৳{product.price.toLocaleString()}</span>
                {product.originalPrice && (
                  <span className="text-base text-[#888888] line-through">৳{product.originalPrice.toLocaleString()}</span>
                )}
                <span className="text-xs font-mono bg-[#ffffff] text-[#b89047] border border-[#b89047]/40 px-2.5 py-1">
                  {product.gsm}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed border-t border-b border-[#e5e3dc] py-4">
              {product.description}
            </p>

            {/* Color Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono text-[#555555] uppercase block">
                COLORWAY: <span className="text-[#111111] font-bold">{selectedColor}</span>
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedColor === color.name ? 'border-[#b89047] scale-110 shadow-sm' : 'border-[#e5e3dc]'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selector */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#555555]">
                <span>SELECT SIZE:</span>
                <span className="text-[11px] text-[#b89047] font-bold">FIT: {product.fit}</span>
              </div>

              <div className="grid grid-cols-5 gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 text-xs font-mono border transition-all ${
                      selectedSize === size
                        ? 'bg-[#b89047] text-white border-[#b89047] font-extrabold shadow-sm'
                        : 'bg-[#ffffff] text-[#444444] border-[#e5e3dc] hover:border-[#111111] hover:text-[#111111]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-4">
              {addedToast && (
                <div className="p-3 bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-mono flex items-center gap-2 animate-fadeIn font-semibold">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span>ADDED {product.name} (SIZE {selectedSize}) TO BAG!</span>
                </div>
              )}

              <div className="flex items-center gap-3">
                <button
                  onClick={handleAddToCartClick}
                  className="flex-1 py-4 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <ShoppingBag className="w-4 h-4 text-[#b89047]" />
                  <span>ADD TO BAG — ৳{product.price.toLocaleString()}</span>
                </button>

                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`p-4 border transition-colors shadow-sm ${
                    isWishlisted ? 'bg-red-600 border-red-600 text-white' : 'bg-[#ffffff] border-[#e5e3dc] text-[#555555] hover:text-[#111111]'
                  }`}
                  title={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-white' : ''}`} />
                </button>
              </div>
            </div>

            {/* Guarantees Bar */}
            <div className="p-4 bg-[#ffffff] border border-[#e5e3dc] grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-[11px] text-[#555555] shadow-sm">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-[#b89047]" />
                <span>EXPRESS NATIONWIDE SHIPPING</span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-4 h-4 text-[#b89047]" />
                <span>7-DAY EASY SIZE EXCHANGE</span>
              </div>
            </div>

            {/* Expandable Accordions */}
            <div className="space-y-2 pt-4 border-t border-[#e5e3dc] font-mono text-xs">
              
              {/* Accordion 1: Fabric & GSM */}
              <div className="border border-[#e5e3dc] bg-[#ffffff] shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'fabric' ? null : 'fabric')}
                  className="w-full p-4 flex items-center justify-between text-[#111111] font-bold uppercase hover:bg-[#f9f8f6] transition-colors"
                >
                  <span>FABRIC COMPOSITION & GSM</span>
                  {openAccordion === 'fabric' ? <ChevronUp className="w-4 h-4 text-[#b89047]" /> : <ChevronDown className="w-4 h-4 text-[#777777]" />}
                </button>
                {openAccordion === 'fabric' && (
                  <div className="p-4 pt-0 text-[#555555] font-sans text-xs space-y-2 border-t border-[#e5e3dc]">
                    <p><strong className="text-[#111111] font-mono">SPECIFICATION:</strong> {product.gsm}</p>
                    <p><strong className="text-[#111111] font-mono">COMPOSITION:</strong> {product.fabric}</p>
                    <p><strong className="text-[#111111] font-mono">CARE GUIDE:</strong></p>
                    <ul className="list-disc pl-4 space-y-1 text-[#666666]">
                      {product.careInstructions.map((c, i) => (
                        <li key={i}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 2: Fit & Sizing */}
              <div className="border border-[#e5e3dc] bg-[#ffffff] shadow-sm">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'sizing' ? null : 'sizing')}
                  className="w-full p-4 flex items-center justify-between text-[#111111] font-bold uppercase hover:bg-[#f9f8f6] transition-colors"
                >
                  <span>FIT GUIDE & SIZE MEASUREMENTS</span>
                  {openAccordion === 'sizing' ? <ChevronUp className="w-4 h-4 text-[#b89047]" /> : <ChevronDown className="w-4 h-4 text-[#777777]" />}
                </button>
                {openAccordion === 'sizing' && (
                  <div className="p-4 pt-0 text-[#555555] font-sans text-xs space-y-3 border-t border-[#e5e3dc]">
                    <p>Designed with an oversized streetwear cut. We recommend picking your normal size for the intended relaxed drape.</p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-left font-mono text-[11px] border border-[#e5e3dc]">
                        <thead className="bg-[#f4f3ef] text-[#b89047]">
                          <tr>
                            <th className="p-2 border-b border-[#e5e3dc]">SIZE</th>
                            <th className="p-2 border-b border-[#e5e3dc]">CHEST (INCH)</th>
                            <th className="p-2 border-b border-[#e5e3dc]">LENGTH (INCH)</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-[#e5e3dc] text-[#333333]">
                          <tr><td className="p-2 font-bold text-[#111111]">S</td><td className="p-2">42"</td><td className="p-2">27"</td></tr>
                          <tr><td className="p-2 font-bold text-[#111111]">M</td><td className="p-2">44"</td><td className="p-2">28"</td></tr>
                          <tr><td className="p-2 font-bold text-[#111111]">L</td><td className="p-2">46"</td><td className="p-2">29"</td></tr>
                          <tr><td className="p-2 font-bold text-[#111111]">XL</td><td className="p-2">48"</td><td className="p-2">30"</td></tr>
                          <tr><td className="p-2 font-bold text-[#111111]">XXL</td><td className="p-2">50"</td><td className="p-2">31"</td></tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Recommended / Related Products Section */}
        {relatedProducts.length > 0 && (
          <section className="pt-12 border-t border-[#e5e3dc] space-y-8">
            <h3 className="font-display text-2xl font-bold uppercase text-[#111111]">
              YOU MAY ALSO COMMUTE WITH<span className="text-[#b89047]">.</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard
                  key={rel.id}
                  product={rel}
                  onSelectProduct={onSelectProduct}
                  onQuickView={onQuickView}
                  onAddToCart={onAddToCart}
                  isWishlisted={wishlist.includes(rel.id)}
                  onToggleWishlist={onToggleWishlist}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};
