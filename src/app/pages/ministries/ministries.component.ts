import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { MINISTRIES } from './ministries.data';

@Component({
  selector: 'app-ministries',
  imports: [NgOptimizedImage, RouterLink, ButtonModule, LocalizePipe],
  templateUrl: './ministries.component.html',
  styleUrl: './ministries.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinistriesComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;
  readonly ministries = MINISTRIES;

  readonly t = {
    eyebrow: { en: 'Ministries', vi: 'Mục vụ' } as Localized,
    title: { en: 'Find your place to belong', vi: 'Tìm nơi bạn thuộc về' } as Localized,
    lead: {
      en: 'From the youngest child to the oldest grandparent, there is a place for you to grow, serve, and build friendships that last.',
      vi: 'Từ em bé nhỏ nhất đến ông bà lớn tuổi nhất, luôn có một nơi để bạn lớn lên, phục vụ và xây dựng tình bạn bền lâu.',
    } as Localized,
    learn: { en: 'Learn more', vi: 'Tìm hiểu thêm' } as Localized,
    ctaTitle: { en: 'Not sure where to start?', vi: 'Chưa biết bắt đầu từ đâu?' } as Localized,
    ctaBody: {
      en: 'Plan a visit and we will help you find the right fit for you and your family.',
      vi: 'Hãy ghé thăm và chúng tôi sẽ giúp bạn tìm mục vụ phù hợp cho bạn và gia đình.',
    } as Localized,
    visit: { en: 'Plan a visit', vi: 'Lên kế hoạch ghé thăm' } as Localized,
  };
}
