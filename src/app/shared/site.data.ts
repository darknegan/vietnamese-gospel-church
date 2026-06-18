import { Localized } from '../core/i18n.types';

/**
 * Church-wide details. These are realistic placeholders — update with the
 * congregation's real information (address, service times, leadership, and the
 * external giving URL) when available.
 */
export const SITE = {
  name: 'Vietnamese Gospel Church',
  nameVi: 'Hội Thánh Phúc Âm',
  email: 'hello@vietnamesegospel.church',
  phone: '(714) 555-0142',
  address: {
    line1: '1234 Gospel Way',
    line2: 'Garden Grove, CA 92840',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Garden+Grove+CA',
  /** External giving provider — replace with the church's real giving link. */
  givingUrl: 'https://www.example.com/give',
  social: {
    facebook: 'https://facebook.com',
    youtube: 'https://youtube.com',
    instagram: 'https://instagram.com',
  },
} as const;

export interface ServiceTime {
  readonly name: Localized;
  readonly day: Localized;
  readonly time: string;
  readonly location: Localized;
}

export const SERVICE_TIMES: readonly ServiceTime[] = [
  {
    name: { en: 'Sunday Worship', vi: 'Thờ Phượng Chúa Nhật' },
    day: { en: 'Every Sunday', vi: 'Mỗi Chúa Nhật' },
    time: '10:30 AM',
    location: { en: 'Main Sanctuary', vi: 'Nhà thờ chính' },
  },
  {
    name: { en: 'Prayer & Bible Study', vi: 'Cầu Nguyện & Học Kinh Thánh' },
    day: { en: 'Wednesdays', vi: 'Thứ Tư' },
    time: '7:00 PM',
    location: { en: 'Fellowship Hall', vi: 'Phòng Thông Công' },
  },
  {
    name: { en: 'Youth & Kids', vi: 'Thiếu Nhi & Thanh Niên' },
    day: { en: 'Sundays', vi: 'Chúa Nhật' },
    time: '10:30 AM',
    location: { en: 'Education Wing', vi: 'Khu Giáo Dục' },
  },
];
