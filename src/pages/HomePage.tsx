import React from 'react';
import { Product, PRODUCTS } from '../data/products';
import { HeroBanner } from '../components/HeroBanner';
import { Marquee } from '../components/Marquee';
import { ProductCard } from '../components/ProductCard';
import { Lookbook } from '../components/Lookbook';
import { InstagramFeed } from '../components/InstagramFeed';
import { ArrowRight, Shield, Flame, Truck, ShieldCheck, RefreshCw } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string, category?: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: 'S' | 'M' | 'L' | 'XL' | 'XXL') => void;
  wishlist: string[];
  onToggleWishlist: (product: Product) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onSelectProduct,
  onQuickView,
  onAddToCart,
  wishlist,
  onToggleWishlist
}) => {
  const featuredProducts = PRODUCTS.filter(p => p.featured || p.badge === 'NEW DROP');

  return (
    <div className="min-h-screen bg-[#f9f8f6]">
      {/* Clean Minimal Hero Banner */}
      <HeroBanner 
        onShopClick={() => onNavigate('collection')}
        onAboutClick={() => onNavigate('about')}
      />

      {/* Marquee Ticker */}
      <Marquee onCtaClick={() => onNavigate('collection')} />

      {/* Clean Value Props Strip */}
      <div className="bg-[#f0eee6] border-b border-[#e2e0d8] py-3.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center font-mono text-xs text-[#555555]">
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-[#b89047]" />
              <span className="font-semibold uppercase tracking-wider">NATIONWIDE EXPRESS DELIVERY</span>
            </div>
            <div className="flex items-center justify-center gap-2 border-y sm:border-y-0 sm:border-x border-[#e5e3dc] py-2 sm:py-0">
              <ShieldCheck className="w-4 h-4 text-[#b89047]" />
              <span className="font-semibold uppercase tracking-wider">PRE-SHRUNK 100% ORGANIC COTTON</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <RefreshCw className="w-4 h-4 text-[#b89047]" />
              <span className="font-semibold uppercase tracking-wider">7-DAY HASSLE-FREE SIZE EXCHANGE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Drops Grid Section */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">
              <Flame className="w-4 h-4 fill-[#b89047]" />
              <span>COLLECTION 04 FEATURED RELEASES</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#111111] uppercase tracking-tight">
              NEW SEASON DROPS<span className="text-[#b89047]">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-sans max-w-md">
              Heavyweight cotton fabrications, dropped shoulders, and architectural cuts built for daily urban commutes.
            </p>
          </div>

          <button
            onClick={() => onNavigate('collection')}
            className="px-6 py-3.5 bg-[#ffffff] hover:bg-[#111111] text-[#111111] hover:text-white border border-[#e5e3dc] font-mono text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 group self-start md:self-auto shadow-sm"
          >
            <span>VIEW ALL ITEMS ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
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
      </section>

      {/* Brand Philosophy Editorial Showcase */}
      <section className="py-20 bg-[#f2f0ea] border-y border-[#e2e0d8] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="relative aspect-[4/5] bg-[#ffffff] border border-[#e5e3dc] overflow-hidden group shadow-md">
              <img
                src="/Images/686606255_18045436628785194_6293734523224567022_n.jpg"
                alt="Commute Brand Philosophy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-6 flex flex-col justify-end">
                <span className="font-mono text-xs text-[#b89047] uppercase tracking-widest font-bold">COMMUTE ATELIER</span>
                <p className="font-display text-xl font-bold text-white uppercase">DHAKA, BANGLADESH</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff] border border-[#e5e3dc] text-[#b89047] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
                <Shield className="w-3.5 h-3.5" />
                <span>UNCOMPROMISING ETHOS</span>
              </div>

              <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] uppercase leading-tight">
                BUILT FOR MOVEMENT. <br />
                ENGINEERED FOR LONGEVITY<span className="text-[#b89047]">.</span>
              </h2>

              <p className="text-sm text-[#555555] font-sans leading-relaxed">
                COMMUTE was born from the rhythm of modern city life. We reject fast-fashion throwaways in favor of custom-milled heavyweight textiles (280-450 GSM), boxy structured silhouettes, and subtle brand minimalism.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#e2e0d8] font-mono text-xs text-[#555555]">
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">280–450 GSM</h4>
                  <p className="mt-1">Heavyweight French Terry & Combed Cotton</p>
                </div>
                <div>
                  <h4 className="font-bold text-[#111111] text-sm">BOXY SILHOUETTES</h4>
                  <p className="mt-1">Designed for maximum drape and structural longevity</p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onNavigate('about')}
                  className="px-8 py-4 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 shadow-md"
                >
                  <span>READ OUR FULL STORY</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Editorial Lookbook */}
      <Lookbook onShopClick={() => onNavigate('collection')} />

      {/* Instagram Feed Integration */}
      <InstagramFeed />
    </div>
  );
};
