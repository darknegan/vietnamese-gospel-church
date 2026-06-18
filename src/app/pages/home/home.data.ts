import { Localized } from '../../core/i18n.types';

export interface ExpectItem {
  readonly num: string;
  readonly title: Localized;
  readonly body: Localized;
}

export const WHAT_TO_EXPECT: readonly ExpectItem[] = [
  {
    num: '01',
    title: { en: 'A warm welcome', vi: 'Sự chào đón nồng ấm' },
    body: {
      en: 'Arrive a few minutes early and our greeters will help you find coffee, a seat, and kids check-in.',
      vi: 'Hãy đến sớm vài phút, ban tiếp tân sẽ giúp bạn tìm chỗ ngồi, cà phê và nơi gửi các em nhỏ.',
    },
  },
  {
    num: '02',
    title: { en: 'Worship in two languages', vi: 'Thờ phượng song ngữ' },
    body: {
      en: 'We sing and teach in Vietnamese and English so the whole family can worship together.',
      vi: 'Chúng tôi hát và giảng bằng tiếng Việt và tiếng Anh để cả gia đình cùng thờ phượng.',
    },
  },
  {
    num: '03',
    title: { en: 'A gospel-centered message', vi: 'Sứ điệp lấy Phúc Âm làm trung tâm' },
    body: {
      en: 'Every gathering points to Jesus through clear, encouraging teaching from the Bible.',
      vi: 'Mỗi buổi nhóm đều hướng về Chúa Giê-xu qua sự giảng dạy rõ ràng và khích lệ từ Kinh Thánh.',
    },
  },
];

export interface HomeMinistry {
  readonly name: Localized;
  readonly vi: Localized;
  readonly path: string;
}
