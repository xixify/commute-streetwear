import React, { useState } from 'react';
import { INSTAGRAM_POSTS, CLIENT_SOCIAL_LINKS } from '../data/products';
import { Instagram, Heart, MessageCircle, ExternalLink, Facebook, X } from 'lucide-react';

export const InstagramFeed: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof INSTAGRAM_POSTS[0] | null>(null);

  return (
    <section className="py-20 bg-[#f9f8f6] border-t border-[#e5e3dc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#b89047] uppercase tracking-widest font-bold">
              <Instagram className="w-4 h-4" />
              <span>@COMMUTE.CO ON INSTAGRAM</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#111111] uppercase tracking-tight">
              JOIN THE COMMUTE MOVEMENT<span className="text-[#b89047]">.</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#555555] font-sans max-w-lg">
              Tag <span className="text-[#111111] font-mono font-bold">@commute.co</span> in your streetwear fits to be featured in our official monthly campaign.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={CLIENT_SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#ffffff] hover:bg-[#111111] border border-[#e5e3dc] hover:border-[#111111] text-xs font-mono text-[#111111] hover:text-white uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <Instagram className="w-4 h-4 text-[#b89047]" />
              <span>INSTAGRAM FEED</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#777777]" />
            </a>

            <a
              href={CLIENT_SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 bg-[#ffffff] hover:bg-[#111111] border border-[#e5e3dc] hover:border-[#111111] text-xs font-mono text-[#111111] hover:text-white uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
            >
              <Facebook className="w-4 h-4 text-[#b89047]" />
              <span>FACEBOOK PAGE</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#777777]" />
            </a>
          </div>
        </div>

        {/* Instagram Image Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_POSTS.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group relative aspect-square bg-[#f4f3ef] overflow-hidden cursor-pointer border border-[#e5e3dc] hover:border-[#b89047] hover:shadow-md transition-all"
            >
              <img
                src={post.image}
                alt="Commute Instagram street post"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />

              {/* Hover Dark Overlay with Stats */}
              <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                <div className="flex justify-end">
                  <Instagram className="w-4 h-4 text-[#b89047]" />
                </div>
                
                <div className="space-y-1.5 text-center text-white">
                  <div className="flex items-center justify-center gap-3 font-mono text-xs font-bold">
                    <span className="flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
                      {post.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3.5 h-3.5 text-[#aaa]" />
                      {post.comments}
                    </span>
                  </div>
                  <p className="text-[10px] font-mono text-[#aaa] line-clamp-2 px-1">
                    {post.caption}
                  </p>
                </div>

                <div className="text-[9px] font-mono text-[#aaa] text-center uppercase">
                  CLICK TO VIEW POST
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Post Detail Modal */}
      {selectedPost && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedPost(null)}
        >
          <div 
            className="relative w-full max-w-2xl bg-[#ffffff] border border-[#e5e3dc] shadow-2xl overflow-hidden flex flex-col sm:flex-row"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-3 right-3 z-20 p-2 bg-white/80 hover:bg-white text-[#444444] hover:text-[#111111] rounded-full border border-[#e5e3dc]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-full sm:w-1/2 aspect-square bg-[#eee]">
              <img
                src={selectedPost.image}
                alt="Instagram post full"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full sm:w-1/2 p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-[#e5e3dc] pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#111111] text-white font-display font-extrabold text-xs flex items-center justify-center">
                      C
                    </div>
                    <div>
                      <h4 className="font-mono text-xs font-bold text-[#111111]">commute.co</h4>
                      <p className="text-[10px] font-mono text-[#777777]">Dhaka, Bangladesh</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-[#888888]">{selectedPost.date}</span>
                </div>

                <p className="text-xs font-sans text-[#444444] leading-relaxed">
                  {selectedPost.caption}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#e5e3dc]">
                <div className="flex items-center justify-between text-xs font-mono text-[#666666]">
                  <span className="flex items-center gap-1 font-bold text-[#111111]">
                    <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                    {selectedPost.likes} LIKES
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-[#777777]" />
                    {selectedPost.comments} COMMENTS
                  </span>
                </div>

                <a
                  href={CLIENT_SOCIAL_LINKS.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 bg-[#111111] hover:bg-[#b89047] text-white font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <Instagram className="w-4 h-4 text-[#b89047]" />
                  <span>VIEW ON INSTAGRAM</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
