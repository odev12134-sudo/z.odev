import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

dotenv.config();

const app = express();
app.use(express.json());

const PORT = 3000;

const apiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY || process.env.API_KEY;

if (!apiKey) {
  console.warn("UYARI: API Anahtarı bulunamadı (.env dosyasını kontrol edin).");
}

// Initialize Gemini SDK with telemetry header
const ai = new GoogleGenAI({
  apiKey: apiKey || "dummy-key-to-prevent-crash",
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

// AI reading endpoint
app.post("/api/tarot/read", async (req, res) => {
  try {
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

    res.json({ reading: response.text });
  } catch (error: any) {
    console.error("Tarot reading error:", error);
    res.status(500).json({ error: "Tarot okuması yapılırken mistik enerjilerde geçici bir kesinti oluştu. Lütfen tekrar deneyin." });
  }
});

// Setup Vite Dev server / Production Static Assets
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Tarot Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
