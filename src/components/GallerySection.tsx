import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon, Camera } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/gymData';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Weights', 'Cardio', 'Training', 'Gym Floor'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (item: GalleryItem) => {
    setActiveItem(item);
  };

  const closeLightbox = () => {
    setActiveItem(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex(i => i.id === activeItem.id);
    if (currentIndex === -1) return;

    if (direction === 'next') {
      const nextIndex = (currentIndex + 1) % filteredItems.length;
      setActiveItem(filteredItems[nextIndex]);
    } else {
      const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
      setActiveItem(filteredItems[prevIndex]);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#080808] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#181818] border border-[#2b2b2b] text-[11px] font-bold tracking-widest text-[#C6FF00] uppercase mb-4">
              <Camera className="w-3.5 h-3.5 text-[#C6FF00]" />
              <span>VISUAL EXPERIENCE</span>
            </div>
            <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white leading-tight">
              STEP INSIDE <br />
              <span className="text-[#C6FF00]">CHINMAYA GYM.</span>
            </h2>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C6FF00] text-black shadow-md shadow-[#C6FF00]/20'
                    : 'bg-[#151515] text-[#A5A5A5] hover:text-white hover:bg-[#202020] border border-[#262626]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-2xl overflow-hidden bg-[#141414] border border-[#242424] hover:border-[#C6FF00]/50 aspect-square cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#C6FF00]/10"
            >
              <img
                src={item.url}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              {/* Verified Authentic Badge if true */}
              {item.isAuthentic && (
                <div className="absolute top-3 left-3 bg-[#C6FF00] text-black px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-wider flex items-center gap-1 shadow-md z-10">
                  <span>★ Google Verified Photo</span>
                </div>
              )}

              {/* Hover Overlay Details */}
              <div className="absolute bottom-0 inset-x-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform flex items-end justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#C6FF00] bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-sm text-white mt-1">
                    {item.title}
                  </h4>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#C6FF00] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-100 scale-75">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer Note */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#666666]">
            * Note: Curated fitness photography provided as high-quality preview placeholders. Authentic on-site images of CHINMAYA GYM CENTER can be easily populated in the configuration.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-2 rounded-full bg-[#1c1c1c] text-white hover:text-[#C6FF00] transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left / Right arrows */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141414]/80 text-white hover:text-[#C6FF00] hover:bg-[#202020] transition-all cursor-pointer"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-[#141414]/80 text-white hover:text-[#C6FF00] hover:bg-[#202020] transition-all cursor-pointer"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Center Image Container */}
          <div
            className="max-w-4xl max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeItem.url}
              alt={activeItem.alt}
              className="max-h-[75vh] w-auto object-contain rounded-2xl border border-[#333333] shadow-2xl"
            />
            <div className="mt-4 text-center">
              <span className="text-xs text-[#C6FF00] uppercase font-bold tracking-wider">
                {activeItem.category}
              </span>
              <h3 className="font-heading font-black text-xl text-white">
                {activeItem.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
