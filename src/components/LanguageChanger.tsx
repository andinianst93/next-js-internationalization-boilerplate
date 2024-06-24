'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../i18nConfig';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from './ui/button';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleClick = (newLocale: string) => {
    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault

    ) {
      router.push('/' + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };


  return (
    <div className='relative lg:px-16 px-6'>
      <div className='absolute -top-12 right-20'>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size='icon'>
            {currentLocale.toUpperCase()}
            <span className='sr-only'>Toggle lang</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end'>
          <DropdownMenuItem onClick={() => handleClick('en')}>
            En
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClick('id')}>
            Id
          </DropdownMenuItem>
          
        </DropdownMenuContent>
      </DropdownMenu>

      </div>
    </div>
  );
}