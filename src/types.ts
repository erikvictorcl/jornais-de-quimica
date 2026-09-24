export interface NewspaperItem {
  id: string;
  title: string;
  discipline: 'Química Geral' | 'Físico-Química' | 'Química Orgânica' | 'Química Inorgânica';
  thinkerOrTheme: string;
  era: string;
  headline: string;
  lead: string;
  description: string;
  previewUrl: string;
  keySections: string[];
  quote: string;
  sheetNumber?: string;
  badgeLabel?: string;
}

// Backward compatibility alias
export type MindMapItem = NewspaperItem;

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  pricePlaceholder: string;
  priceNote?: string;
  features: { text: string; included: boolean; isPlaceholder?: boolean }[];
  ctaText: string;
  popular?: boolean;
}


