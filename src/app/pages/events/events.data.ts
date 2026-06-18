import { Localized } from '../../core/i18n.types';
import { FOOD, KIDS, SINGING, TEACHING, TET } from '../../shared/church-assets';

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

export const FEATURED_EVENT: ChurchEvent = {
  id: 'featured-food-night',
  category: 'Community',
  weekday: { en: 'Saturday', vi: 'Thứ Bảy' },
  date: '28',
  month: { en: 'June', vi: 'Tháng 6' },
  time: '5:00 PM – 8:00 PM',
  location: { en: 'Church Courtyard', vi: 'Sân Nhà Thờ' },
  title: { en: 'Hội Chợ Ẩm Thực · Food & Fellowship Night', vi: 'Hội Chợ Ẩm Thực · Đêm Thông Công' },
  description: {
    en: 'An evening of Vietnamese food, music, and friendship. Bring your family and invite a neighbor — there is a seat at the table for everyone.',
    vi: 'Một buổi tối với ẩm thực Việt, âm nhạc và tình thân hữu. Hãy mang theo gia đình và mời người lân cận — luôn có một chỗ dành cho mọi người.',
  },
  image: TET[0],
};

export const EVENT_GROUPS: readonly EventGroup[] = [
  {
    label: { en: 'This week', vi: 'Tuần này' },
    events: [
      {
        id: 'sunday-worship',
        category: 'Worship',
        weekday: { en: 'Sun', vi: 'CN' },
        date: '22',
        month: { en: 'Jun', vi: 'Th6' },
        time: '10:30 AM',
        location: { en: 'Main Sanctuary', vi: 'Nhà thờ chính' },
        title: { en: 'Sunday Worship Service', vi: 'Thờ Phượng Chúa Nhật' },
        description: {
          en: 'Bilingual worship and a gospel-centered message for the whole family.',
          vi: 'Thờ phượng song ngữ và sứ điệp lấy Phúc Âm làm trung tâm cho cả gia đình.',
        },
        image: SINGING[0],
      },
      {
        id: 'wed-prayer',
        category: 'Prayer',
        weekday: { en: 'Wed', vi: 'T4' },
        date: '25',
        month: { en: 'Jun', vi: 'Th6' },
        time: '7:00 PM',
        location: { en: 'Fellowship Hall', vi: 'Phòng Thông Công' },
        title: { en: 'Prayer & Bible Study', vi: 'Cầu Nguyện & Học Kinh Thánh' },
        description: {
          en: 'A midweek gathering to pray together and study the Scriptures.',
          vi: 'Buổi nhóm giữa tuần để cùng cầu nguyện và học Lời Chúa.',
        },
        image: TEACHING[0],
      },
    ],
  },
  {
    label: { en: 'Next week', vi: 'Tuần tới' },
    events: [
      {
        id: 'food-night',
        category: 'Community',
        weekday: { en: 'Sat', vi: 'T7' },
        date: '28',
        month: { en: 'Jun', vi: 'Th6' },
        time: '5:00 PM',
        location: { en: 'Church Courtyard', vi: 'Sân Nhà Thờ' },
        title: { en: 'Food & Fellowship Night', vi: 'Đêm Ẩm Thực & Thông Công' },
        description: {
          en: 'Vietnamese food, music, and friendship for the whole community.',
          vi: 'Ẩm thực Việt, âm nhạc và tình thân hữu cho cả cộng đồng.',
        },
        image: FOOD[0],
      },
      {
        id: 'youth-night',
        category: 'Youth',
        weekday: { en: 'Fri', vi: 'T6' },
        date: '27',
        month: { en: 'Jun', vi: 'Th6' },
        time: '6:30 PM',
        location: { en: 'Youth Room', vi: 'Phòng Thanh Niên' },
        title: { en: 'Youth Group Night', vi: 'Sinh Hoạt Thanh Niên' },
        description: {
          en: 'Games, worship, and real conversations about faith and life.',
          vi: 'Trò chơi, thờ phượng và những trò chuyện chân thật về đức tin và cuộc sống.',
        },
        image: KIDS[1],
      },
    ],
  },
  {
    label: { en: 'Later this month', vi: 'Cuối tháng' },
    events: [
      {
        id: 'family-picnic',
        category: 'Family',
        weekday: { en: 'Sat', vi: 'T7' },
        date: '05',
        month: { en: 'Jul', vi: 'Th7' },
        time: '11:00 AM',
        location: { en: 'Garden Grove Park', vi: 'Công Viên Garden Grove' },
        title: { en: 'All-Church Family Picnic', vi: 'Picnic Gia Đình Hội Thánh' },
        description: {
          en: 'A relaxed afternoon of food and games for every generation.',
          vi: 'Một buổi chiều thư giãn với ẩm thực và trò chơi cho mọi thế hệ.',
        },
        image: TET[2],
      },
    ],
  },
];
