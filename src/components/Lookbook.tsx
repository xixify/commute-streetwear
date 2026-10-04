import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface LookbookProps {
  onShopClick: () => void;
}

export const Lookbook: React.FC<LookbookProps> = ({ onShopClick }) => {
  const editorialImages = [
    {
      img: 'Images/688021048_18045594275785194_5710366581933748412_n.jpg',
      title: 'LOOK 01 // OVERSIZED GRAPHIC SILHOUETTE',
      category: 'HEAVYWEIGHT TEES'
    },
    {
      img: 'Images/636009027_18034757891785194_6131245554875701596_n.jpg',
      title: 'LOOK 02 // 450 GSM FRENCH TERRY FLEECE',
      category: 'HOODIES'
    },
    {
      img: 'Images/701495763_18046518320785194_4400771909126757418_n.jpg',
      title: 'LOOK 03 // RAW SAND MONOGRAM CREWNECK',
      category: 'CREWNECKS'
    }
  ];

  return (
    <section className="py-24 bg-[#f9f8f6] border-t border-[#e5e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffffff] border border-[#e5e3dc] text-[#b89047] font-mono text-xs uppercase tracking-widest font-bold shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#b89047]" />
            <span>COMMUTE EDITORIAL LOOKBOOK</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-[#111111] uppercase tracking-tight">
            THE ART OF DAILY COMMUTE<span className="text-[#b89047]">.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#555555] font-sans leading-relaxed">
            Minimalist streetwear designed for structural drape, tactile comfort, and effortless styling in urban environments.
          </p>
        </div>

        {/* Lookbook 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {editorialImages.map((look, idx) => (
            <div
              key={idx}
              onClick={onShopClick}
              className="group relative bg-[#ffffff] border border-[#e5e3dc] hover:border-[#b89047] shadow-sm hover:shadow-xl overflow-hidden cursor-pointer aspect-[3/4] transition-all"
            >
              <img
                src={look.img}
                alt={look.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono tracking-widest text-[#b89047] uppercase font-bold">
                  {look.category}
                </span>
                <h3 className="font-display text-lg font-bold text-white uppercase group-hover:text-[#b89047] transition-colors mt-1">
                  {look.title}
                </h3>
                
                <div className="pt-3 flex items-center gap-2 text-xs font-mono text-[#ccc] group-hover:text-white transition-colors">
                  <span>SHOP THIS LOOK</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#b89047]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
