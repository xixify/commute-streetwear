import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, Heart, Instagram, Facebook } from 'lucide-react';
import { CLIENT_SOCIAL_LINKS } from '../data/products';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, category?: string) => void;
  cartCount: number;
  wishlistCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', page: 'home' },
    { name: 'COLLECTION', page: 'collection' },
    { name: 'ABOUT US', page: 'about' },
    { name: 'CONTACT', page: 'contact' }
  ];

  return (
    <>
      {/* Top Banner Ticker */}
      <div className="bg-[#f0eee6] text-[#555555] text-[11px] font-mono py-1.5 px-4 text-center border-b border-[#e2e0d8] flex items-center justify-between">
        <span className="hidden sm:inline-block text-[#777777]">OFFICIAL STORE PREVIEW // COMMUTE.CO</span>
        <div className="mx-auto sm:mx-0 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
          <span className="font-semibold text-[#111111]">DROP 04 LIVE — AVAILABLE FOR IMMEDIATE SHIPPING</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-[#555555]">
          <a href={CLIENT_SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="hover:text-[#111111] transition-colors flex items-center gap-1 font-semibold">
            <Instagram className="w-3 h-3 text-[#b89047]" />
            <span>@commute.co</span>
          </a>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 glass-nav transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111111] hover:text-[#b89047] focus:outline-none"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className={`text-xs font-mono tracking-[0.2em] transition-all relative py-2 ${
                  currentPage === link.page 
                    ? 'text-[#111111] font-bold' 
                    : 'text-[#666666] hover:text-[#111111]'
                }`}
              >
                {link.name}
                {currentPage === link.page && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#111111] animate-pulse"></span>
                )}
              </button>
            ))}
          </nav>

          {/* Brand Logo */}
          <div className="flex-1 text-center md:flex-initial">
            <button 
              onClick={() => onNavigate('home')}
              className="inline-block group text-left"
            >
              <h1 className="font-display font-extrabold text-2xl sm:text-3xl tracking-tighter text-[#111111] group-hover:tracking-tight transition-all">
                COMMUTE<span className="text-[#b89047]">.</span>
              </h1>
              <p className="text-[9px] font-mono tracking-[0.35em] text-[#666666] uppercase hidden sm:block -mt-1 font-semibold">
                URBAN UNIFORM
              </p>
            </button>
          </div>

          {/* Header Action Icons */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="p-2 text-[#444444] hover:text-[#111111] transition-colors"
              title="Search collection"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Wishlist */}
            <button
              onClick={() => onNavigate('collection')}
              className="p-2 text-[#444444] hover:text-[#111111] transition-colors relative hidden sm:block"
              title="Wishlist"
            >
              <Heart className="w-5 h-5" />
              {wishlistCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#b89047] text-white font-mono text-[10px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Drawer Icon */}
            <button
              onClick={onOpenCart}
              className="px-3.5 py-2 bg-[#111111] hover:bg-[#222222] text-[#f9f8f6] rounded-none transition-all flex items-center gap-2 group shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#b89047] group-hover:scale-110 transition-transform" />
              <span className="text-xs font-mono tracking-wider font-semibold">BAG</span>
              <span className="bg-[#b89047] text-white text-[11px] font-mono font-extrabold px-1.5 py-0.5 rounded-sm min-w-[20px] text-center">
                {cartCount}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#f9f8f6]/98 backdrop-blur-xl md:hidden flex flex-col justify-between p-6 animate-fadeIn">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#e5e3dc]">
              <span className="font-display text-2xl font-bold text-[#111111]">COMMUTE<span className="text-[#b89047]">.</span></span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#444444] hover:text-[#111111]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.page}
                  onClick={() => {
                    onNavigate(link.page);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-display text-2xl tracking-wide uppercase transition-colors ${
                    currentPage === link.page ? 'text-[#b89047] font-bold' : 'text-[#444444] hover:text-[#111111]'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#e5e3dc] space-y-4">
            <p className="text-xs font-mono text-[#666666]">CONNECT WITH COMMUTE</p>
            <div className="flex items-center gap-4">
              <a 
                href={CLIENT_SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#111111] hover:text-[#b89047] bg-[#ffffff] px-4 py-2.5 border border-[#e5e3dc] shadow-sm"
              >
                <Instagram className="w-4 h-4 text-[#b89047]" />
                <span>INSTAGRAM</span>
              </a>
              <a 
                href={CLIENT_SOCIAL_LINKS.facebook} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-xs font-mono text-[#111111] hover:text-[#b89047] bg-[#ffffff] px-4 py-2.5 border border-[#e5e3dc] shadow-sm"
              >
                <Facebook className="w-4 h-4 text-[#b89047]" />
                <span>FACEBOOK</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
