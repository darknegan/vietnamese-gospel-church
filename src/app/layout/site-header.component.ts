import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from '../core/language.service';
import { LocalizePipe } from '../core/localize.pipe';
import { Lang, Localized } from '../core/i18n.types';
import { NAV_ITEMS } from '../shared/nav.data';
import { SITE } from '../shared/site.data';

@Component({
  selector: 'app-site-header',
  imports: [RouterLink, RouterLinkActive, ButtonModule, LocalizePipe],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  private readonly languageService = inject(LanguageService);

  readonly lang = this.languageService.lang;
  readonly navItems = NAV_ITEMS;
  readonly site = SITE;
  readonly mobileOpen = signal(false);

  readonly giveLabel: Localized = { en: 'Give', vi: 'Dâng Hiến' };
  readonly visitLabel: Localized = { en: 'Plan a Visit', vi: 'Ghé Thăm' };
  readonly menuLabel: Localized = { en: 'Menu', vi: 'Trình Đơn' };

  setLang(lang: Lang): void {
    this.languageService.set(lang);
  }

  toggleMobile(): void {
    this.mobileOpen.update((open) => !open);
  }

  closeMobile(): void {
    this.mobileOpen.set(false);
  }
}
