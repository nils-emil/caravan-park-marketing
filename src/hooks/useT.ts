import { useEffect, useState } from 'react';
import type { Lang, Translations } from '../i18n/types';
import en from '../i18n/en';
import et from '../i18n/et';

const STORAGE_KEY = 'pargihaldur-lang';
const DICTS: Record<Lang, Translations> = { en, et };

function detect(): Lang {
  const saved = typeof window !== 'undefined' ? window.localStorage.getItem(STORAGE_KEY) : null;
  if (saved === 'et' || saved === 'en') return saved;
  const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'et';
  return nav.startsWith('en') ? 'en' : 'et';
}

let currentLang: Lang = detect();
const listeners = new Set<(l: Lang) => void>();

export function setLang(l: Lang) {
  currentLang = l;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, l);
  }
  listeners.forEach(fn => fn(l));
}

export function useT(): { t: Translations; lang: Lang; setLang: (l: Lang) => void } {
  const [lang, setLocal] = useState<Lang>(currentLang);
  useEffect(() => {
    const fn = (l: Lang) => setLocal(l);
    listeners.add(fn);
    return () => { listeners.delete(fn); };
  }, []);
  return { t: DICTS[lang], lang, setLang };
}
