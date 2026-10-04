import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroBannerProps {
  onShopClick: () => void;
  onAboutClick: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ onShopClick }) => {
  const heroSlides = [
    {
      img: 'Images/701495763_18046518320785194_4400771909126757418_n.jpg',
      title: 'RAW SAND MONOGRAM CREWNECK',
      subtitle: 'Heavyweight 400 GSM Loopback Fleece'
    },
    {
      img: 'Images/700169476_18046003397785194_424452020238058406_n.jpg',
      title: 'PARACHUTE CARGO TROUSERS',
      subtitle: '260 GSM Ripstop Canvas Tech Flare'
    },
    {
      img: 'Images/714610436_18048806609785194_4446470819008697431_n.jpg',
      title: 'URBAN UNIFORM SILHOUETTES',
      subtitle: '450 GSM French Terry Boxy Fit'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const activeSlide = heroSlides[currentSlide];

  return (
    <section className="relative h-[55vh] min-h-[440px] max-h-[580px] bg-[#111111] flex items-center overflow-hidden border-b border-[#e5e3dc]">
      {/* Full-bleed Crisp Background Image */}
      {heroSlides.map((slide, idx) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-90 scale-100' : 'opacity-0 scale-105'
          }`}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            transitionProperty: 'opacity, transform',
            transitionDuration: '1s'
          }}
        />
      ))}

      {/* Clean Subtle Dark Vignette for Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent z-10" />

      {/* Minimalist Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl space-y-4 text-white">
          
          {/* Subheader Tag */}
          <div className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#b89047] uppercase font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89047] inline-block" />
            <span>COMMUTE ATELIER // DROP 04</span>
          </div>

          {/* Minimal Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white uppercase leading-none">
            URBAN UNIFORM<span className="text-[#b89047]">.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm text-[#e0e0e0] font-sans max-w-md leading-relaxed font-light">
            {activeSlide.title} — {activeSlide.subtitle}. Minimalist streetwear engineered for movement.
          </p>

          {/* Clean Single Action CTA */}
          <div className="pt-2">
            <button
              onClick={onShopClick}
              className="px-7 py-3.5 bg-white hover:bg-[#b89047] text-[#111111] hover:text-white font-mono font-bold text-xs tracking-[0.2em] uppercase transition-all flex items-center gap-2.5 shadow-lg group"
            >
              <span>EXPLORE COLLECTION</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#b89047] group-hover:text-white" />
            </button>
          </div>

        </div>
      </div>

      {/* Minimalist Understated Slide Number & Dots (Bottom Right) */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-4 font-mono text-xs text-white/80">
        <span className="font-bold text-[#b89047]">0{currentSlide + 1}</span>
        <div className="flex gap-1.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-1 rounded-full transition-all ${
                currentSlide === idx ? 'w-6 bg-[#b89047]' : 'w-2 bg-white/40 hover:bg-white'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <span>0{heroSlides.length}</span>
      </div>
    </section>
  );
};
