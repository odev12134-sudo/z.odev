export interface TarotCard {
  id: string;
  name: string;
  englishName: string;
  number: number;
  type: 'major';
  arcana: string;
  astrology: string;
  astrologyIcon: string; // Emoji representing asteroid/planet/zodiac
  element: 'Hava' | 'Ateş' | 'Su' | 'Toprak';
  keywords: string[];
  uprightMeaning: string;
  reversedMeaning: string;
  description: string;
  gradient: string; // CSS gradient class for beautiful card rendering
  iconName: string; // Simplified graphic icon identifier
  symbolism: string; // Detailed symbolism of the card elements
  spreadInterpretations: {
    love: string;
    career: string;
    spiritual: string;
  };
}

export const tarotCards: TarotCard[] = [
  {
    id: "the-fool",
    name: "Mecnun",
    englishName: "The Fool",
    number: 0,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Uranüs / Hava",
    astrologyIcon: "♅",
    element: "Hava",
    keywords: ["Yeni Başlangıçlar", "Özgürlük", "Spontanlık", "İnanç", "Masumiyet"],
    uprightMeaning: "Yeni bir maceraya atılma, safça güvenme, sınırsız potansiyel ve kurallardan bağımsız olma zamanı.",
    reversedMeaning: "Dikkatsizlik, risk alma, kararsızlık ya da yeni başlangıçlardan korkma durumu.",
    description: "Mecnun, uçurumun kenarında duran, elindeki küçük bohçasıyla nereye gideceğini bilmeden ileriye bakan saf bir ruhu simgeler. Yanındaki beyaz köpek onu uyarır ancak o evrenin koruyucu gücüne inanarak adım atar.",
    gradient: "from-amber-400 via-orange-400 to-yellow-500",
    iconName: "Compass",
    symbolism: "Uçurumun kenarında dikkatsizce duran adımlar yeni bir evrenin başlangıcını; omzundaki sönük gül saflığı ve masumiyeti; hafif bohça geçmişin yüklerinden arınmışlığı; arka plandaki parlak güneş ise ilahi bilinci sembolize eder. Beyaz sadık köpek ise her şeye rağmen yol gösteren içgüdüleri temsil eder.",
    spreadInterpretations: {
      love: "İlişkilerde sıfırdan, tasasız ve heyecan dolu bir başlangıç. Bağlanma korkusu veya tasasız bir flört dönemi olabilir. Mevcut ilişkide ise tazeleyici bir macera ruhunu simgeler.",
      career: "Kendi işini kurma fikri, büyük riskler içeren girişimler, ezber bozan kariyer değişiklikleri ve geleneksel kuralları yıkma dürtüsü.",
      spiritual: "Ego zırhından kurtularak evrenin akışına tam inançla teslim olma. Kozmik bir 'güven sıçrayışı' gerçekleştirmek için ruhsal bir açılım."
    }
  },
  {
    id: "the-magician",
    name: "Büyücü",
    englishName: "The Magician",
    number: 1,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Merkür",
    astrologyIcon: "☿",
    element: "Hava",
    keywords: ["İrade", "Odaklanma", "Yaratıcılık", "Eylem", "Ustalık"],
    uprightMeaning: "Kendi kaderinizi şekillendirebilecek tüm araçlara sahipsiniz. İrade gücüyle düşleri gerçeğe dönüştürme zamanı.",
    reversedMeaning: "Manipülasyon, boşa harcanan yetenek, hilekar yaklaşımlar ya da kararsız eylemsizlik.",
    description: "Büyücü, masasının üzerinde Tarot'un dört elementi olan asa (ateş), kupa (su), kılıç (hava) ve tılsımı (toprak) tutar. Yukarıyı ve aşağıyı birleştiren eliyle göksel enerjiyi dünyevi düzleme aktarır.",
    gradient: "from-red-500 via-rose-500 to-amber-500",
    iconName: "Sparkles",
    symbolism: "Masasındaki asa, kupa, kılıç ve tılsım dünyevi yaratım için gereken dört elementi temsil eder. Büyücünün gökyüzünü işaret eden sağ eli ile toprağı gösteren sol eli, 'Yukarıda ne varsa, aşağıda da o vardır' ilkesini sembolize eder. Başının üzerindeki lemniscate (sonsuzluk işareti) zihinsel gücün sonsuzluğunu vurgular.",
    spreadInterpretations: {
      love: "İletişimi çok güçlü, çekici ve büyüleyici bir partnerle etkileşim. İsteklerinizi sevgi kanalına aktarabilme yeteneği yardımıyla ilişkide köklü değişim.",
      career: "Yüksek odaklanma kapasitesi, yeni fikirleri hızla kazanca ve başarıya çevirme kuvveti. Becerilerin ve hitabet gücünün zirvede kullanımı.",
      spiritual: "Zihin gücüyle realiteyi bükme (manifest) yeteneğini anlama. Enerjiyi odaklayarak ruhsal olarak yaratım yapma seviyesi."
    }
  },
  {
    id: "the-high-priestess",
    name: "Azize",
    englishName: "The High Priestess",
    number: 2,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Ay",
    astrologyIcon: "☽",
    element: "Su",
    keywords: ["Sezgi", "Sırlar", "Bilinçaltı", "Gizem", "İçsel Bilgelik"],
    uprightMeaning: "Mantığınızın ötesine geçin. Sezgilerinize ve rüyalarınıza güvenin; sırlar zamanla açığa çıkacaktır.",
    reversedMeaning: "Sezgileri bastırma, yüzeysel bilgiyle hareket etme, gizli düşmanlıklar ya da iç sesi dinlememe.",
    description: "Azize, siyah (B) ve beyaz (J) sütunların arasında, arkasında nar desenli bir örtüyle oturur. Elinde gizli bilgilerin parşömenini tutar ve bilinçaltının derin sularını temsil eder.",
    gradient: "from-blue-600 via-indigo-600 to-purple-700",
    iconName: "Moon",
    symbolism: "Boaz (siyah) ve Jachin (beyaz) adlı sütunlar evrensel dualiteyi (aydınlık-karanlık, eril-dişil) temsil eder. Arkasındaki nar desenli örtü bolluğu ve dişil gücü gizlerken, kucağındaki 'Tora' parşömeni ilahi kanunların ve içsel sırların henüz tam okunmadığını fısıldar.",
    spreadInterpretations: {
      love: "Gizemli, platonik ya da kelimelere dökülmeyen hisler. Kararlar alınırken acele edilmemesi, sezgilerin ve iç sesin dikkatle izlenmesi gereken bir döngü.",
      career: "Bilinmeyen faktörlerin varlığı; hemen harekete geçmek yerine beklemede kalınması ve sezgileri dinleyerek strateji izleme gereksinimi.",
      spiritual: "Ruhsal olarak psişik kapıların sonuna kadar aralanması. Rüyaların yorumlanması, sezgilerin artması ve gizli hakikatleri tefekkür etme."
    }
  },
  {
    id: "the-empress",
    name: "İmparatoriçe",
    englishName: "The Empress",
    number: 3,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Venüs",
    astrologyIcon: "♀",
    element: "Toprak",
    keywords: ["Bereket", "Doğa", "Yaratım", "Annelik", "Konfor"],
    uprightMeaning: "Hayatınızda büyüme, bolluk ve yaratıcı enerjilerin canlanması. Doğa ile bağ kurma ve besleyici olma zamanı.",
    reversedMeaning: "Yaratıcı tıkanıklık, aşırı sahiplenme, gelişimde duraklama ya da bağımlılık hissi.",
    description: "İmparatoriçe, bereketli buğday tarlalarının ortasında, lüks minderlerin üzerinde tahtında oturmaktadır. Yıldızlı tacı evrendeki egemenliği ve sevgiyi sembolize eder.",
    gradient: "from-emerald-400 via-green-500 to-teal-600",
    iconName: "Flower",
    symbolism: "Tacındaki on iki yıldız, zodyak burçlarını ve kozmik döngüleri; nar motifli elbisesi doğurganlığı ve yaratımı sembolize eder. Ayaklarındaki Venüs sembollü kalkan sevgi ve şehveti korur; önünde dalgalanan buğday tarlaları ve şelale ise bereketin sürekli akışını temsil eder.",
    spreadInterpretations: {
      love: "Duygusal zenginlik, sıcaklık, şefkat dolu bir süreç. Aile kurma, evlilik veya hamilelik gibi bereketli somut gelişmelerin habercisi.",
      career: "Projelerin meyve vermesi, yaratıcı fikirlerin kazanca dönüşmesi, bereket ve maddi kaynaklarda gözle görülür yükseliş.",
      spiritual: "Ruhu beslemek, Toprak Ana ile derin bağlar kurmak, sevgiyi koşulsuz şekilde dünyaya yansıtarak şifalanmak."
    }
  },
  {
    id: "the-emperor",
    name: "İmparator",
    englishName: "The Emperor",
    number: 4,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Koç",
    astrologyIcon: "♈",
    element: "Ateş",
    keywords: ["Otorite", "Yapı", "Disiplin", "Koruma", "Güç"],
    uprightMeaning: "Liderlik etme, hayatınızda düzen ve kurallar kurma, mantık ve disiplin yoluyla istikrar elde etme.",
    reversedMeaning: "Tiranlık, esneklikten uzak olma, zayıf kontrol, otoriteye isyan ya da aşırı katılık.",
    description: "İmparator, taştan yapılmış tahtında, zırhları üzerinde oturmaktadır. Elinde gücün sembolü olan asasını tutar. Koç başı figürleriyle süslü tahtı, onun kararlılığını simgeler.",
    gradient: "from-red-650 via-red-800 to-orange-700",
    iconName: "Shield",
    symbolism: "Taş taht sarsılmaz yapıyı ve egemenliği simgeler. Tahta işlenmiş dört adet Koç başı, onun Koç burcu (astorlojik lider) bağlantısını öne çıkarır. Elindeki imparatorluk küresi dünyevi hâkimiyeti; üzerindeki savaş zırhı ise her an düzeni ve korumayı sürdürme kararlılığını gösterir.",
    spreadInterpretations: {
      love: "İlişkide güven veren ama kuralları kendi koymak isteyen baskın bir figür. Güçlü temeller üzerine inşa edilmiş korumacı bir yapı.",
      career: "Liderlik koltuğuna oturma, otorite figürlerinden takdir alma, kurallara ve disipline bağlı kalarak işleri organize etme gücü.",
      spiritual: "Zihinsel kontrolü ele alma, içsel eril enerjiyi (yapıcılık, kararlılık) dengeleme ve kurgusal olarak yaşamı düzene sokma."
    }
  },
  {
    id: "the-hierophant",
    name: "Aziz",
    englishName: "The Hierophant",
    number: 5,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Boğa",
    astrologyIcon: "♉",
    element: "Toprak",
    keywords: ["Gelenek", "Eğitim", "Ruhani Rehberlik", "Uyum", "Kurumlar"],
    uprightMeaning: "Bilinen yollardan gitme, bir mentordan ders alma, sosyal kurallara veya inanç kalıplarına uyum sağlama.",
    reversedMeaning: "Dogmaları reddetme, isyan, geleneklerin dışına çıkma, kendi kurallarını yaratma.",
    description: "Aziz, iki rahibin önünde duran dini ve felsefi öğretileri aktaran bir rehberdir. Gökyüzü ile yeryüzünün kadim öğretilerini birleştirir, iki parmağıyla kutsama işareti yapar.",
    gradient: "from-yellow-750 via-amber-800 to-stone-700",
    iconName: "BookOpen",
    symbolism: "Üç katlı papal taç bilinçaltı, bilinç ve bilinçüstünü; elindeki üç uçlu haş ise göksel hiyerarşiyi sembolize eder. Ayaklarındaki çapraz duran iki anahtar bilinç ve bilinçaltının kilidini açan kadim bilgileri; önünde duran iki mürit ise inanç kalıplarına uyumu sembolize eder.",
    spreadInterpretations: {
      love: "Geleneksel evlilikler veya toplum tarafından onaylanan birliktelikler. İlişkide manevi boyutu yüksek, öğretici ve sadık bağlar.",
      career: "Eğitim dünyasında başarı, kurumsal şirketlerde dürüstlükle yükselme, bir mentordan veya kılavuzdan alınacak kıymetli yönlendirmeler.",
      spiritual: "Geleneksel ruhsal okulları araştırma, dogmaların ve erdemlerin anlamını idrak etme, manevi bir mentörle bağ kurma."
    }
  },
  {
    id: "the-lovers",
    name: "Aşıklar",
    englishName: "The Lovers",
    number: 6,
    type: "major",
    arcana: "Major Arcana",
    astrology: "İkizler",
    astrologyIcon: "♊",
    element: "Hava",
    keywords: ["İlişkiler", "Uyum", "Değerler", "Seçimler", "Ortaklık"],
    uprightMeaning: "Kalbinizin sesini dinleyerek önemli bir seçim yapma, ilişkilerde derin bir uyum ve birleşme yaşama.",
    reversedMeaning: "Uyumsuzluk, içsel çatışmalar, yanlış seçimler, ilişkilerde güvensizlik veya kopukluk.",
    description: "Aşıklar kartında, Başmelek Rafael'in kutsadığı çıplak bir kadın ve erkek görünür. Bilgi ağacının arkasındaki yılanla beraber, sevginin yanında ahlaki seçimleri temsil eder.",
    gradient: "from-pink-400 to-rose-600 via-red-400",
    iconName: "Heart",
    symbolism: "Güneşin altındaki Başmelek Rafael şifayı, sevgiyi ve ruhsal korumayı; arkadaki Bilgi Ağacı üzerindeki yılan ahlaki imtihanları sembolize eder. Kadının ve erkeğin çıplaklığı birbirlerine karşı duydukları tam dürüstlük ve savunmasızlığı, arkadaki hayat ağacı ise sınırsız dişil-eril potansiyeli simgeler.",
    spreadInterpretations: {
      love: "Yüksek çekim, ruh ikizliği ve uyum. Önemli bir ilişki kararının eşiğinde olmak, aşkta derinleşerek tam bir bütünleşme yaşamak.",
      career: "Uyumlu ortaklık anlaşmaları, kritik sözleşmelerin imzalanması, iş hayatında mantık ile duygu arasında kalındığında kalbin sesini dinleme.",
      spiritual: "Zıtlıkların birleşmesi, içsel dengenin sağlanması ve dünyevi değerlerle evrensel sevgiyi uyumlayarak tekilleştirme süreci."
    }
  },
  {
    id: "the-chariot",
    name: "Araba",
    englishName: "The Chariot",
    number: 7,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Yengeç",
    astrologyIcon: "♋",
    element: "Su",
    keywords: ["İrade Gücü", "Zafer", "Kontrol", "Kararlılık", "Yön Bulma"],
    uprightMeaning: "Zorlukların üstesinden gelerek hedefinize ulaşma, karşıt güçleri kontrol altında tutarak zafere koşma.",
    reversedMeaning: "Kontrol kaybı, rotadan sapma, engeller karşısında yenilgi, aşırı hırs veya öfke patlaması.",
    description: "Savaşçı, biri siyah diğeri beyaz iki sfenksin çektiği bir arabayı sürer. Dizginleri olmamasına rağmen irade gücüyle bu zıtlıkları kontrol ederek zafer yolunda ilerler.",
    gradient: "from-slate-600 via-sky-700 to-blue-800",
    iconName: "Navigation",
    symbolism: "Siyah ve beyaz iki sfenks mantık ile duyguyu, karanlık ile aydınlığı sembolize eder. Dizginlerin bulunmaması, kahramanın sfenksleri sadece irade gücüyle yönlendirdiğini kanıtlar. Arabanın yıldızlı tentesi göksel korumayı, omuzlarındaki hilaller ise duygusal enerji dalgalarını temsil eder.",
    spreadInterpretations: {
      love: "Zorluklara meydan okuyan, mesafeleri aşan aşklar. İlişkiyi sarsılmaz bir kararlılıkla koruma altına alma ve ortak hedeflere ulaşma kararı.",
      career: "Kariyerde elde edilecek muazzam zaferler, seyahatler, yer değişiklikleri ve rakipler arasından sıyrılarak zirveye oturma eylemi.",
      spiritual: "Zihinsel iradeyle zorlu egosal dürtüleri aşma, kendi hayat arabasının sürücü koltuğuna geçerek manevi rotayı tayin etme."
    }
  },
  {
    id: "strength",
    name: "Güç",
    englishName: "Strength",
    number: 8,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Aslan",
    astrologyIcon: "♌",
    element: "Ateş",
    keywords: ["Cesaret", "İçsel Kuvvet", "Şefkat", "Sabır", "Etki Gücü"],
    uprightMeaning: "Fiziksel güçten ziyade ruhsal ve lirik bir güç. Zor durumları şefkat, nezaket ve sarsılmaz bir sabırla yönetme.",
    reversedMeaning: "Zayıflık, özgüven eksikliği, çiğ güç kullanımı, öfke veya dürtülere yenik düşme.",
    description: "Beyazlar içindeki bir kadın, vahşi bir aslanın çenesini şefkatle ve sakinlikle okşayarak kapatır. Başının üzerinde sonsuzluk işareti (lemniscate) parlar.",
    gradient: "from-orange-500 via-amber-600 to-red-650",
    iconName: "Flame",
    symbolism: "Vahşi aslan insanın en saf hayvani dürtülerini ve egosal öfkesini temsil eder. Beyaz giysili kadının aslanı kaba kuvvetle değil, yumuşak bir şefkatle sakinleştirmesi, sevginin vahşi dürtülere olan üstünlüğünü sembolize eder. Kadının başındaki sonsuzluk işareti, ruhsal aşırılıksız gücü temsil eder.",
    spreadInterpretations: {
      love: "Sorunları bağırıp çağırarak değil sabırla, empatiyle ve şefkatle çözme. Partnerlerin birbirlerinin kırıcı yönlerini yumuşatma gücü.",
      career: "Zorlu kriz anlarında sarsılmaz bir sükunet sergilemek. Diplomatik ve şefkatli üslubunuz sayesinde iş yerindeki zor kişileri yönetme başarısı.",
      spiritual: "Nefsi terbiye etme, içsel gücün farkına varma ve yaşamın zorlu dalgalarına sabırlı bir kozmik güvenle karşı koyma şifası."
    }
  },
  {
    id: "the-hermit",
    name: "Ermiş",
    englishName: "The Hermit",
    number: 9,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Başak",
    astrologyIcon: "♍",
    element: "Toprak",
    keywords: ["İçsel Arayış", "Yalnızlık", "Ruhani Rehberlik", "Bilgelik", "Sessizlik"],
    uprightMeaning: "Dış dünyadan uzaklaşıp kendi içinize dönme zamanı. Yanıtları dışarıda değil, ruhunuzun derinliklerinde arayın.",
    reversedMeaning: "Aşırı yalnızlaşma, sosyal izolasyon, inatçılık, gerçeği görmeyi reddetme.",
    description: "Ermiş, karlı bir dağın tepesinde tek başına durur. Elinde sadece yolu aydınlatan altın bir fener ve dayandığı asası vardır. Fenerin içindeki altı köşeli yıldız, gerçeğin ışığıdır.",
    gradient: "from-indigo-900 via-slate-800 to-zinc-900",
    iconName: "Eye",
    symbolism: "Altın fener insanın içindeki gerçek aklı ve ilahi ışığını simgeler. Fenerin içindeki altı köşeli Süleyman Mührü denge ve bilgeliği; dayandığı asa bilinç düzeyini; karlı dağın zirvesinde tek başına durması ise ancak kalabalıklardan uzaklaşıldığında ulaşılabilecek manevi olgunluğu anlatır.",
    spreadInterpretations: {
      love: "İlişkide kısa süreli yalnız kalma ve inziva süreci. Kendi isteklerinizi tartmak, olgunlaşmak ve dış etkenlerin baskısından aşkınızı arındırmak.",
      career: "Bağımsız çalışmalar yürütmek, araştırmalara ağırlık vermek, acele para kazanma hırslarını askıya alıp kendini meslekte geliştirmek.",
      spiritual: "Derin meditasyon, tefekkür ve felsefi arayışlar. İçinizdeki asıl kılavuz gücü keşfedeceğiniz muazzam bir ruhsal dönüşüm."
    }
  },
  {
    id: "wheel-of-fortune",
    name: "Kader Çarkı",
    englishName: "Wheel of Fortune",
    number: 10,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Jüpiter",
    astrologyIcon: "♃",
    element: "Ateş",
    keywords: ["Şans", "Kader", "Dönüm Noktası", "Kaçınılmaz Değişim", "Döngüler"],
    uprightMeaning: "Hayatın çarkı sizin lehinize dönüyor. Beklenmedik şanslı gelişmeler ve kaçınılmaz sarsıcı ama faydalı değişimler.",
    reversedMeaning: "Kötü şans, değişime direnç gösterme, kontrol edilemeyen dış faktörler, kısır döngüye girme.",
    description: "Çarkın üzerinde mitolojik varlıklar bulunur: yükselen Anubis, inen Typhon ve tepede sarsılmaz duran sfenks. Bu kart, hayattaki tek sabitin değişim olduğunu söyler.",
    gradient: "from-teal-500 via-indigo-500 to-purple-600",
    iconName: "RefreshCw",
    symbolism: "Çarkın tepesindeki sfenks dengede kalmaya çalışan aklı; çarkla inen Typhon yıkımı; yükselen çakal kafalı Anubis ise karanlıktan yeniden doğuşu simgeler. Çarkın köşelerindeki dört yaratık ise zamanın döngülerini koruyan sabit burçları (Kova, Akrep, Aslan, Boğa) sembolize eder.",
    spreadInterpretations: {
      love: "Hayatınızda kadersel dönüm noktası oluşturacak şanslı karşılaşmalar. İlişkinizde süregelen kısırdöngülerin aniden kırılarak olumlu yöne dönmesi.",
      career: "Kariyerde şans rüzgarlarının aniden arkanıza esmesi. Beklenmedik terfiler, piyango değerindeki ortaklıklar ve finansal talihte ani artı yönde sıçrayış.",
      spiritual: "Eşzamanlılıkları (Senkronisite) fark etme dönemi. Evrende tesadüfe yer olmadığını ve her döngünün bir ders getirdiğini anlama bilgeliği."
    }
  },
  {
    id: "justice",
    name: "Adalet",
    englishName: "Justice",
    number: 11,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Terazi",
    astrologyIcon: "♎",
    element: "Hava",
    keywords: ["Adalet", "Gerçek", "Denge", "Neden-Sonuç", "Dürüstlük"],
    uprightMeaning: "Verdiğiniz kararların sorumluluğunu alma zamanı. Adalet yerini bulacak, gerçekler gün yüzüne çıkacak.",
    reversedMeaning: "Önyargı, adaletsizlik, haksızlığa uğrama, dürüst olmama veya gerçeklerden kaçma.",
    description: "Adalet figürü, iki sütunun ortasında bir elinde kılıç diğer elinde teraziyle oturur. Kılıç mantıklı net analizleri, terazi ise olaylardaki adil dengeyi belirtir.",
    gradient: "from-emerald-600 via-teal-700 to-indigo-800",
    iconName: "Scale",
    symbolism: "Sol elinde tuttuğu terazi olayların ve eylemlerin adilce tartılmasını, kararların tarafsızlığını; sağ elindeki çift ağızlı dik kılıç ise mantığın ve gerçeğin iki taraflı keskinliğini sembolize eder. Tacındaki kare detay dünyevi düzeni ve adaleti temsil eder.",
    spreadInterpretations: {
      love: "Tam eşitlik ve hakkaniyet arayışı olan ilişkiler. Karşılıklı dürüstlükle temeli atılan, manipülasyonun yer almadığı dengeli sevgiler.",
      career: "Yasal sözleşmelerin başarıyla imzalanması, haksızlığa uğradıysanız haklarınızın iadesi, dürüst ticari kazançlar.",
      spiritual: "Neden-sonuç (Karma) yasasının kesin çalışması. Geçmiş adımların sonuçlarıyla dürüstçe yüzleşmek ve hayatı dengelemek."
    }
  },
  {
    id: "the-hanged-man",
    name: "Asılan Adam",
    englishName: "The Hanged Man",
    number: 12,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Neptün / Su",
    astrologyIcon: "♆",
    element: "Su",
    keywords: ["Perspektif", "Kabulleniş", "Yavaşlama", "Fedakarlık", "Aydınlanma"],
    uprightMeaning: "Olayları farklı bir açıdan görme ihtiyacı. Mücadeleyi bırakıp akışa teslim olma ve sabırlı bekleme zamanı.",
    reversedMeaning: "Emeğin boşa gitmesi, ego çatışması, değişime ayak direme, kurban psikolojisine bürünme.",
    description: "Asılan Adam, T şeklinde canlı bir ağaçtan ayak bileğinden asılı durur. Yüzünde acı değil, derin bir huzur ve başının etrafında aydınlanmış bir hale göze çarpar.",
    gradient: "from-cyan-800 via-blue-900 to-indigo-950",
    iconName: "Hourglass",
    symbolism: "Asıldığı T şeklindeki ağaç hayat ağacını ve yaşama bağlılığı; asılı adamın başının çevresindeki parlak sarı hale (nimbi) ulaştığı içsel aydınlanmayı sembolize eder. Bacaklarını çapraz yaparak bir '4' rakamı oluşturması, dünyevi planlardaki katı kalıpları durdurup teslim olduğunu gösterir.",
    spreadInterpretations: {
      love: "İlişkide fedakarlık gerektiren ve durup beklemeyi öneren süreç. Partnerleri değiştirmeye çalışmak yerine mevcut duruma farklı pencereden bakma.",
      career: "Beklemesi gereken iş projeleri, aceleci davranmamanın kazandıracağı süreç. Kariyerde yeni bakış açıları kazanmak için aktif inziva.",
      spiritual: "Egonun tamamen kurban edilmesi ve evrenin sonsuz planına güvenip teslim olma aşaması. Aydınlanmış yavaşlama şifası."
    }
  },
  {
    id: "death",
    name: "Ölüm",
    englishName: "Death",
    number: 13,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Akrep",
    astrologyIcon: "♏",
    element: "Su",
    keywords: ["Dönüşüm", "Sonlar", "Yeni Başlangıçlar", "Bırakma", "Geçiş"],
    uprightMeaning: "Eski olan bir durumun veya kalıbın kaçınılmaz sonu. Yeni ve daha güzel bir başlangıcın habercisi olan derin dönüşüm.",
    reversedMeaning: "Değişimden korkma, bitmesi gerekeni zorla sürdürme, takıntı, sancılı geçiş süreçleri.",
    description: "Zırhlı bir şövalye olarak betimlenen Ölüm, beyaz bir atın üzerinde ilerler. Karşısında krallar bile diz çöker. Uzakta ise yeniden doğan kutsal güneş parlar.",
    gradient: "from-zinc-800 via-stone-900 to-black",
    iconName: "ShieldAlert",
    symbolism: "Atın üzerindeki iskelet şövalye ölümün ve kaçınılmaz sonun karşısında herkesin (krallar dahi) eşit olduğunu vurgular. Elindeki siyah bayrağın üzerindeki beyaz gül motifleri ölümün ardından gelecek yaşamı; uzaktaki iki kule arasından doğan yeni güneş ise sonsuz ruhun yeniden doğuşunu simgeler.",
    spreadInterpretations: {
      love: "Zoraki süren ya da miadı dolmuş ilişkilerde kaçınılmaz son veya partnerlikle tamamen boyut değiştirerek eski sorunların yakılması.",
      career: "İş hayatında radikal değişim zamanı. İstifa ya da departman değişikliğiyle açılan taptaze, bereket kaynağı yeni serüvenler.",
      spiritual: "Eski kabukları terk etme süreci. Egoyu öldürerek ruhsal küllerden (anka kuşu gibi) yepyeni yüksek frekanslarla doğuş."
    }
  },
  {
    id: "temperance",
    name: "Denge",
    englishName: "Temperance",
    number: 14,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Yay",
    astrologyIcon: "♐",
    element: "Ateş",
    keywords: ["Denge", "Uyum", "Simya", "Sabır", "Şifa"],
    uprightMeaning: "Uç noktalardan kaçınma, hayatınızda uyumu sağlama, zıtlıkları bir araya getirerek şifalanma ve ölçülü olma.",
    reversedMeaning: "Dengesizlik, aşırılıklar, uyumsuz arkadaşlıklar, acelecilik veya ruhsal kopukluk.",
    description: "Kanatlı kutsal bir melek, elindeki iki kupa arasında hayat suyunu döker ve karıştırır. Bir ayağı toprakta, diğer ayağı ise bilinçaltını simgeleyen sudadır.",
    gradient: "from-fuchsia-500 via-purple-600 to-pink-600",
    iconName: "Droplet",
    symbolism: "Kanatlı melek ilahi korumayı; iki kupa arasında suyu usta bir şekilde sarsmadan aktarması içsel simyayı (zıtlıkların harmonisi) sembolize eder. Meleğin bir ayağının toprakta (dünya), diğerinin suda (bilinçaltı) durması ise madde ile ruhun mucizevi dengesini temsil eder.",
    spreadInterpretations: {
      love: "Gönül birliği ve şifa dolu beraberlikler. Fevri duygular yerine sakin bir dostlukla, sabırla demlenerek güçlenen aşkı temsil eder.",
      career: "Finansal dengeyi yakalamak, ortaklıkları uyumlulaştırmak, iş yerinde arabuluculuk rolü üstlenerek barışçıl ortam kurma başarısı.",
      spiritual: "Karşıt enerjileri (eril-dişil, akıl-duygu) kendi içinde eriterek şifalamak. Ruhsal simya gücünü hayatına nakşetmek."
    }
  },
  {
    id: "the-devil",
    name: "Şeytan",
    englishName: "The Devil",
    number: 15,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Oğlak",
    astrologyIcon: "♑",
    element: "Toprak",
    keywords: ["Maddiyat", "Bağımlılık", "Gölge Yanlar", "İllüzyon", "Korku"],
    uprightMeaning: "Sizi kısıtlayan alışkanlıkların, bağımlılıkların veya inançların farkına varma ve onlardan özgürleşme çağrısı.",
    reversedMeaning: "Bağımlılıklardan kurtulma, zincirleri kırma, gölge yanlarla yüzleşme, bağımsızlık.",
    description: "Baphomet figürü tahtta oturur. Önünde boyunlarında gevşek zincirler olan bir kadın ve bir erkek durur. Zincirler aslen gevşektir, yani isteseler kolayca çıkabilirler.",
    gradient: "from-red-950 via-stone-900 to-neutral-950",
    iconName: "Skull",
    symbolism: "Tahtta oturan Baphomet fiziksel maddeye sarsılmaz inancı ve illüzyonu temsil eder. Kadın ve erkeğin boynundaki zincirlerin gevşek olması, aslında insanları bağımlı yapan korkuları kendilerinin büyüttüğünü sembolize eder. Avucundaki ters pentagram ise zihnin dünyevi arzulara yenik düşmesini simgeler.",
    spreadInterpretations: {
      love: "Aşırı şehvete dayalı toksik bağlar, sahiplenici kıskançlık krizleri, partnerlerin birbirini kısıtladığı bağımlı ilişkiler.",
      career: "Paraya ve güce aşırı tapan hırslı yaklaşımlar, borçların getirdiği kısıtlılık hissi, iş yerindeki entrikalara karşı dikkatli olma tavsiyesi.",
      spiritual: "Kendi gölge yanlarınızla (korkular, zaaflar) yüzleşerek özgürleşme fırsatı. Zincirleri kırarak gerçek spritüal bilince kavuşma."
    }
  },
  {
    id: "the-tower",
    name: "Yıkılan Kule",
    englishName: "The Tower",
    number: 16,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Mars",
    astrologyIcon: "♂",
    element: "Ateş",
    keywords: ["Ani Değişim", "Sarsıntı", "Uyanış", "Özgürleşme", "Yıkım"],
    uprightMeaning: "Yalanlar ve çürük temeller üzerine kurulu olan her şeyin bir anda yıkılması. İllüzyonların son bularak gerçeğin ortaya çıkışı.",
    reversedMeaning: "Felaketten kıl payı kurtulma, kaçınılmaz yıkımı erteleme, büyük krizlerden ders almama.",
    description: "Yüksek bir kuleye yıldırım isabet eder, kulenin tacı havaya uçar ve insanlar kuleden aşağı düşer. Bu, egonun ve sahte güvenliğin sarsıcı yıkımını sembolize eder.",
    gradient: "from-orange-700 via-rose-800 to-stone-900",
    iconName: "Zap",
    symbolism: "Yalanlar üzerine inşa edilmiş kule egoyu ve sahte güvenliği; gökten isabet eden büyük yıldırım ani ilahi hakikatin tecellisini ve uyanışı simgeler. Kuleden aşağı düşen taç gururun ve kibrin yıkılışını; dökülen alev kıvılcımları ise temizlik ve aydınlanma enerjilerini sembolize eder.",
    spreadInterpretations: {
      love: "Yalan temelli ilişkilerin aniden son bulması, şok edici sırların açığa çıkışı, esaret altındaki sevgi bağlarının özgür kılıcı uyanışı.",
      career: "Kariyerde beklenmedik sarsıcı krizler, aniden bozulan planların yerine çok daha dürüst ve sağlam temeller üzerinde yeni yapıların inşası.",
      spiritual: "Sahte inanç konforunun yerle bir olmasıyla gelen aydınlanma. Egonun kafesinden nihayet özgürleşerek kozmik bilince kavuşma."
    }
  },
  {
    id: "the-star",
    name: "Yıldız",
    englishName: "The Star",
    number: 17,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Kova",
    astrologyIcon: "♒",
    element: "Hava",
    keywords: ["Umut", "İnanç", "İlham", "Ruhsal Şifa", "Yenilenme"],
    uprightMeaning: "Zor günlerin ardından gelen huzur, geleceğe dair taze umutlar, evrenin sizi şefkatle desteklediğini bilme.",
    reversedMeaning: "Umutsuzluk, karamsarlık, inanç kaybı, yaratıcı ilhamın tıkanması veya güvensizlik.",
    description: "Çıplak bir kadın yıldızlı gökyüzünün altında diz çöker. Elindeki testilerden hem toprağı hem de suyu sular. Başının üzerinde parlayan devasa sekiz köşeli yıldız, ilahi rehberliktir.",
    gradient: "from-teal-600 via-cyan-650 to-blue-800",
    iconName: "Star",
    symbolism: "Göklerde parıldayan büyük sekiz köşeli yıldız ilahi rehberliği ve kozmik umut ışığını; onun etrafındaki yedi yıldız ise çakraların aktive edilmesini simgeler. Çıplak kadın herhangi bir art niyet taşımayan saf temiz ruhu; testilerden akan sular ise hem bilinçüstünü hem de dünyayı şifalandıran enerjileri temsil eder.",
    spreadInterpretations: {
      love: "Kırgınlıkların tamamen geçtiği ruhsal ve derin aşklar. Ortak gelecek hayallerinin taze umut dalgalarıyla yeşermesi ve kavuşmalar.",
      career: "Sanatsal veya yaratıcı fikirlerin üstün kabulü, toplumda takdir ve şöhret kazanma şansı, geleceğe yönelik güvenli adımlarla yükseliş.",
      spiritual: "Zorlu krizlerin ardından gelen evrensel ilahi şifa dönemi. İçinizdeki ışığı keşfetmek, yüksek koruma kalkanları ile güçlenmek."
    }
  },
  {
    id: "the-moon",
    name: "Ay",
    englishName: "The Moon",
    number: 18,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Balık",
    astrologyIcon: "♓",
    element: "Su",
    keywords: ["Korkular", "İllüzyon", "Bilinçaltı", "Kararsızlık", "Rüyalar"],
    uprightMeaning: "Net olmayan durumlar, gizli korkular veya illüzyonlar. Zihninizin oyunlarına dikkat edin ve derin sezgilerinizi dinleyin.",
    reversedMeaning: "Korkularla yüzleşme, yalanların açığa çıkması, kafa karışıklığının azalması, gerçekleri kabullenme.",
    description: "Gece gökyüzünde parlayan büyük bir ayın altında bir köpek ile bir kurt ulur. Suların içinden çıkan bir istakoz, bilinçaltından yüzeye çıkan ilkel korkuları temsil eder.",
    gradient: "from-blue-900 via-purple-950 to-slate-900",
    iconName: "CloudMoon",
    symbolism: "Gökteki ayın dalgalı parlaklığı zihinsel illüzyonu ve rüyaları; ayın altında uluyan köpek ve kurt insanın evcil ve vahşi içgüdüsel dualitesini temsil eder. Sulardan çıkan istakoz, bilinçaltının derinlerinden sızan en ilkel korkuları; arkadaki iki ıssız kule ise görünmeyen dünyanın tekinsiz sınırlarını sembolize eder.",
    spreadInterpretations: {
      love: "Netlikten uzak, güvensizlik veya kıskançlık içeren durumlar. Gizlenen sırlar, kafa karıştırıcı dürtüler veya hayal kırıklığı yaşama olasılığı.",
      career: "İş dünyasında arka planda dönen entrikalar ve gizli rakipler. Önünüzü görmediğiniz anlaşmalara imza atmamak üzere dikkat çağrısı.",
      spiritual: "En derin korkularla yüzleşmek için bilinçaltının sularına dalış. Rüyaların rehberliği ve psişik yeteneklerde görülen geçici dalgalanmalar."
    }
  },
  {
    id: "the-sun",
    name: "Güneş",
    englishName: "The Sun",
    number: 19,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Güneş",
    astrologyIcon: "☉",
    element: "Ateş",
    keywords: ["Başarı", "Canlılık", "Neşe", "Aydınlanma", "Netlik"],
    uprightMeaning: "Muazzam bir pozitif enerji, başarı, neşe, canlılık ve hayatın her alanında parıldama. Gerçeklerin tüm netliğiyle görünmesi.",
    reversedMeaning: "Geçimi moral bozukluğu, aşırı kibir, başarıda gecikmeler ya da aşırı iyimser hayalperestlik.",
    description: "Altın sarısı bir güneşin altında, beyaz bir ata binmiş neşeli, çıplak bir çocuk görünür. Arkasındaki büyük kırmızı bayrak ve ayçiçekleri hayat enerjisini sembolize eder.",
    gradient: "from-yellow-400 via-amber-450 to-orange-500",
    iconName: "Sun",
    symbolism: "Altın göksel güneş neşeyi, canlılığı ve gerçeğin tam netleşmesini; ata binen çıplak çocuk ruhsal saflığı ve özgürlüğü sembolize eder. Arkasındaki ayçiçekleri evrenin sunduğu yaşam enerjisini ve bereketi; kırmızı büyük bayrak ise yaşam coşkusunun görkemli zaferini simgeler.",
    spreadInterpretations: {
      love: "Muazzam sevinç, netleşme, dürüstlük ve evlilik kararı. Çocuk sahibi olmak isteyenler için güzel haberlerin dalga dalga gelmesi.",
      career: "Büyük başarılar, liderlik koltuğunda parıldamak, hak edilen ödülün veya kazancın fazlasıyla gelmesi, zirveye yerleşim.",
      spiritual: "Karanlıkların tamamen dağılmasıyla gelen kozmik aydınlanma. Çocuksu neşeyi ve hayat coşkusunu ruhun derinliklerinde hissetmek."
    }
  },
  {
    id: "judgement",
    name: "Mahkeme",
    englishName: "Judgement",
    number: 20,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Plüton / Ateş",
    astrologyIcon: "♇",
    element: "Ateş",
    keywords: ["Uyanış", "Yüzleşme", "Karar", "Yeniden Doğuş", "Arınma"],
    uprightMeaning: "Geçmiş değerlendirmesi yapıp büyük kararlar alma zamanı. Ruhsal uyanış ve kendinize dürüstçe yeni bir şans verme.",
    reversedMeaning: "Kendini haksız yere suçlama, kararsızlık, geçmişe takılı kalıp ileriye gidememe, çağrıya kulak tıkama.",
    description: "Başmelek Cebrail (Gabriel) gökyüzünde borusunu çalar. Yeryüzündeki mezarlardan kalkan insanlar şükranla gökyüzüne bakar. Bu, ruhsal bir uyanış ve arınmadır.",
    gradient: "from-indigo-700 via-sky-800 to-zinc-850",
    iconName: "Volume2",
    symbolism: "Başmelek Cebrail'in borusu insanın içine üflenen o 'kozmik çağrı' yı ve uyanışı; borudaki kırmızı haçlı bayrak yaşamın ve ölümün kesişimini sembolize eder. Suların üstündeki mezarlardan doğrulan insanlar geçmişin muhasebesini yapıp arınmışlığa yükselen ruhu simgeler.",
    spreadInterpretations: {
      love: "Geçmişteki partnerlerle dürüstçe yüzleşme, yarım kalmış tarihi aşarak gelen yepyeni sayfa, affetmenin getirdiği derin bağ.",
      career: "Kariyerde hayati öneme sahip dönüm noktası oluşturacak kararlar. Gerçek mesleki çağrınızı (misyonunuzu) fark ederek o yöne koşmak.",
      spiritual: "Kozmik uyanış ve bilincin bir üst boyuta sıçrayışı. Geçmiş karmik yüklerden tamamen arınarak ruhsal olarak özgürleşmek."
    }
  },
  {
    id: "the-world",
    name: "Dünya",
    englishName: "The World",
    number: 21,
    type: "major",
    arcana: "Major Arcana",
    astrology: "Satürn",
    astrologyIcon: "♄",
    element: "Toprak",
    keywords: ["Tamamlanma", "Bütünlük", "Başarı", "Özgürlük", "Seyahat"],
    uprightMeaning: "Büyük bir döngünün başarıyla kapanması. İçsel bütünlüğe kavuşma, hayatta hedeflere ulaşma ve kutlama.",
    reversedMeaning: "Yarım kalmış işler, tamamlanamayan projeler, hedefe yaklaşmışken duraksama veya doyumsuzluk.",
    description: "Uçan bir kadın figürü defne yapraklarından tacın ortasında dans eder. Tacın dört köşesinde dört elementi simgeleyen simgeler (boğa, aslan, kartal, melek) bulunur.",
    gradient: "from-emerald-500 via-teal-650 to-indigo-700",
    iconName: "Globe",
    symbolism: "Yeşil defne yaprağı çelenk büyük kozmik döngülerin tamamlanmasını ve korumasını; dans eden mor şallı çıplak kadın ruhsal özgürleşmeyi sembolize eder. Çelengin dört tarafındaki boğa, aslan, kartal ve melek sembolleri evrendeki dört elementin birliğini ve bütünlüğünü gösterir.",
    spreadInterpretations: {
      love: "Ruh ikiziyle tamamlama, mutlu son, her türlü engelin kalkarak ilişkide huzurlu bütünlük ve evlilik mertebesine ulaşma.",
      career: "Kariyer hedeflerinin kusursuz sonuca bağlanması, finansal özgürlük, uluslararası iş seyahatleri veya tayinlerde büyük zaferler.",
      spiritual: "İç dünya ile dış dünya arasındaki tam harmoninin kurulması. Aydınlanma yolculuğunun başarıyla tamamlanarak evrenle bir olmak."
    }
  }
];
