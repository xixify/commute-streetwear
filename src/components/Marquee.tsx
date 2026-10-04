import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface MarqueeProps {
  text?: string;
  onCtaClick?: () => void;
}

export const Marquee: React.FC<MarqueeProps> = ({ onCtaClick }) => {
  const items = [
    'DROP 04 IS LIVE NOW',
    'HEAVYWEIGHT 280-450 GSM COTTON',
    'FREE SHIPPING ON ORDERS OVER ৳5,000',
    'COMMUTE STREETWEAR ATELIER',
    'URBAN UNIFORM FOR MOVEMENT',
    'FOLLOW US @COMMUTE.CO'
  ];

  return (
    <div className="bg-[#f2f0ea] border-y border-[#e2e0d8] py-2.5 overflow-hidden select-none">
      <div className="animate-infinite-scroll flex items-center whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((item, idx) => (
          <div key={idx} className="flex items-center gap-6 mx-4 text-xs font-mono tracking-widest text-[#555555] uppercase">
            <span className="flex items-center gap-2 hover:text-[#111111] transition-colors cursor-pointer font-semibold" onClick={onCtaClick}>
              {item}
              <ArrowUpRight className="w-3.5 h-3.5 text-[#b89047]" />
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#b89047] inline-block opacity-80"></span>
          </div>
        ))}
      </div>
    </div>
  );
};
