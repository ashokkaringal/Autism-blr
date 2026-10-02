export type Lang = "en" | "kn" | "hi";
export type T = Record<Lang, string>;

/**
 * Replace these details before sharing the site publicly.
 * Sentences that include the school name also live in src/content.ts.
 * Set showSetupNote to false once the name, phone, and address are real.
 * whatsapp: country code + number, digits only, e.g. "918012345678".
 */
export const school = {
  showSetupNote: true,
  name: {
    en: "Sampige",
    kn: "ಸಂಪಿಗೆ",
    hi: "संपिगे",
  } satisfies T,
  fullName: {
    en: "Sampige Centre for Autism",
    kn: "ಸಂಪಿಗೆ ಸ್ವಲೀನತಾ ಕೇಂದ್ರ",
    hi: "संपिगे ऑटिज़्म केंद्र",
  } satisfies T,
  city: {
    en: "Bengaluru",
    kn: "ಬೆಂಗಳೂರು",
    hi: "बेंगलुरु",
  } satisfies T,
  phone: "",
  email: "",
  whatsapp: "",
  address: "",
  /** Paste the school’s real page addresses. Empty links stay visible but do not open a fake profile. */
  social: {
    instagram: "",
    facebook: "",
    youtube: "",
  },
  hours: {
    en: "Monday to Friday, 8:30 am – 3:00 pm",
    kn: "ಸೋಮವಾರದಿಂದ ಶುಕ್ರವಾರ, ಬೆಳಿಗ್ಗೆ 8:30 – ಮಧ್ಯಾಹ್ನ 3:00",
    hi: "सोमवार से शुक्रवार, सुबह 8:30 – दोपहर 3:00",
  } satisfies T,
};
