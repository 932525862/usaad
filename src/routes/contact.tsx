import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Ariza va aloqa — USAAD" },
    { name: "description", content: "Mahsulotingizni sinovdan o‘tkazish yoki sertifikatlash uchun USAAD mutaxassisiga murojaat qiling." },
    { property: "og:title", content: "Ariza qoldirish — USAAD" },
    { property: "og:description", content: "Sertifikatlash bo‘yicha dastlabki maslahat va ariza." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-cream px-5 py-8 text-navy md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
            <ArrowLeft size={16}/> {t.nav.home}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-12 py-14 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">{t.contact.badge}</p>
            <h1 className="mt-4 font-display text-6xl font-bold leading-[0.92] md:text-8xl">
              {t.contact.title}
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-navy/60">
              {t.contact.desc}
            </p>
          </div>
          <form className="rounded-3xl bg-navy p-7 text-cream md:p-10" onSubmit={(event) => event.preventDefault()}>
            <div className="grid gap-6">
              <label className="text-sm font-medium">
                {t.contact.labelName}
                <input required className="mt-2 w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 outline-none focus:border-teal" placeholder={t.contact.phName}/>
              </label>
              <label className="text-sm font-medium">
                {t.contact.labelPhone}
                <input required type="tel" className="mt-2 w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 outline-none focus:border-teal" placeholder="+998 __ ___ __ __"/>
              </label>
              <label className="text-sm font-medium">
                {t.contact.labelType}
                <select className="mt-2 w-full rounded-xl border border-cream/20 bg-navy px-4 py-3 outline-none focus:border-teal">
                  <option>{t.contact.typeOil}</option>
                  <option>{t.contact.typeChem}</option>
                  <option>{t.contact.typeInd}</option>
                </select>
              </label>
              <label className="text-sm font-medium">
                {t.contact.labelComment}
                <textarea className="mt-2 min-h-28 w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 outline-none focus:border-teal" placeholder={t.contact.phComment}/>
              </label>
              <Button type="submit" className="h-auto justify-center rounded-full bg-signal px-7 py-4 text-cream hover:bg-teal">
                {t.contact.submitBtn} <Send size={16}/>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}