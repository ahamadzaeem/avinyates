export interface AppleLanguageItem {
  id: string;
  name: string;
  text: string;
  fontFamily: string;
  letterSpacing?: string;
  fontWeight?: number;
}

// Order: English, Hindi, Japanese, Korean, Chinese, French, Spanish, Tamil (No Malayalam)
export const APPLE_LANGUAGES: AppleLanguageItem[] = [
  {
    id: "en",
    name: "English",
    text: "AVINYATES",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.16em",
    fontWeight: 600,
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
    id: "zh",
    name: "Chinese",
    text: "阿维尼亚茨",
    fontFamily: "'Noto Serif SC', 'Noto Sans SC', sans-serif",
    letterSpacing: "0.08em",
    fontWeight: 500,
  },
  {
    id: "fr",
    name: "French",
    text: "AVINYATES",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.16em",
    fontWeight: 600,
  },
  {
    id: "es",
    name: "Spanish",
    text: "AVINYATES",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.16em",
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
];
