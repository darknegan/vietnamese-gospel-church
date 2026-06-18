import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { GalleriaModule } from 'primeng/galleria';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import { FOOD, KIDS, PEOPLE, SINGING, TET } from '../../shared/church-assets';

interface GalleryImage {
  readonly src: string;
  readonly alt: string;
}

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage, GalleriaModule, LocalizePipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;

  readonly featured: GalleryImage[] = [
    { src: TET[0], alt: 'Tết celebration at church' },
    { src: SINGING[0], alt: 'Worship and singing' },
    { src: FOOD[0], alt: 'Food and fellowship' },
    { src: KIDS[0], alt: 'Children’s ministry' },
    { src: PEOPLE[0], alt: 'Church family fellowship' },
    { src: TET[2], alt: 'Lunar New Year gathering' },
  ];

  readonly grid: readonly GalleryImage[] = [
    { src: SINGING[2], alt: 'Worship team' },
    { src: TET[4], alt: 'Tết festivities' },
    { src: KIDS[1], alt: 'Kids at church' },
    { src: PEOPLE[2], alt: 'Fellowship after service' },
    { src: FOOD[2], alt: 'Shared meal' },
    { src: TET[6], alt: 'Cultural celebration' },
    { src: SINGING[3], alt: 'Congregational singing' },
    { src: PEOPLE[4], alt: 'Community gathering' },
    { src: KIDS[2], alt: 'Children learning' },
  ];

  readonly responsiveOptions = [
    { breakpoint: '991px', numVisible: 4 },
    { breakpoint: '767px', numVisible: 3 },
    { breakpoint: '575px', numVisible: 2 },
  ];

  readonly t = {
    eyebrow: { en: 'Gallery', vi: 'Hình ảnh' } as Localized,
    title: { en: 'Life together at VGC', vi: 'Đời sống chung tại Hội Thánh' } as Localized,
    lead: {
      en: 'Moments of worship, fellowship, and celebration from our church family.',
      vi: 'Những khoảnh khắc thờ phượng, thông công và lễ hội của gia đình hội thánh.',
    } as Localized,
    moreTitle: { en: 'More moments', vi: 'Thêm khoảnh khắc' } as Localized,
  };
}
