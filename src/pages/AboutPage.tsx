import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Feather, Layers } from 'lucide-react';
import { CLIENT_SOCIAL_LINKS } from '../data/products';

interface AboutPageProps {
  onNavigate: (page: string, category?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-[#f9f8f6] text-[#111111] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff] border border-[#e5e3dc] text-[#b89047] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
            <Compass className="w-3.5 h-3.5" />
            <span>ABOUT COMMUTE ATELIER</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl text-[#111111] uppercase tracking-tight leading-none">
            REDEFINING URBAN UNIFORM<span className="text-[#b89047]">.</span>
          </h1>
          <p className="text-base text-[#555555] font-sans font-light leading-relaxed">
            COMMUTE is a contemporary streetwear atelier founded on the principles of luxury minimalism, heavyweight fabrications, and utility-focused silhouettes.
          </p>
        </div>

        {/* Hero Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 aspect-[16/9] lg:aspect-auto bg-[#ffffff] border border-[#e5e3dc] overflow-hidden shadow-sm">
            <img
              src="/Images/700740227_18046266803785194_68359887164937934_n.jpg"
              alt="Commute Atelier Studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#ffffff] border border-[#e5e3dc] p-8 flex flex-col justify-between space-y-6 shadow-sm">
            <div className="space-y-4">
              <span className="text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">OUR ORIGINS</span>
              <h3 className="font-display text-2xl font-bold uppercase text-[#111111]">ESTABLISHED FOR THE URBAN COMMUTER</h3>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                Operating out of Dhaka, Bangladesh — a global epicenter for garment manufacturing — COMMUTE combines local manufacturing mastery with modern international streetwear aesthetics.
              </p>
            </div>

            <div className="pt-6 border-t border-[#e5e3dc] font-mono text-xs text-[#666666] space-y-2">
              <p><strong className="text-[#111111]">INSTAGRAM:</strong> {CLIENT_SOCIAL_LINKS.handle}</p>
              <p><strong className="text-[#111111]">ESTABLISHED:</strong> 2024</p>
              <p><strong className="text-[#111111]">SPECIALTY:</strong> 280-450 GSM Heavy Cotton</p>
            </div>
          </div>
        </div>

        {/* Core Pillars */}
        <div className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">DESIGN PHILOSOPHY</span>
            <h2 className="font-display text-3xl font-extrabold uppercase text-[#111111]">THE FOUR PILLARS OF COMMUTE</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-[#ffffff] border border-[#e5e3dc] p-6 space-y-3 shadow-sm hover:border-[#b89047] transition-all">
              <Layers className="w-6 h-6 text-[#b89047]" />
              <h4 className="font-mono text-sm font-bold uppercase text-[#111111]">1. HEAVYWEIGHT GSM</h4>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                We custom mill our 280-450 GSM French Terry and combed jersey cotton for structured architectural drape that never loses shape after washing.
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#e5e3dc] p-6 space-y-3 shadow-sm hover:border-[#b89047] transition-all">
              <Feather className="w-6 h-6 text-[#b89047]" />
              <h4 className="font-mono text-sm font-bold uppercase text-[#111111]">2. BOXY SILHOUETTES</h4>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                Calculated dropped shoulders, wider chest proportions, and tailored hem crops designed specifically for modern layering.
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#e5e3dc] p-6 space-y-3 shadow-sm hover:border-[#b89047] transition-all">
              <ShieldCheck className="w-6 h-6 text-[#b89047]" />
              <h4 className="font-mono text-sm font-bold uppercase text-[#111111]">3. PRE-SHRUNK FABRIC</h4>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                Every piece undergoes custom garment enzyme washing and pre-shrinking treatments to guarantee color fastness and size fidelity.
              </p>
            </div>

            <div className="bg-[#ffffff] border border-[#e5e3dc] p-6 space-y-3 shadow-sm hover:border-[#b89047] transition-all">
              <Sparkles className="w-6 h-6 text-[#b89047]" />
              <h4 className="font-mono text-sm font-bold uppercase text-[#111111]">4. MINIMAL BRANDING</h4>
              <p className="text-xs text-[#555555] font-sans leading-relaxed">
                No loud logos. Just high-density silicone prints, tonal embroidery, custom engraved metal hardware, and subtle woven tags.
              </p>
            </div>
          </div>
        </div>

        {/* Founder & Craftsmanship Grid */}
        <div className="bg-[#f2f0ea] border border-[#e2e0d8] p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center shadow-sm">
          <div className="space-y-4">
            <span className="text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">FOUNDER STATEMENT</span>
            <blockquote className="font-display text-xl sm:text-2xl font-bold text-[#111111] italic leading-snug">
              "We built COMMUTE for people who demand quality over hype. A good garment should fit perfectly, feel substantial on your shoulders, and speak through clean design."
            </blockquote>
            <p className="text-xs font-mono text-[#666666] uppercase">— COMMUTE CREATIVE DIRECTORS</p>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-center space-y-4">
            <button
              onClick={() => onNavigate('collection')}
              className="px-8 py-4 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3 shadow-md"
            >
              <span>EXPLORE COLLECTION 04</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
