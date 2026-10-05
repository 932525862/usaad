import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Menu, Phone, CheckCircle2 } from "lucide-react";
import laboratoryImage from "@/assets/neftlab-laboratory.jpg";
import usaadLogo from "@/assets/bgusaad.png";
import fuelTestingImg from "@/assets/fuel-testing.png";
import industrialInspectionImg from "@/assets/industrial-inspection.png";
import chemicalLabImg from "@/assets/chemical-lab.png";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "USAAD — Neft va sanoat mahsulotlari sertifikatlash markazi | Toshkent" },
      {
        name: "description",
        content:
          "USAAD — O’zbekistonda neft, kimyo va sanoat mahsulotlari uchun ISO 17025 akkreditatsiyalangan laboratoriya sinovi va rasmiy sertifikatlash markazi. 1200+ sertifikat. 14 kunda natija. Ariza qoldiring!",
      },
      {
        name: "keywords",
        content:
          "USAAD, neft mahsulotlari sertifikatlash, kimyo laboratoriya Toshkent, sanoat mahsulotlari ekspertizasi, ISO 17025 Uzbekistan, muvofiqlik sertifikati, benzin dizel sertifikati, sertifikatlash markazi, usaad uz, sertifikat tris uz",
      },
      { property: "og:title", content: "USAAD — Sertifikatlash markazi" },
      {
        property: "og:description",
        content:
          "O’zbekistonda neft, kimyo va sanoat mahsulotlari uchun ISO 17025 akkreditatsiyalangan sertifikatlash. 1200+ rasmiy sertifikat. 14 kunda natija.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://usaad.uz/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "USAAD — Sertifikatlash markazi" },
      {
        name: "twitter:description",
        content: "Neft, kimyo va sanoat mahsulotlari uchun ISO 17025 akkreditatsiyalangan sertifikatlash — O’zbekiston.",
      },
    ],
    links: [{ rel: "canonical", href: "https://usaad.uz/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "USAAD — Sertifikatlash markazi",
          description:
            "O’zbekistonda neft, kimyo va sanoat mahsulotlari uchun akkreditatsiyalangan laboratoriya sinovi va rasmiy sertifikatlash.",
          url: "https://usaad.uz",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            addressCountry: "UZ",
            addressLocality: "Toshkent",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.9",
            reviewCount: "1200",
          },
          openingHours: "Mo-Fr 09:00-18:00",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Bosh sahifa",
              item: "https://usaad.uz/",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-cream text-navy">
      <header className="sticky top-0 z-50 border-b border-navy/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
          <Link to="/" className="flex items-center gap-3" aria-label="USAAD bosh sahifa">
            <img src={usaadLogo} alt="USAAD Logotipi" className="h-10 w-auto object-contain md:h-11" />
            <span className="hidden text-[10px] uppercase tracking-[0.2em] text-navy/45 sm:inline">{t.nav.center}</span>
          </Link>
          <nav className="hidden items-center gap-8 text-[13px] font-medium md:flex" aria-label="Asosiy navigatsiya">
            <Link to="/" className="text-teal">{t.nav.home}</Link>
            <Link to="/services" className="transition-colors hover:text-teal">{t.nav.services}</Link>
            <Link to="/about" className="transition-colors hover:text-teal">{t.nav.about}</Link>
            <Link to="/contact" className="transition-colors hover:text-teal">{t.nav.contact}</Link>
          </nav>
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <Link to="/contact" className="hidden rounded-full bg-signal px-5 py-2.5 text-[13px] font-semibold text-cream transition-colors hover:bg-teal sm:inline-flex">{t.nav.submitApp}</Link>
            <Link to="/services" aria-label={t.nav.openMenu} className="inline-flex size-10 items-center justify-center rounded-full border border-navy/20 md:hidden"><Menu size={18} /></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto max-w-[1280px] px-5 pb-12 pt-10 md:px-10 md:pb-16">
          <div className="grid items-end gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="reveal-rise text-[12px] font-semibold uppercase tracking-[0.2em] text-teal">{t.hero.badge}</p>
              <h1 className="reveal-wipe mt-4 max-w-[9ch] font-display text-[clamp(3.5rem,7.4vw,5.75rem)] font-bold leading-[0.9]">
                {t.hero.titleLine1} <span className="text-teal">{t.hero.titleLine2}</span> <span className="text-signal">{t.hero.titleLine3}</span> {t.hero.titleLine4}
              </h1>
              <p className="reveal-rise mt-6 max-w-[46ch] text-base leading-relaxed text-navy/65">{t.hero.description}</p>
              <div className="reveal-rise mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 text-[15px] font-semibold text-cream transition-colors hover:bg-navy">{t.hero.applyBtn} <ArrowRight size={17} /></Link>
                <Link to="/services" className="rounded-full border border-navy/20 px-7 py-4 text-[15px] font-semibold transition-colors hover:bg-navy hover:text-cream">{t.hero.servicesBtn}</Link>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 lg:col-span-5">
              <div className="col-span-3 rounded-2xl bg-teal p-6 text-cream"><p className="font-display text-5xl font-bold leading-none">{t.hero.stat1}</p><p className="mt-2 text-xs uppercase tracking-[0.15em] text-cream/70">{t.hero.stat1Sub}</p></div>
              <div className="rounded-2xl bg-navy p-5 text-cream"><p className="font-display text-3xl font-bold">{t.hero.stat2}</p><p className="mt-2 text-[11px] uppercase text-cream/60">{t.hero.stat2Sub}</p></div>
              <div className="rounded-2xl bg-signal p-5 text-cream"><p className="font-display text-3xl font-bold">{t.hero.stat3}</p><p className="mt-2 text-[11px] uppercase text-cream/70">{t.hero.stat3Sub}</p></div>
              <div className="rounded-2xl border border-navy/15 p-5"><p className="font-display text-3xl font-bold text-teal">{t.hero.stat4}</p><p className="mt-2 text-[11px] uppercase text-navy/50">{t.hero.stat4Sub}</p></div>
            </div>
          </div>
          <div className="relative mt-10 overflow-hidden rounded-3xl">
            <img src={laboratoryImage} alt="USAAD Laboratory" width={1920} height={720} className="h-[260px] w-full object-cover md:h-[360px]" />
            <div className="absolute bottom-5 left-5 rounded-full bg-cream/90 px-4 py-2 text-xs font-medium backdrop-blur-md">{t.hero.labBadge}</div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 py-16 md:px-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{t.services.subtitle}</p>
              <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">{t.services.title}</h2>
            </div>
            <Link to="/services" className="hidden items-center gap-2 text-sm font-semibold text-teal hover:underline sm:flex">{t.services.viewAll} <ArrowRight size={16} /></Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <article className="group overflow-hidden rounded-3xl border border-navy/10 bg-navy text-cream transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={fuelTestingImg} alt={t.services.oilTitle} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-navy/80 px-3 py-1 text-xs font-bold text-signal backdrop-blur-md">01</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold">{t.services.oilTitle}</h3>
                <p className="mt-3 text-xs leading-relaxed text-cream/70">{t.services.oilDesc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-teal">
                  <CheckCircle2 size={14} /> {t.services.oilBadge}
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={industrialInspectionImg} alt={t.services.indTitle} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold text-teal backdrop-blur-md">02</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-navy">{t.services.indTitle}</h3>
                <p className="mt-3 text-xs leading-relaxed text-navy/65">{t.services.indDesc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-teal">
                  <CheckCircle2 size={14} /> {t.services.indBadge}
                </div>
              </div>
            </article>

            <article className="group overflow-hidden rounded-3xl border border-navy/10 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-48 overflow-hidden">
                <img src={chemicalLabImg} alt={t.services.labTitle} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold text-teal backdrop-blur-md">03</span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-bold text-navy">{t.services.labTitle}</h3>
                <p className="mt-3 text-xs leading-relaxed text-navy/65">{t.services.labDesc}</p>
                <div className="mt-5 flex items-center gap-2 text-xs font-medium text-teal">
                  <CheckCircle2 size={14} /> {t.services.labBadge}
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Certification Schemes & Tris Single Window */}
        <section className="border-t border-navy/10 bg-white/60 py-16">
          <div className="mx-auto max-w-[1280px] px-5 md:px-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{t.schemes.badge}</p>
                <h2 className="mt-3 font-display text-3xl font-bold md:text-5xl">
                  {t.schemes.title}
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-navy/70">
                  {t.schemes.desc}
                </p>
                
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-navy/10 bg-cream/50 p-5">
                    <p className="font-display text-lg font-bold text-navy">{t.schemes.card1Title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-navy/65">{t.schemes.card1Desc}</p>
                  </div>
                  <div className="rounded-2xl border border-navy/10 bg-cream/50 p-5">
                    <p className="font-display text-lg font-bold text-navy">{t.schemes.card2Title}</p>
                    <p className="mt-2 text-xs leading-relaxed text-navy/65">{t.schemes.card2Desc}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-navy/10 bg-navy p-8 text-cream lg:col-span-5">
                <h3 className="font-display text-2xl font-bold text-cream">{t.schemes.stepsTitle}</h3>
                <ul className="mt-6 space-y-3.5 text-xs leading-relaxed text-cream/80">
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-signal text-[10px] font-bold text-cream">1</span>
                    <span><strong>{t.schemes.step1Title}</strong> {t.schemes.step1Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-cream">2</span>
                    <span><strong>{t.schemes.step2Title}</strong> {t.schemes.step2Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream/20 text-[10px] font-bold text-cream">3</span>
                    <span><strong>{t.schemes.step3Title}</strong> {t.schemes.step3Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream/20 text-[10px] font-bold text-cream">4</span>
                    <span><strong>{t.schemes.step4Title}</strong> {t.schemes.step4Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream/20 text-[10px] font-bold text-cream">5</span>
                    <span><strong>{t.schemes.step5Title}</strong> {t.schemes.step5Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream/20 text-[10px] font-bold text-cream">6</span>
                    <span><strong>{t.schemes.step6Title}</strong> {t.schemes.step6Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream/20 text-[10px] font-bold text-cream">7</span>
                    <span><strong>{t.schemes.step7Title}</strong> {t.schemes.step7Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-signal text-[10px] font-bold text-cream">8</span>
                    <span><strong>{t.schemes.step8Title}</strong> {t.schemes.step8Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-cream">9</span>
                    <span><strong>{t.schemes.step9Title}</strong> {t.schemes.step9Desc}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-cream/20 text-[10px] font-bold text-cream">10</span>
                    <span><strong>{t.schemes.step10Title}</strong> {t.schemes.step10Desc}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1280px] px-5 pb-20 pt-16 md:px-10">
          <div className="rounded-3xl bg-navy p-7 text-cream md:p-10">
            <h2 className="font-display text-4xl font-bold">{t.process.title}</h2>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-cream/70">{t.process.desc}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[
                ['01', t.process.step1T, t.process.step1D],
                ['02', t.process.step2T, t.process.step2D],
                ['03', t.process.step3T, t.process.step3D],
                ['04', t.process.step4T, t.process.step4D]
              ].map(([n, title, desc]) => (
                <div key={n} className="rounded-2xl border border-cream/10 bg-cream/5 p-5">
                  <p className="font-display text-3xl font-bold text-signal">{n}<span className="text-teal">.</span></p>
                  <h3 className="mt-3 font-display text-base font-bold text-cream">{title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream/65">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-navy/10 bg-teal text-cream">
          <div className="mx-auto grid max-w-[1280px] gap-8 px-5 py-14 md:grid-cols-3 md:px-10">
            <div className="md:col-span-2"><p className="font-display text-4xl font-bold leading-tight md:text-5xl">{t.ctaBanner.text}</p></div>
            <div className="flex items-end md:justify-end"><Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 font-semibold text-cream transition-colors hover:bg-navy">{t.ctaBanner.button} <Phone size={17} /></Link></div>
          </div>
        </section>
      </main>

      <footer className="mx-auto flex max-w-[1280px] flex-col gap-5 px-5 py-10 text-sm md:flex-row md:items-center md:justify-between md:px-10">
        <Link to="/" className="flex items-center gap-2" aria-label="USAAD bosh sahifa">
          <img src={usaadLogo} alt="USAAD Logotipi" className="h-9 w-auto object-contain" />
        </Link>
        <p className="text-navy/55">{t.nav.rights}</p>
        <Link to="/contact" className="font-semibold text-teal">{t.nav.contact} →</Link>
      </footer>
    </div>
  );
}
