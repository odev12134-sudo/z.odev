export interface ZodiacMajorAlliance {
  cardId: string;
  cardName: string;
  reason: string;
}

export interface ZodiacMinorAlliance {
  cardName: string;
  reason: string;
  keywords: string[];
}

export interface ZodiacCompatibility {
  id: string;
  name: string;
  symbol: string;
  date: string;
  element: 'Ateş' | 'Toprak' | 'Hava' | 'Su';
  rulingPlanet: string;
  themeColor: string; // Tailwind color class for borders/backgrounds
  majorCards: ZodiacMajorAlliance[];
  minorCards: ZodiacMinorAlliance[];
  analysis: string;
}

export const zodiacCompatibilities: ZodiacCompatibility[] = [
  {
    id: "aries",
    name: "Koç",
    symbol: "♈",
    date: "21 Mart - 19 Nisan",
    element: "Ateş",
    rulingPlanet: "Mars",
    themeColor: "border-red-500/30 text-red-600 bg-red-50/50 hover:bg-red-50",
    analysis: "Koç burcu, zodyak döngüsünün ilk burcudur; öncülük, yüksek irade gücü, savaşçı ruh ve coşkulu bir inisiyatif ile karakterizedir. Tarot destesinde directly Mars ve Koç enerjisini barındıran kartlar onun liderliğini ve yılmaz mücadele şevkini beslemektedir.",
    majorCards: [
      {
        cardId: "the-emperor",
        cardName: "İmparator",
        reason: "İmparator kartı Koç burcunu doğrudan yönetir. Güç, koruma, disiplin, yapı kurma ve liderlik özelliklerini temsil eder. Koç burcunun içgüdüsel yönetme ve koruma dürtüsü, İmparator'un sarsılmaz tahtında ete kemiğe bürünür."
      },
      {
        cardId: "the-tower",
        cardName: "Yıkılan Kule",
        reason: "Mars gezegeni tarafından yönetilen bu kart, Koç burcunun ani, patlayıcı enerjisini ve eskiyen yapıları anında yakıp geçerek özgürleştirme gücünü simgeler. Yıkılan Kule, Koç burcunun cesaretle krizleri darmadağın etme yeteneğidir."
      }
    ],
    minorCards: [
      {
        cardName: "Değnek Kraliçesi (Queen of Wands)",
        reason: "Değnek serisi ateş elementini simgeler. Değnek Kraliçesi, Koç burcunun neşesini, çekiciliğini, cesaretini ve bağımsızlığına olan aşırı düşkünlüğünü en iyi tasvir eden küçük arkana kartıdır.",
        keywords: ["Tutku", "Özgüven", "Çekicilik", "Girişimci"]
      },
      {
        cardName: "Değnek Şövalyesi (Knight of Wands)",
        reason: "Maceraya atılan, dur durak bilmeyen, yüksek enerjili ve fevri Şövalye, Koç burcunun hedefine sabırsızca koşan fırtınalı doğasını betimler.",
        keywords: ["Gözü Kara", "Macera", "Sabırsız", "İlham"]
      }
    ]
  },
  {
    id: "taurus",
    name: "Boğa",
    symbol: "♉",
    date: "20 Nisan - 20 Mayıs",
    element: "Toprak",
    rulingPlanet: "Venüs",
    themeColor: "border-emerald-500/30 text-emerald-600 bg-emerald-50/50 hover:bg-emerald-50",
    analysis: "Boğa burcu; pratik akıl, istikrar, geleneklere bağlılık, lüks konfor arayışı ve sarsılmaz sabrı ile bilinir. Toprak elementinin bu sabit burcu, maddiyatın kıymetini bilirken manevi öğretileri derinden kucaklar.",
    majorCards: [
      {
        cardId: "the-hierophant",
        cardName: "Aziz",
        reason: "Aziz kartı doğrudan Boğa burcuyla hizalanmıştır. Ruhsal kurallar, geleneksel bağlar, eğitim sistemi ve sarsılmaz inançlar Boğa'nın hayatı inşa ettiği köklü prensipleri ve sadık rehberliğini yansıtır."
      },
      {
        cardId: "the-empress",
        cardName: "İmparatoriçe",
        reason: "Boğa'nın yöneticisi Venüs'ün kartı olan İmparatoriçe, doğayı, bereketi, duyusal zevkleri ve dünyevi konforu temsil eder. Boğa'nın hayatın güzelliklerine, estetiğe ve üretime olan hayranlığını besler."
      }
    ],
    minorCards: [
      {
        cardName: "Tılsım Kralı (King of Pentacles)",
        reason: "Tılsım serisi toprak elementidir. Tılsım Kralı, Boğa'nın finansal güvenliğini, ticari zekasını, konforlu bir yuva yaratma gücünü ve hayatını sarsılmaz bir garanti altına alma başarısını simgeler.",
        keywords: ["Maddi Güvence", "Bolluk", "Güvenilirlik", "Disiplin"]
      },
      {
        cardName: "Tılsım Şövalyesi (Knight of Pentacles)",
        reason: "Ağır ama sarsılmaz adımlarla ilerleyen bu şövalye, hedefine varmak için sabırla çalışan, asla pes etmeyen dürüst Boğa karakterini gösterir.",
        keywords: ["Sabır", "Çalışkanlık", "Rasyonellik", "Sadakat"]
      }
    ]
  },
  {
    id: "gemini",
    name: "İkizler",
    symbol: "♊",
    date: "21 Mayıs - 20 Haziran",
    element: "Hava",
    rulingPlanet: "Merkür",
    themeColor: "border-amber-500/30 text-amber-600 bg-amber-50/50 hover:bg-amber-50",
    analysis: "İkizler burcu; üstün zeka, çevik bir zihin yapısı, iletişim yeteneği, merak ve hayattaki dualiteleri (zıtlıkları) bir araya getirme sanatıyla tanınır. Hava elementinin değişken burcu olan İkizler, sürekli veri akışı ve zihinsel uyarım arzular.",
    majorCards: [
      {
        cardId: "the-lovers",
        cardName: "Aşıklar",
        reason: "Aşıklar kartı İkizler burcuyla doğrudan ilişkilidir. Kart, yalnızca şehveti değil, zıt kutupların uyuşmasını, zihinsel dengelenmeyi ve hayat yolundaki kritik seçenekler arasında ikilemleri çözmeyi (seçim yapmayı) temsil eder."
      },
      {
        cardId: "the-magician",
        cardName: "Büyücü",
        reason: "Yönetici gezegeni Merkür'ün kartı olan Büyücü, İkizler'in pratik iletişim becerilerini, zekasını, hızlı öğrenme algısını ve fikirlerini hayata geçirmek için gereken tüm zihinsel araçlara olan hakimiyetini simgeler."
      }
    ],
    minorCards: [
      {
        cardName: "Kılıç İkilisi (Two of Swords)",
        reason: "Kılıç serisi hava elementidir. Kılıç İkilisi, İkizler'in karar verme aşamasındaki mantıksal çıkmazlarını, iki seçenek arasında rasyonel denge arama çabasını ve aşırı düşünme reflekslerini mükemmel betimler.",
        keywords: ["Kararsızlık", "Zihinsel Çıkmaz", "Denge Arayışı", "Mantık"]
      },
      {
        cardName: "Kılıç Şövalyesi (Knight of Swords)",
        reason: "Zihinsel hızın, keskin argümanların ve hızlı söz düellolarının şövalyesi, İkizler burcunun fikirlerini hemen yayma dürtüsünün resmidir.",
        keywords: ["Çeviklik", "İletişim", "Acelecilik", "Zeka"]
      }
    ]
  },
  {
    id: "cancer",
    name: "Yengeç",
    symbol: "♋",
    date: "21 Haziran - 22 Temmuz",
    element: "Su",
    rulingPlanet: "Ay",
    themeColor: "border-blue-500/30 text-blue-600 bg-blue-50/50 hover:bg-blue-50",
    analysis: "Yengeç burcu; derin duygu dünyası, anaç koruma dürtüsü, evine ve köklerine bağlılık, sezgisellik ve yüksek empati ile bilinir. Su elementinin bu öncü burcu, dışarıya güçlü bir zırh gösterirken içinde kırılgan, değerli okyanuslar saklar.",
    majorCards: [
      {
        cardId: "the-chariot",
        cardName: "Araba",
        reason: "Kozmik olarak Yengeç burcuyla hizalanan Araba, duyguların sarsılmaz bir irade zırhıyla korunarak hedefe yönlendirilmesini simgeler. Dışarıdan soğuk bir zırh (sfenksler ve tente) gibi görünse de, içerisindeki asil ruhun duygu gücüyle zafer kazanmasını anlatır."
      },
      {
        cardId: "the-high-priestess",
        cardName: "Azize",
        reason: "Yengeç'in yöneticisi Ay ile ilişkili olan Azize, bilinçaltının derin sularını, sarsılmaz sezgileri ve rüyaların rehberliğini temsil eder. Yengeç'in gizli duyusal algılarını ve spritüal bilgeliğini besler."
      }
    ],
    minorCards: [
      {
        cardName: "Kupa İkilisi (Two of Cups)",
        reason: "Kupa serisi su elementidir. Kupa İkilisi, Yengeç burcunun aşka ve ilişkilerde hissettiği saf sadakate, güvene, empatiye ve karşılıklı ruhsal birleşmeye olan derin ihtiyacını yansıtır.",
        keywords: ["Ruhsal Birleşme", "Uyum", "Karşılıklı Güven", "Şefkat"]
      },
      {
        cardName: "Kupa Onlusu (Ten of Cups)",
        reason: "Yuva, aile, duygusal tamamlanma ve sevgi çatısı altındaki sonsuz huzuru simgeleyen bu kart, Yengeç burcunun rüya gibi gördüğü ideal huzur evrenidir.",
        keywords: ["Aile", "Huzur", "Duygusal Mutluluk", "Bütünlük"]
      }
    ]
  },
  {
    id: "leo",
    name: "Aslan",
    symbol: "♌",
    date: "23 Temmuz - 22 Ağustos",
    element: "Ateş",
    rulingPlanet: "Güneş",
    themeColor: "border-orange-500/30 text-orange-600 bg-orange-50/50 hover:bg-orange-50",
    analysis: "Aslan burcu; yüce gönüllülük, sarsılmaz cesaret, sahne ışığı, yaratıcı vizyon ve cömert bir liderlikle parıldar. Güneş'in yönettiği bu asil burç, hayat sahnesinde parlama ve çevresine neşeli sıcaklık saçma misyonuna sahiptir.",
    majorCards: [
      {
        cardId: "strength",
        cardName: "Güç",
        reason: "Aslan burcunun asıl kartı Güç'tür. Kartta aslanın çenesini şefkatle okşayan kadın görünür. Bu durum, Aslan'ın kaba güçten ziyade yüce gönüllülük, asil bir şefkat, cömertlik ve içsel sarsılmaz bir cesaretle etrafını nasıl yönettiğini gösterir."
      },
      {
        cardId: "the-sun",
        cardName: "Güneş",
        reason: "Aslan'ın yöneticisi Güneş'in kartıdır. Muazzam başarıyı, neşeyi, canlılığı ve gerçeğin aydınlığını simgeler. Aslan'ın dikkat çekici enerjisini, yaratıcı parıltısını ve hayat dolu, çocuksu asilliğini temsil eder."
      }
    ],
    minorCards: [
      {
        cardName: "Değnek Altılısı (Six of Wands)",
        reason: "Savaş meydanından başına defne yaprağı taç takılarak dönen muzaffer süvari, Aslan burcunun hak ettiği takdiri ve alkışı, toplum önündeki başarısını ve asil zaferlerini simgeler.",
        keywords: ["Görkemli Başarı", "Zafer", "Takdir Almak", "Liderlik"]
      },
      {
        cardName: "Değnek Kralı (King of Wands)",
        reason: "Tahtında arkasında kertenkele desenli pelerinle oturan asil Kral; vizyon, karizma, sahne duruşu ve cesaret sunarak Aslan'ın tam potansiyel liderliğini gösterir.",
        keywords: ["Karizma", "Sarsılmaz İrade", "Yaratıcılık", "Liderlik"]
      }
    ]
  },
  {
    id: "virgo",
    name: "Başak",
    symbol: "♍",
    date: "23 Ağustos - 22 Eylül",
    element: "Toprak",
    rulingPlanet: "Merkür",
    themeColor: "border-stone-500/30 text-stone-600 bg-stone-50/50 hover:bg-stone-50",
    analysis: "Başak burcu; üstün analiz gücü, temiz düzen tutkusu, hizmet etme sevdası, ustalık ve pratik yardımseverliği ile tanınır. İşini kusursuz yapmak isteyen Başak, her şeyi süzgeçten geçirerek faydalı kılmaya çalışır.",
    majorCards: [
      {
        cardId: "the-hermit",
        cardName: "Ermiş",
        reason: "Ermiş kartı Başak burcunu yönetir. Zarafetle sessizleşmek, kendi içine çekilerek hakikati analiz etmek, bilgelik biriktirmek ve başkalarının yolunu fenerle aydınlatmak Başak'ın asil ve mütevazı ruhsal derinliğiyle örtüşür."
      },
      {
        cardId: "the-magician",
        cardName: "Büyücü",
        reason: "Başak'ın analitik zeka yöneticisi Merkür'ün kartıdır. Büyücü'nün masasında hazır tuttuğu araçları pratik faydaya dökme, ustalıkla detayları yönetme ve organize etme gücü Başak burcunun hünerli parmaklarında hayat bulur."
      }
    ],
    minorCards: [
      {
        cardName: "Tılsım Sekizlisi (Eight of Pentacles)",
        reason: "Tılsımlarını tek tek azimle, detaylıca ve sabırla duvara işleyen usta çırak figürü, Başak burcunun işine olan adanmışlığını, titizliğini ve dur durak bilmeyen mükemmellik aşkını temsil eder.",
        keywords: ["Ustalık", "Ayrıntı", "Öğrenme Aşaması", "Kusursuzluk"]
      },
      {
        cardName: "Tılsım Kraliçesi (Queen of Pentacles)",
        reason: "Bereketli doğasıyla kucağındaki tılsıma korumacıca bakan şefkatli Kraliçe; Başak'ın üretkenliğini, besleyiciliğini ve her şeyi organize eden pratik anneliğini sembolize eder.",
        keywords: ["Gözetim", "Pratik Care", "Finansal Akıl", "Düzen"]
      }
    ]
  },
  {
    id: "libra",
    name: "Terazi",
    symbol: "♎",
    date: "23 Eylül - 22 Ekim",
    element: "Hava",
    rulingPlanet: "Venüs",
    themeColor: "border-teal-500/30 text-teal-600 bg-teal-50/50 hover:bg-teal-50",
    analysis: "Terazi burcu; barış ve uyum özlemi, sarsılmaz bir adalet bilinci, diplomatik zeka, estetik algı ve ortaklık arzusuyla öndedir. Hayatının her alanında dengeyi ve zarafeti yakalamaya odaklanır.",
    majorCards: [
      {
        cardId: "justice",
        cardName: "Adalet",
        reason: "Adalet doğrudan Terazi burcuyla ilişkilidir. Terazilerin her iddiayı iki taraflı tartması, hakkaniyetli duruşu ve kavgadan kaçınan rasyonel dengesi bu kartın terazisinde ve dürüst kılıcında parıldar."
      },
      {
        cardId: "the-empress",
        cardName: "İmparatoriçe",
        reason: "Terazi'nin yöneticisi Venüs'ün kartıdır. Estetik, sanatsal incelik, ilişkilerde sevgi uyumu, nezaket ve diplomatik zarafeti simgeleyen bu kart Terazi'nin asil duruşunu besler."
      }
    ],
    minorCards: [
      {
        cardName: "Kılıç İkilisi (Two of Swords)",
        reason: "Seçimler arasında kalarak gözlerini bağlayan figür, Terazilerin karar vermekte çektikleri tatlı ama zorlu süreçleri, iki tarafı da gücendirmeme çabasındaki rasyonel kararsızlıklarını sembolize eder.",
        keywords: ["İçsel Çıkmaz", "Uyum Çabası", "Barışı Koruma", "Objektiflik"]
      },
      {
        cardName: "Kupa İkilisi (Two of Cups)",
        reason: "İlişkilerde eşitliği, adil sevgi paylaşımını, ruhların flörtöz ve diplomatik entegrasyonunu yansıtan, Terazi'nin arzuladığı o uyumlu iki kişilik dünyadır.",
        keywords: ["Denge", "Çekim Gücü", "Mutabakat", "İnceltilmiş Sevgi"]
      }
    ]
  },
  {
    id: "scorpio",
    name: "Akrep",
    symbol: "♏",
    date: "23 Ekim - 21 Kasım",
    element: "Su",
    rulingPlanet: "Plüton (ve Mars)",
    themeColor: "border-purple-600/30 text-purple-700 bg-purple-50/50 hover:bg-purple-50",
    analysis: "Akrep burcu; güçlü manyetizma, krizlerden beslenen küllerinden doğma yeteneği (Simya), sarsılmaz sırlar koruyuculuğu ve en derin gerçeklerle yüzleşebilme cesaretiyle tanınır. Yüzeysel olanı reddeder, özü arar.",
    majorCards: [
      {
        cardId: "death",
        cardName: "Ölüm",
        reason: "Ölüm kartı doğrudan Akrep burcunu yönetir. Kart fiziki yok oluşu değil; bitmesi gereken eski formların yanmasını ve paha biçilemez derin bir psikolojik ve ruhsal dönüşüm ile küllerinden yeniden asilce doğmayı sembolize eder."
      },
      {
        cardId: "judgement",
        cardName: "Mahkeme",
        reason: "Akrep'in modern yöneticisi Plüton'un kartıdır. Uyanışı, büyük yüzleşmeleri, geçmişi geride bırakarak yeni bir varoluş boyutuna sıçramayı ve ruhsal arınmayı destekler."
      }
    ],
    minorCards: [
      {
        cardName: "Kupa Beşlisi (Five of Cups)",
        reason: "Yere dökülen üç kupanın ardından yas tutan ama arkasında duran dolu iki kupayı henüz göremeyen siyah pelerinli figür, Akreplerin krizlerde hissettikleri derin duygusal yasları ve gizli hüzün sarmalını anlatır.",
        keywords: ["Duygusal Hesaplaşma", "Hüzün", "Kabule Geçiş", "Simyasal Dönüşüm"]
      },
      {
        cardName: "Kupa Şövalyesi (Knight of Cups)",
        reason: "Derin arzularını, sevgisini ve manyetizmasını gizemli bir kupa içinde sunan bu şövalye, Akrep burcunun sezgisel ve sadık ama bir o kadar da ketum tutkusunu yansıtır.",
        keywords: ["Manyetizma", "Romantizm", "Ketumluk", "Derin Bağlar"]
      }
    ]
  },
  {
    id: "sagittarius",
    name: "Yay",
    symbol: "♐",
    date: "22 Kasım - 21 Aralık",
    element: "Ateş",
    rulingPlanet: "Jüpiter",
    themeColor: "border-sky-500/30 text-sky-600 bg-sky-50/50 hover:bg-sky-50",
    analysis: "Yay burcu; felsefi derinlik, uzun vadeli vizyon, seyahat ve keşif aşkı, sınırsız iyimserlik ve hayatın büyük anlamını sorgulama dürtüsüyle doludur. Her zaman yayın ucunu en uzağa çeviren bilgelik aşıklarındandır.",
    majorCards: [
      {
        cardId: "temperance",
        cardName: "Denge",
        reason: "Denge kartı doğrudan Yay burcuyla hizalanır. İki kupa arasında suyu usta simyayla aktaran melek figürü, Yay burcunun farklı felsefe ve kültürleri bir potada eriterek yüksek hayat dengesini, bilgeliği ve iyimser şifayı bulma sürecidir."
      },
      {
        cardId: "wheel-of-fortune",
        cardName: "Kader Çarkı",
        reason: "Yay'ın yöneticisi şans gezegeni Jüpiter'ün kartıdır. Kaderin getirdiği kaçınılmaz döngüleri, sınırsız şansı, kadersel fırsatları ve hayatın dönüm noktalarını büyük bir iyimser inançla karşılamayı öğretir."
      }
    ],
    minorCards: [
      {
        cardName: "Değnek Üçlüsü (Three of Wands)",
        reason: "Ufka, uzak denizlerden limana yaklaşan gemilerine doğru bakan figür, Yay burcunun geleceğe duyduğu sarsılmaz inancı, yeni ufuklar keşfetme heyecanını ve vizyoner planlarını simgeler.",
        keywords: ["Ufka Bakmak", "Genişleme", "Vizyon", "Seyahat Planı"]
      },
      {
        cardName: "Değnek Sekizlisi (Eight of Wands)",
        reason: "Havada büyük hızla uçarak hedefe koşan sekiz asma asa; Yay burcunun hızlı haber akışını, ani macera kararlarını, seyahatleri ve sınırları aşan felsefi hürriyetini sembolize eder.",
        keywords: ["Yüksek Hız", "Seyahat", "Haberleşme", "Uzak Mesafe"]
      }
    ]
  },
  {
    id: "capricorn",
    name: "Oğlak",
    symbol: "♑",
    date: "22 Aralık - 19 Ocak",
    element: "Toprak",
    rulingPlanet: "Satürn",
    themeColor: "border-neutral-500/30 text-neutral-700 bg-neutral-50/50 hover:bg-neutral-50",
    analysis: "Oğlak burcu; çelikten disiplin, kariyer hırsı, sarsılmaz sabır, dünyevi başarı arzusu, sorumluluk bilinci ve kadim kurallarla yönetilen saygılı duruşu ile zodyakın zirvesinde parıldar. Hedefine emin adımlarla tırmanan dağ keçisidir.",
    majorCards: [
      {
        cardId: "the-devil",
        cardName: "Şeytan",
        reason: "Bu kart doğrudan Oğlak burcunu yönetir. Şeytan kartı korku, maddeye esaret ve gölge yönlerimizle yüzleşmeyi fısıldar. Oğlak'ın hırsla madde dünyasını inşa etme dürtüsü, başarı hırslarının boynuna geçirebileceği hayali zincirleri fark edip onlardan özgürleşmesi için büyük bir bilgelik dersidir."
      },
      {
        cardId: "the-world",
        cardName: "Dünya",
        reason: "Oğlak'ın yöneticisi zamanın ve kuralların efendisi Satürn'ün kartıdır. Büyük bir döngünün sabır, fedakarlık ve dürüst emekle kapatılarak zirveye yerleşmesini, dünyevi tamamlanmayı ve finansal özgürlüğü sembolize eder."
      }
    ],
    minorCards: [
      {
        cardName: "Tılsım Onlusu (Ten of Pentacles)",
        reason: "Görkemli aile şatosunun kapısında oturan yaşlı bilge figürü, Oğlak burcunun sülalesine, köklerine, dürüst miraslarına bıraktığı kalıcı maddi başarıyı ve uzun ömürlü zaferleri simgeler.",
        keywords: ["Maddi Miras", "Soy Bağları", "Finansal Zirve", "İstikrar"]
      },
      {
        cardName: "Tılsım Kralı (King of Pentacles)",
        reason: "Hırslarını, mülkiyetini ve yeteneğini sarsılmaz güvenceler altında idare eden asil Kral; Oğlak burcunun mesleki güvenini ve disiplinle getirdiği zaferini taçlandırır.",
        keywords: ["Girişim", "Otorite", "Garanticilik", "Yüksek Statü"]
      }
    ]
  },
  {
    id: "aquarius",
    name: "Kova",
    symbol: "♒",
    date: "20 Ocak - 18 Şubat",
    element: "Hava",
    rulingPlanet: "Uranüs (ve Satürn)",
    themeColor: "border-indigo-500/30 text-indigo-600 bg-indigo-50/50 hover:bg-indigo-50",
    analysis: "Kova burcu; özgür ruh, geleceğe yönelik dahi vizyonlar, toplulukların haklarını savunma vizyonu, insani dayanışma sevdası ve ezber bozan orjinalliği ile bilinir. Kuralları yıkan ama bilimin adaletine inanan hümanisttir.",
    majorCards: [
      {
        cardId: "the-star",
        cardName: "Yıldız",
        reason: "Yıldız kartı doğrudan Kova burcuna aittir. Testilerinden toprağa ve suya şifa akıtan çıplak kadın, Kova'nın insanlığa umut vaat eden, kolektif bilinci şifalandıran ve geleceğe yönelik ışık tutan evrensel ilham gücünü mükemmel şekilde resmeder."
      },
      {
        cardId: "the-fool",
        cardName: "Mecnun",
        reason: "Kova burcunun modern yöneticisi Uranüs'ün kartıdır. Toplumsal her kuralı hiçe sayan sınırsız özgürlüğü, kalıpların dışındaki delice dehayı ve inanç dolusu yeni adımları simgeleyerek Kova'nın asi yönünü destekler."
      }
    ],
    minorCards: [
      {
        cardName: "Kılıç Kraliçesi (Queen of Swords)",
        reason: "Elinde dik kılıçla oturan, mantığı sarsılmaz, doğru hislerin ve objektif gerçeğin sahibi Kraliçe; Kovaların entelektüel duruşunu, mantıkla idare ettikleri dostluk sınırlarını ve analitik kafalarını gösterir.",
        keywords: ["Objektiflik", "Entelektüel", "Sınırlar", "Dürüstlük"]
      },
      {
        cardName: "Kılıç Altılısı (Six of Swords)",
        reason: "Gündüzden geceye, fırtınalı sulardan sakin kıyılara doğru sandal üzerinde göç eden figür, Kova burcunun zihinsel huzur arayışını, rasyonel fikir göçlerini ve toplumsal yenilik eylemlerini betimler.",
        keywords: ["Fikir Göçü", "Zihinsel Geçiş", "Huzurlu Dönem", "Açılım"]
      }
    ]
  },
  {
    id: "pisces",
    name: "Balık",
    symbol: "♓",
    date: "19 Şubat - 20 Mart",
    element: "Su",
    rulingPlanet: "Neptün (ve Jürpiter)",
    themeColor: "border-pink-500/30 text-pink-600 bg-pink-50/50 hover:bg-pink-50",
    analysis: "Balık burcu; dünyevi sınırların ötesine geçen sınırsız hayal gücü, derya deniz merhamet, evrensel bütünleşme aşkı, sezgi zirvesi ve sanatsal derinliğe sahiptir. Zodyak döngüsünün en son burcu olarak tüm canların acılarını içinde hisseder.",
    majorCards: [
      {
        cardId: "the-moon",
        cardName: "Ay",
        reason: "Kozmik olarak Balık burcunun kartı Ay'dır. Bilinçaltının sınırsız ve bulanık suları, rüyaların gücü, mistik esintiler ve okyanus gibi hisler Balık burcunun rasyonel kalıplara sığmayan, sezgilere teslim olmuş ruh dünyasını yansıtır."
      },
      {
        cardId: "the-hanged-man",
        cardName: "Asılan Adam",
        reason: "Balık'ın modern yöneticisi Neptün gezegeninin kartıdır. Olaylara tamamen farklı perspektiften bakma, dünyevi hırsları askıya alma ve evrensel akışa tam teslimiyetle aydınlanma aşaması Balık'ın fedakar ruhunun en asil simgesidir."
      }
    ],
    minorCards: [
      {
        cardName: "Kupa Sekizlisi (Eight of Cups)",
        reason: "Gecenin karanlığında kupalarını arkada dizili bırakarak dağlara, spritüal arayışa doğru yola çıkan figür; Balıklar'ın maddiyatı kolayca geride bırakıp ruhsal huzurun, mistik sırların peşine düşme eğilimini anlatır.",
        keywords: ["Spritüal İnziva", "Bırakıp Gitmek", "Arayış", "Duygusal Olgunluk"]
      },
      {
        cardName: "Kupa Kralı (King of Cups)",
        reason: "Denizin ortasındaki sarsılmaz tahtında kupa tutarak sevgiyle etrafını gözleyen Kral; Balık burcunun duygusal bilgeliğini, her canlıya açtığı şefkat limanını ve eşsiz sanatçı ruhunu sembolize eder.",
        keywords: ["Geniş Empati", "Sanatçı Ruh", "Duygusal Bilgelik", "Merhamet"]
      }
    ]
  }
];
