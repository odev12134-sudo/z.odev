import React, { useState } from 'react';
import { tarotCards, TarotCard } from '../data/tarotCards';
import { Search, Compass, Shield, BookOpen, Heart, RefreshCw, Scale, Hourglass, ShieldAlert, Zap, Star, Sun, Eye, Moon, Flame, Skull, CloudMoon, Volume2, Globe, Sparkles, Navigation, Droplet } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Compass, Shield, BookOpen, Heart, RefreshCw, Scale, Hourglass, ShieldAlert,
  Zap, Star, Sun, Eye, Moon, Flame, Skull, CloudMoon, Volume2, Globe, Sparkles, Navigation, Droplet
};

interface CardDictionaryProps {
  onSelectForReading?: (card: TarotCard) => void;
}

export default function CardDictionary({ onSelectForReading }: CardDictionaryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedElement, setSelectedElement] = useState<string>('Tümü');
  const [activeCard, setActiveCard] = useState<TarotCard | null>(null);

  // Filter logic
  const filteredCards = tarotCards.filter(card => {
    const matchesSearch = card.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          card.englishName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          card.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase())) ||
                          card.astrology.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesElement = selectedElement === 'Tümü' || card.element === selectedElement;
    
    return matchesSearch && matchesElement;
  });

  const elements = ['Tümü', 'Ateş', 'Toprak', 'Hava', 'Su'];

  const getElementColor = (el: string) => {
    switch(el) {
      case 'Ateş': return 'text-[#D4A373] bg-[#FDF5D9]/40 border-[#D4A373]/30';
      case 'Toprak': return 'text-[#6B705C] bg-[#F0EDE4] border-[#A5A58D]/30';
      case 'Hava': return 'text-[#A5A58D] bg-[#F9F7F2] border-[#A5A58D]/20';
      case 'Su': return 'text-[#5B614F] bg-[#E6E1D6]/50 border-[#6B705C]/20';
      default: return 'text-slate-500 bg-slate-100 border-slate-200';
    }
  };

  return (
    <div id="card-dictionary-container" className="space-y-8">
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-mystic text-[#6B705C] tracking-widest uppercase">Tarot El Sözlüğü</h2>
        <div className="w-16 h-[2px] bg-[#D4A373] mx-auto rounded"></div>
        <p className="text-[#3A362F] font-serif italic text-sm md:text-base leading-relaxed">
          "Büyük Arkana'nın (Major Arcana) kadim 22 sırrını, kozmik bağlarını, astrolojik bağlantılarını ve içsel rehberliklerini keşfedin."
        </p>
      </div>

      {/* Filters and Search Bar */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between p-5 bg-white rounded-2xl border border-[#E6E1D6] shadow-sm">
        {/* Search */}
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A5A58D]" />
          <input
            id="search-input"
            type="text"
            placeholder="Kart veya burç ismi, kilit kelime ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-[#F9F7F2] border border-[#E6E1D6] rounded-xl text-[#3A362F] placeholder-[#B7B7A4] focus:outline-none focus:border-[#6B705C] transition-colors font-sans text-sm"
          />
        </div>

        {/* Element Filter */}
        <div className="flex flex-wrap gap-2 justify-center w-full md:w-auto">
          {elements.map((el) => (
            <button
              key={el}
              id={`filter-${el.toLowerCase()}`}
              onClick={() => setSelectedElement(el)}
              className={`px-4 py-2 rounded-full border text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                selectedElement === el
                  ? 'bg-[#6B705C] text-white border-[#6B705C] shadow-sm'
                  : 'bg-[#F9F7F2] text-[#6B705C] border-[#E6E1D6] hover:bg-[#E6E1D6]/50'
              }`}
            >
              {el}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Tarot Cards */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredCards.map((card, idx) => {
            const CardIcon = iconMap[card.iconName] || Sparkles;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                onClick={() => setActiveCard(card)}
                className="group relative cursor-pointer flex flex-col justify-between p-4 rounded-2xl border border-[#E6E1D6] bg-white hover:border-[#6B705C] hover:shadow-md transition-all duration-350 overflow-hidden"
              >
                {/* Number Badge */}
                <div className="absolute top-3 right-3 text-[11px] font-mystic text-[#6B705C] bg-[#F9F7F2] px-2 py-0.5 rounded border border-[#E6E1D6]">
                  {card.number === 0 ? '0' : card.number}
                </div>

                {/* Card Art representation */}
                <div className="flex flex-col items-center py-6 space-y-4">
                  {/* Decorative Glowing Sphere */}
                  <div className={`relative w-16 h-16 rounded-full flex items-center justify-center bg-[#F0EDE4] border border-[#E6E1D6] opacity-90 group-hover:opacity-100 transition-all duration-300 group-hover:scale-105 shadow-sm`}>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent to-[#D4A373]/10"></div>
                    <CardIcon className="w-8 h-8 text-[#6B705C] relative z-10 drop-shadow-sm group-hover:text-[#D4A373] transition-colors" />
                  </div>

                  <div className="text-center">
                    <h3 className="font-mystic text-xs sm:text-sm font-bold uppercase tracking-widest text-[#3A362F] group-hover:text-[#6B705C] transition-colors">
                      {card.name}
                    </h3>
                    <p className="text-[10px] text-[#A5A58D] font-serif italic">{card.englishName}</p>
                  </div>
                </div>

                {/* Bottom Badges */}
                <div className="pt-3 border-t border-[#F0EDE4] flex items-center justify-between text-[11px]">
                  <span className={`px-2 py-0.5 rounded-full border text-[10px] font-bold uppercase ${getElementColor(card.element)}`}>
                    {card.element}
                  </span>
                  <span className="text-[#3A362F] font-serif flex items-center gap-1">
                    <span className="text-xs text-[#D4A373]">{card.astrologyIcon}</span> {card.astrology.split(' ')[0]}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-12 bg-white border border-[#E6E1D6] rounded-2xl">
          <p className="text-[#A5A58D] font-serif">Aradığınız kriterlere uygun bir tarot kartı bulunamadı.</p>
        </div>
      )}

      {/* Details Modal overlay */}
      <AnimatePresence>
        {activeCard && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            {/* Modal backdrop closer */}
            <div className="absolute inset-0" onClick={() => setActiveCard(null)}></div>
            
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#F9F7F2] rounded-2xl border-2 border-[#A5A58D] overflow-hidden shadow-2xl z-10"
            >
              {/* Natural Accent Line */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#6B705C] via-[#D4A373] to-[#6B705C]"></div>
              
              <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto">
                {/* Header info */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#E6E1D6]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white border border-[#E6E1D6] shadow-sm">
                      {React.createElement(iconMap[activeCard.iconName] || Sparkles, { className: "w-7 h-7 text-[#6B705C]" })}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-mystic text-2xl text-[#3A362F] tracking-wider uppercase font-bold">{activeCard.name}</h3>
                        <span className="text-xs font-serif italic text-[#6B705C] bg-[#F0EDE4] px-2 py-0.5 rounded border border-[#E6E1D6]">
                          Yol No: {activeCard.number}
                        </span>
                      </div>
                      <p className="text-sm text-[#A5A58D] font-serif italic">{activeCard.englishName} • {activeCard.arcana}</p>
                    </div>
                  </div>

                  {/* Astronomic / Elemental Alignment */}
                  <div className="flex gap-2">
                    <div className="px-3 py-1.5 bg-white border border-[#E6E1D6] rounded-lg text-xs">
                      <span className="text-[#A5A58D]">Element:</span>{' '}
                      <span className="font-bold text-[#6B705C]">
                        {activeCard.element}
                      </span>
                    </div>
                    <div className="px-3 py-1.5 bg-white border border-[#E6E1D6] rounded-lg text-xs flex items-center gap-1.5 text-slate-700">
                      <span className="text-[#D4A373] text-sm font-semibold">{activeCard.astrologyIcon}</span>
                      <span className="text-[#3A362F] font-medium">{activeCard.astrology}</span>
                    </div>
                  </div>
                </div>

                {/* Keywords Grid */}
                <div className="flex flex-wrap gap-1.5">
                  {activeCard.keywords.map((kw, i) => (
                    <span key={i} className="text-xs bg-white text-[#6B705C] border border-[#E6E1D6] px-3 py-1 rounded-full font-sans font-medium">
                      # {kw}
                    </span>
                  ))}
                </div>

                {/* Card description text */}
                <div className="space-y-4 text-[#3A362F] text-sm md:text-base leading-relaxed">
                  <p className="font-serif italic text-[#3A362F]/90 bg-white p-4 rounded-xl border-l-4 border-[#D4A373] shadow-sm">
                    "{activeCard.description}"
                  </p>

                  {/* Symbolism */}
                  <div className="p-4 bg-white border border-[#E6E1D6] rounded-xl space-y-2">
                    <h4 className="text-[#6B705C] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                      <span>🪐 Kozmik Sembolizm Derinliği</span>
                    </h4>
                    <p className="text-xs md:text-sm text-[#5C574F] leading-relaxed">
                      {activeCard.symbolism}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 pt-2">
                    {/* Upright Meaning */}
                    <div className="p-4 bg-white border border-[#E6E1D6] rounded-xl space-y-2 group">
                      <h4 className="text-[#6B705C] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <span className="inline-block">▲</span> Düz Anlamı
                      </h4>
                      <p className="text-xs md:text-sm text-[#5C574F] leading-relaxed">
                        {activeCard.uprightMeaning}
                      </p>
                    </div>

                    {/* Reversed Meaning */}
                    <div className="p-4 bg-white border border-[#E6E1D6] rounded-xl space-y-2">
                      <h4 className="text-[#D4A373] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5">
                        <span className="inline-block transform rotate-180">▲</span> Ters Anlamı
                      </h4>
                      <p className="text-xs md:text-sm text-[#5C574F] leading-relaxed">
                        {activeCard.reversedMeaning}
                      </p>
                    </div>
                  </div>

                  {/* Spread Interpretations Tabs or Mini-Cards */}
                  <div className="pt-2">
                    <h4 className="text-xs uppercase tracking-widest text-[#6B705C] font-bold mb-3">🔮 Farklı Açılımlardaki Yorumları</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      <div className="p-3 bg-white border border-[#E6E1D6] rounded-xl space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-rose-500 bg-rose-50 px-2 py-0.5 rounded">Aşk & İlişki</span>
                        <p className="text-[11px] text-[#5C574F] leading-relaxed font-serif">
                          {activeCard.spreadInterpretations.love}
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E6E1D6] rounded-xl space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-sky-600 bg-sky-50 px-2 py-0.5 rounded">Kariyer & İş</span>
                        <p className="text-[11px] text-[#5C574F] leading-relaxed font-serif">
                          {activeCard.spreadInterpretations.career}
                        </p>
                      </div>
                      <div className="p-3 bg-white border border-[#E6E1D6] rounded-xl space-y-1.5">
                        <span className="text-[10px] uppercase font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded">Maneviyat & Ruh</span>
                        <p className="text-[11px] text-[#5C574F] leading-relaxed font-serif">
                          {activeCard.spreadInterpretations.spiritual}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer and buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-[#E6E1D6]">
                  <button
                    onClick={() => setActiveCard(null)}
                    className="px-5 py-2 bg-white hover:bg-[#E6E1D6]/80 text-[#3A362F] border border-[#E6E1D6] font-bold rounded-full text-xs uppercase tracking-widest transition-colors"
                  >
                    Kapat
                  </button>

                  {onSelectForReading && (
                    <button
                      onClick={() => {
                        onSelectForReading(activeCard);
                        setActiveCard(null);
                      }}
                      className="px-5 py-2 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all shadow-sm"
                    >
                      Okumaya Ekle
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
