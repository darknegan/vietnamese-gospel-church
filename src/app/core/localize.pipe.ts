import { Pipe, PipeTransform } from '@angular/core';
import { Lang, Localized } from './i18n.types';

/**
 * Resolves a {@link Localized} value to the given language.
 * Pure pipe: re-evaluates whenever the value or `lang` argument changes,
 * so passing the language signal (`text | localize: lang()`) updates the
 * view on toggle without manual change detection.
 */
@Pipe({ name: 'localize', pure: true })
export class LocalizePipe implements PipeTransform {
  transform(value: Localized | null | undefined, lang: Lang): string {
    if (!value) {
      return '';
    }
    return value[lang];
  }
}
