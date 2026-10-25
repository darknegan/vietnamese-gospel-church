import { Localized } from '../../core/i18n.types';
import { SINGING } from '../../shared/church-assets';

export type EventCategory = 'Worship' | 'Prayer' | 'Family' | 'Community' | 'Youth';

export interface ChurchEvent {
  readonly id: string;
  readonly category: EventCategory;
  readonly weekday: Localized;
  readonly date: string;
  readonly month: Localized;
  readonly time: string;
  readonly location: Localized;
  readonly title: Localized;
  readonly description: Localized;
  readonly image: string;
}

export interface EventGroup {
  readonly label: Localized;
  readonly events: readonly ChurchEvent[];
}

export interface CategoryFilter {
  readonly id: 'all' | EventCategory;
  readonly label: Localized;
}

export const CATEGORY_FILTERS: readonly CategoryFilter[] = [
  { id: 'all', label: { en: 'All events', vi: 'Tất cả' } },
  { id: 'Worship', label: { en: 'Worship', vi: 'Thờ phượng' } },
  { id: 'Prayer', label: { en: 'Prayer', vi: 'Cầu nguyện' } },
  { id: 'Family', label: { en: 'Family', vi: 'Gia đình' } },
  { id: 'Community', label: { en: 'Community', vi: 'Cộng đồng' } },
  { id: 'Youth', label: { en: 'Youth', vi: 'Thanh niên' } },
];

const SUNDAY_WORSHIP: ChurchEvent = {
  id: 'sunday-worship',
  category: 'Worship',
  weekday: { en: 'Sun', vi: 'CN' },
  date: '22',
  month: { en: 'Jun', vi: 'Th6' },
  time: '3:00 PM',
  location: { en: 'Main Sanctuary', vi: 'Nhà thờ chính' },
  title: { en: 'Sunday Worship Service', vi: 'Thờ Phượng Chúa Nhật' },
  description: {
    en: 'Bilingual worship and a gospel-centered message for the whole family.',
    vi: 'Thờ phượng song ngữ và sứ điệp lấy Phúc Âm làm trung tâm cho cả gia đình.',
  },
  image: SINGING[0],
};

export const FEATURED_EVENT: ChurchEvent | null = SUNDAY_WORSHIP;

export const EVENT_GROUPS: readonly EventGroup[] = [
  {
    label: { en: 'This week', vi: 'Tuần này' },
    events: [SUNDAY_WORSHIP],
  },
];
