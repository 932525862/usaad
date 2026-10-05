import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Award, TestTube } from "lucide-react";
import chemicalLabImg from "@/assets/chemical-lab.png";
import industrialInspectionImg from "@/assets/industrial-inspection.png";
import laboratoryImage from "@/assets/neftlab-laboratory.jpg";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "Biz haqimizda — USAAD | ISO 17025 Akkreditatsiyalangan laboratoriya" },
    {
      name: "description",
      content:
        "USAAD — O’zbekistonda neft, kimyo va sanoat mahsulotlari bo’yicha ISO 17025 akkreditatsiyalangan mustaqil laboratoriya va sertifikatlash markazi. 1200+ sertifikat, 98% aniqlik.",
    },
    {
      name: "keywords",
      content:
        "USAAD haqida, sertifikatlash markazi Toshkent, ISO 17025 laboratoriya, akkreditatsiyalangan sinov, O’zbekiston sertifikatlash, neft ekspertizasi, mustaqil laboratoriya",
    },
    { property: "og:title", content: "Biz haqimizda — USAAD" },
    {
      property: "og:description",
      content: "Aniqlik, mustaqillik va xalqaro standartlarga tayangan ISO 17025 akkreditatsiyalangan ekspertiza markazi.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://usaad.uz/about" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: "https://usaad.uz/about" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://usaad.uz/" },
          { "@type": "ListItem", position: 2, name: "Biz haqimizda", item: "https://usaad.uz/about" },
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "USAAD haqida",
        description:
          "USAAD — O’zbekistonda neft, kimyo va sanoat mahsulotlari bo’yicha akkreditatsiyalangan mustaqil laboratoriya va sertifikatlash markazi.",
        url: "https://usaad.uz/about",
        mainEntity: {
          "@type": "Organization",
          name: "USAAD Sertifikatlash markazi",
          foundingLocation: "Toshkent, O’zbekiston",
          hasCredential: "ISO 17025 Akkreditatsiya",
        },
      }),
    },
  ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLanguage();

  const docs = [
    { title: t.about.doc1T, desc: t.about.doc1D },
    { title: t.about.doc2T, desc: t.about.doc2D },
    { title: t.about.doc3T, desc: t.about.doc3D },
    { title: t.about.doc4T, desc: t.about.doc4D },
    { title: t.about.doc5T, desc: t.about.doc5D },
    { title: t.about.doc6T, desc: t.about.doc6D },
  ];

  return (
    <main className="min-h-screen bg-navy px-5 py-8 text-cream md:px-10">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-teal hover:underline">
            <ArrowLeft size={16}/> {t.nav.home}
          </Link>
          <LanguageSwitcher />
        </div>

        <div className="grid gap-12 py-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">{t.about.badge}</p>
            <h1 className="mt-4 font-display text-5xl font-bold leading-[0.95] md:text-7xl">
              {t.about.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream/70">
              {t.about.desc}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-xs font-medium text-cream">
                <Award size={14} className="text-signal" /> {t.about.tag1}
              </div>
              <div className="flex items-center gap-2 rounded-full border border-cream/15 bg-cream/5 px-4 py-2 text-xs font-medium text-cream">
                <TestTube size={14} className="text-teal" /> {t.about.tag2}
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl lg:col-span-5">
            <img src={laboratoryImage} alt="USAAD Laboratory" className="h-[380px] w-full object-cover rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
        </div>

        <div className="grid gap-6 border-t border-cream/15 py-12 sm:grid-cols-3">
          <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6">
            <p className="font-display text-5xl font-bold text-teal">1200+</p>
            <p className="mt-2 text-sm text-cream/70">{t.about.stat1Sub}</p>
          </div>
          <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6">
            <p className="font-display text-5xl font-bold text-signal">98%</p>
            <p className="mt-2 text-sm text-cream/70">{t.about.stat2Sub}</p>
          </div>
          <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6">
            <p className="font-display text-5xl font-bold text-teal">ISO</p>
            <p className="mt-2 text-sm text-cream/70">{t.about.stat3Sub}</p>
          </div>
        </div>

        <div className="py-12">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal">{t.about.infraSub}</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{t.about.infraTitle}</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-cream/15">
              <img src={chemicalLabImg} alt={t.about.infraCard1T} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl font-bold text-cream">{t.about.infraCard1T}</h3>
                <p className="mt-2 text-xs text-cream/70">{t.about.infraCard1D}</p>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-cream/15">
              <img src={industrialInspectionImg} alt={t.about.infraCard2T} className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="font-display text-xl font-bold text-cream">{t.about.infraCard2T}</h3>
                <p className="mt-2 text-xs text-cream/70">{t.about.infraCard2D}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Documents section */}
        <div className="border-t border-cream/15 py-12">
          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-signal">{t.about.docsSub}</p>
            <h2 className="font-display text-3xl font-bold md:text-4xl">{t.about.docsTitle}</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {docs.map((doc, i) => (
              <div key={i} className="flex flex-col justify-between rounded-2xl border border-cream/10 bg-cream/5 p-6 transition-colors hover:border-teal">
                <div>
                  <h3 className="font-display text-lg font-bold text-cream">{doc.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-cream/65">{doc.desc}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-teal">
                  <span>{t.about.stdNizom}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}