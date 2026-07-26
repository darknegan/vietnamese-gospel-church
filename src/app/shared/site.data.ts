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
    line1: '626 W Olive St',
    line2: 'Rogers, AR 72756',
  },
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=626+W+Olive+St,+Rogers,+AR+72756',
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
    time: '3:00 PM',
    location: { en: 'Main Sanctuary', vi: 'Nhà thờ chính' },
  },
  {
    name: { en: 'Prayer & Bible Study', vi: 'Cầu Nguyện & Học Kinh Thánh' },
    day: { en: 'Tuesdays', vi: 'Thứ Ba' },
    time: '6:00 PM',
    location: { en: 'Online', vi: 'Trực tuyến' },
  },
  {
    name: { en: 'Youth & Kids', vi: 'Thiếu Nhi & Thanh Niên' },
    day: { en: 'Sundays', vi: 'Chúa Nhật' },
    time: '3:00 PM',
    location: { en: 'Education Wing', vi: 'Khu Giáo Dục' },
  },
];
