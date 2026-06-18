import { DOCUMENT, Injectable, effect, inject, signal } from '@angular/core';
import { Lang } from './i18n.types';

const STORAGE_KEY = 'vgc-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly document = inject(DOCUMENT);

  readonly lang = signal<Lang>(this.readInitialLang());

  constructor() {
    effect(() => {
      const lang = this.lang();
      try {
        localStorage.setItem(STORAGE_KEY, lang);
      } catch {
        /* storage unavailable — ignore */
      }
      const root = this.document.documentElement;
      if (root) {
        root.lang = lang;
      }
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
  }

  toggle(): void {
    this.lang.update((current) => (current === 'en' ? 'vi' : 'en'));
  }

  private readInitialLang(): Lang {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'en' || stored === 'vi') {
        return stored;
      }
    } catch {
      /* storage unavailable — ignore */
    }
    return 'en';
  }
}
