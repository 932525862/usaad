import { Link, createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Send, CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Ariza va aloqa — USAAD | Sertifikatlash uchun murojaat" },
    {
      name: "description",
      content:
        "USAAD ga ariza qoldiring! Mahsulotingizni sinovdan o’tkazish yoki sertifikatlash uchun mutaxassisimiz bilan bog’laning. Tez javob. O’zbekiston.",
    },
    {
      name: "keywords",
      content:
        "USAAD ariza, sertifikatlash uchun murojaat, neft sertifikati ariza, laboratoriya sinovi ariza, sertifikat olish, USAAD kontakt, Toshkent sertifikatlash",
    },
    { property: "og:title", content: "Ariza qoldirish — USAAD" },
    {
      property: "og:description",
      content: "Sertifikatlash bo’yicha dastlabki maslahat va ariza — USAAD mutaxassislari 14 kunda javob beradi.",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://usaad.uz/contact" },
    { name: "twitter:card", content: "summary_large_image" },
  ],
  links: [{ rel: "canonical", href: "https://usaad.uz/contact" }],
  scripts: [
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Bosh sahifa", item: "https://usaad.uz/" },
          { "@type": "ListItem", position: 2, name: "Aloqa", item: "https://usaad.uz/contact" },
        ],
      }),
    },
    {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "USAAD bilan bog’lanish",
        description: "Sertifikatlash xizmatlari uchun ariza qoldiring",
        url: "https://usaad.uz/contact",
      }),
    },
  ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useLanguage();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [type, setType] = useState("");
  const [comment, setComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const text = `🔔 Yangi ariza (usaad.uz)!
👤 Ism va kompaniya: ${name}
📞 Telefon: ${phone}
🛠 Xizmat turi: ${type || t.contact.typeCert}
💬 Izoh: ${comment}`;

    try {
      let response: Response;
      try {
        response = await fetch("/api/telegram", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        });
      } catch (proxyErr) {
        console.warn("Proxy call failed, trying direct Telegram request", proxyErr);
        const BOT_TOKEN = "8857786618:AAHMLmAkPqSaxn71wpsiy1Q7f1QdRZNy8lQ";
        const CHAT_ID = "-1004398955598";
        response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: text,
          }),
        });
      }

      const resData = await response.json();
      if (response.ok && resData.ok) {
        toast.success(t.contact.successToast);
        setShowSuccessModal(true);
        setName("");
        setPhone("");
        setComment("");
      } else {
        throw new Error(resData?.description || "Error");
      }
    } catch (error: any) {
      console.error("Submit error:", error);
      toast.error(`${t.contact.errorToast} ${error?.message || ""}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="relative min-h-screen bg-cream px-5 py-8 text-navy md:px-10">
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
          <form className="rounded-3xl bg-navy p-7 text-cream md:p-10" onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <label className="text-sm font-medium">
                {t.contact.labelName}
                <input required value={name} onChange={(e) => setName(e.target.value)} className="mt-2 w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 outline-none focus:border-teal" placeholder={t.contact.phName}/>
              </label>
              <label className="text-sm font-medium">
                {t.contact.labelPhone}
                <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 outline-none focus:border-teal" placeholder="+998 __ ___ __ __"/>
              </label>
              <label className="text-sm font-medium">
                {t.contact.labelType}
                <select value={type} onChange={(e) => setType(e.target.value)} className="mt-2 w-full rounded-xl border border-cream/20 bg-navy px-4 py-3 outline-none focus:border-teal">
                  <option value={t.contact.typeCert}>{t.contact.typeCert}</option>
                  <option value={t.contact.typeLab}>{t.contact.typeLab}</option>
                </select>
              </label>
              <label className="text-sm font-medium">
                {t.contact.labelComment}
                <textarea value={comment} onChange={(e) => setComment(e.target.value)} className="mt-2 min-h-28 w-full rounded-xl border border-cream/20 bg-cream/5 px-4 py-3 outline-none focus:border-teal" placeholder={t.contact.phComment}/>
              </label>
              <Button disabled={isSubmitting} type="submit" className="h-auto justify-center rounded-full bg-signal px-7 py-4 text-cream hover:bg-teal disabled:opacity-50">
                {isSubmitting ? t.contact.submittingBtn : <>{t.contact.submitBtn} <Send size={16}/></>}
              </Button>
            </div>
          </form>
        </div>
      </div>

      {/* Modern Success Notification Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/70 p-4 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-md rounded-3xl border border-cream/10 bg-navy p-8 text-center text-cream shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute right-4 top-4 rounded-full p-2 text-cream/60 hover:bg-cream/10 hover:text-cream transition-colors"
            >
              <X size={20} />
            </button>
            
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-teal/20 text-teal ring-8 ring-teal/10">
              <CheckCircle2 size={44} className="animate-bounce duration-1000" />
            </div>

            <h3 className="mt-6 text-2xl font-bold font-display tracking-tight text-cream">
              {t.contact.successTitle}
            </h3>
            
            <p className="mt-3 text-sm leading-relaxed text-cream/70">
              {t.contact.successDesc}
            </p>

            <div className="mt-8">
              <Button
                onClick={() => setShowSuccessModal(false)}
                className="w-full rounded-full bg-signal py-4 font-semibold text-cream hover:bg-teal transition-all shadow-lg shadow-signal/20"
              >
                {t.contact.successBtn}
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}