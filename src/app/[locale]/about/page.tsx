import React from 'react'
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";

export default async function AboutPage({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, ["home", "common"], null, null);
  const username = "John Doe"

  return (
    <TranslationsProvider locale={locale} namespaces={["home", "common"]} resources={resources}>

    <h2 className='text-xl font-bold'>{t("subheader", {username})}</h2>
    </TranslationsProvider>
  )
}
