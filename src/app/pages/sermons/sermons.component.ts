import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { SERMONS } from './sermons.data';

@Component({
  selector: 'app-sermons',
  imports: [NgOptimizedImage, ButtonModule, TagModule, LocalizePipe],
  templateUrl: './sermons.component.html',
  styleUrl: './sermons.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SermonsComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;

  readonly latest = SERMONS[0];
  readonly rest = SERMONS.slice(1);

  readonly t = {
    eyebrow: { en: 'Sermons', vi: 'Bài giảng' } as Localized,
    title: { en: 'Teaching for everyday faith', vi: 'Bài giảng cho đức tin mỗi ngày' } as Localized,
    lead: {
      en: 'Catch up on recent messages or revisit a favorite. Every sermon points to Jesus and his good news.',
      vi: 'Xem lại các bài giảng gần đây hoặc nghe lại bài bạn yêu thích. Mỗi bài giảng đều hướng về Chúa Giê-xu và Phúc Âm.',
    } as Localized,
    latestLabel: { en: 'Latest message', vi: 'Bài giảng mới nhất' } as Localized,
    watch: { en: 'Watch', vi: 'Xem' } as Localized,
    listen: { en: 'Listen', vi: 'Nghe' } as Localized,
    recent: { en: 'Recent messages', vi: 'Các bài giảng gần đây' } as Localized,
  };
}
