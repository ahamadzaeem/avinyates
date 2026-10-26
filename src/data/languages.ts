export interface AppleLanguageItem {
  id: string;
  name: string;
  nativeName: string;
  text: string;
  tagline: string;
  fontFamily: string;
  letterSpacing?: string;
  fontWeight?: number;
}

// Order: English, Hindi, Japanese, Korean, Chinese, French, Spanish, Tamil (No Malayalam)
export const APPLE_LANGUAGES: AppleLanguageItem[] = [
  {
    id: "en",
    name: "English",
    nativeName: "English",
    text: "AVINYATES",
    tagline: "Inspiring Innovation",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.18em",
    fontWeight: 650,
  },
  {
    id: "hi",
    name: "Hindi",
    nativeName: "हिन्दी",
    text: "अविन्द्येट्स",
    tagline: "प्रेरणादायी नवाचार",
    fontFamily: "'Noto Serif Devanagari', 'Noto Sans Devanagari', sans-serif",
    letterSpacing: "0.04em",
    fontWeight: 600,
  },
  {
    id: "ja",
    name: "Japanese",
    nativeName: "日本語",
    text: "アヴィニエイツ",
    tagline: "革新への鼓舞",
    fontFamily: "'Noto Serif JP', 'Noto Sans JP', sans-serif",
    letterSpacing: "0.08em",
    fontWeight: 500,
  },
  {
    id: "ko",
    name: "Korean",
    nativeName: "한국어",
    text: "아비니에이츠",
    tagline: "혁신을 향한 영감",
    fontFamily: "'Noto Serif KR', 'Noto Sans KR', sans-serif",
    letterSpacing: "0.06em",
    fontWeight: 500,
  },
  {
    id: "zh",
    name: "Chinese",
    nativeName: "中文",
    text: "阿维尼亚茨",
    tagline: "激发创新灵感",
    fontFamily: "'Noto Serif SC', 'Noto Sans SC', sans-serif",
    letterSpacing: "0.08em",
    fontWeight: 500,
  },
  {
    id: "fr",
    name: "French",
    nativeName: "Français",
    text: "AVINYATES",
    tagline: "Inspirer l'Innovation",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.18em",
    fontWeight: 650,
  },
  {
    id: "es",
    name: "Spanish",
    nativeName: "Español",
    text: "AVINYATES",
    tagline: "Inspirando la Innovación",
    fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif",
    letterSpacing: "0.18em",
    fontWeight: 650,
  },
  {
    id: "ta",
    name: "Tamil",
    nativeName: "தமிழ்",
    text: "அவின்டேட்ஸ்",
    tagline: "புதுமையின் உத்வேகம்",
    fontFamily: "'Noto Serif Tamil', 'Noto Sans Tamil', sans-serif",
    letterSpacing: "0.03em",
    fontWeight: 500,
  },
];
