import { Localized } from '../core/i18n.types';

export interface NavItem {
  readonly label: Localized;
  readonly path: string;
  readonly exact?: boolean;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: { en: 'Home', vi: 'Trang Chủ' }, path: '/', exact: true },
  { label: { en: 'About', vi: 'Giới Thiệu' }, path: '/about' },
  { label: { en: 'Ministries', vi: 'Mục Vụ' }, path: '/ministries' },
  { label: { en: 'Events', vi: 'Sự Kiện' }, path: '/events' },
  { label: { en: 'Sermons', vi: 'Bài Giảng' }, path: '/sermons' },
  { label: { en: 'Gallery', vi: 'Hình Ảnh' }, path: '/gallery' },
  { label: { en: 'Visit', vi: 'Ghé Thăm' }, path: '/visit' },
];
