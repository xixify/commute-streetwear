import React, { useState } from 'react';
import { Product, PRODUCTS } from '../data/products';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const results = query.trim()
    ? PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.gsm.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-20 px-4 animate-fadeIn">
      <div 
        className="w-full max-w-2xl bg-[#ffffff] border border-[#e5e3dc] shadow-2xl overflow-hidden space-y-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="p-4 border-b border-[#e5e3dc] flex items-center gap-3 bg-[#f9f8f6]">
          <Search className="w-5 h-5 text-[#b89047]" />
          <input
            type="text"
            placeholder="Type to search heavyweight tees, hoodies, cargo..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="flex-1 bg-transparent text-sm font-mono text-[#111111] placeholder-[#888888] focus:outline-none"
          />
          <button onClick={onClose} className="p-1 text-[#666666] hover:text-[#111111]">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Suggestions & Results */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-3">
          {!query.trim() ? (
            <div className="space-y-3 py-4">
              <span className="text-[11px] font-mono text-[#666666] uppercase tracking-wider block font-bold">POPULAR SEARCHES</span>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {['Heavyweight Tee', 'French Terry Hoodie', 'Parachute Cargo', 'Denim Jacket', 'Cap'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-3 py-1.5 bg-[#f4f3ef] hover:bg-[#111111] border border-[#e5e3dc] text-[#444444] hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-8 font-mono text-xs text-[#777777]">
              NO DROPS FOUND MATCHING "{query.toUpperCase()}"
            </div>
          ) : (
            <div className="space-y-2">
              <span className="text-[11px] font-mono text-[#666666] uppercase block font-bold">MATCHING PIECES ({results.length})</span>
              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    onSelectProduct(product);
                    onClose();
                  }}
                  className="flex items-center justify-between p-2.5 bg-[#f9f8f6] hover:bg-[#111111] border border-[#e5e3dc] cursor-pointer group transition-colors text-[#111111] hover:text-white"
                >
                  <div className="flex items-center gap-3">
                    <img src={product.images[0]} alt={product.name} className="w-12 h-14 object-cover" />
                    <div>
                      <h4 className="font-sans font-semibold text-xs group-hover:text-white transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-[10px] font-mono text-[#777777] group-hover:text-[#ccc]">{product.category} • {product.gsm}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[#b89047] group-hover:text-[#c5a059]">৳{product.price.toLocaleString()}</span>
                    <ArrowRight className="w-4 h-4 text-[#888888] group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
