import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenAI } from "@google/genai";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers (optional, but good for Vercel functions if accessed directly, though usually proxy works)
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Yalnızca POST istekleri kabul edilir." });
  }

  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });

    const { question, cards, spreadType } = req.body;
    
    if (!cards || !Array.isArray(cards) || cards.length === 0) {
      return res.status(400).json({ error: "En az bir kart seçilmelidir." });
    }

    const cardDetails = cards.map((c: any) => {
      const dirStr = c.isReversed ? "Ters" : "Düz";
      return `- ${c.name} (${dirStr}): Burç/Yönetici Gezegen: ${c.astrology || 'N/A'}. Kilit Kelimeler: ${c.keywords?.join(', ') || ''}`;
    }).join("\n");

    const spreadTypeTurkish = spreadType === 'one' ? 'Tek Kart (Genel Odak)' : 
                              spreadType === 'three' ? 'Üç Kart (Geçmiş, Şimdiki Zaman, Gelecek)' : 
                              'Aşk & İlişki Açılımı (Sen, Partnerin, İlişkinin Geleceği)';

    const prompt = `Sen mistik, son derece derin, empati gücü yüksek ve öngörülü bir Tarot Master (Tarot Uzmanı) ve Astrologsun.
Kullanıcı sana tarot okuması için bir soru yöneltiyor veya genel bir durum değerlendirmesi talep ediyor. Seçtiği kartlar ve durumları aşağıda verilmiştir. Kartların sembolizmini, astrolojik bağlantılarını (burçlar/gezegenler), düz veya ters gelme yönlerini harmanlayarak mistik, rahatlatıcı, aydınlatıcı ve detaylı bir yorum (Tarot Okuması) yap.

Kullanıcının Sorusu: "${question || 'Genel hayat rehberliği ve enerjisel yönlendirme.'}"
Tarot Açılım Türü: ${spreadTypeTurkish}

Seçilen Kartlar ve Detayları:
${cardDetails}

Lütfen yorumunu şu bölümler halinde yapılandır (Markdown formatında):
1. **🔮 Mistik Giriş ve Genel Enerji**: Sorulan soruya ve seçilen kartların oluşturduğu genel kozmik havaya bakış.
2. **Tarot Kartlarının Ayrıntılı Analizi**: Her bir kartın düz veya ters durumunu, astrolojik anlamlarını ve bu soruya özel sunduğu mesajı şiirsel ve mistik bir dille açıkla.
3. **✨ İlişki ve Kozmik Bağlar**: Kartların bir araya gelmesiyle ortaya çıkan gizli mesajlar, birbirlerini nasıl besledikleri veya uyardıkları.
4. **🧘‍♂️ Kozmik Tavsiye ve Olumlama**: Kullanıcıya yol gösterecek mistik bir tavsiye ve durumla uyumlu, zihni sakinleştirebilecek, güne özel bir Tarot Mantrası (Olumlama).

Yazım tarzının akıcı, derin, gizemli ama bir o kadar da yol gösterici, umut verici, dürüst ve tamamen Türkçe olmasına özen göster.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: prompt,
    });

    return res.status(200).json({ reading: response.text });
  } catch (error: any) {
    console.error("Tarot reading error:", error);
    return res.status(500).json({ error: "Tarot okuması yapılırken mistik enerjilerde geçici bir kesinti oluştu. Lütfen tekrar deneyin." });
  }
}
