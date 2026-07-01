'use client';

import { SimpleSelect } from '@/components/Select';
import { usePathname, useRouter } from '@/providers/i18n/navigation';
import {
  isSupportedLocale,
  locales,
  type SupportedLocales,
} from '@/providers/i18n/routing';
import { useLocale } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { BrFlag, jaFlag, UsFlag } from '../../icons';
import styles from './locale.module.css';

export const flagMap: Record<SupportedLocales, () => React.ReactNode> = {
  pt: BrFlag,
  en: UsFlag,
  ja: jaFlag,
};

export default function LocalePicker() {
  const currLocale = useLocale();
  const currPath = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleLocaleChange(newLocale: string) {
    if (!isSupportedLocale(newLocale)) return;

    let baseUrl = currPath;
    if (searchParams.size > 0) {
      baseUrl = `${baseUrl}?${searchParams.toString()}`;
    }

    router.push(baseUrl, { locale: newLocale });
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
      onSelect={handleLocaleChange}
    />
  );
}
