import React, { useState, useMemo } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { Search, SlidersHorizontal, Grid2X2, Grid3X3, ArrowUpDown, X } from 'lucide-react';

interface CollectionPageProps {
  initialCategory?: string;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  wishlist: string[];
  onToggleWishlist: (product: Product) => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({
  initialCategory = 'ALL',
  onSelectProduct,
  onQuickView,
  onAddToCart,
  wishlist,
  onToggleWishlist
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'newest' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [gridCols, setGridCols] = useState<2 | 4>(4);
  const [onlyInStock, setOnlyInStock] = useState<boolean>(false);

  const categories = ['ALL', 'Heavyweight Tees', 'Oversized Hoodies', 'Cargo & Bottoms', 'Outerwear', 'Accessories'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'ALL' || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.gsm.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesStock = !onlyInStock || product.inStock;
      return matchesCategory && matchesSearch && matchesStock;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.badge === 'NEW DROP' ? 1 : 0) - (a.badge === 'NEW DROP' ? 1 : 0);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, onlyInStock]);

  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#111111] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Page Header Title */}
        <div className="space-y-3 pb-6 border-b border-[#e5e3dc]">
          <span className="text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">
            COMMUTE CATALOG // DROP 04
          </span>
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl uppercase tracking-tight text-[#111111]">
            THE SHOP COLLECTION<span className="text-[#b89047]">.</span>
          </h1>
          <p className="text-xs sm:text-sm text-[#555555] font-sans max-w-xl">
            Explore our complete lineup of heavyweight 280-450 GSM boxy tees, french terry hoodies, tactical trousers, and luxury accessories.
          </p>
        </div>

        {/* Category Filter Pills & Search Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#ffffff] p-4 border border-[#e5e3dc] shadow-sm">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-xs uppercase tracking-wider transition-all whitespace-nowrap border ${
                  selectedCategory === cat
                    ? 'bg-[#b89047] text-white border-[#b89047] font-bold shadow-sm'
                    : 'bg-[#f4f3ef] text-[#555555] border-[#e5e3dc] hover:text-[#111111] hover:border-[#b89047]'
                }`}
              >
                {cat === 'ALL' ? 'ALL DROPS' : cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative flex-1 max-w-xs">
            <Search className="w-4 h-4 text-[#777777] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#f9f8f6] border border-[#e5e3dc] pl-9 pr-8 py-2 text-xs font-mono text-[#111111] placeholder-[#888888] focus:outline-none focus:border-[#b89047]"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#777777] hover:text-[#111111]"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Filter Toolbar: Sort & Grid Switcher */}
        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-[#666666] pt-2">
          
          <div className="flex items-center gap-4">
            <span>SHOWING <span className="text-[#111111] font-bold">{filteredProducts.length}</span> PIECES</span>
            
            <label className="flex items-center gap-2 cursor-pointer select-none text-[11px] hover:text-[#111111]">
              <input
                type="checkbox"
                checked={onlyInStock}
                onChange={(e) => setOnlyInStock(e.target.checked)}
                className="accent-[#b89047]"
              />
              <span>IN STOCK ONLY</span>
            </label>
          </div>

          <div className="flex items-center gap-6">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2">
              <ArrowUpDown className="w-3.5 h-3.5 text-[#b89047]" />
              <span>SORT BY:</span>
              <select
                value={sortBy}
                onChange={(e: any) => setSortBy(e.target.value)}
                className="bg-[#ffffff] border border-[#e5e3dc] text-[#111111] px-3 py-1.5 text-xs font-mono focus:outline-none focus:border-[#b89047] shadow-sm"
              >
                <option value="featured">FEATURED</option>
                <option value="newest">NEWEST DROPS</option>
                <option value="price-low">PRICE: LOW TO HIGH</option>
                <option value="price-high">PRICE: HIGH TO LOW</option>
                <option value="rating">TOP RATED</option>
              </select>
            </div>

            {/* Grid View Switcher */}
            <div className="hidden sm:flex items-center gap-1 border border-[#e5e3dc] p-1 bg-[#ffffff] shadow-sm">
              <button
                onClick={() => setGridCols(2)}
                className={`p-1.5 transition-colors ${gridCols === 2 ? 'bg-[#b89047] text-white' : 'text-[#777777] hover:text-[#111111]'}`}
                title="2-Column Large Grid"
              >
                <Grid2X2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setGridCols(4)}
                className={`p-1.5 transition-colors ${gridCols === 4 ? 'bg-[#b89047] text-white' : 'text-[#777777] hover:text-[#111111]'}`}
                title="4-Column Compact Grid"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 bg-[#ffffff] border border-[#e5e3dc] space-y-4 shadow-sm">
            <SlidersHorizontal className="w-10 h-10 text-[#888888] mx-auto stroke-1" />
            <h3 className="font-display text-xl font-bold uppercase text-[#111111]">NO MATCHING DROPS FOUND</h3>
            <p className="text-xs text-[#666666] font-mono">Try adjusting your filter parameters or search term.</p>
            <button
              onClick={() => {
                setSelectedCategory('ALL');
                setSearchQuery('');
                setOnlyInStock(false);
              }}
              className="px-6 py-2.5 bg-[#b89047] text-white font-mono text-xs font-bold uppercase shadow-sm"
            >
              RESET ALL FILTERS
            </button>
          </div>
        ) : (
          <div className={`grid gap-6 ${
            gridCols === 2 
              ? 'grid-cols-1 sm:grid-cols-2' 
              : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onSelectProduct={onSelectProduct}
                onQuickView={onQuickView}
                onAddToCart={onAddToCart}
                isWishlisted={wishlist.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
