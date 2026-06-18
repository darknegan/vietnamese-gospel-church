import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { LanguageService } from '../../core/language.service';
import { LocalizePipe } from '../../core/localize.pipe';
import { Localized } from '../../core/i18n.types';
import {
  CATEGORY_FILTERS,
  EVENT_GROUPS,
  EventCategory,
  FEATURED_EVENT,
} from './events.data';

@Component({
  selector: 'app-events',
  imports: [NgOptimizedImage, ButtonModule, TagModule, LocalizePipe],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EventsComponent {
  private readonly languageService = inject(LanguageService);
  readonly lang = this.languageService.lang;

  readonly featured = FEATURED_EVENT;
  readonly filters = CATEGORY_FILTERS;
  readonly activeFilter = signal<'all' | EventCategory>('all');

  readonly visibleGroups = computed(() => {
    const filter = this.activeFilter();
    return EVENT_GROUPS.map((group) => ({
      label: group.label,
      events: filter === 'all' ? group.events : group.events.filter((e) => e.category === filter),
    })).filter((group) => group.events.length > 0);
  });

  readonly t = {
    eyebrow: { en: 'Events', vi: 'Sự kiện' } as Localized,
    title: { en: 'Gather with us', vi: 'Cùng nhóm với chúng tôi' } as Localized,
    lead: {
      en: 'From Sunday worship to food nights and prayer gatherings, there is always a way to belong. Everyone is welcome.',
      vi: 'Từ thờ phượng Chúa Nhật đến đêm ẩm thực và buổi cầu nguyện, luôn có cách để bạn thuộc về. Mọi người đều được chào đón.',
    } as Localized,
    featuredLabel: { en: 'Featured event', vi: 'Sự kiện nổi bật' } as Localized,
    rsvp: { en: 'RSVP', vi: 'Đăng ký' } as Localized,
    addCalendar: { en: 'Add to calendar', vi: 'Thêm vào lịch' } as Localized,
    details: { en: 'Details', vi: 'Chi tiết' } as Localized,
    empty: { en: 'No events in this category right now.', vi: 'Hiện chưa có sự kiện nào trong mục này.' } as Localized,
  };

  setFilter(id: 'all' | EventCategory): void {
    this.activeFilter.set(id);
  }
}
