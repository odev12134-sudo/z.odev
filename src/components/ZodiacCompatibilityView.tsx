import React, { useState } from 'react';
import { zodiacCompatibilities, ZodiacCompatibility } from '../data/zodiacCompatibility';
import { tarotCards, TarotCard } from '../data/tarotCards';
import { Sparkles, Compass, Flame, Shield, Heart, ArrowRight, Star, Moon, Feather, Compass as NavIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ZodiacCompatibilityViewProps {
  onSelectCardForReading?: (card: TarotCard) => void;
  // A callback if user wants to look closer at a handbook card from here
  onViewCardDetails?: (card: TarotCard) => void;
}

export default function ZodiacCompatibilityView({ onSelectCardForReading, onViewCardDetails }: ZodiacCompatibilityViewProps) {
  const [selectedSignId, setSelectedSignId] = useState<string>("aries");
  const [activeHandCard, setActiveHandCard] = useState<TarotCard | null>(null);

  // Find the selected zodiac compatibility data
  const activeSign = zodiacCompatibilities.find(z => z.id === selectedSignId) || zodiacCompatibilities[0];

  const getElementIcon = (el: string) => {
    switch(el) {
      case 'Ateş': return <Flame className="w-3.5 h-3.5 text-amber-500" />;
      case 'Toprak': return <Feather className="w-3.5 h-3.5 text-[#6B705C]" />;
      case 'Hava': return <Feather className="w-3.5 h-3.5 text-slate-400" />;
      case 'Su': return <Feather className="w-3.5 h-3.5 text-blue-500" />;
      default: return null;
    }
  };

  const getElementBadgeStyle = (el: string) => {
    switch(el) {
      case 'Ateş': return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'Toprak': return 'bg-[#F0EDE4] text-[#6B705C] border-[#A5A58D]/30';
      case 'Hava': return 'bg-slate-100 text-slate-600 border-slate-200';
      case 'Su': return 'bg-blue-50 text-blue-700 border-blue-200r';
      default: return 'bg-slate-50 text-slate-700 border-slate-200';
    }
  };

  // Helper to open details of major cards in the handbook popup
  const handleOpenMajorCard = (cardId: string) => {
    const foundCard = tarotCards.find(c => c.id === cardId);
    if (foundCard) {
      if (onViewCardDetails) {
        onViewCardDetails(foundCard);
      } else {
        // Fallback local modal state in case parent doesn't handle
        setActiveHandCard(foundCard);
      }
    }
  };

  return (
    <div id="zodiac-compatibility-view" className="space-y-8">
      {/* Title & Description */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-3xl md:text-4xl font-mystic text-[#6B705C] tracking-widest uppercase">Burç & Tarot Uyumu</h2>
        <div className="w-16 h-[2px] bg-[#D4A373] mx-auto rounded"></div>
        <p className="text-[#3A362F] font-serif italic text-sm md:text-base leading-relaxed">
          "On iki zodyak takımyıldızının Büyük Arkana ve Küçük Arkana tarot sembolleri ile arasındaki mistik bağları, sarsılmaz enerjisel ortaklıkları ve kadim kozmik güçleri keşfedin."
        </p>
      </div>

      {/* Zodiac Interactive Selector Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {zodiacCompatibilities.map((z) => {
          const isSelected = z.id === selectedSignId;
          return (
            <button
              key={z.id}
              onClick={() => setSelectedSignId(z.id)}
              className={`p-3 rounded-2xl border-2 transition-all duration-300 flex flex-col items-center justify-center space-y-1 relative ${
                isSelected 
                  ? 'bg-white border-[#6B705C] shadow-md ring-1 ring-[#6B705C]/20 scale-102' 
                  : 'bg-white/60 border-[#E6E1D6] hover:border-[#A5A58D]/60 hover:bg-white'
              }`}
            >
              <span className={`text-2xl ${isSelected ? 'scale-110 text-[#D4A373]' : 'text-[#6B705C]/70'} transition-transform`}>
                {z.symbol}
              </span>
              <span className="text-xs font-bold text-[#3A362F]">{z.name}</span>
              <span className="text-[9px] text-[#A5A58D] font-serif tracking-tight text-center line-clamp-1">{z.date.split(' ')[0]} {z.date.split(' ')[1]}</span>
              
              {isSelected && (
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 bg-[#D4A373] rounded-t-full"></span>
              )}
            </button>
          );
        })}
      </div>

      {/* Detailed Analysis of selected Zodiac */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSign.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch"
        >
          {/* Column 1: Zodiac Profile Summary */}
          <div className="bg-white p-6 rounded-2xl border border-[#E6E1D6] shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#F0EDE4] flex items-center justify-center text-3xl text-[#D4A373] shadow-inner font-mystic">
                  {activeSign.symbol}
                </div>
                <div>
                  <h3 className="font-mystic text-xl font-bold uppercase tracking-wider text-[#3A362F]">{activeSign.name} Burcu</h3>
                  <p className="text-xs text-[#A5A58D] font-serif italic">{activeSign.date}</p>
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2">
                <span className={`px-2.5 py-1 rounded-full border text-[10px] font-bold uppercase flex items-center gap-1 ${getElementBadgeStyle(activeSign.element)}`}>
                  {getElementIcon(activeSign.element)}
                  {activeSign.element} Elementi
                </span>
                <span className="px-2.5 py-1 rounded-full border border-stone-200 bg-stone-50 text-stone-700 text-[10px] font-medium">
                  Yönetici: {activeSign.rulingPlanet}
                </span>
              </div>

              <div className="w-full h-[1px] bg-[#E6E1D6]" />

              <div className="space-y-2">
                <h4 className="text-xs uppercase tracking-widest text-[#6B705C] font-bold">Kozmik Astrolojik Hizalama</h4>
                <p className="text-sm text-[#5C574F] font-serif leading-relaxed italic">
                  "{activeSign.analysis}"
                </p>
              </div>
            </div>

            <div className="p-4 bg-[#F9F7F2] rounded-xl border border-[#E6E1D6] flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#D4A373] shrink-0 mt-0.5" />
              <div className="text-[11px] leading-relaxed text-[#6B705C] font-medium">
                Burcunuzun tarot kartları ile olan bağları, karakterinizin en güçlü tılsım kanallarıdır. Bu kartları okuma masasında açılımlara ekleyerek kozmik rezonansınızı artırabilirsiniz.
              </div>
            </div>
          </div>

          {/* Column 2 & 3: Magic Cards Harmony */}
          <div className="lg:col-span-2 space-y-6 flex flex-col justify-between">
            {/* Part A: Major Arcana Harmony */}
            <div className="space-y-4">
              <h3 className="text-sm uppercase tracking-widest text-[#6B705C] font-bold flex items-center gap-2">
                <Star className="w-4 h-4 text-[#D4A373]" /> Büyük Arkana (Major Arcana) Uyumlu Kartları
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSign.majorCards.map((mc) => {
                  // Find gradient if mapped
                  const relatedCard = tarotCards.find(c => c.id === mc.cardId);
                  const gradient = relatedCard ? relatedCard.gradient : "from-slate-600 via-sky-700 to-blue-800";
                  
                  return (
                    <div 
                      key={mc.cardId}
                      className="bg-white p-5 rounded-2xl border border-[#E6E1D6] hover:border-[#A5A58D] shadow-sm hover:shadow transition-all group flex flex-col justify-between space-y-4"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="font-mystic font-bold text-sm tracking-wide text-[#3A362F] group-hover:text-[#6B705C] transition-colors uppercase">
                            {mc.cardName}
                          </h4>
                          <span className="text-[9px] uppercase tracking-widest text-[#A5A58D] font-bold bg-[#F0EDE4] px-2 py-0.5 rounded">
                            Asal Ortak
                          </span>
                        </div>
                        <p className="text-xs text-[#5C574F] font-serif leading-relaxed line-clamp-4 md:line-clamp-none">
                          {mc.reason}
                        </p>
                      </div>

                      {relatedCard && (
                        <button 
                          onClick={() => handleOpenMajorCard(mc.cardId)}
                          className="text-[11px] font-bold text-[#D4A373] hover:text-[#c39262] flex items-center gap-1 self-start transition-colors"
                        >
                          Kart Sembolizmini & Anlamını Oku <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Part B: Minor Arcana Harmony */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm uppercase tracking-widest text-[#6B705C] font-bold flex items-center gap-2">
                <Moon className="w-4 h-4 text-[#D4A373]" /> Küçük Arkana (Minor Arcana) Uyumlu Kartları
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSign.minorCards.map((mic, idx) => (
                  <div 
                    key={idx}
                    className="bg-white p-5 rounded-2xl border border-[#E6E1D6]/80 shadow-inner flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="font-mystic font-bold text-xs uppercase tracking-wider text-[#3A362F]">
                          {mic.cardName}
                        </h4>
                        <span className="text-[8px] uppercase tracking-widest font-semibold text-[#6B705C] bg-[#6B705C]/10 px-2 py-0.5 rounded-full">
                          Yavru Arkana
                        </span>
                      </div>
                      <p className="text-xs text-[#5C574F] font-serif leading-relaxed">
                        {mic.reason}
                      </p>
                    </div>

                    {/* Keywords */}
                    <div className="flex flex-wrap gap-1 pt-1.5 border-t border-dashed border-[#E6E1D6]">
                      {mic.keywords.map((kw, i) => (
                        <span key={i} className="text-[9px] font-medium bg-[#F9F7F2] text-[#A5A58D] border border-[#E6E1D6] px-2 py-0.5 rounded">
                          {kw}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Internal Handbook Detail Fallback Popup */}
      <AnimatePresence>
        {activeHandCard && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="absolute inset-0" onClick={() => setActiveHandCard(null)}></div>
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-2xl bg-[#F9F7F2] rounded-2xl border-2 border-[#A5A58D] overflow-hidden shadow-2xl z-10 p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto"
            >
              {/* Natural Accent Line */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#6B705C] via-[#D4A373] to-[#6B705C]"></div>
              
              <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E6E1D6]">
                <div>
                  <h3 className="font-mystic text-2xl text-[#3A362F] tracking-wider uppercase font-bold">{activeHandCard.name}</h3>
                  <p className="text-sm text-[#A5A58D] font-serif italic">{activeHandCard.englishName} • {activeHandCard.arcana}</p>
                </div>
                <div className="px-3 py-1.5 bg-white border border-[#E6E1D6] rounded-lg text-xs flex items-center gap-1.5">
                  <span className="text-[#D4A373] text-sm">{activeHandCard.astrologyIcon}</span>
                  <span className="text-[#3A362F] font-semibold">{activeHandCard.astrology}</span>
                </div>
              </div>

              <div className="space-y-4 text-sm leading-relaxed text-[#3A362F]">
                <p className="font-serif italic p-4 bg-white rounded-xl border-l-4 border-[#D4A373]">
                  "{activeHandCard.description}"
                </p>

                <div className="p-4 bg-white border border-[#E6E1D6] rounded-xl space-y-2">
                  <h4 className="text-[#6B705C] font-bold text-xs uppercase tracking-wider">🪐 Sembolizm Derinliği</h4>
                  <p className="text-xs text-[#5C574F] leading-relaxed">
                    {activeHandCard.symbolism}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-[#E6E1D6] rounded-xl space-y-1.5">
                    <h4 className="text-[#6B705C] font-bold text-xs uppercase tracking-wider">▲ Düz Anlamı</h4>
                    <p className="text-xs text-[#5C574F]">{activeHandCard.uprightMeaning}</p>
                  </div>
                  <div className="p-4 bg-white border border-[#E6E1D6] rounded-xl space-y-1.5">
                    <h4 className="text-[#D4A373] font-bold text-xs uppercase tracking-wider">▼ Ters Anlamı</h4>
                    <p className="text-xs text-[#5C574F]">{activeHandCard.reversedMeaning}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-4 border-t border-[#E6E1D6]">
                <button
                  onClick={() => setActiveHandCard(null)}
                  className="px-5 py-2 bg-white hover:bg-[#E6E1D6] text-[#3A362F] border border-[#E6E1D6] font-bold rounded-full text-xs uppercase tracking-widest transition-colors"
                >
                  Kapat
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
