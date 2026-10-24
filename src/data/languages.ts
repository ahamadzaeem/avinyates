export interface AppleLanguageItem {
  id: string;
  name: string;
  text: string;
  fontFamily: string;
  letterSpacing?: string;
  fontWeight?: number;
}

export const APPLE_LANGUAGES: AppleLanguageItem[] = [
  {
    id: "en",
    name: "English",
    text: "AVINYATES",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.18em",
    fontWeight: 650,
  },
  {
    id: "ml",
    name: "Malayalam",
    text: "അവിന്യേറ്റ്സ്",
    fontFamily: "'Noto Serif Malayalam', 'Noto Sans Malayalam', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  {
    id: "te",
    name: "Telugu",
    text: "అవిన్యేట్స్",
    fontFamily: "'Noto Serif Telugu', 'Noto Sans Telugu', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  {
    id: "hi",
    name: "Hindi",
    text: "अविन्द्येट्स",
    fontFamily: "'Noto Serif Devanagari', 'Noto Sans Devanagari', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 600,
  },
  {
    id: "ta",
    name: "Tamil",
    text: "அவின்டேட்ஸ்",
    fontFamily: "'Noto Serif Tamil', 'Noto Sans Tamil', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  {
    id: "zh",
    name: "Chinese",
    text: "阿维尼亚茨",
    fontFamily: "'Noto Serif SC', 'Noto Sans SC', sans-serif",
    letterSpacing: "0.08em",
    fontWeight: 500,
  },
  {
    id: "ja",
    name: "Japanese",
    text: "アヴィニエイツ",
    fontFamily: "'Noto Serif JP', 'Noto Sans JP', sans-serif",
    letterSpacing: "0.08em",
    fontWeight: 500,
  },
  {
    id: "ko",
    name: "Korean",
    text: "아비니에이츠",
    fontFamily: "'Noto Serif KR', 'Noto Sans KR', sans-serif",
    letterSpacing: "0.05em",
    fontWeight: 500,
  },
  {
    id: "ar",
    name: "Arabic",
    text: "أفيناتس",
    fontFamily: "'Amiri', 'Noto Sans Arabic', serif",
    letterSpacing: "0.02em",
    fontWeight: 600,
  },
  {
    id: "ru",
    name: "Russian",
    text: "Авиньятес",
    fontFamily: "'Cormorant Garamond', 'Montserrat', serif",
    letterSpacing: "0.06em",
    fontWeight: 500,
  },
  {
    id: "bn",
    name: "Bengali",
    text: "অভিনিয়েটস",
    fontFamily: "'Noto Serif Bengali', 'Noto Sans Bengali', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  {
    id: "kn",
    name: "Kannada",
    text: "ಅವಿನ್ಯೇಟ್ಸ್",
    fontFamily: "'Noto Sans Kannada', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  {
    id: "gu",
    name: "Gujarati",
    text: "અવિન્યેટ્સ",
    fontFamily: "'Noto Sans Gujarati', sans-serif",
    letterSpacing: "0.02em",
    fontWeight: 500,
  },
  {
    id: "el",
    name: "Greek",
    text: "Αβινιατες",
    fontFamily: "'Cormorant Garamond', serif",
    letterSpacing: "0.05em",
    fontWeight: 500,
  },
  {
    id: "hy",
    name: "Armenian",
    text: "Ավինյատես",
    fontFamily: "'Noto Serif Armenian', 'Cormorant Garamond', serif",
    letterSpacing: "0.04em",
    fontWeight: 500,
  },
];
