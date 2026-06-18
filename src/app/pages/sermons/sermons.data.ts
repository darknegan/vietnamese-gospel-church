import { Localized } from '../../core/i18n.types';
import { COMMUNION, SINGING, TEACHING } from '../../shared/church-assets';

export interface Sermon {
  readonly id: string;
  readonly title: Localized;
  readonly speaker: string;
  readonly series: Localized;
  readonly passage: string;
  readonly date: string;
  readonly image: string;
  readonly url: string;
}

export const SERMONS: readonly Sermon[] = [
  {
    id: 'rest-for-the-weary',
    title: { en: 'Rest for the Weary', vi: 'Sự Yên Nghỉ Cho Người Mệt Mỏi' },
    speaker: 'Pastor John Nguyễn',
    series: { en: 'Come to Me', vi: 'Hãy Đến Cùng Ta' },
    passage: 'Matthew 11:25–30',
    date: 'June 15, 2026',
    image: TEACHING[0],
    url: 'https://youtube.com',
  },
  {
    id: 'a-living-hope',
    title: { en: 'A Living Hope', vi: 'Niềm Hy Vọng Sống' },
    speaker: 'Pastor John Nguyễn',
    series: { en: 'Come to Me', vi: 'Hãy Đến Cùng Ta' },
    passage: '1 Peter 1:3–9',
    date: 'June 8, 2026',
    image: SINGING[2],
    url: 'https://youtube.com',
  },
  {
    id: 'the-table-of-grace',
    title: { en: 'The Table of Grace', vi: 'Bàn Tiệc Ân Điển' },
    speaker: 'Guest: Rev. David Trần',
    series: { en: 'One Family', vi: 'Một Gia Đình' },
    passage: '1 Corinthians 11:23–26',
    date: 'June 1, 2026',
    image: COMMUNION,
    url: 'https://youtube.com',
  },
  {
    id: 'rooted-and-built-up',
    title: { en: 'Rooted and Built Up', vi: 'Đâm Rễ và Lập Nền' },
    speaker: 'Pastor John Nguyễn',
    series: { en: 'One Family', vi: 'Một Gia Đình' },
    passage: 'Colossians 2:6–7',
    date: 'May 25, 2026',
    image: TEACHING[2],
    url: 'https://youtube.com',
  },
  {
    id: 'sent-to-serve',
    title: { en: 'Sent to Serve', vi: 'Được Sai Đi Phục Vụ' },
    speaker: 'Pastor John Nguyễn',
    series: { en: 'On Mission', vi: 'Trong Sứ Mạng' },
    passage: 'Matthew 28:16–20',
    date: 'May 18, 2026',
    image: TEACHING[4],
    url: 'https://youtube.com',
  },
  {
    id: 'the-good-shepherd',
    title: { en: 'The Good Shepherd', vi: 'Người Chăn Hiền Lành' },
    speaker: 'Pastor John Nguyễn',
    series: { en: 'On Mission', vi: 'Trong Sứ Mạng' },
    passage: 'John 10:11–18',
    date: 'May 11, 2026',
    image: TEACHING[3],
    url: 'https://youtube.com',
  },
];
