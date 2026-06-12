import { GoogleGenAI } from "@google/genai";

export type TarotReadingCard = {
  id?: string;
  name: string;
  astrology?: string;
  keywords?: string[];
  isReversed?: boolean;
};

export type TarotReadingInput = {
  question?: string;
  cards: TarotReadingCard[];
  spreadType?: string;
};

const MODEL_NAME = "gemini-3.5-flash";

function resolveApiKey() {
  return (
    process.env.GEMINI_API_KEY ||
    process.env.GOOGLE_API_KEY ||
    process.env.API_KEY ||
    ""
  );
}

function getSpreadTypeLabel(spreadType?: string) {
  if (spreadType === "one") return "Tek Kart (Genel Odak)";
  if (spreadType === "three") return "Üç Kart (Geçmiş, Şimdiki Zaman, Gelecek)";
  if (spreadType === "love") return "Aşk & İlişki Açılımı (Sen, Partnerin, İlişkinin Geleceği)";
  return "Genel Tarot Açılımı";
}

function buildCardDetails(cards: TarotReadingCard[]) {
  return cards
    .map((card) => {
      const direction = card.isReversed ? "Ters" : "Düz";
      return `- ${card.name} (${direction}): Burç/Yönetici Gezegen: ${card.astrology || "N/A"}. Kilit Kelimeler: ${card.keywords?.join(", ") || "N/A"}`;
    })
    .join("\n");
}

export function buildTarotPrompt(input: TarotReadingInput) {
  const question = input.question?.trim() || "Genel hayat rehberliği ve enerjisel yönlendirme.";
  const spreadTypeLabel = getSpreadTypeLabel(input.spreadType);
  const cardDetails = buildCardDetails(input.cards);

  return `Sen mistik, son derece derin, empati gücü yüksek ve öngörülü bir Tarot Master (Tarot Uzmanı) ve Astrologsun.
Kullanıcı sana tarot okuması için bir soru yöneltiyor veya genel bir durum değerlendirmesi talep ediyor. Seçtiği kartlar ve durumları aşağıda verilmiştir. Kartların sembolizmini, astrolojik bağlantılarını (burçlar/gezegenler), düz veya ters gelme yönlerini harmanlayarak mistik, rahatlatıcı, aydınlatıcı ve detaylı bir yorum (Tarot Okuması) yap.

Kullanıcının Sorusu: "${question}"
Tarot Açılım Türü: ${spreadTypeLabel}

Seçilen Kartlar ve Detayları:
${cardDetails}

Lütfen yorumunu şu bölümler halinde yapılandır (Markdown formatında):
1. **Mistik Giriş ve Genel Enerji**: Sorulan soruya ve seçilen kartların oluşturduğu genel kozmik havaya bakış.
2. **Tarot Kartlarının Ayrıntılı Analizi**: Her bir kartın düz veya ters durumunu, astrolojik anlamlarını ve bu soruya özel sunduğu mesajı şiirsel ve mistik bir dille açıkla.
3. **İlişki ve Kozmik Bağlar**: Kartların bir araya gelmesiyle ortaya çıkan gizli mesajlar, birbirlerini nasıl besledikleri veya uyardıkları.
4. **Kozmik Tavsiye ve Olumlama**: Kullanıcıya yol gösterecek mistik bir tavsiye ve durumla uyumlu, zihni sakinleştirebilecek, güne özel bir Tarot Mantrası (Olumlama).

Yazım tarzının akıcı, derin, gizemli ama bir o kadar da yol gösterici, umut verici, dürüst ve tamamen Türkçe olmasına özen göster.`;
}

export async function generateTarotReading(input: TarotReadingInput) {
  const apiKey = resolveApiKey();

  if (!apiKey) {
    throw new Error(
      "GEMINI_API_KEY tanımlı değil. Vercel proje ayarlarında veya yerel .env dosyasında bu değişkeni ekleyin."
    );
  }

  const ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });

  const response = await ai.models.generateContent({
    model: MODEL_NAME,
    contents: buildTarotPrompt(input),
  });

  return response.text || "";
}
