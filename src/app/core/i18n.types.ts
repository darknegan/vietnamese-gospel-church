export type Lang = 'en' | 'vi';

/** A string available in both site languages. */
export interface Localized {
  readonly en: string;
  readonly vi: string;
}

export function pick(value: Localized, lang: Lang): string {
  return value[lang];
}
