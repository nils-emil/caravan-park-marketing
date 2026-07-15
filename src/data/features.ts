import type { Translations } from '../i18n/types';

export type FeatureKey = keyof Translations['features']['items'];

// Order matters — drives the feature grid layout.
export const FEATURE_KEYS: FeatureKey[] = [
  'bookings', 'gates', 'accounting', 'aiEditors',
  'aiPricing', 'sitemap', 'multilang', 'offers',
  'notifications', 'analytics', 'posters',
];
