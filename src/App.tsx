import React, { useState, useEffect } from 'react';
import CardDictionary from './components/CardDictionary';
import ZodiacCompatibilityView from './components/ZodiacCompatibilityView';
import { tarotCards, TarotCard } from './data/tarotCards';
import { 
  Sparkles, 
  BookOpen, 
  Compass, 
  HelpCircle, 
  RotateCcw, 
  FileText, 
  User, 
  TrendingUp, 
  Calendar, 
  Heart, 
  ChevronRight, 
  Moon, 
  AlertCircle,
  Clock,
  Eye,
  Dice5,
  Flame,
  Star,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Selected spread specifications
interface SpreadOption {
  id: 'one' | 'three' | 'love';
  name: string;
  description: string;
  cardCount: number;
  positions: string[];
}

const spreadOptions: SpreadOption[] = [
  {
    id: 'one',
    name: 'Tek Kart (Anlık Odak)',
    description: 'Sorunuza anlık, doğrudan ve güçlü bir kozmik yanıt veya o anki genel enerjisel rehberlik.',
    cardCount: 1,
    positions: ['Bugünün Enerjisi & Genel Rehberlik']
  },
  {
    id: 'three',
    name: 'Üç Kart (Geçmiş-Şimdi-Gelecek)',
    description: 'Zamanın akışını inceleyen en kadim açılım. Durumun kökenini, şimdisini ve olası geleceğini gösterir.',
    cardCount: 3,
    positions: ['Geçmiş (Kökler)', 'Şimdiki Zaman (Mevcut Durum)', 'Gelecek (Olası Sonuç)']
  },
  {
    id: 'love',
    name: 'İlişki & Aşk Açılımı',
    description: 'İki ruh arasındaki bağı, gizli düşünceleri, partnerinizin hislerini ve ilişkinin geleceğini aydınlatır.',
    cardCount: 3,
    positions: ['Senin Rolün / Durumun', 'Partnerin / Karşı Tarafın Hali', 'İlişkideki Kozmik Gelecek']
  }
];

interface DrawnCard extends TarotCard {
  isReversed: boolean;
  spreadPosition: string;
}

interface TarotHistoryItem {
  id: string;
  date: string;
  question: string;
  spreadType: string;
  cards: { name: string; isReversed: boolean }[];
  reading: string;
}

export default function App() {
  const [activeTab, setActiveTab] = useState<'dictionary' | 'reading' | 'daily' | 'history' | 'zodiac'>('reading');
  
  // -- Daily Card State --
  const [dailyCard, setDailyCard] = useState<TarotCard | null>(null);
  const [dailyIsReversed, setDailyIsReversed] = useState<boolean>(false);
  const [dailyDrawnTime, setDailyDrawnTime] = useState<string>('');
  const [dailyLoading, setDailyLoading] = useState<boolean>(false);
  const [dailyInterpretation, setDailyInterpretation] = useState<string>('');

  // -- Tarot Reading State --
  const [selectedSpread, setSelectedSpread] = useState<SpreadOption>(spreadOptions[0]);
  const [question, setQuestion] = useState<string>('');
  const [drawnCards, setDrawnCards] = useState<DrawnCard[]>([]);
  const [deck, setDeck] = useState<TarotCard[]>([]);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);
  const [readingResult, setReadingResult] = useState<string>('');
  const [isLoadingReading, setIsLoadingReading] = useState<boolean>(false);
  const [readingError, setReadingError] = useState<string>('');

  // -- History State --
  const [historyList, setHistoryList] = useState<TarotHistoryItem[]>([]);

  // Initialize deck and history from localStorage
  useEffect(() => {
    // Shuffled initial deck
    resetDeck();
    
    // Load history
    const storedHistory = localStorage.getItem('tarot_history_list');
    if (storedHistory) {
      try {
        setHistoryList(JSON.parse(storedHistory));
      } catch (e) {
        console.error("History could not be parsed", e);
      }
    }

    // Load today's card if saved for simplicity
    const savedDailyCardId = localStorage.getItem('daily_card_id');
    const savedDailyRev = localStorage.getItem('daily_card_reversed');
    const savedDailyTime = localStorage.getItem('daily_card_time');
    const savedDailyInterp = localStorage.getItem('daily_card_interp');

    // Reset daily if date is different? We will let user pull or persist
    if (savedDailyCardId && savedDailyTime) {
      const match = tarotCards.find(c => c.id === savedDailyCardId);
      if (match) {
        setDailyCard(match);
        setDailyIsReversed(savedDailyRev === 'true');
        setDailyDrawnTime(savedDailyTime);
        if (savedDailyInterp) setDailyInterpretation(savedDailyInterp);
      }
    }
  }, []);

  const resetDeck = () => {
    // Generate a copy of tarotCards
    const copiedCoins = [...tarotCards];
    // Simple shuffle
    for (let i = copiedCoins.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copiedCoins[i], copiedCoins[j]] = [copiedCoins[j], copiedCoins[i]];
    }
    setDeck(copiedCoins);
    setDrawnCards([]);
    setReadingResult('');
    setReadingError('');
  };

  const startShuffle = () => {
    setIsShuffling(true);
    setDrawnCards([]);
    setReadingResult('');
    setReadingError('');

    setTimeout(() => {
      // Re-shuffle
      const newDeck = [...tarotCards].sort(() => Math.random() - 0.5);
      setDeck(newDeck);
      setIsShuffling(false);
    }, 1200);
  };

  const drawCardFromDeck = (cardIndex: number) => {
    if (drawnCards.length >= selectedSpread.cardCount) {
      return; // Already has required card count
    }

    const card = deck[cardIndex];
    
    // Check if already drawn
    if (drawnCards.some(dc => dc.id === card.id)) return;

    // Randomize upright or reversed orientation
    const isReversed = Math.random() > 0.5;
    const positionName = selectedSpread.positions[drawnCards.length];

    const newDrawn: DrawnCard = {
      ...card,
      isReversed,
      spreadPosition: positionName
    };

    setDrawnCards(prev => [...prev, newDrawn]);
  };

  const handleSelectPredefinedCard = (card: TarotCard) => {
    if (drawnCards.length >= selectedSpread.cardCount) {
      alert(`Mevcut ${selectedSpread.name} açılımı en fazla ${selectedSpread.cardCount} kart alabilir.`);
      return;
    }
    const isReversed = Math.random() > 0.5;
    const positionName = selectedSpread.positions[drawnCards.length];
    const newDrawn: DrawnCard = {
      ...card,
      isReversed,
      spreadPosition: positionName
    };
    setDrawnCards(prev => [...prev, newDrawn]);
  };

  // Get AI Tarot Reading
  const triggerInterpret = async () => {
    if (drawnCards.length < selectedSpread.cardCount) {
      setReadingError(`Lütfen açılış için kalan ${selectedSpread.cardCount - drawnCards.length} kartı seçin.`);
      return;
    }

    setIsLoadingReading(true);
    setReadingError('');
    setReadingResult('');

    try {
      const response = await fetch('/api/tarot/read', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: question.trim(),
          spreadType: selectedSpread.id,
          cards: drawnCards.map(c => ({
            id: c.id,
            name: c.name,
            astrology: c.astrology,
            keywords: c.keywords,
            isReversed: c.isReversed
          }))
        })
      });

      if (!response.ok) {
        let errDetails = 'Okuma yapılırken sunucuda mistik bir hata oluştu.';
        try {
          const errData = await response.json();
          errDetails = errData.details || errData.error || errDetails;
        } catch(e) {}
        throw new Error(errDetails);
      }

      const data = await response.json();
      setReadingResult(data.reading);

      // Save to History
      const newHistoryItem: TarotHistoryItem = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
        question: question.trim() || 'Genel Hayat Rehberliği',
        spreadType: selectedSpread.name,
        cards: drawnCards.map(c => ({ name: c.name, isReversed: c.isReversed })),
        reading: data.reading
      };

      const updatedHistory = [newHistoryItem, ...historyList].slice(0, 30); // limit to 30 items
      setHistoryList(updatedHistory);
      localStorage.setItem('tarot_history_list', JSON.stringify(updatedHistory));

    } catch (e: any) {
      console.error(e);
      setReadingError(e.message || 'Öngörülmeyen bir bağlantı kesintisi yaşandı. Lütfen enerjinizi tazeleyip tekrar deneyin.');
    } finally {
      setIsLoadingReading(false);
    }
  };

  // Daily Card Draw Flow
  const triggerDailyDraw = async () => {
    setDailyLoading(true);
    setDailyInterpretation('');
    
    // Wait for cinematic effect
    setTimeout(async () => {
      const randomIndex = Math.floor(Math.random() * tarotCards.length);
      const card = tarotCards[randomIndex];
      const reversed = Math.random() > 0.5;
      const drawTime = new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });

      setDailyCard(card);
      setDailyIsReversed(reversed);
      setDailyDrawnTime(drawTime);

      localStorage.setItem('daily_card_id', card.id);
      localStorage.setItem('daily_card_reversed', String(reversed));
      localStorage.setItem('daily_card_time', drawTime);

      // Ask Gemini for immediate quick interpretation of today's card
      try {
        const response = await fetch('/api/tarot/read', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            question: `Bugün bana günün kılavuz kartı olan '${card.name}' (${reversed ? 'Ters' : 'Düz'}) çıktı. Bugün nasıl bir gün geçireceğim, neye dikkat etmeliyim?`,
            spreadType: 'one',
            cards: [{
              id: card.id,
              name: card.name,
              astrology: card.astrology,
              keywords: card.keywords,
              isReversed: reversed
            }]
          })
        });

        if (response.ok) {
          const data = await response.json();
          setDailyInterpretation(data.reading);
          localStorage.setItem('daily_card_interp', data.reading);
        } else {
          setDailyInterpretation(`${card.name} (${reversed ? 'Ters' : 'Düz'}) kartı bugün senin enerjini şekillendiriyor. \n\n*Ana Mesaj:* ${reversed ? card.reversedMeaning : card.uprightMeaning}\n\n*Astrolojik Etki:* ${card.astrology}. Bugün sezgilerine kulak ver!`);
        }
      } catch (err) {
        setDailyInterpretation(`${card.name} (${reversed ? 'Ters' : 'Düz'}) kartı bugün senin enerjini şekillendiriyor. \n\n*Anlamı:* ${reversed ? card.reversedMeaning : card.uprightMeaning}\n\n*Astroloji:* ${card.astrology}`);
      } finally {
        setDailyLoading(false);
      }
    }, 1000);
  };

  const clearDailyCard = () => {
    setDailyCard(null);
    setDailyInterpretation('');
    setDailyDrawnTime('');
    localStorage.removeItem('daily_card_id');
    localStorage.removeItem('daily_card_reversed');
    localStorage.removeItem('daily_card_time');
    localStorage.removeItem('daily_card_interp');
  };

  const deleteHistoryItem = (id: string) => {
    const updated = historyList.filter(item => item.id !== id);
    setHistoryList(updated);
    localStorage.setItem('tarot_history_list', JSON.stringify(updated));
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#F9F7F2] text-[#3A362F] font-sans antialiased overflow-x-hidden">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-72 bg-[#6B705C] text-[#F9F7F2] p-6 flex flex-col justify-between border-r border-[#A5A58D] shrink-0">
        <div>
          {/* Logo & Brand Header */}
          <div className="mb-10 text-center md:text-left">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="text-2xl text-[#D4A373]">✨</span>
              <h1 className="text-2xl font-mystic font-bold tracking-widest text-white uppercase">Aetheria</h1>
            </div>
            <p className="text-[10px] text-[#B7B7A4] uppercase tracking-[0.25em] font-medium">Kozmik Tarot El Kitabı</p>
          </div>
          
          {/* Nav Links */}
          <nav className="space-y-6">
            <div>
              <p className="text-[11px] uppercase tracking-widest text-[#B7B7A4] font-bold mb-3 border-b border-[#A5A58D]/30 pb-1">Uygulama Rehberleri</p>
              <ul className="space-y-1.5 font-medium">
                <li>
                  <button
                    onClick={() => setActiveTab('reading')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all ${
                      activeTab === 'reading' 
                        ? 'bg-[#5B614F] text-white shadow-sm' 
                        : 'opacity-85 hover:opacity-100 hover:bg-[#5B614F]/40'
                    }`}
                  >
                    <Sparkles className="w-4 h-4 text-[#D4A373]" />
                    Tarot Okuma Masası
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('dictionary')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all ${
                      activeTab === 'dictionary' 
                        ? 'bg-[#5B614F] text-white shadow-sm' 
                        : 'opacity-85 hover:opacity-100 hover:bg-[#5B614F]/40'
                    }`}
                  >
                    <BookOpen className="w-4 h-4 text-[#D4A373]" />
                    Büyük Arkana Sözlüğü
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('zodiac')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all ${
                      activeTab === 'zodiac' 
                        ? 'bg-[#5B614F] text-white shadow-sm' 
                        : 'opacity-85 hover:opacity-100 hover:bg-[#5B614F]/40'
                    }`}
                  >
                    <Star className="w-4 h-4 text-[#D4A373]" />
                    Burç & Tarot Uyumu
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('daily')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all ${
                      activeTab === 'daily' 
                        ? 'bg-[#5B614F] text-white shadow-sm' 
                        : 'opacity-85 hover:opacity-100 hover:bg-[#5B614F]/40'
                    }`}
                  >
                    <Compass className="w-4 h-4 text-[#D4A373]" />
                    Günün Rehber Kartı
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm flex items-center gap-3 transition-all ${
                      activeTab === 'history' 
                        ? 'bg-[#5B614F] text-white shadow-sm' 
                        : 'opacity-85 hover:opacity-100 hover:bg-[#5B614F]/40'
                    }`}
                  >
                    <Clock className="w-4 h-4 text-[#D4A373]" />
                    Önceki Okumalarım ({historyList.length})
                  </button>
                </li>
              </ul>
            </div>

            {/* Quick Informative Section */}
            <div className="bg-[#5B614F]/60 p-4 rounded-xl border border-[#A5A58D]/40 space-y-2">
              <h4 className="text-xs uppercase tracking-wider text-[#D4A373] font-bold flex items-center gap-1.5">
                <Moon className="w-3.5 h-3.5" /> Kozmik Hava Durumu
              </h4>
              <p className="text-[11px] leading-relaxed text-[#F9F7F2]/90 font-serif">
                Bugün Ay Yay burcunda büyüme evresinde. Zihni genişletmek, yeni felsefeleri ve kadim sembolleri keşfetmek için harika bir gün.
              </p>
            </div>
          </nav>
        </div>

        {/* User Card at Bottom */}
        <div className="border-t border-[#A5A58D] pt-6 mt-8 md:mt-0">
          <div className="flex items-center gap-3 p-3 bg-[#5B614F] rounded-xl border border-[#A5A58D]/30 shadow-inner">
            <div className="w-9 h-9 rounded-full bg-[#D4A373] text-[#F9F7F2] font-semibold flex items-center justify-center text-sm shadow-sm font-mystic">
              TK
            </div>
            <div>
              <p className="text-xs font-bold text-white tracking-wide">Tarot Kaşifi</p>
              <p className="text-[10px] opacity-75 font-serif italic">Sezgi Seviyesi: Yüksek</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-h-screen">
        
        {/* Header strip */}
        <header className="h-20 px-6 md:px-10 bg-white border-b border-[#E6E1D6] flex items-center justify-between z-10 shrink-0">
          <div className="flex items-center gap-4">
            <span className="text-[#6B705C] uppercase text-[10px] md:text-xs tracking-widest font-bold">Mevcut Alan:</span>
            <span className="text-sm md:text-lg italic font-serif">
              {activeTab === 'reading' && '🔮 Tarot Kehanet Masası'}
              {activeTab === 'dictionary' && '📖 Kadim Sırlar Sözlüğü'}
              {activeTab === 'zodiac' && '⭐ Burç & Tarot Uyumu'}
              {activeTab === 'daily' && '☀️ Günlük Enerji Kılavuzu'}
              {activeTab === 'history' && '📜 Geçmiş Kadim Okumalar'}
            </span>
          </div>

          <div className="flex gap-2">
            {activeTab === 'reading' && (
              <button
                onClick={startShuffle}
                className="px-4 py-1.5 md:px-5 md:py-2 border border-[#A5A58D] text-[#6B705C] rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#F0EDE4] active:scale-95 transition-all flex items-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Deste Karıştır
              </button>
            )}
            
            {activeTab === 'dictionary' && (
              <button
                onClick={() => setActiveTab('reading')}
                className="px-4 py-1.5 md:px-5 md:py-2 bg-[#D4A373] text-white rounded-full text-xs uppercase tracking-widest font-bold hover:bg-[#c39262] transition-colors shadow-sm"
              >
                Okuma Masasına Git
              </button>
            )}
          </div>
        </header>

        {/* Content Box */}
        <div className="flex-1 p-6 md:p-10 overflow-y-auto max-w-6xl w-full mx-auto">
          <AnimatePresence mode="wait">
            
            {/* TAB: Dictionary */}
            {activeTab === 'dictionary' && (
              <motion.div
                key="dictionary"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <CardDictionary onSelectForReading={handleSelectPredefinedCard} />
              </motion.div>
            )}

            {/* TAB: Zodiac Compatibility */}
            {activeTab === 'zodiac' && (
              <motion.div
                key="zodiac"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
              >
                <ZodiacCompatibilityView 
                  onSelectCardForReading={handleSelectPredefinedCard}
                  onViewCardDetails={(card) => {
                    setActiveTab('dictionary');
                  }}
                />
              </motion.div>
            )}

            {/* TAB: Reading */}
            {activeTab === 'reading' && (
              <motion.div
                key="reading"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Intro Headers */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <h2 className="text-3xl md:text-4xl font-mystic text-[#6B705C] tracking-widest uppercase">Tarot Okuma Masası</h2>
                  <div className="w-16 h-[2px] bg-[#D4A373] mx-auto rounded"></div>
                  <p className="text-[#3A362F] font-serif italic text-sm md:text-base leading-relaxed">
                    Niyetinizi zihninizde netleştirin, sorunuzu yazın ve kartların kozmik sesini dinlemek üzere desteden seçiminizi yapın.
                  </p>
                </div>

                {/* Question and Option Settings */}
                <div className="bg-white p-6 rounded-2xl border border-[#E6E1D6] shadow-sm space-y-6">
                  {/* Select Spread */}
                  <div className="space-y-3">
                    <label className="text-xs uppercase tracking-widest text-[#6B705C] font-bold block">
                      Açılım Şeklini Seçin
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {spreadOptions.map((opt) => (
                        <button
                          key={opt.id}
                          onClick={() => {
                            setSelectedSpread(opt);
                            resetDeck();
                          }}
                          className={`p-4 rounded-xl text-left border-2 transition-all duration-350 flex flex-col justify-between space-y-2 ${
                            selectedSpread.id === opt.id
                              ? 'bg-[#F9F7F2] border-[#6B705C] shadow-sm'
                              : 'bg-white border-[#E6E1D6] hover:border-[#A5A58D]/60'
                          }`}
                        >
                          <div>
                            <p className="font-bold text-sm text-[#3A362F] flex items-center justify-between">
                              {opt.name}
                              {selectedSpread.id === opt.id && (
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></span>
                              )}
                            </p>
                            <p className="text-xs text-[#A5A58D] leading-relaxed mt-1">{opt.description}</p>
                          </div>
                          <span className="text-[11px] font-semibold text-[#6B705C] uppercase tracking-wider block bg-[#F0EDE4] px-2 py-0.5 rounded w-max">
                            {opt.cardCount} KART
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Ask Question */}
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-[#6B705C] font-bold block flex items-center justify-between">
                      <span>Niyetiniz veya Soru Alanı (Opsiyonel)</span>
                      <span className="text-[10px] font-normal italic text-[#A5A58D]">Evren dürüst niyetleri duyar</span>
                    </label>
                    <textarea
                      placeholder="Örn: Kariyer yolculuğumda yakında beni ne bekliyor? / Bu ilişkinin geleceğinde sular durulacak mı? ya da sadece genel enerji için boş bırakın..."
                      rows={2}
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      className="w-full p-3 bg-[#F9F7F2] border border-[#E6E1D6] rounded-xl text-[#3A362F] placeholder-[#B7B7A4] focus:outline-none focus:border-[#6B705C] text-sm leading-relaxed"
                    ></textarea>
                  </div>
                </div>

                {/* Spreading Table */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm uppercase tracking-widest text-[#6B705C] font-bold">
                      Açılan Kartlar ({drawnCards.length} / {selectedSpread.cardCount})
                    </h3>
                    {drawnCards.length > 0 && (
                      <button 
                        onClick={resetDeck}
                        className="text-xs font-bold text-[#D4A373] hover:underline flex items-center gap-1"
                      >
                        <RotateCcw className="w-3 h-3" /> Masayı Temizle
                      </button>
                    )}
                  </div>

                  {/* Visual Drawn Slots */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {Array.from({ length: selectedSpread.cardCount }).map((_, index) => {
                      const card = drawnCards[index];
                      const positionLabel = selectedSpread.positions[index];
                      
                      return (
                        <div 
                          key={index}
                          className="bg-white rounded-2xl border border-[#E6E1D6] p-5 flex flex-col items-center justify-between aspect-[1/1.5] relative overflow-hidden group shadow-sm transition-all duration-350 hover:shadow-md"
                        >
                          <span className="text-[10px] font-bold text-[#A5A58D] uppercase tracking-widest bg-[#F0EDE4] px-2.5 py-1 rounded-full text-center z-10">
                            {positionLabel}
                          </span>

                          {card ? (
                            <motion.div
                              initial={{ rotateY: 180, scale: 0.9, opacity: 0 }}
                              animate={{ rotateY: 0, scale: 1, opacity: 1 }}
                              transition={{ duration: 0.5 }}
                              className="w-full flex-1 flex flex-col items-center justify-center space-y-4 mt-3"
                            >
                              {/* Virtual Tarot Card render */}
                              <div className={`w-36 aspect-[1/1.6] bg-gradient-to-b from-white to-[#F9F7F2] border-2 border-[#D4A373]/60 rounded-xl relative p-2 text-center flex flex-col justify-between shadow-inner transform ${card.isReversed ? 'rotate-180' : ''}`}>
                                <div className="text-[10px] text-[#A5A58D] font-mystic">
                                  {card.number === 0 ? '0' : card.number}
                                </div>
                                <div className="text-2xl text-[#6B705C] font-bold">
                                  {card.astrologyIcon}
                                </div>
                                <div>
                                  <h4 className="text-xs font-mystic font-bold uppercase tracking-wider text-[#3A362F] line-clamp-1">
                                    {card.name}
                                  </h4>
                                  <p className="text-[9px] text-[#A5A58D] italic font-serif line-clamp-1">
                                    {card.isReversed ? 'Ters' : 'Düz'}
                                  </p>
                                </div>
                              </div>

                              <div className="text-center space-y-1">
                                <p className="font-mystic font-bold text-xs uppercase tracking-widest text-[#3A362F] flex items-center justify-center gap-1.5">
                                  {card.name} {card.isReversed && <span className="text-xs font-sans text-[#D4A373]">(Ters)</span>}
                                </p>
                                <p className="text-[11px] text-[#A5A58D] italic font-serif line-clamp-3">
                                  {card.isReversed ? card.reversedMeaning : card.uprightMeaning}
                                </p>
                              </div>
                            </motion.div>
                          ) : (
                            <div className="flex-1 w-full flex flex-col items-center justify-center opacity-60">
                              <div className="w-24 aspect-[1/1.6] rounded-xl border-2 border-dashed border-[#A5A58D]/40 bg-[#F9F7F2]/40 flex items-center justify-center">
                                <span className="text-xl text-[#A5A58D]/50 font-mystic">?</span>
                              </div>
                              <p className="text-[11px] text-[#A5A58D] mt-3 font-serif">Aşağıdaki desteden bir kart seçin</p>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Facedown Shuffling / Drawing Stage */}
                {drawnCards.length < selectedSpread.cardCount && (
                  <div className="bg-[#6B705C]/10 p-6 md:p-8 rounded-2xl border border-[#A5A58D]/30 space-y-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <h3 className="font-mystic text-lg text-[#6B705C] uppercase tracking-wider">
                          Kader Destesinden Kartınızı Seçin
                        </h3>
                        <p className="text-xs text-[#5C574F] font-serif italic mt-0.5">
                          Desteyi isterseniz tekrar karıştırabilirsiniz. Çekmek istediğiniz kartın üzerine tıklayın.
                        </p>
                      </div>
                      <button
                        onClick={startShuffle}
                        disabled={isShuffling}
                        className="px-4 py-2 bg-white hover:bg-[#E6E1D6] text-[#3A362F] border border-[#E6E1D6] font-bold rounded-full text-xs uppercase tracking-widest transition-colors flex items-center gap-1.5 shadow-sm disabled:opacity-50"
                      >
                        {isShuffling ? 'Karıştırılıyor...' : 'Desteyi Dağıt / Karıştır'}
                      </button>
                    </div>

                    {/* Facedown virtual table scrollable wrap */}
                    <div className="relative overflow-hidden py-4 px-2 border border-[#E6E1D6] bg-white rounded-xl shadow-inner scrollbar-thin">
                      {isShuffling ? (
                        <div className="flex items-center justify-center py-10 space-x-3">
                          <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                            className="w-6 h-6 border-2 border-[#D4A373] border-t-transparent rounded-full" 
                          />
                          <p className="text-xs font-serif text-[#6B705C] italic">Sezgiler tazeleniyor, desteler hizalanıyor...</p>
                        </div>
                      ) : (
                        <div className="flex space-x-3 overflow-x-auto pb-4 scroll-smooth">
                          {deck.map((card, i) => {
                            const isDrawn = drawnCards.some(c => c.id === card.id);
                            
                            return (
                              <button
                                key={card.id}
                                disabled={isDrawn}
                                onClick={() => drawCardFromDeck(i)}
                                className={`w-16 aspect-[1/1.6] rounded-lg shrink-0 border border-[#A5A58D]/40 shadow-sm relative transition-all block ${
                                  isDrawn 
                                    ? 'bg-[#E6E1D6]/30 cursor-not-allowed opacity-20' 
                                    : 'bg-[#6B705C] hover:bg-[#5B614F] hover:-translate-y-2 active:scale-95 cursor-pointer'
                                }`}
                              >
                                {/* Decorative Card Back Design */}
                                {!isDrawn && (
                                  <div className="absolute inset-1.5 border border-[#F9F7F2]/45 rounded flex flex-col items-center justify-between p-1">
                                    <span className="text-[8px] opacity-40 font-mystic text-white">★</span>
                                    <div className="w-5 h-5 rounded-full border border-[#D4A373]/70 flex items-center justify-center">
                                      <div className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></div>
                                    </div>
                                    <span className="text-[8px] opacity-40 font-mystic text-white">★</span>
                                  </div>
                                )}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Quick helper */}
                    <p className="text-[10px] text-center text-[#A5A58D] font-serif">
                      Veya dilerseniz <button onClick={() => setActiveTab('dictionary')} className="text-[#D4A373] underline font-bold">Büyük Arkana Sözlüğü</button>'nden beğendiğiniz kartları manuel olarak açılıma ekleyebilirsiniz.
                    </p>
                  </div>
                )}

                {/* Call to action: AI Interpret */}
                <div className="flex flex-col items-center pt-4">
                  {drawnCards.length === selectedSpread.cardCount && !readingResult && (
                    <motion.button
                      initial={{ scale: 0.95 }}
                      animate={{ scale: 1 }}
                      onClick={triggerInterpret}
                      disabled={isLoadingReading}
                      className="px-8 py-3 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold rounded-full text-sm uppercase tracking-widest transition-all shadow-md disabled:opacity-50 flex items-center gap-2"
                    >
                      {isLoadingReading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Mistik Enerjiler İnceleniyor...
                        </>
                      ) : (
                        <>
                          <Sparkles className="w-4 h-4" /> Kartları Yorumla (Kozmik Yorum Gelsin!)
                        </>
                      )}
                    </motion.button>
                  )}

                  {readingError && (
                    <div className="p-4 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2 max-w-lg mt-3">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{readingError}</span>
                    </div>
                  )}
                </div>

                {/* AI Interpret Results View */}
                {isLoadingReading && (
                  <div className="p-8 bg-white rounded-2xl border border-[#E6E1D6] flex flex-col items-center justify-center space-y-4 text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="w-12 h-12 rounded-full border-4 border-[#D4A373] border-t-transparent flex items-center justify-center"
                    >
                      <Moon className="w-5 h-5 text-[#6B705C]" />
                    </motion.div>
                    <div className="space-y-1">
                      <h4 className="font-mystic font-bold uppercase tracking-wider text-[#6B705C]">Kozmik Bilgelik Çağrılıyor</h4>
                      <p className="text-xs text-[#A5A58D] font-serif max-w-sm italic">
                        "Yapay zeka kanalları aracılığıyla kartlarınızın sayısal, elementel ve astrolojik frekansları yorumlanıyor. Lütfen zihninizi dinginleştirin."
                      </p>
                    </div>
                  </div>
                )}

                {readingResult && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-2xl border-2 border-[#A5A58D] p-6 md:p-8 shadow-sm space-y-6 scroll-mt-24"
                    id="reading-result-view"
                  >
                    <div className="flex items-center justify-between pb-4 border-b border-[#E6E1D6]">
                      <div className="flex items-center gap-2 text-[#6B705C]">
                        <Quote className="w-6 h-6 text-[#D4A373] flip-x" />
                        <h3 className="font-mystic text-lg font-bold tracking-wider uppercase">Kozmik Tarot Yansıması</h3>
                      </div>
                      <span className="text-[10px] text-[#A5A58D] uppercase tracking-widest font-semibold bg-[#F0EDE4] px-2.5 py-1 rounded">
                        Gemini Rehberliği
                      </span>
                    </div>

                    {/* AI Response Text formatting */}
                    <div className="prose prose-stone max-w-none text-sm md:text-base text-[#3A362F] leading-relaxed font-serif space-y-4 whitespace-pre-line">
                      {readingResult}
                    </div>

                    <div className="pt-6 border-t border-[#E6E1D6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-serif text-[#A5A58D]">
                      <p>Okuma Tarihi: {new Date().toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                      <button
                        onClick={resetDeck}
                        className="px-5 py-2 border border-[#E6E1D6] hover:bg-[#F9F7F2] rounded-full text-[#3A362F] font-bold uppercase tracking-widest font-sans transition-all text-[11px]"
                      >
                        Yeni Bir Okuma Yap
                      </button>
                    </div>
                  </motion.div>
                )}

              </motion.div>
            )}

            {/* TAB: Daily Card Draw */}
            {activeTab === 'daily' && (
              <motion.div
                key="daily"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Intro */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <h2 className="text-3xl md:text-4xl font-mystic text-[#6B705C] tracking-widest uppercase">Günün Rehber Kartı</h2>
                  <div className="w-16 h-[2px] bg-[#D4A373] mx-auto rounded"></div>
                  <p className="text-[#3A362F] font-serif italic text-sm md:text-base leading-relaxed">
                    Her gün evren bize odaklanmamız gereken özel bir enerji dalgası gönderir. Bugünün mesajını çekerek gününüze kozmik bir yön verin.
                  </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-stretch justify-center max-w-4xl mx-auto">
                  
                  {/* Left Column: Drawing Panel / Card graphic */}
                  <div className="w-full lg:w-96 flex flex-col items-center justify-center p-6 bg-white rounded-2xl border border-[#E6E1D6] shadow-sm space-y-6 shrink-0 min-h-[450px]">
                    {dailyLoading ? (
                      <div className="flex-1 flex flex-col items-center justify-center space-y-4">
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                          className="w-12 h-12 border-4 border-[#D4A373] border-t-transparent rounded-full flex items-center justify-center"
                        />
                        <p className="text-xs font-serif italic text-[#6B705C]">Kozmik enerji sarmalı çekiliyor...</p>
                      </div>
                    ) : dailyCard ? (
                      <motion.div
                        initial={{ scale: 0.9, rotateY: 180, opacity: 0 }}
                        animate={{ scale: 1, rotateY: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 flex flex-col items-center justify-between w-full relative"
                      >
                        {/* Interactive Visual frame for Card */}
                        <div className="w-full aspect-[1/1.6] bg-[#F0EDE4] border-[10px] border-white shadow-xl rounded-[20px] relative flex flex-col p-4 overflow-hidden">
                          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#6B705C 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                          
                          <div className={`flex-1 border-2 border-[#D4A373] rounded-lg flex flex-col items-center justify-center relative p-3 ${dailyIsReversed ? 'rotate-180' : ''}`}>
                            <div className="text-[55px] opacity-15 absolute top-3 text-[#A5A58D] font-serif">{dailyCard.astrologyIcon}</div>
                            
                            <div className="w-24 h-24 rounded-full border-[3px] border-[#6B705C] flex items-center justify-center mb-4 bg-white/70 shadow-sm">
                              <span className="text-3xl text-[#D4A373]">{dailyCard.astrologyIcon}</span>
                            </div>
                            
                            <div className="text-center space-y-1">
                              <h3 className="text-2xl font-mystic tracking-tighter text-[#3A362F] font-bold uppercase">{dailyCard.name}</h3>
                              <p className="text-[10px] uppercase tracking-widest text-[#B7B7A4] font-semibold">{dailyCard.englishName}</p>
                            </div>
                          </div>
                        </div>

                        {/* Subheading */}
                        <div className="text-center mt-4">
                          <p className="text-xs font-bold text-[#6B705C] uppercase tracking-wider">
                            BUGÜNÜN KILAVUZU: {dailyCard.name} {dailyIsReversed ? '(Ters)' : '(Düz)'}
                          </p>
                          <p className="text-[10px] text-[#A5A58D] font-serif italic mt-1">
                            Çekilme Tarihi: {dailyDrawnTime}
                          </p>
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
                        {/* Facedown Back */}
                        <div className="w-48 aspect-[1/1.6] rounded-2xl border-4 border-white shadow-lg bg-[#6B705C] relative p-1.5 transform hover:scale-102 transition-transform">
                          <div className="absolute inset-2 border-2 border-dashed border-[#F0EDE4]/40 rounded flex flex-col items-center justify-between p-3">
                            <span className="text-sm text-white font-mystic">★</span>
                            <div className="w-10 h-10 rounded-full border-2 border-[#D4A373] flex items-center justify-center">
                              <span className="text-white text-lg">☾</span>
                            </div>
                            <span className="text-sm text-white font-mystic">★</span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-mystic text-sm uppercase tracking-wider text-[#3A362F] font-bold">Henüz Kart Seçilmedi</h4>
                          <p className="text-xs text-[#A5A58D] font-serif italic max-w-xs leading-relaxed">
                            Bugünkü enerjinizi belirleyen kilit taşı kartınızı ortaya çıkarmak için butona tıklayın.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Action draw button */}
                    {!dailyLoading && (
                      <div className="w-full pt-4 border-t border-[#F0EDE4] flex justify-center">
                        {dailyCard ? (
                          <button
                            onClick={clearDailyCard}
                            className="px-5 py-2.5 border border-[#A5A58D] text-xs text-[#6B705C] uppercase tracking-widest font-bold font-sans rounded-full hover:bg-[#F0EDE4] transition-all"
                          >
                            Kaydı Sıfırla ve Yeniden Çek
                          </button>
                        ) : (
                          <button
                            onClick={triggerDailyDraw}
                            className="px-6 py-3 bg-[#D4A373] hover:bg-[#c39262] text-white font-bold rounded-full text-xs uppercase tracking-widest transition-all shadow-md"
                          >
                            Günün Kartını Çek
                          </button>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Right Column: Detailed Card Meaning & AI Daily interpretation */}
                  <div className="flex-1 flex flex-col gap-6">
                    {dailyCard ? (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex-1 flex flex-col gap-6"
                      >
                        {/* Metadata Row */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#E6E1D6]">
                            <p className="text-[10px] uppercase tracking-widest text-[#A5A58D] font-bold mb-1">Astrolojik Bağ</p>
                            <p className="text-sm md:text-base font-bold text-[#3A362F] flex items-center gap-1.5 font-serif">
                              <span className="text-[#D4A373] text-lg">{dailyCard.astrologyIcon}</span> {dailyCard.astrology}
                            </p>
                          </div>
                          <div className="bg-white p-4 rounded-xl shadow-sm border border-[#E6E1D6]">
                            <p className="text-[10px] uppercase tracking-widest text-[#A5A58D] font-bold mb-1">Ruhsal Element</p>
                            <p className="text-sm md:text-base font-bold text-[#3A362F] flex items-center gap-1.5 font-serif">
                              <span className="text-[#6B705C] font-bold">▽</span> {dailyCard.element}
                            </p>
                          </div>
                        </div>

                        {/* Static Card Insights */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E6E1D6] space-y-4">
                          <h4 className="text-xs uppercase tracking-widest font-bold text-[#6B705C]">Kartın Öz Anlamları</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {dailyCard.keywords.map((kw, i) => (
                              <span key={i} className="text-xs bg-[#F0EDE4] text-[#3A362F] px-2.5 py-1 rounded-full font-medium">
                                {kw}
                              </span>
                            ))}
                          </div>

                          <div className="pt-2">
                            <h4 className="text-xs uppercase tracking-widest font-bold text-[#D4A373] mb-1.5">Kılavuz Bilgelik</h4>
                            <p className="text-xs md:text-sm leading-relaxed text-[#5C574F] font-serif">
                              {dailyIsReversed ? dailyCard.reversedMeaning : dailyCard.uprightMeaning}
                            </p>
                          </div>
                        </div>

                        {/* Dynamic AI Interpretation block */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-[#E6E1D6] flex-1 space-y-4">
                          <h4 className="text-xs uppercase tracking-widest font-bold text-[#6B705C] border-b border-[#F0EDE4] pb-2 flex items-center justify-between">
                            <span>🔮 Bugünün Mistik Perspektifi</span>
                            <span className="text-[9px] text-[#A5A58D] font-normal italic lowercase font-sans">Gemini ile canlandırıldı</span>
                          </h4>
                          
                          {dailyLoading ? (
                            <p className="text-xs text-[#A5A58D] italic font-serif">Yapay Zeka kozmik yorumu hazırlıyor, yıldızlar hizalanıyor...</p>
                          ) : dailyInterpretation ? (
                            <p className="text-xs md:text-sm leading-relaxed text-[#3A362F] font-serif whitespace-pre-line">
                              {dailyInterpretation}
                            </p>
                          ) : (
                            <p className="text-xs text-[#A5A58D] italic font-serif">Kişiselleştirilmiş günlük tavsiye hazırlanıyor...</p>
                          )}
                        </div>
                      </motion.div>
                    ) : (
                      <div className="flex-1 bg-[#F0EDE4]/60 p-8 rounded-2xl border border-dashed border-[#A5A58D] flex flex-col items-center justify-center text-center space-y-4">
                        <Star className="w-8 h-8 text-[#D4A373] animate-pulse" />
                        <div className="space-y-1">
                          <h4 className="text-sm font-mystic uppercase tracking-wider font-bold text-[#6B705C]">Kozmik Kılavuz Bekleniyor</h4>
                          <p className="text-xs text-[#A5A58D] font-serif max-w-sm italic">
                            Her sabah çekilen tek bir kart, zihninizde oluşabilecek boşlukları tamamlamak için görünmez bir fener görevi üstlenir. Sol panelden ilk kartınızı çekin.
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB: History */}
            {activeTab === 'history' && (
              <motion.div
                key="history"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="space-y-8"
              >
                {/* Intro */}
                <div className="text-center max-w-2xl mx-auto space-y-3">
                  <h2 className="text-3xl md:text-4xl font-mystic text-[#6B705C] tracking-widest uppercase">Kayıtlı Kehanetlerim</h2>
                  <div className="w-16 h-[2px] bg-[#D4A373] mx-auto rounded"></div>
                  <p className="text-[#3A362F] font-serif italic text-sm md:text-base leading-relaxed">
                    Burada yaptığınız geçmiş okumalar saklanır. Zaman geçtikçe kehanetlerin hayatınızla nasıl örtüştüğünü inceleyebilirsiniz.
                  </p>
                </div>

                {historyList.length > 0 ? (
                  <div className="space-y-6 max-w-4xl mx-auto">
                    {historyList.map((item) => (
                      <div key={item.id} className="bg-white rounded-2xl border border-[#E6E1D6] p-6 shadow-sm space-y-4 relative group hover:border-[#6B705C] transition-all">
                        {/* Delete Button */}
                        <button
                          onClick={() => deleteHistoryItem(item.id)}
                          className="absolute top-4 right-4 text-xs text-red-500/70 hover:text-red-650 hover:underline font-bold font-sans"
                        >
                          Kayıttan Sil
                        </button>

                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#F0EDE4] pb-3">
                          <div className="space-y-1">
                            <span className="text-[10px] uppercase font-bold text-[#6B705C] bg-[#F0EDE4] px-2.5 py-1 rounded-full">
                              {item.spreadType}
                            </span>
                            <p className="text-xs text-[#A5A58D] font-serif italic mt-1">
                              Okunma saati: {item.date}
                            </p>
                          </div>
                        </div>

                        {/* Question and Cards */}
                        <div className="grid md:grid-cols-3 gap-4 pt-2">
                          <div className="md:col-span-2 space-y-1">
                            <p className="text-xs uppercase tracking-widest text-[#6B705C] font-bold">Sorulan Soru / Niyet</p>
                            <p className="text-sm font-serif text-[#3A362F] font-semibold italic bg-[#F9F7F2]/50 p-3 rounded-xl border border-[#E6E1D6]">
                              "{item.question}"
                            </p>
                          </div>
                          <div className="space-y-1">
                            <p className="text-xs uppercase tracking-widest text-[#6B705C] font-bold">Çekilen Kartlar</p>
                            <ul className="space-y-1 text-xs font-mystic text-slate-700">
                              {item.cards.map((c, i) => (
                                <li key={i} className="flex items-center gap-1.5 font-bold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4A373]"></span>
                                  {c.name} {c.isReversed ? '(Ters)' : '(Düz)'}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Collapsible/Full text */}
                        <div className="pt-3 border-t border-[#F0EDE4] space-y-2">
                          <p className="text-xs uppercase tracking-widest text-[#6B705C] font-bold">Mistik Yorum Kaydı</p>
                          <p className="text-xs md:text-sm font-serif leading-relaxed text-[#5C574F] whitespace-pre-line">
                            {item.reading}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-16 bg-white border border-[#E6E1D6] rounded-2xl max-w-xl mx-auto space-y-3">
                    <p className="text-2xl">📖</p>
                    <h3 className="font-mystic text-base uppercase tracking-wider text-[#6B705C] font-bold">Henüz Kayıt Yok</h3>
                    <p className="text-xs text-[#A5A58D] font-serif italic max-w-sm mx-auto">
                      Yapacağınız ilk Tarot Okuma yorumu otomatik olarak buraya kaydedilecektir. Böylece geçmiş enerjilerinizi arşivleyebilirsiniz.
                    </p>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
