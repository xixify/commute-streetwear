import React, { useState } from 'react';
import { CLIENT_SOCIAL_LINKS } from '../data/products';
import { Instagram, Facebook, ArrowRight, ShieldCheck, Mail, CheckCircle, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string, category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#f0eee6] text-[#111111] border-t border-[#e2e0d8] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Newsletter Lead Capture Section */}
        <div className="bg-[#ffffff] border border-[#e2e0db] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-2 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">
              <Mail className="w-4 h-4" />
              <span>COMMUTE INSIDERS CLUB</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#111111]">
              GET 10% OFF YOUR FIRST DROP<span className="text-[#b89047]">.</span>
            </h3>
            <p className="text-xs text-[#555555] font-sans leading-relaxed">
              Subscribe for early access to limited drop drops, private flash sales, and streetwear lookbook releases.
            </p>
          </div>

          <div className="w-full lg:w-auto min-w-[320px]">
            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-300 p-4 text-center space-y-1 animate-fadeIn">
                <CheckCircle className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="font-mono text-xs font-bold text-[#111111] uppercase">YOU'RE ON THE VIP LIST!</p>
                <p className="text-[11px] font-mono text-[#555555]">Use promo code <span className="text-[#b89047] font-bold">COMMUTE10</span> at checkout.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Enter your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-[#f9f8f6] border border-[#e5e3dc] px-4 py-3 text-xs font-mono text-[#111111] focus:outline-none focus:border-[#b89047] min-w-[260px]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <span>JOIN</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 font-sans text-xs">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="font-display font-extrabold text-2xl tracking-tighter text-[#111111]">
              COMMUTE<span className="text-[#b89047]">.</span>
            </h2>
            <p className="text-[#555555] text-xs leading-relaxed max-w-sm">
              Contemporary urban uniform designed for daily movement. Minimalist streetwear silhouettes, heavyweight custom textiles, and luxury Dhaka craftsmanship.
            </p>

            <div className="space-y-2 text-xs font-mono text-[#555555] pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#b89047]" />
                <span>{CLIENT_SOCIAL_LINKS.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#b89047]" />
                <span>{CLIENT_SOCIAL_LINKS.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#b89047]" />
                <span>{CLIENT_SOCIAL_LINKS.email}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a
                href={CLIENT_SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#ffffff] hover:bg-[#b89047] text-[#444444] hover:text-white border border-[#e5e3dc] flex items-center justify-center transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={CLIENT_SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#ffffff] hover:bg-[#b89047] text-[#444444] hover:text-white border border-[#e5e3dc] flex items-center justify-center transition-all shadow-sm"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">PAGES</h4>
            <ul className="space-y-2 text-[#555555] font-mono text-[11px]">
              <li><button onClick={() => onNavigate('home')} className="hover:text-[#111111] transition-colors">HOMEPAGE</button></li>
              <li><button onClick={() => onNavigate('collection')} className="hover:text-[#111111] transition-colors">COLLECTION / SHOP</button></li>
              <li><button onClick={() => onNavigate('about')} className="hover:text-[#111111] transition-colors">ABOUT COMMUTE</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">CONTACT & SUPPORT</button></li>
            </ul>
          </div>

          {/* Collections */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">COLLECTIONS</h4>
            <ul className="space-y-2 text-[#555555] font-mono text-[11px]">
              <li><button onClick={() => onNavigate('collection', 'Heavyweight Tees')} className="hover:text-[#111111] transition-colors">HEAVYWEIGHT TEES</button></li>
              <li><button onClick={() => onNavigate('collection', 'Oversized Hoodies')} className="hover:text-[#111111] transition-colors">OVERSIZED HOODIES</button></li>
              <li><button onClick={() => onNavigate('collection', 'Cargo & Bottoms')} className="hover:text-[#111111] transition-colors">CARGO & BOTTOMS</button></li>
              <li><button onClick={() => onNavigate('collection', 'Outerwear')} className="hover:text-[#111111] transition-colors">OUTERWEAR JACKETS</button></li>
              <li><button onClick={() => onNavigate('collection', 'Accessories')} className="hover:text-[#111111] transition-colors">ACCESSORIES</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-3">
            <h4 className="font-mono text-xs font-bold text-[#111111] uppercase tracking-wider">CUSTOMER CARE</h4>
            <ul className="space-y-2 text-[#555555] font-mono text-[11px]">
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">SHIPPING & DELIVERY</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">RETURNS & EXCHANGES</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">SIZE FIT GUIDE</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">FAQS</button></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">TERMS & PRIVACY</button></li>
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Badges */}
        <div className="pt-8 border-t border-[#e2e0d8] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] text-[#666666]">
          <p>© {new Date().getFullYear()} COMMUTE STREETWEAR ATELIER (COMMUTE.CO). ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4">
            <span>DESIGNED WITH LUXURY MINIMALISM</span>
            <span>•</span>
            <span>CASH ON DELIVERY & BKASH SUPPORTED</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
