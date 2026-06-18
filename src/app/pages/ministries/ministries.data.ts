import { Localized } from '../../core/i18n.types';
import { FOOD, KIDS, PEOPLE, SINGING, TEACHING } from '../../shared/church-assets';

export interface Ministry {
  readonly id: string;
  readonly name: Localized;
  readonly tagline: Localized;
  readonly description: Localized;
  readonly meta: Localized;
  readonly image: string;
}

export const MINISTRIES: readonly Ministry[] = [
  {
    id: 'kids',
    name: { en: 'Children’s Ministry', vi: 'Thiếu Nhi' },
    tagline: { en: 'Ages 0–11', vi: 'Từ 0–11 tuổi' },
    description: {
      en: 'A safe, joyful place where kids learn about Jesus through Bible stories, songs, and play — with caring, screened volunteers.',
      vi: 'Một nơi an toàn và vui tươi để các em nhỏ học biết Chúa Giê-xu qua câu chuyện Kinh Thánh, bài hát và trò chơi — với các tình nguyện viên tận tâm.',
    },
    meta: { en: 'Sundays · 10:30 AM', vi: 'Chúa Nhật · 10:30 AM' },
    image: KIDS[0],
  },
  {
    id: 'youth',
    name: { en: 'Youth & Young Adults', vi: 'Thanh Niên' },
    tagline: { en: 'Grades 6–college', vi: 'Lớp 6 đến đại học' },
    description: {
      en: 'Students grow in faith and friendship through weekly gatherings, mentoring, and serving together across two cultures.',
      vi: 'Các bạn trẻ lớn lên trong đức tin và tình bạn qua các buổi nhóm hằng tuần, sự cố vấn và cùng nhau phục vụ giữa hai nền văn hóa.',
    },
    meta: { en: 'Fridays · 6:30 PM', vi: 'Thứ Sáu · 6:30 PM' },
    image: PEOPLE[0],
  },
  {
    id: 'worship',
    name: { en: 'Worship & Music', vi: 'Thờ Phượng & Ca Nhạc' },
    tagline: { en: 'Choir & worship team', vi: 'Ca đoàn & ban thờ phượng' },
    description: {
      en: 'We lift our voices in Vietnamese and English, blending hymns and contemporary songs to worship Jesus together.',
      vi: 'Chúng tôi cất tiếng hát bằng tiếng Việt và tiếng Anh, hòa quyện thánh ca và bài hát đương đại để cùng nhau thờ phượng Chúa Giê-xu.',
    },
    meta: { en: 'Rehearsal · Thursdays', vi: 'Tập dượt · Thứ Năm' },
    image: SINGING[0],
  },
  {
    id: 'english',
    name: { en: 'English Course (ESL)', vi: 'Lớp Anh Văn (ESL)' },
    tagline: { en: 'Free community class', vi: 'Lớp cộng đồng miễn phí' },
    description: {
      en: 'A free English class serving our neighbors — building confidence, friendship, and a warm welcome into church life.',
      vi: 'Lớp Anh văn miễn phí phục vụ người lân cận — xây dựng sự tự tin, tình bạn và sự chào đón nồng ấm vào đời sống hội thánh.',
    },
    meta: { en: 'Saturdays · 9:00 AM', vi: 'Thứ Bảy · 9:00 AM' },
    image: TEACHING[1],
  },
  {
    id: 'fellowship',
    name: { en: 'Fellowship & Meals', vi: 'Thông Công & Ẩm Thực' },
    tagline: { en: 'All generations', vi: 'Mọi thế hệ' },
    description: {
      en: 'Shared meals and hospitality where friendships deepen and no one eats alone. Everyone is welcome at the table.',
      vi: 'Những bữa ăn chung và lòng hiếu khách, nơi tình thân hữu thêm sâu đậm và không ai phải ăn một mình. Mọi người đều được chào đón.',
    },
    meta: { en: 'First Sunday · Lunch', vi: 'Chúa Nhật đầu tháng · Bữa trưa' },
    image: FOOD[0],
  },
  {
    id: 'prayer',
    name: { en: 'Prayer & Bible Study', vi: 'Cầu Nguyện & Học Kinh Thánh' },
    tagline: { en: 'Midweek gathering', vi: 'Nhóm giữa tuần' },
    description: {
      en: 'We gather midweek to pray for one another and our city, and to dig deeper into God’s word together.',
      vi: 'Chúng tôi nhóm lại giữa tuần để cầu nguyện cho nhau và cho thành phố, cùng nhau tìm hiểu sâu hơn Lời Chúa.',
    },
    meta: { en: 'Wednesdays · 7:00 PM', vi: 'Thứ Tư · 7:00 PM' },
    image: TEACHING[0],
  },
];
