'use client';

import { SimpleSelect } from '@/components';
import { usePathname, useRouter } from '@/providers/i18n';
import {
  isSupportedLocale,
  locales,
  type SupportedLocales,
} from '@/providers/i18n/routing';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { startTransition, useEffect, useState } from 'react';
import { BrFlag, jaFlag, UsFlag } from '../../icons';
import styles from './locale.module.css';

export const flagMap: Record<SupportedLocales, () => React.ReactNode> = {
  pt: BrFlag,
  en: UsFlag,
  ja: jaFlag,
};

export default function LanguagePicker() {
  const currLocale = useLocale();
  const [currHash, setCurrHash] = useState('');
  const currPath = usePathname();
  const currSearch = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    startTransition(() => {
      setCurrHash(window.location.hash);
    });
  }, []);

  function handleLocaleSwitch(newLocale: string) {
    if (currLocale == newLocale) return;

    const searchStr = currSearch.toString();
    const queryStr = searchStr ? `?${searchStr}` : '';

    const localeRef = `${currPath}${queryStr}${currHash}`;
    router.replace(localeRef, { locale: newLocale });
  }

  function optionComponent(option: string): React.ReactNode {
    if (!isSupportedLocale(option)) return <></>;

    const FlagComponent = flagMap[option];
    return (
      <div key={`item-${option}`} className={` ${styles['item-box']}`}>
        <FlagComponent />
      </div>
    );
  }

  return (
    <SimpleSelect
      selected={currLocale}
      values={locales}
      optionRendering={optionComponent}
      onSelect={handleLocaleSwitch}
    />
  );
}
