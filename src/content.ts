import type { T } from "./config";

export const langs: { id: "en" | "kn" | "hi"; short: string; label: string }[] = [
  { id: "en", short: "EN", label: "English" },
  { id: "kn", short: "ಕ", label: "ಕನ್ನಡ" },
  { id: "hi", short: "हि", label: "हिन्दी" },
];

export const ui = {
  skip: {
    en: "Skip to content",
    kn: "ಬರಹಕ್ಕೆ ಹೋಗಿ",
    hi: "सीधे विषय पर जाएँ",
  },
  setup: {
    en: "Starter website for a family-run autism school in Bengaluru. Add the real school name, phone, and address in src/config.ts before sharing this link. The photographs are illustrative. They are not pictures of enrolled children.",
    kn: "ಇದು ಬೆಂಗಳೂರಿನ ಕುಟುಂಬ ನಡೆಸುವ ಸ್ವಲೀನತಾ ಶಾಲೆಗೆ ಮಾದರಿ ಜಾಲತಾಣ. ಹಂಚುವ ಮೊದಲು src/config.ts ನಲ್ಲಿ ನಿಜವಾದ ಹೆಸರು, ದೂರವಾಣಿ ಮತ್ತು ವಿಳಾಸ ಬರೆಯಿರಿ. ಛಾಯಾಚಿತ್ರಗಳು ವಿವರಣೆಗೆ. ದಾಖಲಾದ ಮಕ್ಕಳವಲ್ಲ.",
    hi: "यह बेंगलुरु के परिवार द्वारा चलाए गए ऑटिज़्म स्कूल की शुरुआती वेबसाइट है। लिंक बाँटने से पहले src/config.ts में असली नाम, फ़ोन और पता लिखें। तस्वीरें उदाहरण हैं। ये दाखिल बच्चों की नहीं हैं।",
  },
  menu: { en: "Menu", kn: "ಪಟ್ಟಿ", hi: "मेनू" },
  navLabel: { en: "Primary", kn: "ಮುಖ್ಯ", hi: "मुख्य" },
  language: { en: "Language", kn: "ಭಾಷೆ", hi: "भाषा" },
  close: { en: "Close", kn: "ಮುಚ್ಚಿ", hi: "बंद करें" },
  calm: { en: "Calm view", kn: "ಶಾಂತ ನೋಟ", hi: "शांत दृश्य" },
  calmOn: {
    en: "Calm view is on. Motion is still, and colours are softer.",
    kn: "ಶಾಂತ ನೋಟ ಚಾಲನೆಯಲ್ಲಿದೆ. ಅಲುಗಾಟ ನಿಂತಿದೆ, ಬಣ್ಣಗಳು ಮೃದು.",
    hi: "शांत दृश्य चालू है। हलचल रुकी है, रंग नरम हैं।",
  },
} satisfies Record<string, T>;

export const nav = {
  home: { en: "Home", kn: "ಮುಖಪುಟ", hi: "होम" },
  programmes: { en: "Programmes", kn: "ಕಾರ್ಯಕ್ರಮ", hi: "कार्यक्रम" },
  day: { en: "A day here", kn: "ದಿನಚರಿ", hi: "दिनचर्या" },
  admissions: { en: "Admissions", kn: "ಪ್ರವೇಶ", hi: "प्रवेश" },
  families: { en: "Families", kn: "ಕುಟುಂಬ", hi: "परिवार" },
  campus: { en: "Campus", kn: "ಆವರಣ", hi: "परिसर" },
  visit: { en: "Book a visit", kn: "ಭೇಟಿ", hi: "मुलाकात" },
} satisfies Record<string, T>;

export const titles = {
  home: { en: "Home", kn: "ಮುಖಪುಟ", hi: "होम" },
  programmes: { en: "Programmes", kn: "ಕಾರ್ಯಕ್ರಮಗಳು", hi: "कार्यक्रम" },
  day: { en: "A day here", kn: "ಇಲ್ಲಿನ ಒಂದು ದಿನ", hi: "यहाँ का एक दिन" },
  admissions: { en: "Admissions", kn: "ಪ್ರವೇಶ", hi: "प्रवेश" },
  families: { en: "For families", kn: "ಕುಟುಂಬಗಳಿಗೆ", hi: "परिवारों के लिए" },
  campus: { en: "Campus", kn: "ಆವರಣ", hi: "परिसर" },
  visit: { en: "Book a visit", kn: "ಭೇಟಿ ಕಾಯ್ದಿರಿಸಿ", hi: "मुलाकात बुक करें" },
  missing: { en: "Page not found", kn: "ಪುಟ ಸಿಗಲಿಲ್ಲ", hi: "पृष्ठ नहीं मिला" },
} satisfies Record<string, T>;

export const home = {
  eyebrow: {
    en: "Bengaluru · Day school",
    kn: "ಬೆಂಗಳೂರು · ದಿನದ ಶಾಲೆ",
    hi: "बेंगलुरु · डे स्कूल",
  },
  title: {
    en: "First we learn the child. Then we teach.",
    kn: "ಮೊದಲು ಮಗುವನ್ನು ಕಲಿಯುತ್ತೇವೆ. ಆಮೇಲೆ ಪಾಠ ಹೇಳುತ್ತೇವೆ.",
    hi: "पहले हम बच्चे को समझते हैं। फिर पढ़ाते हैं।",
  },
  lede: {
    en: "Sampige is a day school for autistic children, and for children who need more support with communication, sensory comfort, or learning. Groups stay small. Pictures show what happens next. Therapy sits inside the school day. Parents are partners, not visitors.",
    kn: "ಸಂಪಿಗೆ ಸ್ವಲೀನತೆ (ಆಟಿಸಂ) ಇರುವ ಮಕ್ಕಳ ದಿನದ ಶಾಲೆ. ಮಾತು, ಇಂದ್ರಿಯ ಸೌಕರ್ಯ ಅಥವಾ ಕಲಿಕೆಯಲ್ಲಿ ಹೆಚ್ಚಿನ ಆಸರೆ ಬೇಕಾದ ಮಕ್ಕಳಿಗೂ ಇದು. ಗುಂಪುಗಳು ಚಿಕ್ಕದು. ಮುಂದೆ ಏನು ಎಂದು ಚಿತ್ರಗಳು ತೋರಿಸುತ್ತವೆ. ಚಿಕಿತ್ಸೆ ಶಾಲಾ ದಿನದ ಒಳಗೆ. ಪಾಲಕರು ಅತಿಥಿಗಳಲ್ಲ — ಸಹಭಾಗಿಗಳು.",
    hi: "संपिगे ऑटिज़्म वाले बच्चों का डे स्कूल है। जिन बच्चों को बोलने, इंद्रियों के आराम या पढ़ाई में ज़्यादा सहारा चाहिए, उनके लिए भी। समूह छोटे रहते हैं। तस्वीरें बताती हैं कि आगे क्या होगा। थेरेपी स्कूल के दिन के अंदर होती है। माता-पिता मेहमान नहीं — साझेदार हैं।",
  },
  book: { en: "Book a visit", kn: "ಭೇಟಿ ಕಾಯ್ದಿರಿಸಿ", hi: "मुलाकात बुक करें" },
  find: { en: "Find a starting point", kn: "ಎಲ್ಲಿಂದ ಆರಂಭ?", hi: "शुरुआत कहाँ से?" },
  heroAlt: {
    en: "An Indian teacher in a rust cotton saree guides children through picture cards at a wooden table in a sunlit Bengaluru classroom.",
    kn: "ಬಿಸಿಲಿನ ತರಗತಿಯಲ್ಲಿ ಉಪಾಧ್ಯಾಯಿನಿ ಮಕ್ಕಳೊಂದಿಗೆ ಚಿತ್ರ ಚೀಟಿಗಳನ್ನು ನೋಡುತ್ತಿದ್ದಾಳೆ.",
    hi: "धूप भरी कक्षा में शिक्षिका बच्चों के साथ चित्र कार्ड देख रही हैं।",
  },
  heroCaption: {
    en: "Picture cards first. Words can follow at their own pace.",
    kn: "ಮೊದಲು ಚಿತ್ರ ಚೀಟಿಗಳು. ಮಾತು ತನ್ನ ವೇಗದಲ್ಲಿ ಬರಲಿ.",
    hi: "पहले चित्र कार्ड। शब्द अपनी गति से आएँ।",
  },
  facts: [
    { en: "Monday to Friday, on campus", kn: "ಸೋಮವಾರದಿಂದ ಶುಕ್ರವಾರ, ಆವರಣದಲ್ಲಿ", hi: "सोमवार से शुक्रवार, परिसर में" },
    { en: "About ages 2 to 21", kn: "ಸುಮಾರು 2 ರಿಂದ 21 ವರ್ಷ", hi: "लगभग 2 से 21 साल" },
    { en: "English, Kannada, and Hindi", kn: "ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ ಮತ್ತು ಹಿಂದಿ", hi: "अंग्रेज़ी, कन्नड़ और हिन्दी" },
    { en: "Therapy inside the school day", kn: "ಚಿಕಿತ್ಸೆ ಶಾಲಾ ದಿನದ ಒಳಗೆ", hi: "थेरेपी स्कूल के दिन के अंदर" },
  ] satisfies T[],
  plainLabel: { en: "In short", kn: "ಸಂಕ್ಷಿಪ್ತವಾಗಿ", hi: "संक्षेप में" },
  plain: {
    en: "Small classes. A picture of what happens next. Therapy during school. A teacher who talks to you.",
    kn: "ಚಿಕ್ಕ ತರಗತಿಗಳು. ಮುಂದೆ ಏನು ಎಂಬ ಚಿತ್ರ. ಶಾಲೆಯಲ್ಲಿ ಚಿಕಿತ್ಸೆ. ನಿಮ್ಮೊಂದಿಗೆ ಮಾತನಾಡುವ ಉಪಾಧ್ಯಾಯರು.",
    hi: "छोटी कक्षाएँ। आगे क्या होगा, उसकी तस्वीर। स्कूल में थेरेपी। एक शिक्षक जो आपसे बात करता है।",
  },
  programmesTitle: {
    en: "Five doors. One child should not have to walk through all of them at once.",
    kn: "ಐದು ಬಾಗಿಲುಗಳು. ಒಂದೇ ಸಮಯಕ್ಕೆ ಎಲ್ಲವನ್ನೂ ತೆರೆಯಬೇಕಿಲ್ಲ.",
    hi: "पाँच दरवाज़े। एक बच्चे को एक साथ सबमें से नहीं गुज़रना।",
  },
  programmesLede: {
    en: "Tell us your child’s age and what feels hardest this season. We will name one room to start in, not a catalogue.",
    kn: "ಮಗುವಿನ ವಯಸ್ಸು ಮತ್ತು ಈಗ ಕಷ್ಟವಾಗುವುದನ್ನು ಹೇಳಿ. ಪಟ್ಟಿ ಅಲ್ಲ — ಆರಂಭದ ಒಂದು ಕೋಣೆಯನ್ನು ಹೇಳುತ್ತೇವೆ.",
    hi: "बच्चे की उम्र और इस मौसम की सबसे कठिन बात बताइए। हम सूची नहीं — शुरू की एक जगह बताएँगे।",
  },
  seeProgrammes: { en: "See the programmes", kn: "ಕಾರ್ಯಕ್ರಮ ನೋಡಿ", hi: "कार्यक्रम देखें" },
  seeTitle: {
    en: "Three things you can see on a visit",
    kn: "ಭೇಟಿಯಲ್ಲಿ ಕಾಣುವ ಮೂರು ವಿಷಯಗಳು",
    hi: "मुलाकात में दिखने वाली तीन बातें",
  },
  see: [
    {
      title: { en: "A picture of the day", kn: "ದಿನದ ಚಿತ್ರ", hi: "दिन की तस्वीर" },
      body: {
        en: "Every room shows what happens now and what happens next. Children are not expected to guess the plan.",
        kn: "ಪ್ರತಿ ಕೋಣೆಯೂ ಈಗ ಏನು, ಮುಂದೆ ಏನು ಎಂದು ತೋರಿಸುತ್ತದೆ. ಯೋಜನೆಯನ್ನು ಊಹಿಸಲು ಮಗುವನ್ನು ಬಿಡುವುದಿಲ್ಲ.",
        hi: "हर कमरा बताता है कि अभी क्या है और आगे क्या। बच्चे से योजना का अनुमान नहीं लगवाया जाता।",
      },
    },
    {
      title: { en: "A chosen quiet corner", kn: "ಆಯ್ದ ನೆಮ್ಮದಿ ಮೂಲೆ", hi: "चुना हुआ शांत कोना" },
      body: {
        en: "A rest place a child can ask for. It is not a room where a child is sent as punishment.",
        kn: "ಮಗು ಕೇಳಬಹುದಾದ ವಿಶ್ರಾಂತಿ ಸ್ಥಳ. ಶಿಕ್ಷೆಗೆ ಕಳುಹಿಸುವ ಕೋಣೆಯಲ್ಲ.",
        hi: "एक आराम की जगह जिसकी माँग बच्चा कर सके। यह सज़ा का कमरा नहीं।",
      },
    },
    {
      title: { en: "Lunch as part of learning", kn: "ಕಲಿಕೆಯ ಭಾಗವಾಗಿ ಊಟ", hi: "सीखने का हिस्सा, भोजन" },
      body: {
        en: "Seating, texture, and pace are planned. Tell us what your child eats at home, including idli, rice, or a food that must not change.",
        kn: "ಕುಳಿತುಕೊಳ್ಳುವುದು, ಆಹಾರದ ವಿನ್ಯಾಸ ಮತ್ತು ವೇಗ ಯೋಜಿತ. ಮನೆಯಲ್ಲಿ ಏನು ತಿನ್ನುತ್ತಾರೆ ಹೇಳಿ — ಇಡ್ಲಿ, ಅನ್ನ, ಅಥವಾ ಬದಲಾಯಿಸಬಾರದ ಆಹಾರ.",
        hi: "बैठना, खाने की बनावट और गति योजना में हैं। बताइए घर पर क्या खाते हैं — इडली, चावल, या जो भोजन बदलना नहीं चाहिए।",
      },
    },
  ],
  seeAlt: {
    en: "Two Indian children and a teacher water tulsi and marigold in terracotta pots in a school garden.",
    kn: "ಶಾಲಾ ತೋಟದಲ್ಲಿ ಮಕ್ಕಳು ಮತ್ತು ಉಪಾಧ್ಯಾಯರು ಗಿಡಗಳಿಗೆ ನೀರು ಹಾಕುತ್ತಿದ್ದಾರೆ.",
    hi: "स्कूल के बगीचे में बच्चे और शिक्षिका पौधों को पानी दे रहे हैं।",
  },
  willNotTitle: {
    en: "What we will not say",
    kn: "ನಾವು ಹೇಳದಿರುವುದು",
    hi: "जो हम नहीं कहेंगे",
  },
  willNot: [
    {
      title: { en: "We will not promise a cure", kn: "ಗುಣಪಡಿಸುವ ಭರವಸೆ ಇಲ್ಲ", hi: "हम इलाज का वादा नहीं करेंगे" },
      body: {
        en: "Autism is not an illness we claim to remove. We teach communication, daily living, learning, and belonging. Early support changes the day. It does not erase a child.",
        kn: "ಸ್ವಲೀನತೆಯನ್ನು ತೆಗೆದುಹಾಕುವ ರೋಗವೆಂದು ಹೇಳುವುದಿಲ್ಲ. ಮಾತು, ದೈನಂದಿನ ಬದುಕು, ಕಲಿಕೆ ಮತ್ತು ಸೇರಿಕೊಳ್ಳುವುದನ್ನು ಕಲಿಸುತ್ತೇವೆ. ಬೇಗನೆಯ ಆಸರೆ ದಿನವನ್ನು ಬದಲಾಯಿಸುತ್ತದೆ. ಮಗುವನ್ನಲ್ಲ.",
        hi: "हम ऑटिज़्म को मिटाने वाली बीमारी नहीं कहते। हम संवाद, रोज़मर्रा की ज़िंदगी, पढ़ाई और अपनापा सिखाते हैं। जल्दी सहारा दिन बदलता है। बच्चे को नहीं मिटाता।",
      },
    },
    {
      title: {
        en: "We will not publish your child",
        kn: "ನಿಮ್ಮ ಮಗುವನ್ನು ಪ್ರಕಟಿಸುವುದಿಲ್ಲ",
        hi: "हम आपके बच्चे को प्रकाशित नहीं करेंगे",
      },
      body: {
        en: "The public website does not use student faces. Photos of your child stay in a private family note, the way careful schools in the US share albums only with parents.",
        kn: "ಸಾರ್ವಜನಿಕ ಜಾಲತಾಣದಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳ ಮುಖವಿಲ್ಲ. ಮಗುವಿನ ಚಿತ್ರಗಳು ಖಾಸಗಿ ಕುಟುಂಬ ಟಿಪ್ಪಣಿಯಲ್ಲಿರುತ್ತವೆ.",
        hi: "सार्वजनिक वेबसाइट पर विद्यार्थियों के चेहरे नहीं। आपके बच्चे की तस्वीरें निजी पारिवारिक नोट में रहती हैं।",
      },
    },
    {
      title: {
        en: "We will not leave you waiting without a date",
        kn: "ದಿನಾಂಕವಿಲ್ಲದೆ ಕಾಯಿಸುವುದಿಲ್ಲ",
        hi: "बिना तारीख के इंतज़ार नहीं करवाएँगे",
      },
      body: {
        en: "If we can meet, you get a time. If the group is full, or we are not the right school, we say that plainly and help you think about the next call.",
        kn: "ಭೇಟಿ ಸಾಧ್ಯವಾದರೆ ಸಮಯ ಸಿಗುತ್ತದೆ. ಗುಂಪು ತುಂಬಿದರೆ ಅಥವಾ ಈ ಶಾಲೆ ಸರಿಯಲ್ಲದಿದ್ದರೆ ಸ್ಪಷ್ಟವಾಗಿ ಹೇಳುತ್ತೇವೆ.",
        hi: "मिलना संभव हो तो समय मिलेगा। समूह भरा हो, या यह स्कूल सही न हो, तो साफ़ कहेंगे और अगली बात सोचने में मदद करेंगे।",
      },
    },
  ],
  ctaTitle: {
    en: "Bring one question. We will bring tea.",
    kn: "ಒಂದು ಪ್ರಶ್ನೆ ತನ್ನಿ. ನಾವು ಚಹಾ ಇಡುತ್ತೇವೆ.",
    hi: "एक सवाल लाइए। चाय हमारी तरफ़ से।",
  },
  ctaBody: {
    en: "The first visit is a conversation with you and a short, gentle time with your child. No one has to perform.",
    kn: "ಮೊದಲ ಭೇಟಿ ನಿಮ್ಮೊಂದಿಗೆ ಮಾತು, ಮಗುವಿನೊಂದಿಗೆ ಸ್ವಲ್ಪ ಮೃದು ಸಮಯ. ಯಾರೂ ಪ್ರದರ್ಶನ ನೀಡಬೇಕಿಲ್ಲ.",
    hi: "पहली मुलाकात आपसे बातचीत है, और बच्चे के साथ थोड़ा नरम समय। किसी को प्रदर्शन नहीं करना।",
  },
  parentAlt: {
    en: "Indian parents sit with a counsellor over tea and a notebook in a school meeting room.",
    kn: "ಶಾಲೆಯ ಕೋಣೆಯಲ್ಲಿ ಪಾಲಕರು ಸಲಹೆಗಾರರೊಂದಿಗೆ ಚಹಾ ಬಳಿ ಕುಳಿತಿದ್ದಾರೆ.",
    hi: "स्कूल की बैठक में माता-पिता सलाहकार के साथ चाय पर बैठे हैं।",
  },
};

export type Program = {
  id: string;
  image: string;
  alt: T;
  ages: T;
  title: T;
  summary: T;
  points: T[];
};

export const programs: Program[] = [
  {
    id: "sparks",
    image: "/images/sensory-play.jpg",
    alt: {
      en: "An Indian therapist and a young child explore rice and smooth stones in a wooden tray.",
      kn: "ಚಿಕಿತ್ಸಕರು ಮತ್ತು ಮಗು ಅಕ್ಕಿ ಮತ್ತು ನುಣುಪು ಕಲ್ಲುಗಳನ್ನು ಮುಟ್ಟುತ್ತಿದ್ದಾರೆ.",
      hi: "थेरेपिस्ट और छोटा बच्चा चावल और चिकने पत्थर छू रहे हैं।",
    },
    ages: { en: "About 2 to 6 years", kn: "ಸುಮಾರು 2 ರಿಂದ 6 ವರ್ಷ", hi: "लगभग 2 से 6 साल" },
    title: { en: "Early Sparks", kn: "ಮುಂಚಿನ ಮಿಂಚು", hi: "शुरुआती चमक" },
    summary: {
      en: "Play with a purpose, for children who are just arriving at a diagnosis or who find a big classroom too loud. A parent stays for part of the session.",
      kn: "ಉದ್ದೇಶವುಳ್ಳ ಆಟ. ರೋಗನಿರ್ಣಯ ಈಗಷ್ಟೇ ಬಂದ ಮಕ್ಕಳಿಗೆ, ಅಥವಾ ದೊಡ್ಡ ತರಗತಿ ಜೋರಾಗಿರುವ ಮಕ್ಕಳಿಗೆ. ಅಧಿವೇಶನದ ಒಂದು ಭಾಗ ಪಾಲಕರು ಇರುತ್ತಾರೆ.",
      hi: "मकसद वाली खेल। जिनका निदान अभी-अभी हुआ हो, या जिन्हें बड़ी कक्षा शोर लगे। सत्र के कुछ हिस्से में माता-पिता साथ रहते हैं।",
    },
    points: [
      {
        en: "First words, pictures, or gestures — whatever voice is ready",
        kn: "ಮೊದಲ ಮಾತು, ಚಿತ್ರ ಅಥವಾ ಸನ್ನೆ — ಯಾವ ಧ್ವನಿ ಸಿದ್ಧವೋ ಅದು",
        hi: "पहले शब्द, चित्र या इशारे — जो आवाज़ तैयार हो",
      },
      {
        en: "Play on the floor, not a worksheet on day one",
        kn: "ಮೊದಲ ದಿನದಿಂದ ಕಾಗದದ ಕೆಲಸವಲ್ಲ — ನೆಲದ ಮೇಲೆ ಆಟ",
        hi: "पहले दिन वर्कशीट नहीं — फ़र्श पर खेल",
      },
      {
        en: "A short home idea you can actually try that evening",
        kn: "ಆ ಸಂಜೆ ಮನೆಯಲ್ಲಿ ಮಾಡಬಹುದಾದ ಚಿಕ್ಕ ಯೋಚನೆ",
        hi: "उसी शाम घर पर आज़मा सकने वाला छोटा विचार",
      },
    ],
  },
  {
    id: "studio",
    image: "/images/hero-classroom.jpg",
    alt: {
      en: "Children and a teacher work with picture cards around a wooden classroom table.",
      kn: "ತರಗತಿಯ ಮೇಜಿನ ಸುತ್ತ ಮಕ್ಕಳು ಮತ್ತು ಉಪಾಧ್ಯಾಯರು ಚಿತ್ರ ಚೀಟಿಗಳೊಂದಿಗೆ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದಾರೆ.",
      hi: "कक्षा की मेज़ पर बच्चे और शिक्षिका चित्र कार्ड के साथ काम कर रहे हैं।",
    },
    ages: { en: "About 6 to 14 years", kn: "ಸುಮಾರು 6 ರಿಂದ 14 ವರ್ಷ", hi: "लगभग 6 से 14 साल" },
    title: { en: "Learning Studio", kn: "ಕಲಿಕಾ ಸ್ಟುಡಿಯೋ", hi: "लर्निंग स्टूडियो" },
    summary: {
      en: "Reading, number, and topic work in small groups, with a one-to-one block in the day. Where a board exam is the right door later, we talk about NIOS early — not as a surprise in Class 10.",
      kn: "ಓದು, ಸಂಖ್ಯೆ ಮತ್ತು ಪಾಠ ಚಿಕ್ಕ ಗುಂಪಿನಲ್ಲಿ, ದಿನದಲ್ಲಿ ಒಬ್ಬರಿಗೊಬ್ಬರ ಸಮಯ. ಮಂಡಳಿ ಪರೀಕ್ಷೆ ಸರಿಯಾದ ಬಾಗಿಲಾದರೆ NIOS ಬಗ್ಗೆ ಬೇಗನೆ ಮಾತನಾಡುತ್ತೇವೆ — ಹತ್ತನೇ ತರಗತಿಯಲ್ಲಿ ಆಶ್ಚರ್ಯವಾಗಿ ಅಲ್ಲ.",
      hi: "पढ़ना, संख्या और विषय छोटे समूह में, दिन में एक-एक का समय। अगर बोर्ड परीक्षा सही दरवाज़ा हो, तो NIOS की बात जल्दी — दसवीं में अचानक नहीं।",
    },
    points: [
      {
        en: "A learning plan written in words a parent can use at home",
        kn: "ಮನೆಯಲ್ಲಿ ಬಳಸಬಹುದಾದ ಭಾಷೆಯಲ್ಲಿ ಕಲಿಕಾ ಯೋಜನೆ",
        hi: "सीखने की योजना उन शब्दों में जो माता-पिता घर पर इस्तेमाल कर सकें",
      },
      {
        en: "Work space, break space, and sensory space kept distinct",
        kn: "ಕೆಲಸ, ವಿರಾಮ ಮತ್ತು ಇಂದ್ರಿಯ ಸ್ಥಳಗಳು ಬೇರೆಬೇರೆ",
        hi: "काम, विश्राम और इंद्रिय की जगहें अलग-अलग",
      },
      {
        en: "Art, movement, and garden counted as learning, not as a reward for surviving lessons",
        kn: "ಕಲೆ, ಚಲನೆ ಮತ್ತು ತೋಟ ಕಲಿಕೆ — ಪಾಠ ಉಳಿದ ಬಹುಮಾನವಲ್ಲ",
        hi: "कला, हरकत और बगीचा भी सीखना है — पाठ झेलने का इनाम नहीं",
      },
    ],
  },
  {
    id: "therapy",
    image: "/images/communication.jpg",
    alt: {
      en: "An Indian speech therapist and a child share a picture board showing idli, a bus, water, and clothes.",
      kn: "ಮಾತಿನ ಚಿಕಿತ್ಸಕರು ಮತ್ತು ಮಗು ಇಡ್ಲಿ, ಬಸ್ಸು, ನೀರು ತೋರಿಸುವ ಚಿತ್ರ ಫಲಕ ನೋಡುತ್ತಿದ್ದಾರೆ.",
      hi: "स्पीच थेरेपिस्ट और बच्चा इडली, बस, पानी दिखाता चित्र बोर्ड देख रहे हैं।",
    },
    ages: { en: "Across the school day", kn: "ಶಾಲಾ ದಿನದಾದ್ಯಂತ", hi: "पूरे स्कूल दिन में" },
    title: { en: "Therapy studio", kn: "ಚಿಕಿತ್ಸಾ ಸ್ಟುಡಿಯೋ", hi: "थेरेपी स्टूडियो" },
    summary: {
      en: "Speech and language, occupational therapy, and sensory support happen here, then walk back into the classroom. A skill that only exists in a clinic room will not survive the lunch line.",
      kn: "ಮಾತು ಮತ್ತು ಭಾಷೆ, ಔದ್ಯೋಗಿಕ ಚಿಕಿತ್ಸೆ ಮತ್ತು ಇಂದ್ರಿಯ ಆಸರೆ ಇಲ್ಲಿ, ಆಮೇಲೆ ತರಗತಿಗೆ ಹಿಂತಿರುಗುತ್ತವೆ. ಕೇವಲ ಚಿಕಿತ್ಸಾ ಕೋಣೆಯಲ್ಲಿ ಇರುವ ಕೌಶಲ ಊಟದ ಸಾಲಿನಲ್ಲಿ ಉಳಿಯುವುದಿಲ್ಲ.",
      hi: "भाषा, ऑक्यूपेशनल थेरेपी और इंद्रिय सहारा यहाँ होते हैं, फिर कक्षा में लौटते हैं। जो कौशल केवल क्लिनिक में हो, वह खाने की लाइन में नहीं टिकता।",
    },
    points: [
      {
        en: "Pictures, gestures, speech, and devices — more than one way to be understood",
        kn: "ಚಿತ್ರ, ಸನ್ನೆ, ಮಾತು ಮತ್ತು ಸಾಧನ — ಅರ್ಥವಾಗಲು ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ದಾರಿ",
        hi: "चित्र, इशारे, बोल और उपकरण — समझे जाने के एक से ज़्यादा रास्ते",
      },
      {
        en: "Sensory comfort planned with the teacher, not bolted on after a meltdown",
        kn: "ಇಂದ್ರಿಯ ಸೌಕರ್ಯವನ್ನು ಉಪಾಧ್ಯಾಯರೊಂದಿಗೆ ಮುಂಚಿತವಾಗಿ ಯೋಜಿಸುವುದು",
        hi: "इंद्रिय आराम शिक्षक के साथ पहले से योजना — संकट के बाद नहीं",
      },
      {
        en: "We look for the need under a behaviour. We do not run punishment rooms.",
        kn: "ನಡವಳಿಕೆಯ ಕೆಳಗಿನ ಅಗತ್ಯವನ್ನು ನೋಡುತ್ತೇವೆ. ಶಿಕ್ಷೆಯ ಕೋಣೆಗಳಿಲ್ಲ.",
        hi: "व्यवहार के नीचे ज़रूरत देखते हैं। सज़ा के कमरे नहीं चलाते।",
      },
    ],
  },
  {
    id: "pathways",
    image: "/images/vocational-kitchen.jpg",
    alt: {
      en: "Two Indian young adults shape millet snacks with an instructor in a school kitchen.",
      kn: "ಶಾಲಾ ಅಡುಗೆಮನೆಯಲ್ಲಿ ಯುವಕರು ತರಬೇತುದಾರರೊಂದಿಗೆ ತಿಂಡಿ ಮಾಡುತ್ತಿದ್ದಾರೆ.",
      hi: "स्कूल की रसोई में दो युवा प्रशिक्षक के साथ नाश्ता बना रहे हैं।",
    },
    ages: { en: "About 14 to 21 years", kn: "ಸುಮಾರು 14 ರಿಂದ 21 ವರ್ಷ", hi: "लगभग 14 से 21 साल" },
    title: { en: "Youth pathways", kn: "ಯುವ ಹಾದಿಗಳು", hi: "युवा रास्ते" },
    summary: {
      en: "Daily living, a kitchen studio, the garden, and neighbourhood trials when a young person is ready. Adult life is taught on purpose, not left to the year after school ends.",
      kn: "ದೈನಂದಿನ ಬದುಕು, ಅಡುಗೆಮನೆ, ತೋಟ, ಮತ್ತು ಸಿದ್ಧರಾದಾಗ ನೆರೆಹೊರೆಯ ಅಭ್ಯಾಸ. ವಯಸ್ಕ ಬದುಕನ್ನು ಉದ್ದೇಶಪೂರ್ವಕವಾಗಿ ಕಲಿಸುತ್ತೇವೆ.",
      hi: "रोज़मर्रा की ज़िंदगी, रसोई, बगीचा, और तैयार होने पर मोहल्ले में अभ्यास। वयस्क जीवन जान-बूझकर सिखाया जाता है।",
    },
    points: [
      {
        en: "Cooking, travel, money, and safety practised in real sequences",
        kn: "ಅಡುಗೆ, ಪ್ರಯಾಣ, ಹಣ ಮತ್ತು ಸುರಕ್ಷತೆ ನಿಜವಾದ ಕ್ರಮದಲ್ಲಿ",
        hi: "खाना बनाना, यात्रा, पैसा और सुरक्षा असली क्रम में",
      },
      {
        en: "Art and garden as serious work, not time-fillers",
        kn: "ಕಲೆ ಮತ್ತು ತೋಟ ಗಂಭೀರ ಕೆಲಸ — ಸಮಯ ತುಂಬಿಸುವುದಲ್ಲ",
        hi: "कला और बगीचा गंभीर काम — समय भरना नहीं",
      },
      {
        en: "Families help decide what “a good adult day” means for this person",
        kn: "ಈ ವ್ಯಕ್ತಿಗೆ ಒಳ್ಳೆಯ ವಯಸ್ಕ ದಿನ ಎಂದರೇನು ಎಂದು ಕುಟುಂಬ ನಿರ್ಧರಿಸಲು ಸಹಾಯ",
        hi: "इस व्यक्ति के लिए अच्छा वयस्क दिन क्या है, यह परिवार तय करने में मदद करता है",
      },
    ],
  },
  {
    id: "family",
    image: "/images/parent-circle.jpg",
    alt: {
      en: "Indian parents talk with a counsellor beside tea glasses and a notebook.",
      kn: "ಪಾಲಕರು ಸಲಹೆಗಾರರೊಂದಿಗೆ ಮಾತನಾಡುತ್ತಿದ್ದಾರೆ.",
      hi: "माता-पिता सलाहकार से बात कर रहे हैं।",
    },
    ages: { en: "For every family", kn: "ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ", hi: "हर परिवार के लिए" },
    title: { en: "Family circle", kn: "ಕುಟುಂಬ ವೃತ್ತ", hi: "परिवार वृत्त" },
    summary: {
      en: "Workshops, a sibling morning, and a home note you can follow without a therapy degree. What is learned at school has to work in a Bengaluru kitchen and an auto ride.",
      kn: "ಕಾರ್ಯಾಗಾರ, ಒಡಹುಟ್ಟಿದವರ ಬೆಳಿಗ್ಗೆ, ಮತ್ತು ಚಿಕಿತ್ಸಾ ಪದವಿ ಇಲ್ಲದೆ ಅನುಸರಿಸಬಹುದಾದ ಮನೆ ಟಿಪ್ಪಣಿ. ಶಾಲೆಯಲ್ಲಿ ಕಲಿತದ್ದು ಬೆಂಗಳೂರಿನ ಅಡುಗೆಮನೆ ಮತ್ತು ಆಟೋ ಪ್ರಯಾಣದಲ್ಲಿ ಕೆಲಸ ಮಾಡಬೇಕು.",
      hi: "कार्यशाला, भाई-बहन की सुबह, और घर का नोट जिसे थेरेपी डिग्री के बिना अपनाया जा सके। स्कूल की सीख बेंगलुरु की रसोई और ऑटो की सवारी में काम करनी चाहिए।",
    },
    points: [
      {
        en: "Parent circle on a Saturday rhythm, not a surprise meeting",
        kn: "ಶನಿವಾರದ ಲಯದಲ್ಲಿ ಪಾಲಕ ವೃತ್ತ — ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಸಭೆಯಲ್ಲ",
        hi: "शनिवार की लय में अभिभावक वृत्त — अचानक बैठक नहीं",
      },
      {
        en: "Siblings get a morning that is not only about helping",
        kn: "ಒಡಹುಟ್ಟಿದವರಿಗೆ ಸಹಾಯ ಮಾತ್ರವಲ್ಲದ ಬೆಳಿಗ್ಗೆ",
        hi: "भाई-बहनों को एक सुबह जो सिर्फ़ मदद करने की नहीं",
      },
      {
        en: "Grandparents are welcome. Many Bengaluru homes run on their patience.",
        kn: "ಅಜ್ಜ-ಅಜ್ಜಿಯರಿಗೆ ಸ್ವಾಗತ. ಅನೇಕ ಮನೆಗಳು ಅವರ ತಾಳ್ಮೆಯ ಮೇಲೆ ನಡೆಯುತ್ತವೆ.",
        hi: "दादा-दादी का स्वागत है। कई घर उनकी धैर्य पर चलते हैं।",
      },
    ],
  },
];

export const approaches = {
  title: {
    en: "How the day is taught",
    kn: "ದಿನವನ್ನು ಹೇಗೆ ಕಲಿಸುತ್ತೇವೆ",
    hi: "दिन कैसे पढ़ाया जाता है",
  },
  lede: {
    en: "These are practices, not a branded promise. We do not claim a foreign certificate we do not hold.",
    kn: "ಇವು ಅಭ್ಯಾಸಗಳು, ಬ್ರಾಂಡ್ ಭರವಸೆಯಲ್ಲ. ನಮ್ಮ ಬಳಿ ಇಲ್ಲದ ವಿದೇಶಿ ಪ್ರಮಾಣಪತ್ರವನ್ನು ಹೇಳಿಕೊಳ್ಳುವುದಿಲ್ಲ.",
    hi: "ये अभ्यास हैं, ब्रांड का वादा नहीं। जो विदेशी प्रमाणपत्र हमारे पास नहीं, उसका दावा नहीं करते।",
  },
  items: [
    {
      title: { en: "Visual days", kn: "ಚಿತ್ರಗಳ ದಿನ", hi: "चित्रों वाला दिन" },
      body: {
        en: "Schedules, first-then boards, and choice cards. The plan is visible.",
        kn: "ವೇಳಾಪಟ್ಟಿ, ಮೊದಲು-ಆಮೇಲೆ ಫಲಕಗಳು ಮತ್ತು ಆಯ್ಕೆ ಚೀಟಿಗಳು. ಯೋಜನೆ ಕಾಣಿಸುತ್ತದೆ.",
        hi: "समय-सारणी, पहले-फिर बोर्ड और चुनाव कार्ड। योजना दिखती है।",
      },
    },
    {
      title: { en: "Structured rooms", kn: "ರಚಿತ ಕೋಣೆಗಳು", hi: "सजी हुई जगहें" },
      body: {
        en: "Work, break, and rest have their own places, so the room itself teaches.",
        kn: "ಕೆಲಸ, ವಿರಾಮ ಮತ್ತು ವಿಶ್ರಾಂತಿಗೆ ತಮ್ಮ ಜಾಗ. ಕೋಣೆಯೇ ಕಲಿಸುತ್ತದೆ.",
        hi: "काम, विश्राम और आराम की अपनी जगह। कमरा खुद सिखाता है।",
      },
    },
    {
      title: { en: "Many ways to speak", kn: "ಮಾತಿಗೆ ಹಲವು ದಾರಿ", hi: "बोलने के कई रास्ते" },
      body: {
        en: "Speech, pictures, signs, and devices. Words are not the only voice we respect.",
        kn: "ಮಾತು, ಚಿತ್ರ, ಸನ್ನೆ ಮತ್ತು ಸಾಧನ. ಮಾತೊಂದೇ ಗೌರವಿಸುವ ಧ್ವನಿಯಲ್ಲ.",
        hi: "बोल, चित्र, संकेत और उपकरण। शब्द ही एकमात्र आवाज़ नहीं।",
      },
    },
    {
      title: { en: "Positive support", kn: "ಧನಾತ್ಮಕ ಆಸರೆ", hi: "सकारात्मक सहारा" },
      body: {
        en: "We ask what a behaviour is asking for. Comfort is taught. Fear is not a method.",
        kn: "ನಡವಳಿಕೆ ಏನನ್ನು ಕೇಳುತ್ತಿದೆ ಎಂದು ನೋಡುತ್ತೇವೆ. ಸೌಕರ್ಯವನ್ನು ಕಲಿಸುತ್ತೇವೆ. ಭಯ ವಿಧಾನವಲ್ಲ.",
        hi: "हम पूछते हैं कि व्यवहार क्या माँग रहा है। आराम सिखाया जाता है। डर तरीका नहीं।",
      },
    },
  ],
};

export const fit = {
  title: {
    en: "We may not be the right school. We will say so.",
    kn: "ನಾವು ಸರಿಯಾದ ಶಾಲೆಯಾಗದಿರಬಹುದು. ಹಾಗೆ ಹೇಳುತ್ತೇವೆ.",
    hi: "शायद हम सही स्कूल न हों। हम ऐसा कहेंगे।",
  },
  body: {
    en: "Sampige is a day school, not a hospital and not a residential village. If a child needs full-time nursing, or a home to live in through the week, we will help you name that need instead of stretching this campus to pretend.",
    kn: "ಸಂಪಿಗೆ ದಿನದ ಶಾಲೆ, ಆಸ್ಪತ್ರೆಯಲ್ಲ, ವಾರದ ವಸತಿ ಗ್ರಾಮವಲ್ಲ. ಮಗುವಿಗೆ ಪೂರ್ಣ ಶುಶ್ರೂಷೆ ಅಥವಾ ವಾರದ ಮನೆ ಬೇಕಾದರೆ, ಈ ಆವರಣವನ್ನು ಎಳೆಯುವ ಬದಲು ಆ ಅಗತ್ಯವನ್ನು ಹೆಸರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತೇವೆ.",
    hi: "संपिगे डे स्कूल है, अस्पताल नहीं और हफ़्ते भर का आवासीय गाँव नहीं। अगर बच्चे को पूरी नर्सिंग या हफ़्ते का घर चाहिए, तो इस परिसर को खींचने के बजाय उस ज़रूरत का नाम लेने में मदद करेंगे।",
  },
};

export const dayPage = {
  lede: {
    en: "The clock below follows Bengaluru time. On a school day the current block is marked, so you can picture where your child would be.",
    kn: "ಕೆಳಗಿನ ಗಡಿಯಾರ ಬೆಂಗಳೂರಿನ ಸಮಯ. ಶಾಲಾ ದಿನದಲ್ಲಿ ಈಗಿನ ಭಾಗ ಗುರುತಿಸಲ್ಪಡುತ್ತದೆ.",
    hi: "नीचे की घड़ी बेंगलुरु का समय दिखाती है। स्कूल के दिन मौजूदा हिस्सा चिह्नित रहता है।",
  },
  now: { en: "Happening now", kn: "ಈಗ ನಡೆಯುತ್ತಿದೆ", hi: "अभी हो रहा है" },
  clockLabel: { en: "Bengaluru time", kn: "ಬೆಂಗಳೂರಿನ ಸಮಯ", hi: "बेंगलुरु का समय" },
  quietClock: {
    en: "The live marker appears on school days between 8:30 am and 3:20 pm.",
    kn: "ನೇರ ಗುರುತು ಶಾಲಾ ದಿನಗಳಲ್ಲಿ ಬೆಳಿಗ್ಗೆ 8:30 ರಿಂದ ಮಧ್ಯಾಹ್ನ 3:20 ರವರೆಗೆ ಕಾಣುತ್ತದೆ.",
    hi: "लाइव निशान स्कूल के दिनों में सुबह 8:30 से दोपहर 3:20 तक दिखता है।",
  },
  builderTitle: {
    en: "Make a morning strip for home",
    kn: "ಮನೆಗೆ ಬೆಳಿಗ್ಗೆಯ ಪಟ್ಟಿ ಮಾಡಿ",
    hi: "घर के लिए सुबह की पट्टी बनाएँ",
  },
  builderLede: {
    en: "Tap pictures in the order of your morning. This is the same kind of strip our classrooms use. Print it and keep it where the day starts — many families use the fridge.",
    kn: "ಬೆಳಿಗ್ಗೆಯ ಕ್ರಮದಲ್ಲಿ ಚಿತ್ರಗಳನ್ನು ಒತ್ತಿ. ತರಗತಿಯಲ್ಲೂ ಇಂತಹ ಪಟ್ಟಿ ಇರುತ್ತದೆ. ಮುದ್ರಿಸಿ, ದಿನ ಆರಂಭವಾಗುವಲ್ಲಿ ಇಡಿ — ಅನೇಕರು ಫ್ರಿಜ್ ಮೇಲೆ ಇಡುತ್ತಾರೆ.",
    hi: "सुबह के क्रम में चित्र छुएँ। कक्षाओं में भी ऐसी पट्टी होती है। छापकर वहाँ रखें जहाँ दिन शुरू होता है — कई परिवार फ़्रिज पर रखते हैं।",
  },
  add: { en: "Add", kn: "ಸೇರಿಸಿ", hi: "जोड़ें" },
  remove: { en: "Remove", kn: "ತೆಗೆಯಿರಿ", hi: "हटाएँ" },
  empty: {
    en: "Your strip is empty. Start with wake, or with whatever truly comes first.",
    kn: "ಪಟ್ಟಿ ಖಾಲಿ. ಏಳುವುದರಿಂದ ಆರಂಭಿಸಿ, ಅಥವಾ ನಿಜವಾಗಿ ಮೊದಲು ಬರುವುದರಿಂದ.",
    hi: "पट्टी खाली है। उठने से शुरू करें, या जो सच में पहले आता है उससे।",
  },
  print: { en: "Print this strip", kn: "ಈ ಪಟ್ಟಿ ಮುದ್ರಿಸಿ", hi: "यह पट्टी छापें" },
  clear: { en: "Clear", kn: "ಅಳಿಸಿ", hi: "साफ़ करें" },
  printHeading: {
    en: "Our morning",
    kn: "ನಮ್ಮ ಬೆಳಿಗ್ಗೆ",
    hi: "हमारी सुबह",
  },
};

export const dayBlocks: { id: string; time: string; title: T; body: T }[] = [
  {
    id: "arrive",
    time: "8:30",
    title: { en: "A soft arrival", kn: "ಮೃದು ಆಗಮನ", hi: "नरम आगमन" },
    body: {
      en: "The same greeting, the same hook for the bag, a minute to arrive in the body before anyone asks for work.",
      kn: "ಅದೇ ಸ್ವಾಗತ, ಚೀಲಕ್ಕೆ ಅದೇ ಕೊಕ್ಕೆ, ಕೆಲಸ ಕೇಳುವ ಮೊದಲು ದೇಹಕ್ಕೆ ಒಂದು ನಿಮಿಷ.",
      hi: "वही अभिवादन, बैग के लिए वही हुक, काम माँगने से पहले शरीर को एक मिनट।",
    },
  },
  {
    id: "circle",
    time: "9:00",
    title: { en: "Circle and the day’s pictures", kn: "ವೃತ್ತ ಮತ್ತು ದಿನದ ಚಿತ್ರಗಳು", hi: "वृत्त और दिन के चित्र" },
    body: {
      en: "Who is here, what the day holds, and a song or a silence — the group chooses a predictable start.",
      kn: "ಯಾರಿದ್ದಾರೆ, ದಿನದಲ್ಲಿ ಏನಿದೆ, ಹಾಡು ಅಥವಾ ಮೌನ — ಗುಂಪಿಗೆ ನಿರೀಕ್ಷಿತ ಆರಂಭ.",
      hi: "कौन है, दिन में क्या है, गीत या शांति — समूह को एक जानी-पहचानी शुरुआत।",
    },
  },
  {
    id: "learn",
    time: "9:40",
    title: { en: "Learning studios", kn: "ಕಲಿಕಾ ಸ್ಟುಡಿಯೋ", hi: "लर्निंग स्टूडियो" },
    body: {
      en: "Small-group teaching and a one-to-one block. The target is written where the child and the parent can both see it.",
      kn: "ಚಿಕ್ಕ ಗುಂಪು ಮತ್ತು ಒಬ್ಬರಿಗೊಬ್ಬರ ಸಮಯ. ಗುರಿ ಮಗು ಮತ್ತು ಪಾಲಕರಿಬ್ಬರಿಗೂ ಕಾಣುವಲ್ಲಿ ಬರೆದಿರುತ್ತದೆ.",
      hi: "छोटा समूह और एक-एक का समय। लक्ष्य वहाँ लिखा होता है जहाँ बच्चा और माता-पिता दोनों देख सकें।",
    },
  },
  {
    id: "move",
    time: "11:00",
    title: { en: "Movement and a sensory pause", kn: "ಚಲನೆ ಮತ್ತು ಇಂದ್ರಿಯ ವಿರಾಮ", hi: "हरकत और इंद्रिय विराम" },
    body: {
      en: "Outside if the weather allows: walk, water the pots, or swing. Bodies are part of the curriculum.",
      kn: "ಹವೆ ಒಪ್ಪಿದರೆ ಹೊರಗೆ: ನಡಿಗೆ, ಕುಂಡಗಳಿಗೆ ನೀರು ಅಥವಾ ಉಯ್ಯಾಲೆ. ದೇಹ ಪಠ್ಯಕ್ರಮದ ಭಾಗ.",
      hi: "मौसम हो तो बाहर: चलना, गमलों को पानी, या झूला। शरीर पाठ्यक्रम का हिस्सा है।",
    },
  },
  {
    id: "talk",
    time: "11:30",
    title: { en: "Communication groups", kn: "ಸಂವಹನ ಗುಂಪುಗಳು", hi: "संवाद समूह" },
    body: {
      en: "Speech, pictures, or a device, practised with other children — not only across a clinic table.",
      kn: "ಮಾತು, ಚಿತ್ರ ಅಥವಾ ಸಾಧನ, ಇತರ ಮಕ್ಕಳೊಂದಿಗೆ ಅಭ್ಯಾಸ — ಕೇವಲ ಚಿಕಿತ್ಸಾ ಮೇಜಿನಾಚೆ ಅಲ್ಲ.",
      hi: "बोल, चित्र या उपकरण, दूसरे बच्चों के साथ अभ्यास — सिर्फ़ क्लिनिक की मेज़ पर नहीं।",
    },
  },
  {
    id: "lunch",
    time: "12:30",
    title: { en: "Lunch", kn: "ಊಟ", hi: "दोपहर का खाना" },
    body: {
      en: "A familiar South Indian plate where we can. Texture, spice, and a favourite spoon are part of the plan.",
      kn: "ಸಾಧ್ಯವಾದರೆ ಪರಿಚಿತ ದಕ್ಷಿಣ ಭಾರತದ ತಟ್ಟೆ. ಆಹಾರದ ವಿನ್ಯಾಸ, ಖಾರ ಮತ್ತು ಪ್ರಿಯ ಚಮಚ ಯೋಜನೆಯ ಭಾಗ.",
      hi: "जहाँ हो सके, जानी-पहचानी दक्षिण भारतीय थाली। बनावट, मसाला और पसंदीदा चम्मच योजना का हिस्सा हैं।",
    },
  },
  {
    id: "make",
    time: "1:15",
    title: { en: "Garden, art, kitchen, or life skills", kn: "ತೋಟ, ಕಲೆ, ಅಡುಗೆ ಅಥವಾ ಜೀವನ ಕೌಶಲ", hi: "बगीचा, कला, रसोई या जीवन कौशल" },
    body: {
      en: "Hands in soil, paint, or dough. Older students practise the sequences of adult work.",
      kn: "ಮಣ್ಣು, ಬಣ್ಣ ಅಥವಾ ಹಿಟ್ಟಿನಲ್ಲಿ ಕೈ. ಹಿರಿಯ ವಿದ್ಯಾರ್ಥಿಗಳು ವಯಸ್ಕ ಕೆಲಸದ ಕ್ರಮ ಅಭ್ಯಾಸ ಮಾಡುತ್ತಾರೆ.",
      hi: "हाथ मिट्टी, रंग या आटे में। बड़े विद्यार्थी वयस्क काम का क्रम अभ्यास करते हैं।",
    },
  },
  {
    id: "note",
    time: "2:30",
    title: { en: "Home note", kn: "ಮನೆ ಟಿಪ್ಪಣಿ", hi: "घर का नोट" },
    body: {
      en: "A few lines: what worked, what to repeat tonight, and one thing to leave alone.",
      kn: "ಕೆಲವು ಸಾಲುಗಳು: ಏನು ಕೆಲಸ ಮಾಡಿತು, ಇಂದು ರಾತ್ರಿ ಏನು ಪುನರಾವರ್ತಿಸಬೇಕು, ಒಂದನ್ನು ಬಿಡಬೇಕು.",
      hi: "कुछ पंक्तियाँ: क्या चला, आज रात क्या दोहराना है, और किसे छोड़ देना है।",
    },
  },
  {
    id: "close",
    time: "3:00",
    title: { en: "The day closes", kn: "ದಿನ ಮುಕ್ತಾಯ", hi: "दिन समाप्त" },
    body: {
      en: "The same goodbye. Predictable endings are a kindness.",
      kn: "ಅದೇ ವಿದಾಯ. ನಿರೀಕ್ಷಿತ ಅಂತ್ಯ ಒಂದು ದಯೆ.",
      hi: "वही विदाई। जानी-पहचानी समाप्ति एक दया है।",
    },
  },
];

export const routinePieces: { id: string; label: T }[] = [
  { id: "wake", label: { en: "Wake", kn: "ಏಳುವುದು", hi: "उठना" } },
  { id: "wash", label: { en: "Wash", kn: "ತೊಳೆಯುವುದು", hi: "नहाना" } },
  { id: "breakfast", label: { en: "Breakfast", kn: "ಉಪಾಹಾರ", hi: "नाश्ता" } },
  { id: "bus", label: { en: "Travel", kn: "ಪ್ರಯಾಣ", hi: "रास्ता" } },
  { id: "school", label: { en: "School", kn: "ಶಾಲೆ", hi: "स्कूल" } },
  { id: "garden", label: { en: "Garden", kn: "ತೋಟ", hi: "बगीचा" } },
  { id: "lunch", label: { en: "Lunch", kn: "ಊಟ", hi: "खाना" } },
  { id: "music", label: { en: "Music", kn: "ಸಂಗೀತ", hi: "संगीत" } },
  { id: "home", label: { en: "Home", kn: "ಮನೆ", hi: "घर" } },
  { id: "sleep", label: { en: "Sleep", kn: "ನಿದ್ರೆ", hi: "नींद" } },
];

export const admissions = {
  lede: {
    en: "Asking is free. You do not need a perfect file of reports to begin — bring what you already have.",
    kn: "ಕೇಳುವುದು ಉಚಿತ. ಆರಂಭಿಸಲು ಪರಿಪೂರ್ಣ ವರದಿಗಳ ಕಡತ ಬೇಕಿಲ್ಲ — ಇರುವುದನ್ನು ತನ್ನಿ.",
    hi: "पूछना मुफ़्त है। शुरू करने के लिए रिपोर्टों की पूरी फ़ाइल ज़रूरी नहीं — जो है वही लाइए।",
  },
  stepsTitle: { en: "Four steps", kn: "ನಾಲ್ಕು ಹೆಜ್ಜೆ", hi: "चार कदम" },
  steps: [
    {
      title: { en: "Tell us a little", kn: "ಸ್ವಲ್ಪ ಹೇಳಿ", hi: "थोड़ा बताइए" },
      body: {
        en: "Age, language at home, and what you hope will feel easier. A form is enough to start.",
        kn: "ವಯಸ್ಸು, ಮನೆಯ ಭಾಷೆ ಮತ್ತು ಏನು ಸುಲಭವಾಗಬೇಕೆಂದು ನೀವು ಬಯಸುತ್ತೀರಿ. ಆರಂಭಕ್ಕೆ ನಮೂನೆ ಸಾಕು.",
        hi: "उम्र, घर की भाषा, और क्या आसान हो इसकी उम्मीद। शुरू के लिए फ़ॉर्म काफ़ी है।",
      },
    },
    {
      title: { en: "A conversation", kn: "ಒಂದು ಸಂಭಾಷಣೆ", hi: "एक बातचीत" },
      body: {
        en: "An admissions teacher calls or meets you. You can speak Kannada, English, Hindi, Tamil, Telugu, or Urdu.",
        kn: "ಪ್ರವೇಶ ಉಪಾಧ್ಯಾಯರು ಕರೆ ಮಾಡುತ್ತಾರೆ ಅಥವಾ ಭೇಟಿಯಾಗುತ್ತಾರೆ. ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ಹಿಂದಿ, ತಮಿಳು, ತೆಲುಗು ಅಥವಾ ಉರ್ದು.",
        hi: "प्रवेश शिक्षक फ़ोन या मुलाकात करेंगे। कन्नड़, अंग्रेज़ी, हिन्दी, तमिल, तेलुगु या उर्दू।",
      },
    },
    {
      title: { en: "A short visit with your child", kn: "ಮಗುವಿನೊಂದಿಗೆ ಚಿಕ್ಕ ಭೇಟಿ", hi: "बच्चे के साथ छोटी मुलाकात" },
      body: {
        en: "We watch how your child enters a room. We do not stage a test they can pass or fail in an hour.",
        kn: "ಮಗು ಕೋಣೆಗೆ ಹೇಗೆ ಬರುತ್ತಾರೆ ಎಂದು ನೋಡುತ್ತೇವೆ. ಒಂದು ಗಂಟೆಯಲ್ಲಿ ಜಯ-ಅಪಜಯದ ಪರೀಕ್ಷೆ ಇಡುವುದಿಲ್ಲ.",
        hi: "हम देखते हैं कि बच्चा कमरे में कैसे आता है। एक घंटे की पास-फेल परीक्षा नहीं रखते।",
      },
    },
    {
      title: { en: "A plan you can read", kn: "ನೀವು ಓದಬಹುದಾದ ಯೋಜನೆ", hi: "एक योजना जो आप पढ़ सकें" },
      body: {
        en: "If we offer a place, you receive the fee, the group, and the first goals in writing before you decide.",
        kn: "ಸ್ಥಳ ನೀಡಿದರೆ, ನಿರ್ಧರಿಸುವ ಮೊದಲು ಶುಲ್ಕ, ಗುಂಪು ಮತ್ತು ಮೊದಲ ಗುರಿಗಳು ಲಿಖಿತವಾಗಿ ಸಿಗುತ್ತವೆ.",
        hi: "जगह दें तो फ़ैसला करने से पहले शुल्क, समूह और पहले लक्ष्य लिखकर मिलेंगे।",
      },
    },
  ],
  finderTitle: {
    en: "Which room might fit this season?",
    kn: "ಈ ಋತುವಿಗೆ ಯಾವ ಕೋಣೆ ಹೊಂದಬಹುದು?",
    hi: "इस मौसम में कौन सा कमरा ठीक रह सकता है?",
  },
  finderLede: {
    en: "This is a starting point, not an admission decision.",
    kn: "ಇದು ಆರಂಭದ ಸುಳಿವು, ಪ್ರವೇಶ ನಿರ್ಧಾರವಲ್ಲ.",
    hi: "यह शुरुआत है, प्रवेश का फ़ैसला नहीं।",
  },
  ageLegend: { en: "Age", kn: "ವಯಸ್ಸು", hi: "उम्र" },
  hopeLegend: {
    en: "What feels hardest right now? Choose any.",
    kn: "ಈಗ ಏನು ಹೆಚ್ಚು ಕಷ್ಟ? ಯಾವುದನ್ನಾದರೂ ಆರಿಸಿ.",
    hi: "अभी क्या सबसे कठिन है? जो चाहें चुनें।",
  },
  show: { en: "Show a starting point", kn: "ಆರಂಭ ತೋರಿಸಿ", hi: "शुरुआत दिखाएँ" },
  pickAge: {
    en: "Choose an age group first.",
    kn: "ಮೊದಲು ವಯೋಮಾನ ಆರಿಸಿ.",
    hi: "पहले आयु समूह चुनें।",
  },
  resultTitle: { en: "A place to begin", kn: "ಆರಂಭಿಸುವ ಜಾಗ", hi: "शुरू करने की जगह" },
  also: { en: "Also look at", kn: "ಇವನ್ನೂ ನೋಡಿ", hi: "ये भी देखें" },
  formTitle: { en: "Ask for a conversation", kn: "ಸಂಭಾಷಣೆ ಕೇಳಿ", hi: "बातचीत माँगें" },
};

export const ages: { id: string; label: T }[] = [
  { id: "early", label: { en: "2 to 6 years", kn: "2 ರಿಂದ 6 ವರ್ಷ", hi: "2 से 6 साल" } },
  { id: "primary", label: { en: "7 to 11 years", kn: "7 ರಿಂದ 11 ವರ್ಷ", hi: "7 से 11 साल" } },
  { id: "middle", label: { en: "12 to 15 years", kn: "12 ರಿಂದ 15 ವರ್ಷ", hi: "12 से 15 साल" } },
  { id: "youth", label: { en: "16 to 21 years", kn: "16 ರಿಂದ 21 ವರ್ಷ", hi: "16 से 21 साल" } },
];

export const hopes: { id: string; label: T }[] = [
  {
    id: "talk",
    label: {
      en: "Communication — words, pictures, or gestures",
      kn: "ಸಂವಹನ — ಮಾತು, ಚಿತ್ರ ಅಥವಾ ಸನ್ನೆ",
      hi: "संवाद — शब्द, चित्र या इशारे",
    },
  },
  {
    id: "sensory",
    label: {
      en: "Sensory comfort and big feelings",
      kn: "ಇಂದ್ರಿಯ ಸೌಕರ್ಯ ಮತ್ತು ದೊಡ್ಡ ಭಾವನೆಗಳು",
      hi: "इंद्रिय आराम और बड़े भाव",
    },
  },
  {
    id: "learn",
    label: {
      en: "Reading, number, and classroom learning",
      kn: "ಓದು, ಸಂಖ್ಯೆ ಮತ್ತು ತರಗತಿ ಕಲಿಕೆ",
      hi: "पढ़ना, संख्या और कक्षा की पढ़ाई",
    },
  },
  {
    id: "daily",
    label: {
      en: "Eating, toilet, dressing, safety",
      kn: "ಊಟ, ಶೌಚ, ಉಡುಗೆ, ಸುರಕ್ಷತೆ",
      hi: "खाना, शौच, कपड़े, सुरक्षा",
    },
  },
  {
    id: "work",
    label: {
      en: "Work, travel, and adult life",
      kn: "ಕೆಲಸ, ಪ್ರಯಾಣ ಮತ್ತು ವಯಸ್ಕ ಬದುಕು",
      hi: "काम, यात्रा और वयस्क जीवन",
    },
  },
];

export const families = {
  lede: {
    en: "The weeks after someone first says “autism” can feel loud. You do not have to become an expert this month. You do have to eat and sleep.",
    kn: "ಯಾರೋ ಮೊದಲ ಬಾರಿ “ಸ್ವಲೀನತೆ” ಅಂದ ಮೇಲಿನ ವಾರಗಳು ಜೋರಾಗಿರಬಹುದು. ಈ ತಿಂಗಳು ತಜ್ಞರಾಗಬೇಕಿಲ್ಲ. ಊಟ ಮತ್ತು ನಿದ್ರೆ ಆದರೆ ಬೇಕು.",
    hi: "जब कोई पहली बार “ऑटिज़्म” कहे, उसके बाद के हफ़्ते शोर वाले लग सकते हैं। इस महीने विशेषज्ञ नहीं बनना। खाना और सोना ज़रूरी है।",
  },
  weeksTitle: {
    en: "The first weeks, without a pile of homework",
    kn: "ಮೊದಲ ವಾರಗಳು, ಮನೆಕೆಲಸದ ರಾಶಿ ಇಲ್ಲದೆ",
    hi: "पहले हफ़्ते, बिना गृहकार्य के ढेर के",
  },
  weeks: [
    {
      title: {
        en: "Write down what already helps",
        kn: "ಈಗಾಗಲೇ ಸಹಾಯ ಮಾಡುವುದನ್ನು ಬರೆಯಿರಿ",
        hi: "जो पहले से मदद करता है, लिख लें",
      },
      body: {
        en: "A song, a spoon, a route, a person. Schools work faster when they start from what your child already trusts.",
        kn: "ಒಂದು ಹಾಡು, ಚಮಚ, ದಾರಿ, ವ್ಯಕ್ತಿ. ಮಗು ಈಗಾಗಲೇ ನಂಬುವುದರಿಂದ ಆರಂಭಿಸಿದರೆ ಶಾಲೆ ವೇಗವಾಗಿ ಕೆಲಸ ಮಾಡುತ್ತದೆ.",
        hi: "एक गीत, चम्मच, रास्ता, व्यक्ति। स्कूल तेज़ी से काम करता है जब शुरुआत बच्चे के भरोसे से हो।",
      },
    },
    {
      title: {
        en: "Keep the reports you already have",
        kn: "ಇರುವ ವರದಿಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ",
        hi: "जो रिपोर्टें हैं, उन्हें रखें",
      },
      body: {
        en: "A paediatric note, a hearing check, an old school remark. You do not need to redo every test before you visit us.",
        kn: "ಮಕ್ಕಳ ವೈದ್ಯರ ಟಿಪ್ಪಣಿ, ಕೇಳುವ ಪರೀಕ್ಷೆ, ಹಳೆಯ ಶಾಲಾ ಮಾತು. ನಮ್ಮನ್ನು ಭೇಟಿಯಾಗುವ ಮೊದಲು ಪ್ರತಿ ಪರೀಕ್ಷೆಯನ್ನು ಪುನಃ ಮಾಡಬೇಕಿಲ್ಲ.",
        hi: "बाल चिकित्सक का नोट, सुनने की जाँच, पुरानी स्कूल टिप्पणी। हमसे मिलने से पहले हर टेस्ट दोहराना ज़रूरी नहीं।",
      },
    },
    {
      title: {
        en: "Visit one place in a day",
        kn: "ಒಂದು ದಿನಕ್ಕೆ ಒಂದು ಸ್ಥಳ",
        hi: "एक दिन में एक जगह",
      },
      body: {
        en: "Five schools in one Saturday teaches a child that buildings are exhausting. One calm visit teaches you more.",
        kn: "ಒಂದು ಶನಿವಾರಕ್ಕೆ ಐದು ಶಾಲೆಗಳು ಮಗುವಿಗೆ ಕಟ್ಟಡಗಳು ದಣಿವು ಎಂದು ಕಲಿಸುತ್ತವೆ. ಒಂದು ಶಾಂತ ಭೇಟಿ ನಿಮಗೆ ಹೆಚ್ಚು ಕಲಿಸುತ್ತದೆ.",
        hi: "एक शनिवार में पाँच स्कूल बच्चे को थका देते हैं। एक शांत मुलाकात आपको ज़्यादा सिखाती है।",
      },
    },
    {
      title: {
        en: "Tell the family in ordinary words",
        kn: "ಕುಟುಂಬಕ್ಕೆ ಸಾಮಾನ್ಯ ಮಾತಿನಲ್ಲಿ ಹೇಳಿ",
        hi: "परिवार को साधारण शब्दों में बताएँ",
      },
      body: {
        en: "“He learns differently, and we have a plan” is enough for an uncle. You do not owe anyone a lecture.",
        kn: "“ಅವನು ಬೇರೆ ರೀತಿ ಕಲಿಯುತ್ತಾನೆ, ನಮಗೆ ಯೋಜನೆ ಇದೆ” ಚಿಕ್ಕಪ್ಪನಿಗೆ ಸಾಕು. ಯಾರಿಗೂ ಉಪನ್ಯಾಸ ಕೊಡಬೇಕಿಲ್ಲ.",
        hi: "“वह अलग तरह से सीखता है, और हमारे पास योजना है” — चाचा के लिए काफ़ी। किसी को भाषण नहीं देना।",
      },
    },
    {
      title: {
        en: "Protect meals and sleep",
        kn: "ಊಟ ಮತ್ತು ನಿದ್ರೆ ಕಾಯಿರಿ",
        hi: "खाना और नींद बचाएँ",
      },
      body: {
        en: "A new therapy every evening is not a medal. A child who is exhausted cannot use what they learned at 10 am.",
        kn: "ಪ್ರತಿ ಸಂಜೆ ಹೊಸ ಚಿಕಿತ್ಸೆ ಪದಕವಲ್ಲ. ದಣಿದ ಮಗು ಬೆಳಿಗ್ಗೆ 10 ಕ್ಕೆ ಕಲಿತದ್ದನ್ನು ಬಳಸಲಾರದು.",
        hi: "हर शाम नई थेरेपी कोई पदक नहीं। थका बच्चा सुबह 10 बजे सीखी बात इस्तेमाल नहीं कर पाता।",
      },
    },
    {
      title: {
        en: "Let a sibling be a sibling",
        kn: "ಒಡಹುಟ್ಟಿದವರು ಒಡಹುಟ್ಟಿದವರಾಗಿರಲಿ",
        hi: "भाई-बहन को भाई-बहन रहने दें",
      },
      body: {
        en: "They can be kind without being the assistant teacher. Our sibling morning is for play, not for training them.",
        kn: "ಅವರು ಸಹಾಯಕ ಉಪಾಧ್ಯಾಯರಾಗದೆ ದಯೆಯಿಂದಿರಬಹುದು. ನಮ್ಮ ಒಡಹುಟ್ಟಿದವರ ಬೆಳಿಗ್ಗೆ ಆಟಕ್ಕೆ, ತರಬೇತಿಗಲ್ಲ.",
        hi: "वे सहायक शिक्षक बने बिना भी दयालु रह सकते हैं। हमारी सुबह खेल के लिए है, ट्रेनिंग के लिए नहीं।",
      },
    },
  ],
  fundsTitle: {
    en: "Money and paperwork, in plain words",
    kn: "ಹಣ ಮತ್ತು ಕಾಗದಪತ್ರ, ಸರಳ ಮಾತಿನಲ್ಲಿ",
    hi: "पैसा और कागज़, सादी भाषा में",
  },
  fundsLede: {
    en: "Schemes change. This is a map for the conversation, not legal advice. Bring the forms to us and we will sit with them.",
    kn: "ಯೋಜನೆಗಳು ಬದಲಾಗುತ್ತವೆ. ಇದು ಮಾತಿಗೆ ನಕ್ಷೆ, ಕಾನೂನು ಸಲಹೆಯಲ್ಲ. ನಮೂನೆಗಳನ್ನು ತಂದರೆ ನಾವು ಕೂರುತ್ತೇವೆ.",
    hi: "योजनाएँ बदलती हैं। यह बातचीत का नक्शा है, कानूनी सलाह नहीं। फ़ॉर्म लाइए, हम साथ बैठेंगे।",
  },
  funds: [
    {
      title: { en: "UDID card", kn: "UDID ಕಾರ್ಡ್", hi: "UDID कार्ड" },
      body: {
        en: "The Unique Disability ID is applied for on the Swavlamban portal. Autism is a specified disability under the RPwD Act, 2016. The card unlocks many other schemes.",
        kn: "Unique Disability ID ಅನ್ನು Swavlamban ತಾಣದಲ್ಲಿ ಕೇಳಲಾಗುತ್ತದೆ. RPwD ಕಾಯ್ದೆ 2016 ರಲ್ಲಿ ಸ್ವಲೀನತೆ ನಿರ್ದಿಷ್ಟ ಅಂಗವೈಕಲ್ಯ. ಕಾರ್ಡ್ ಇತರ ಯೋಜನೆಗಳಿಗೆ ಬೀಗದ ಕೈ.",
        hi: "Unique Disability ID स्ववलंबन पोर्टल पर बनती है। RPwD अधिनियम 2016 में ऑटिज़्म एक निर्दिष्ट दिव्यांगता है। कार्ड कई योजनाएँ खोलता है।",
      },
    },
    {
      title: { en: "Niramaya", kn: "ನಿರಾಮಯ", hi: "निरामय" },
      body: {
        en: "A National Trust health-insurance scheme for eligible people with autism and certain other disabilities. It is not a school fee waiver. Ask us which papers usually get stuck.",
        kn: "ಸ್ವಲೀನತೆ ಇರುವ ಅರ್ಹರಿಗೆ National Trust ಆರೋಗ್ಯ ವಿಮಾ ಯೋಜನೆ. ಇದು ಶಾಲಾ ಶುಲ್ಕ ಮನ್ನಾ ಅಲ್ಲ. ಯಾವ ಕಾಗದ ಸಾಮಾನ್ಯವಾಗಿ ಸಿಲುಕುತ್ತದೆ ಎಂದು ಕೇಳಿ.",
        hi: "ऑटिज़्म वाले पात्र लोगों के लिए नेशनल ट्रस्ट की स्वास्थ्य बीमा योजना। यह स्कूल फ़ीस माफ़ नहीं करती। पूछें कौन से कागज़ अक्सर अटकते हैं।",
      },
    },
    {
      title: { en: "NIOS", kn: "NIOS", hi: "NIOS" },
      body: {
        en: "The National Institute of Open Schooling is a flexible board up to pre-degree. For some learners it is the right academic door. We will not force it, and we will not hide it until the last year.",
        kn: "National Institute of Open Schooling ಪದವಿ-ಪೂರ್ವದವರೆಗೆ ನಮ್ಯ ಮಂಡಳಿ. ಕೆಲವರಿಗೆ ಅದು ಸರಿಯಾದ ವಿದ್ಯಾ ಬಾಗಿಲು. ಒತ್ತಾಯಿಸುವುದಿಲ್ಲ, ಕೊನೆಯ ವರ್ಷದವರೆಗೆ ಮುಚ್ಚಿಡುವುದಿಲ್ಲ.",
        hi: "नेशनल इंस्टीट्यूट ऑफ़ ओपन स्कूलिंग प्री-डिग्री तक लचीला बोर्ड है। कुछ विद्यार्थियों के लिए यही सही शैक्षणिक दरवाज़ा है। हम थोपेंगे नहीं, और आखिरी साल तक छिपाएँगे नहीं।",
      },
    },
    {
      title: { en: "A supported place", kn: "ಆಸರೆಯ ಸ್ಥಳ", hi: "सहारे वाली जगह" },
      body: {
        en: "Some families need a fee conversation, not a slogan. When a sponsor or a company wishes to support a child’s place, we will say exactly what the money covers.",
        kn: "ಕೆಲವು ಕುಟುಂಬಗಳಿಗೆ ಘೋಷವಾಕ್ಯವಲ್ಲ, ಶುಲ್ಕದ ಮಾತು ಬೇಕು. ಪ್ರಾಯೋಜಕರು ಮಗುವಿನ ಸ್ಥಳಕ್ಕೆ ನೆರವಾದರೆ ಹಣ ಏನನ್ನು ಒಳಗೊಳ್ಳುತ್ತದೆ ಎಂದು ನಿಖರವಾಗಿ ಹೇಳುತ್ತೇವೆ.",
        hi: "कुछ परिवारों को नारा नहीं, फ़ीस की बात चाहिए। जब कोई प्रायोजक बच्चे की जगह का सहारा दे, हम साफ़ बताएँगे कि पैसा किस चीज़ के लिए है।",
      },
    },
  ],
  siblingTitle: {
    en: "A morning for brothers and sisters",
    kn: "ಒಡಹುಟ್ಟಿದವರಿಗೆ ಒಂದು ಬೆಳಿಗ್ಗೆ",
    hi: "भाई-बहनों के लिए एक सुबह",
  },
  siblingBody: {
    en: "Once in a month’s rhythm, siblings come to play while parents talk. They meet other children who know this life. They are not asked to demonstrate therapy.",
    kn: "ತಿಂಗಳ ಲಯದಲ್ಲಿ ಒಮ್ಮೆ, ಪಾಲಕರು ಮಾತನಾಡುವಾಗ ಒಡಹುಟ್ಟಿದವರು ಆಡಲು ಬರುತ್ತಾರೆ. ಈ ಬದುಕು ತಿಳಿದ ಇತರ ಮಕ್ಕಳನ್ನು ಭೇಟಿಯಾಗುತ್ತಾರೆ. ಚಿಕಿತ್ಸೆ ತೋರಿಸಲು ಕೇಳುವುದಿಲ್ಲ.",
    hi: "महीने की लय में एक बार, माता-पिता बात करें तब भाई-बहन खेलने आते हैं। वे उन बच्चों से मिलते हैं जो यह जीवन जानते हैं। उनसे थेरेपी दिखाने को नहीं कहा जाता।",
  },
  langTitle: {
    en: "The languages of this house",
    kn: "ಈ ಮನೆಯ ಭಾಷೆಗಳು",
    hi: "इस घर की भाषाएँ",
  },
  langBody: {
    en: "This website is in English, Kannada, and Hindi. In the room we will also find a way for Tamil, Telugu, and Urdu. Use the language you think in. A child should hear their people sound like themselves.",
    kn: "ಈ ಜಾಲತಾಣ ಇಂಗ್ಲಿಷ್, ಕನ್ನಡ ಮತ್ತು ಹಿಂದಿಯಲ್ಲಿದೆ. ಕೋಣೆಯಲ್ಲಿ ತಮಿಳು, ತೆಲುಗು ಮತ್ತು ಉರ್ದುಗೂ ದಾರಿ ಹುಡುಕುತ್ತೇವೆ. ನೀವು ಯೋಚಿಸುವ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿ.",
    hi: "यह वेबसाइट अंग्रेज़ी, कन्नड़ और हिन्दी में है। कमरे में तमिल, तेलुगु और उर्दू का भी रास्ता निकालेंगे। जिस भाषा में सोचते हैं, उसी में बोलें।",
  },
};

export const campus = {
  lede: {
    en: "A modest campus: classrooms, a garden, a kitchen studio, and a parent room. The pictures on this page were made to show the feeling of the school. They are not photographs of enrolled children.",
    kn: "ಸಾಧಾರಣ ಆವರಣ: ತರಗತಿಗಳು, ತೋಟ, ಅಡುಗೆ ಸ್ಟುಡಿಯೋ ಮತ್ತು ಪಾಲಕರ ಕೋಣೆ. ಈ ಪುಟದ ಚಿತ್ರಗಳು ಶಾಲೆಯ ಭಾವ ತೋರಿಸಲು ಮಾಡಿದವು. ದಾಖಲಾದ ಮಕ್ಕಳ ಛಾಯಾಚಿತ್ರಗಳಲ್ಲ.",
    hi: "सादा परिसर: कक्षाएँ, बगीचा, रसोई स्टूडियो और अभिभावक कक्ष। इस पृष्ठ की तस्वीरें स्कूल का भाव दिखाने के लिए बनी हैं। ये दाखिल बच्चों की तस्वीरें नहीं।",
  },
  roomsTitle: { en: "What the rooms are for", kn: "ಕೋಣೆಗಳು ಯಾವುದಕ್ಕೆ", hi: "कमरे किसके लिए हैं" },
  rooms: [
    {
      title: { en: "Learning studios", kn: "ಕಲಿಕಾ ಸ್ಟುಡಿಯೋ", hi: "लर्निंग स्टूडियो" },
      body: {
        en: "Small tables, picture schedules, and light you can soften.",
        kn: "ಚಿಕ್ಕ ಮೇಜುಗಳು, ಚಿತ್ರ ವೇಳಾಪಟ್ಟಿಗಳು ಮತ್ತು ಮೃದುಗೊಳಿಸಬಹುದಾದ ಬೆಳಕು.",
        hi: "छोटी मेज़ें, चित्र समय-सारणी, और रोशनी जिसे नरम किया जा सके।",
      },
    },
    {
      title: { en: "Communication room", kn: "ಸಂವಹನ ಕೋಣೆ", hi: "संवाद कक्ष" },
      body: {
        en: "Picture boards of ordinary Indian days: food, buses, clothes, home.",
        kn: "ಸಾಮಾನ್ಯ ಭಾರತೀಯ ದಿನಗಳ ಚಿತ್ರ ಫಲಕ: ಆಹಾರ, ಬಸ್ಸು, ಬಟ್ಟೆ, ಮನೆ.",
        hi: "साधारण भारतीय दिनों के चित्र बोर्ड: खाना, बस, कपड़े, घर।",
      },
    },
    {
      title: { en: "Sensory studio", kn: "ಇಂದ್ರಿಯ ಸ್ಟುಡಿಯೋ", hi: "सेंसरी स्टूडियो" },
      body: {
        en: "Rice, cloth, movement, and quiet. Comfort is practised, not withheld.",
        kn: "ಅಕ್ಕಿ, ಬಟ್ಟೆ, ಚಲನೆ ಮತ್ತು ನೆಮ್ಮದಿ. ಸೌಕರ್ಯವನ್ನು ಅಭ್ಯಾಸ ಮಾಡಲಾಗುತ್ತದೆ, ತಡೆಹಿಡಿಯಲಾಗುವುದಿಲ್ಲ.",
        hi: "चावल, कपड़ा, हरकत और शांति। आराम का अभ्यास होता है, उसे रोका नहीं जाता।",
      },
    },
    {
      title: { en: "A chosen quiet room", kn: "ಆಯ್ದ ನೆಮ್ಮದಿ ಕೋಣೆ", hi: "चुना हुआ शांत कमरा" },
      body: {
        en: "A child can ask to rest here. It is not seclusion and it is not a consequence.",
        kn: "ಮಗು ಇಲ್ಲಿ ವಿಶ್ರಾಂತಿ ಕೇಳಬಹುದು. ಇದು ಪ್ರತ್ಯೇಕಣೆಯಲ್ಲ, ಶಿಕ್ಷೆಯಲ್ಲ.",
        hi: "बच्चा यहाँ आराम माँग सकता है। यह एकांतवास नहीं और सज़ा नहीं।",
      },
    },
    {
      title: { en: "Kitchen and garden", kn: "ಅಡುಗೆಮನೆ ಮತ್ತು ತೋಟ", hi: "रसोई और बगीचा" },
      body: {
        en: "Real sequences: wash, measure, plant, wait, eat. Adult skills start before 18.",
        kn: "ನಿಜವಾದ ಕ್ರಮ: ತೊಳೆ, ಅಳೆ, ನೆಡು, ಕಾಯು, ತಿನ್ನು. ವಯಸ್ಕ ಕೌಶಲ 18 ಕ್ಕೆ ಮೊದಲೇ ಆರಂಭ.",
        hi: "असली क्रम: धोओ, नापो, बोओ, रुको, खाओ। वयस्क कौशल 18 से पहले शुरू।",
      },
    },
    {
      title: { en: "Parent room", kn: "ಪಾಲಕರ ಕೋಣೆ", hi: "अभिभावक कक्ष" },
      body: {
        en: "Tea, a notebook, and enough time. Grandparents fit in the chairs.",
        kn: "ಚಹಾ, ಟಿಪ್ಪಣಿ ಪುಸ್ತಕ ಮತ್ತು ಸಾಕಷ್ಟು ಸಮಯ. ಅಜ್ಜ-ಅಜ್ಜಿಯರಿಗೆ ಕುರ್ಚಿ ಹಿಡಿಯುತ್ತದೆ.",
        hi: "चाय, कॉपी और काफ़ी समय। दादा-दादी कुर्सियों में समाएँ।",
      },
    },
  ],
};

export const gallery: { src: string; wide?: boolean; alt: T; caption: T }[] = [
  {
    src: "/images/campus-exterior.jpg",
    wide: true,
    alt: {
      en: "A cream school veranda in Bengaluru with a terracotta roof, frangipani tree, brass bell, and jaali screen.",
      kn: "ಬೆಂಗಳೂರಿನ ಶಾಲಾ ವರಾಂಡಾ, ಹೂವಿನ ಮರ, ತಾಮ್ರದ ಗೆಜ್ಜೆ ಮತ್ತು ಜಾಲಿ.",
      hi: "बेंगलुरु का स्कूल बरामदा, चंपा का पेड़, पीतल की घंटी और जाली।",
    },
    caption: {
      en: "The veranda is the first room. Arrivals should feel unsurprising.",
      kn: "ವರಾಂಡಾ ಮೊದಲ ಕೋಣೆ. ಆಗಮನ ಅಚ್ಚರಿಯಾಗಬಾರದು.",
      hi: "बरामदा पहला कमरा है। आगमन अचरज न लगे।",
    },
  },
  {
    src: "/images/hero-classroom.jpg",
    alt: {
      en: "Teacher and children using picture cards in a sunlit classroom.",
      kn: "ಬಿಸಿಲಿನ ತರಗತಿಯಲ್ಲಿ ಚಿತ್ರ ಚೀಟಿಗಳು.",
      hi: "धूप भरी कक्षा में चित्र कार्ड।",
    },
    caption: { en: "Learning studio", kn: "ಕಲಿಕಾ ಸ್ಟುಡಿಯೋ", hi: "लर्निंग स्टूडियो" },
  },
  {
    src: "/images/communication.jpg",
    alt: {
      en: "Speech session with an Indian picture board of food, a bus, and clothes.",
      kn: "ಆಹಾರ, ಬಸ್ಸು ಮತ್ತು ಬಟ್ಟೆಯ ಚಿತ್ರ ಫಲಕದೊಂದಿಗೆ ಮಾತಿನ ಅಧಿವೇಶನ.",
      hi: "खाना, बस और कपड़ों के चित्र बोर्ड के साथ भाषण सत्र।",
    },
    caption: { en: "Communication", kn: "ಸಂವಹನ", hi: "संवाद" },
  },
  {
    src: "/images/sensory-play.jpg",
    alt: {
      en: "A child and therapist touch rice and stones in a wooden sensory tray.",
      kn: "ಮಗು ಮತ್ತು ಚಿಕಿತ್ಸಕರು ಅಕ್ಕಿ ಮತ್ತು ಕಲ್ಲುಗಳನ್ನು ಮುಟ್ಟುತ್ತಿದ್ದಾರೆ.",
      hi: "बच्चा और थेरेपिस्ट चावल और पत्थर छू रहे हैं।",
    },
    caption: { en: "Sensory studio", kn: "ಇಂದ್ರಿಯ ಸ್ಟುಡಿಯೋ", hi: "सेंसरी स्टूडियो" },
  },
  {
    src: "/images/art-studio.jpg",
    alt: {
      en: "Indian children and a teacher paint a leaf pattern with turmeric and indigo pigments.",
      kn: "ಮಕ್ಕಳು ಅರಿಶಿನ ಮತ್ತು ನೀಲಿ ಬಣ್ಣದಲ್ಲಿ ಎಲೆ ಚಿತ್ರ ಬಿಡಿಸುತ್ತಿದ್ದಾರೆ.",
      hi: "बच्चे हल्दी और नील से पत्ती का चित्र बना रहे हैं।",
    },
    caption: { en: "Art studio", kn: "ಕಲಾ ಸ್ಟುಡಿಯೋ", hi: "कला स्टूडियो" },
  },
  {
    src: "/images/garden.jpg",
    wide: true,
    alt: {
      en: "Children water plants beside marigolds while a teacher watches in a school garden.",
      kn: "ಶಾಲಾ ತೋಟದಲ್ಲಿ ಮಕ್ಕಳು ಗಿಡಗಳಿಗೆ ನೀರು ಹಾಕುತ್ತಿದ್ದಾರೆ.",
      hi: "स्कूल के बगीचे में बच्चे पौधों को पानी दे रहे हैं।",
    },
    caption: {
      en: "The garden is a classroom with weather.",
      kn: "ತೋಟ ಹವೆಯುಳ್ಳ ತರಗತಿ.",
      hi: "बगीचा मौसम वाली कक्षा है।",
    },
  },
  {
    src: "/images/vocational-kitchen.jpg",
    alt: {
      en: "Young adults prepare millet snacks with an instructor in a steel kitchen.",
      kn: "ಯುವಕರು ಅಡುಗೆಮನೆಯಲ್ಲಿ ತಿಂಡಿ ಮಾಡುತ್ತಿದ್ದಾರೆ.",
      hi: "युवा रसोई में नाश्ता बना रहे हैं।",
    },
    caption: { en: "Youth kitchen", kn: "ಯುವ ಅಡುಗೆಮನೆ", hi: "युवा रसोई" },
  },
  {
    src: "/images/parent-circle.jpg",
    alt: {
      en: "Parents and a counsellor in conversation over tea.",
      kn: "ಪಾಲಕರು ಮತ್ತು ಸಲಹೆಗಾರರ ಸಂಭಾಷಣೆ.",
      hi: "माता-पिता और सलाहकार की बातचीत।",
    },
    caption: { en: "Family circle", kn: "ಕುಟುಂಬ ವೃತ್ತ", hi: "परिवार वृत्त" },
  },
];

export const visit = {
  lede: {
    en: "Come for a conversation. If you bring your child, we will keep the first minutes short and unsurprising.",
    kn: "ಸಂಭಾಷಣೆಗೆ ಬನ್ನಿ. ಮಗುವನ್ನು ಕರೆತಂದರೆ ಮೊದಲ ನಿಮಿಷಗಳನ್ನು ಚಿಕ್ಕದಾಗಿ, ಅಚ್ಚರಿಯಿಲ್ಲದೆ ಇಡುತ್ತೇವೆ.",
    hi: "बातचीत के लिए आइए। बच्चा साथ हो तो पहले मिनट छोटे और बिना अचरज के रखेंगे।",
  },
  expectTitle: { en: "What the hour holds", kn: "ಆ ಗಂಟೆಯಲ್ಲಿ ಏನಿರುತ್ತದೆ", hi: "उस घंटे में क्या होगा" },
  expect: [
    {
      en: "You talk. We listen for the day as it actually is, not the day you feel you should describe.",
      kn: "ನೀವು ಮಾತನಾಡುತ್ತೀರಿ. ಇರಬೇಕೆಂದು ಭಾವಿಸುವ ದಿನವಲ್ಲ, ಇರುವ ದಿನವನ್ನು ಕೇಳುತ್ತೇವೆ.",
      hi: "आप बोलें। हम वह दिन सुनेंगे जो सच में है, वह नहीं जो बताना चाहिए लगे।",
    },
    {
      en: "If your child comes, they can bring a comfort object. There is no audience.",
      kn: "ಮಗು ಬಂದರೆ ಆಸರೆಯ ವಸ್ತು ತರಬಹುದು. ಪ್ರೇಕ್ಷಕರಿಲ್ಲ.",
      hi: "बच्चा आए तो साथ में सुकून की चीज़ ला सकता है। दर्शक नहीं हैं।",
    },
    {
      en: "You leave knowing the next date, or knowing that we are not the right place.",
      kn: "ಮುಂದಿನ ದಿನಾಂಕ ತಿಳಿದು ಹೊರಡುತ್ತೀರಿ, ಅಥವಾ ಇದು ಸರಿಯಾದ ಸ್ಥಳವಲ್ಲ ಎಂದು ತಿಳಿದು.",
      hi: "आप अगली तारीख जानकर जाएँगे, या यह जानकर कि यह सही जगह नहीं।",
    },
  ],
  addressTitle: { en: "Where we are", kn: "ನಾವೆಲ್ಲಿದ್ದೇವೆ", hi: "हम कहाँ हैं" },
  addressBody: {
    en: "The campus is in Bengaluru. The street address is shared when a visit is agreed, so families are not arriving unannounced at a door where children are settling. Tell us your area when you write, and we will talk about the journey.",
    kn: "ಆವರಣ ಬೆಂಗಳೂರಿನಲ್ಲಿದೆ. ಭೇಟಿ ಒಪ್ಪಿದ ಮೇಲೆ ಬೀದಿ ವಿಳಾಸ ಹಂಚಲಾಗುತ್ತದೆ, ಮಕ್ಕಳು ನೆಮ್ಮದಿಯಾಗುವ ಬಾಗಿಲಿಗೆ ಯಾರೂ ಇದ್ದಕ್ಕಿದ್ದಂತೆ ಬಾರದಂತೆ. ನಿಮ್ಮ ಪ್ರದೇಶವನ್ನು ಬರೆಯಿರಿ, ಪ್ರಯಾಣದ ಬಗ್ಗೆ ಮಾತನಾಡುತ್ತೇವೆ.",
    hi: "परिसर बेंगलुरु में है। मुलाकात तय होने पर गली का पता बताया जाता है, ताकि बच्चे सँभल रहे हों तब दरवाज़े पर अचानक कोई न पहुँचे। अपना इलाका लिखें, रास्ते की बात करेंगे।",
  },
  addressSet: {
    en: "Campus",
    kn: "ಆವರಣ",
    hi: "परिसर",
  },
  phoneSoon: {
    en: "The school phone number is added in settings before this page is shared.",
    kn: "ಈ ಪುಟ ಹಂಚುವ ಮೊದಲು ಶಾಲಾ ದೂರವಾಣಿ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ಸೇರಿಸಲಾಗುತ್ತದೆ.",
    hi: "यह पृष्ठ बाँटने से पहले स्कूल का फ़ोन सेटिंग में जोड़ा जाता है।",
  },
  prepTitle: {
    en: "A small list for the visit",
    kn: "ಭೇಟಿಗೆ ಚಿಕ್ಕ ಪಟ್ಟಿ",
    hi: "मुलाकात के लिए छोटी सूची",
  },
  prepLede: {
    en: "Tick what you already have. This list stays on your phone, not on our server.",
    kn: "ಇರುವುದನ್ನು ಗುರುತಿಸಿ. ಈ ಪಟ್ಟಿ ನಿಮ್ಮ ಫೋನಿನಲ್ಲಿರುತ್ತದೆ, ನಮ್ಮ ಸರ್ವರ್‌ನಲ್ಲಲ್ಲ.",
    hi: "जो पहले से है उसे चिह्नित करें। यह सूची आपके फ़ोन पर रहती है, हमारे सर्वर पर नहीं।",
  },
  prep: [
    {
      id: "reports",
      label: {
        en: "Any reports I already have",
        kn: "ನನ್ನ ಬಳಿ ಇರುವ ವರದಿಗಳು",
        hi: "जो रिपोर्टें मेरे पास पहले से हैं",
      },
    },
    {
      id: "snack",
      label: {
        en: "A snack my child will actually eat",
        kn: "ಮಗು ನಿಜವಾಗಿ ತಿನ್ನುವ ತಿಂಡಿ",
        hi: "नाश्ता जो बच्चा सच में खाएगा",
      },
    },
    {
      id: "comfort",
      label: {
        en: "A comfort object, if they want one",
        kn: "ಬೇಕಾದರೆ ಆಸರೆಯ ವಸ್ತು",
        hi: "सुकून की चीज़, अगर वे चाहें",
      },
    },
    {
      id: "question",
      label: {
        en: "The one question I do not want to forget",
        kn: "ಮರೆಯಲೊಲ್ಲದ ಒಂದು ಪ್ರಶ್ನೆ",
        hi: "वह एक सवाल जो भूलना नहीं",
      },
    },
    {
      id: "person",
      label: {
        en: "Who is coming with me",
        kn: "ನನ್ನೊಂದಿಗೆ ಯಾರು ಬರುತ್ತಾರೆ",
        hi: "मेरे साथ कौन आ रहा है",
      },
    },
  ],
};

export const formCopy = {
  parent: { en: "Your name", kn: "ನಿಮ್ಮ ಹೆಸರು", hi: "आपका नाम" },
  phone: { en: "Phone", kn: "ದೂರವಾಣಿ", hi: "फ़ोन" },
  child: { en: "Child’s first name", kn: "ಮಗುವಿನ ಮೊದಲ ಹೆಸರು", hi: "बच्चे का पहला नाम" },
  optional: { en: "optional", kn: "ಐಚ್ಛಿಕ", hi: "वैकल्पिक" },
  age: { en: "Age group", kn: "ವಯೋಮಾನ", hi: "आयु समूह" },
  choose: { en: "Choose", kn: "ಆರಿಸಿ", hi: "चुनें" },
  language: { en: "Language at home", kn: "ಮನೆಯ ಭಾಷೆ", hi: "घर की भाषा" },
  hope: {
    en: "What do you hope will feel easier?",
    kn: "ಏನು ಸುಲಭವಾಗಬೇಕೆಂದು ಬಯಸುತ್ತೀರಿ?",
    hi: "क्या आसान हो, इसकी उम्मीद है?",
  },
  slot: { en: "A time that suits you", kn: "ನಿಮಗೆ ಒಪ್ಪುವ ಸಮಯ", hi: "आपको सूझने वाला समय" },
  slotOptions: [
    { id: "weekday-am", label: { en: "Weekday morning", kn: "ವಾರದ ಬೆಳಿಗ್ಗೆ", hi: "कार्यदिवस की सुबह" } },
    { id: "weekday-pm", label: { en: "Weekday afternoon", kn: "ವಾರದ ಮಧ್ಯಾಹ್ನ", hi: "कार्यदिवस की दोपहर" } },
    { id: "saturday", label: { en: "Saturday morning", kn: "ಶನಿವಾರ ಬೆಳಿಗ್ಗೆ", hi: "शनिवार की सुबह" } },
  ],
  submit: { en: "Prepare my note", kn: "ನನ್ನ ಟಿಪ್ಪಣಿ ಸಿದ್ಧಪಡಿಸಿ", hi: "मेरा नोट तैयार करें" },
  needName: { en: "Please add your name.", kn: "ದಯವಿಟ್ಟು ಹೆಸರು ಬರೆಯಿರಿ.", hi: "कृपया नाम लिखें।" },
  needPhone: {
    en: "Please add a 10-digit mobile number.",
    kn: "ದಯವಿಟ್ಟು 10 ಅಂಕಿಯ ಮೊಬೈಲ್ ಸಂಖ್ಯೆ ಬರೆಯಿರಿ.",
    hi: "कृपया 10 अंकों का मोबाइल नंबर लिखें।",
  },
  needAge: { en: "Please choose an age group.", kn: "ದಯವಿಟ್ಟು ವಯೋಮಾನ ಆರಿಸಿ.", hi: "कृपया आयु समूह चुनें।" },
  successTitle: { en: "Your note is ready", kn: "ನಿಮ್ಮ ಟಿಪ್ಪಣಿ ಸಿದ್ಧ", hi: "आपका नोट तैयार है" },
  successBody: {
    en: "Nothing was stored on a server. Copy the note, or open WhatsApp and send it to the school. If the school number is not in settings yet, choose the chat yourself.",
    kn: "ಸರ್ವರ್‌ನಲ್ಲಿ ಏನೂ ಉಳಿಸಲಾಗಿಲ್ಲ. ಟಿಪ್ಪಣಿ ನಕಲಿಸಿ ಅಥವಾ WhatsApp ತೆರೆದು ಶಾಲೆಗೆ ಕಳುಹಿಸಿ. ಶಾಲಾ ಸಂಖ್ಯೆ ಇನ್ನೂ ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ಇಲ್ಲದಿದ್ದರೆ ಚಾಟ್ ಅನ್ನು ನೀವೇ ಆರಿಸಿ.",
    hi: "सर्वर पर कुछ सहेजा नहीं गया। नोट कॉपी करें, या WhatsApp खोलकर स्कूल को भेजें। स्कूल नंबर अभी सेटिंग में न हो तो चैट खुद चुनें।",
  },
  copy: { en: "Copy note", kn: "ಟಿಪ್ಪಣಿ ನಕಲಿಸಿ", hi: "नोट कॉपी करें" },
  copied: { en: "Copied", kn: "ನಕಲಾಯಿತು", hi: "कॉपी हो गया" },
  whatsapp: { en: "Open WhatsApp", kn: "WhatsApp ತೆರೆಯಿರಿ", hi: "WhatsApp खोलें" },
  email: { en: "Email the school", kn: "ಶಾಲೆಗೆ ಇಮೇಲ್", hi: "स्कूल को ईमेल" },
  another: { en: "Write another note", kn: "ಇನ್ನೊಂದು ಟಿಪ್ಪಣಿ", hi: "एक और नोट" },
  subject: {
    en: "Visit request — Sampige",
    kn: "ಭೇಟಿ ಕೋರಿಕೆ — ಸಂಪಿಗೆ",
    hi: "मुलाकात का अनुरोध — संपिगे",
  },
};

export const notFound = {
  body: {
    en: "That page is not on this site. The front door is still open.",
    kn: "ಆ ಪುಟ ಈ ತಾಣದಲ್ಲಿಲ್ಲ. ಮುಖ್ಯ ಬಾಗಿಲು ತೆರೆದಿದೆ.",
    hi: "वह पृष्ठ इस साइट पर नहीं है। मुख्य दरवाज़ा खुला है।",
  },
  home: { en: "Back to the front door", kn: "ಮುಖ್ಯ ಬಾಗಿಲಿಗೆ", hi: "मुख्य दरवाज़े पर" },
};

export const footer = {
  blurb: {
    en: "A Bengaluru day school for autistic children. Small groups, picture-led days, and parents as partners.",
    kn: "ಸ್ವಲೀನತೆ ಇರುವ ಮಕ್ಕಳಿಗಾಗಿ ಬೆಂಗಳೂರಿನ ದಿನದ ಶಾಲೆ. ಚಿಕ್ಕ ಗುಂಪುಗಳು, ಚಿತ್ರಗಳ ದಿನ ಮತ್ತು ಪಾಲಕರು ಸಹಭಾಗಿಗಳು.",
    hi: "ऑटिज़्म वाले बच्चों के लिए बेंगलुरु का डे स्कूल। छोटे समूह, चित्रों वाला दिन, और माता-पिता साझेदार।",
  },
  privacy: {
    en: "Student photographs are never placed on this public site.",
    kn: "ವಿದ್ಯಾರ್ಥಿಗಳ ಛಾಯಾಚಿತ್ರಗಳನ್ನು ಈ ಸಾರ್ವಜನಿಕ ತಾಣದಲ್ಲಿ ಇಡುವುದಿಲ್ಲ.",
    hi: "विद्यार्थियों की तस्वीरें इस सार्वजनिक साइट पर नहीं रखी जातीं।",
  },
  visit: { en: "Book a visit", kn: "ಭೇಟಿ ಕಾಯ್ದಿರಿಸಿ", hi: "मुलाकात बुक करें" },
  follow: { en: "Follow the school", kn: "ಶಾಲೆಯನ್ನು ಹಿಂಬಾಲಿಸಿ", hi: "स्कूल को फ़ॉलो करें" },
  socialPending: {
    en: "These open once the school’s own pages are added.",
    kn: "ಶಾಲೆಯ ಸ್ವಂತ ಪುಟಗಳನ್ನು ಸೇರಿಸಿದ ಮೇಲೆ ಇವು ತೆರೆಯುತ್ತವೆ.",
    hi: "स्कूल के अपने पेज जुड़ने के बाद ये खुलेंगे।",
  },
};

export function recommend(age: string, selected: string[]) {
  const ids: string[] = [];
  if (age === "early") ids.push("sparks");
  if (age === "primary" || age === "middle") ids.push("studio");
  if (age === "youth" || selected.includes("work")) ids.push("pathways");
  if (selected.includes("talk") || selected.includes("sensory") || selected.includes("daily")) {
    ids.push("therapy");
  }
  if (age === "middle" && selected.includes("daily") && !ids.includes("pathways")) {
    ids.push("pathways");
  }
  ids.push("family");
  return [...new Set(ids)];
}
