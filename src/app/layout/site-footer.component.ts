import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../core/language.service';
import { LocalizePipe } from '../core/localize.pipe';
import { Localized } from '../core/i18n.types';
import { SITE } from '../shared/site.data';

interface FooterLink {
  readonly label: Localized;
  readonly path: string;
  readonly external?: boolean;
}

interface FooterColumn {
  readonly title: Localized;
  readonly links: readonly FooterLink[];
}

@Component({
  selector: 'app-site-footer',
  imports: [RouterLink, LocalizePipe],
  templateUrl: './site-footer.component.html',
  styleUrl: './site-footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFooterComponent {
  private readonly languageService = inject(LanguageService);

  readonly lang = this.languageService.lang;
  readonly site = SITE;
  readonly year = new Date().getFullYear();

  readonly blurb: Localized = {
    en: 'A Vietnamese-American church family worshiping Jesus across two languages and every generation.',
    vi: 'Một gia đình hội thánh Việt–Mỹ thờ phượng Chúa Giê-xu qua hai ngôn ngữ và mọi thế hệ.',
  };

  readonly columns: readonly FooterColumn[] = [
    {
      title: { en: 'Visit', vi: 'Ghé Thăm' },
      links: [
        { label: { en: 'Plan your visit', vi: 'Lên kế hoạch ghé thăm' }, path: '/visit' },
        { label: { en: 'Service times', vi: 'Giờ nhóm' }, path: '/visit' },
        { label: { en: 'Events', vi: 'Sự kiện' }, path: '/events' },
      ],
    },
    {
      title: { en: 'Explore', vi: 'Khám Phá' },
      links: [
        { label: { en: 'About us', vi: 'Về chúng tôi' }, path: '/about' },
        { label: { en: 'Ministries', vi: 'Mục vụ' }, path: '/ministries' },
        { label: { en: 'Sermons', vi: 'Bài giảng' }, path: '/sermons' },
        { label: { en: 'Gallery', vi: 'Hình ảnh' }, path: '/gallery' },
      ],
    },
    {
      title: { en: 'Connect', vi: 'Kết Nối' },
      links: [{ label: { en: 'Give online', vi: 'Dâng hiến' }, path: '/give' }],
    },
  ];

  readonly rights: Localized = {
    en: 'All rights reserved.',
    vi: 'Bảo lưu mọi quyền.',
  };
}
