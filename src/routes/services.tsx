import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ShieldCheck, FileCheck2, Cpu, FlaskConical } from "lucide-react";
import fuelTestingImg from "@/assets/fuel-testing.png";
import industrialInspectionImg from "@/assets/industrial-inspection.png";
import chemicalLabImg from "@/assets/chemical-lab.png";
import laboratoryImage from "@/assets/neftlab-laboratory.jpg";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "Xizmatlar — USAAD | Neft, kimyo va sanoat sertifikatlash" },
    {
      name: "description",
      content:
        "USAAD xizmatlari: neft mahsulotlari, kimyoviy va sanoat mahsulotlari sinovi, texnik ekspertiza va rasmiy sertifikatlash. ISO 17025 akkreditatsiya. O’zbekiston.",
    },
    {
      name: "keywords",
      content:
        "neft sertifikati, kimyo ekspertizasi, sanoat sinovi, laboratoriya xizmatlari, texnik audit, ISO 17025, USAAD xizmatlar, benzin dizel sinovi, sertifikat Toshkent",
    },
    { property: "og:title", content: "Sertifikatlash xizmatlari — USAAD" },
    {
      property: "og:description",
      content: "Laboratoriya sinovi, ekspertiza va muvofiqlik sertifikati — USAAD akkreditatsiyalangan markazi.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://usaad.uz/services" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: "https://usaad.uz/services" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://usaad.uz/" },
          { "@type": "ListItem", position: 2, name: "Xizmatlar", item: "https://usaad.uz/services" },
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "USAAD Sertifikatlash xizmatlari",
        description: "Neft, kimyo va sanoat mahsulotlari uchun akkreditatsiyalangan sinov va sertifikatlash xizmatlari",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Neft mahsulotlari sertifikatlash" },
          { "@type": "ListItem", position: 2, name: "Kimyoviy mahsulotlar ekspertizasi" },
          { "@type": "ListItem", position: 3, name: "Sanoat mahsulotlari sinovi" },
          { "@type": "ListItem", position: 4, name: "Texnik ekspertiza va audit" },
        ],
      }),
    },
  ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      num: "01",
      title: t.services.oilTitle,
      desc: t.services.oilDesc,
      img: fuelTestingImg,
      icon: FlaskConical,
      badge: t.services.oilBadge
    },
    {
      num: "02",
      title: t.services.chemTitle,
      desc: t.services.chemDesc,
      img: chemicalLabImg,
      icon: ShieldCheck,
      badge: t.services.chemBadge
    },
    {
      num: "03",
      title: t.services.indTitle,
      desc: t.services.indDesc,
      img: industrialInspectionImg,
      icon: Cpu,
      badge: t.services.indBadge
    },
    {
      num: "04",
      title: t.services.auditTitle,
      desc: t.services.auditDesc,
      img: laboratoryImage,
      icon: FileCheck2,
      badge: t.services.auditBadge
    },
  ];

  return (
    <main className="min-h-screen bg-cream px-5 py-8 text-navy md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
            <ArrowLeft size={16}/> {t.nav.home}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">{t.services.pageSub}</p>
          <h1 className="mt-4 max-w-[12ch] font-display text-5xl font-bold leading-[0.95] md:text-7xl">
            {t.services.pageTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy/70">
            {t.services.pageDesc}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <article key={service.num} className="group overflow-hidden rounded-3xl border border-navy/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64 overflow-hidden">
                  <img src={service.img} alt={service.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between">
                    <span className="rounded-full bg-signal px-3.5 py-1 text-xs font-bold text-cream backdrop-blur-md">
                      {service.num}
                    </span>
                    <span className="rounded-full bg-cream/90 px-3 py-1 text-xs font-semibold text-navy backdrop-blur-md">
                      {service.badge}
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-teal/10 text-teal">
                      <IconComponent size={20} />
                    </div>
                    <h2 className="font-display text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-navy/65">{service.desc}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16 rounded-3xl bg-navy p-8 text-cream md:p-12">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <h3 className="font-display text-3xl font-bold">{t.services.ctaTitle}</h3>
              <p className="mt-2 text-sm text-cream/70">{t.services.ctaDesc}</p>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-signal px-7 py-4 font-semibold text-cream transition-colors hover:bg-teal">
              {t.nav.submitApp} <ArrowRight size={17}/>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}