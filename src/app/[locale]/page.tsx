import Link from "next/link";
import initTranslations from "@/app/i18n";
import TranslationsProvider from "@/components/TranslationProvider";
import ExampleClientComponent from "@/components/ExampleClientComponent";
import LanguageChanger from "@/components/LanguageChanger";

export default async function Home({ params: { locale } }: any) {
  const { t, resources } = await initTranslations(locale, ["home", "common"], null, null);

  return (
    <TranslationsProvider locale={locale} namespaces={["home", "common"]} resources={resources}>
      <LanguageChanger />
      <main className="flex min-h-screen flex-col items-center  gap-8 p-24">
        <h1 className="text-4xl font-bold">{t("header")}</h1>
        <ExampleClientComponent />
        <Link className="text-blue-800" href="/about">
          {t("common:about_us")}
        </Link>
      </main>
    </TranslationsProvider>
  );
}
