import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { HERO_WORSHIP, KIDS, PEOPLE, TEACHING, TET } from '../../shared/church-assets';
import { SITE } from '../../shared/site.data';
import { WHAT_TO_EXPECT } from './home.data';
import { MINISTRIES } from '../ministries/ministries.data';
import { EVENT_GROUPS } from '../events/events.data';

@Component({
  selector: 'app-home',
  imports: [NgOptimizedImage, RouterLink, ButtonModule, LocalizePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly site = SITE;

  readonly heroImage = HERO_WORSHIP;
  readonly bentoTiles: readonly {
    image: string;
    name: Localized;
    vi: Localized;
    modifier: string;
  }[] = [
    { image: KIDS[0], name: { en: 'Kids & Families', vi: 'Thiếu Nhi & Gia Đình' }, vi: { en: 'Thiếu nhi', vi: 'Thiếu nhi' }, modifier: 'tall' },
    { image: TEACHING[0], name: { en: 'Bible Teaching', vi: 'Học Kinh Thánh' }, vi: { en: 'Học Kinh Thánh', vi: 'Lời Chúa' }, modifier: 'small' },
    { image: PEOPLE[0], name: { en: 'Fellowship', vi: 'Thông Công' }, vi: { en: 'Thông công', vi: 'Cộng đồng' }, modifier: 'small' },
    { image: TET[0], name: { en: 'Community & Cultural Life', vi: 'Đời Sống Cộng Đồng' }, vi: { en: 'Đời sống cộng đồng', vi: 'Văn hóa' }, modifier: 'wide' },
  ];

  readonly expectItems = WHAT_TO_EXPECT;
  readonly ministries = MINISTRIES;
  readonly upcoming = EVENT_GROUPS.flatMap((g) => g.events).slice(0, 3);

  readonly t = {
    heroEyebrow: { en: 'Welcome home', vi: 'Chào mừng về nhà' } as Localized,
    heroTitle: { en: 'A gospel home for every generation.', vi: 'Mái nhà Phúc Âm cho mọi thế hệ.' } as Localized,
    heroVi: {
      en: 'Một gia đình đức tin — nơi người Việt gặp gỡ ân điển của Chúa.',
      vi: 'Một gia đình đức tin — nơi người Việt gặp gỡ ân điển của Chúa.',
    } as Localized,
    heroBody: {
      en: 'We are a Vietnamese-American church family worshiping Jesus together across two languages and every generation. Wherever you are on your journey, there is a seat at the table for you.',
      vi: 'Chúng tôi là một gia đình hội thánh Việt–Mỹ cùng nhau thờ phượng Chúa Giê-xu qua hai ngôn ngữ và mọi thế hệ. Dù bạn đang ở đâu trên hành trình đức tin, luôn có một chỗ dành cho bạn.',
    } as Localized,
    joinSunday: { en: 'Join us Sunday', vi: 'Cùng nhóm Chúa Nhật' } as Localized,
    watchOnline: { en: 'Watch online', vi: 'Xem trực tuyến' } as Localized,
    serviceChip: {
      en: 'Sunday Worship · 10:30 AM · Tiếng Việt & English',
      vi: 'Thờ phượng Chúa Nhật · 10:30 AM · Tiếng Việt & English',
    } as Localized,
    floatDay: { en: 'Sunday', vi: 'Chúa Nhật' } as Localized,
    floatLabel: { en: 'Word & Worship', vi: 'Lời Chúa & Thờ phượng' } as Localized,
    scriptureLabel: { en: 'Scripture', vi: 'Lời Chúa' } as Localized,
    scripture: {
      en: '“Come to me, all you who are weary and burdened, and I will give you rest.”',
      vi: '“Hỡi những kẻ mệt mỏi và gánh nặng, hãy đến cùng ta, ta sẽ cho các ngươi được yên nghỉ.”',
    } as Localized,
    scriptureRef: { en: 'Matthew 11:28', vi: 'Ma-thi-ơ 11:28' } as Localized,
    expectEyebrow: { en: 'You are welcome here', vi: 'Bạn được chào đón' } as Localized,
    expectTitle: { en: 'What to expect on Sunday', vi: 'Điều bạn sẽ thấy vào Chúa Nhật' } as Localized,
    minEyebrow: { en: 'Grow together', vi: 'Cùng nhau lớn lên' } as Localized,
    minTitle: { en: 'Ministries for every season of life', vi: 'Mục vụ cho mọi giai đoạn cuộc đời' } as Localized,
    minAll: { en: 'View all ministries', vi: 'Xem tất cả mục vụ' } as Localized,
    evEyebrow: { en: 'Upcoming', vi: 'Sắp tới' } as Localized,
    evTitle: { en: 'Gather with us this week', vi: 'Cùng nhóm trong tuần này' } as Localized,
    evAll: { en: 'Full calendar', vi: 'Lịch đầy đủ' } as Localized,
    evDetails: { en: 'Details', vi: 'Chi tiết' } as Localized,
    ctaEyebrow: { en: 'Visit us', vi: 'Ghé thăm chúng tôi' } as Localized,
    ctaTitle: { en: 'We would love to meet you this Sunday.', vi: 'Chúng tôi rất mong gặp bạn Chúa Nhật này.' } as Localized,
    ctaInfo: {
      en: '1234 Gospel Way, Garden Grove, CA · Sundays at 10:30 AM',
      vi: '1234 Gospel Way, Garden Grove, CA · Chúa Nhật lúc 10:30 AM',
    } as Localized,
    directions: { en: 'Get directions', vi: 'Chỉ đường' } as Localized,
    contact: { en: 'Contact us', vi: 'Liên hệ' } as Localized,
  };
}
