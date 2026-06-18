import { Localized } from '../../core/i18n.types';
import { HEADSHOT, PASTOR, PEOPLE } from '../../shared/church-assets';

export interface Leader {
  readonly name: string;
  readonly role: Localized;
  readonly bio: Localized;
  readonly image: string;
}

export const LEADERS: readonly Leader[] = [
  {
    name: 'Pastor John Nguyễn',
    role: { en: 'Lead Pastor', vi: 'Mục Sư Quản Nhiệm' },
    bio: {
      en: 'John has shepherded our church family for over a decade, preaching the gospel in both Vietnamese and English.',
      vi: 'Mục sư John đã chăn dắt gia đình hội thánh hơn mười năm, rao giảng Phúc Âm bằng cả tiếng Việt và tiếng Anh.',
    },
    image: PASTOR,
  },
  {
    name: 'Mary Trần',
    role: { en: 'Director of Family Ministries', vi: 'Trưởng Ban Gia Đình' },
    bio: {
      en: 'Mary leads our children and youth ministries, helping the next generation know and follow Jesus.',
      vi: 'Cô Mary phụ trách ban thiếu nhi và thanh niên, giúp thế hệ trẻ nhận biết và theo Chúa Giê-xu.',
    },
    image: HEADSHOT,
  },
  {
    name: 'David Lê',
    role: { en: 'Worship & Music Lead', vi: 'Trưởng Ban Thờ Phượng' },
    bio: {
      en: 'David guides our worship team, blending Vietnamese hymns and contemporary songs each Sunday.',
      vi: 'Anh David hướng dẫn ban thờ phượng, hòa quyện thánh ca tiếng Việt và bài hát đương đại mỗi Chúa Nhật.',
    },
    image: PEOPLE[2],
  },
];

export interface Pillar {
  readonly title: Localized;
  readonly body: Localized;
}

export const PILLARS: readonly Pillar[] = [
  {
    title: { en: 'Worship', vi: 'Thờ Phượng' },
    body: {
      en: 'We gather weekly to worship Jesus in spirit and truth, across two languages and every generation.',
      vi: 'Chúng tôi nhóm lại hằng tuần để thờ phượng Chúa Giê-xu bằng tâm thần và lẽ thật, qua hai ngôn ngữ và mọi thế hệ.',
    },
  },
  {
    title: { en: 'Discipleship', vi: 'Môn Đồ Hóa' },
    body: {
      en: 'We grow together in God’s word through Bible study, prayer, and authentic community.',
      vi: 'Chúng tôi cùng nhau lớn lên trong Lời Chúa qua việc học Kinh Thánh, cầu nguyện và đời sống cộng đồng chân thật.',
    },
  },
  {
    title: { en: 'Mission', vi: 'Sứ Mạng' },
    body: {
      en: 'We serve our neighbors in Garden Grove and beyond, sharing the hope of the gospel in word and deed.',
      vi: 'Chúng tôi phục vụ người lân cận tại Garden Grove và xa hơn, chia sẻ niềm hy vọng của Phúc Âm bằng lời nói và việc làm.',
    },
  },
];
