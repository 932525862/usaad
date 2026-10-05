import React, { useState, useRef, useEffect } from "react";
import { useLanguage, type Language } from "@/lib/i18n";
import { Globe, ChevronDown, Check } from "lucide-react";

export const LanguageSwitcher: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const options: { code: Language; short: string; full: string }[] = [
    { code: "uz", short: "UZ", full: "O'zbekcha" },
    { code: "ru", short: "RU", full: "Русский" },
    { code: "en", short: "EN", full: "English" },
  ];

  const currentOption = options.find((opt) => opt.code === lang) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left ${className}`}>
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 rounded-full border border-navy/20 bg-cream/90 px-3.5 py-1.5 text-xs font-bold text-navy shadow-sm transition-all hover:border-teal hover:bg-white focus:outline-none"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <Globe size={14} className="text-teal" />
        <span>{currentOption.short}</span>
        <ChevronDown size={13} className={`text-navy/60 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {/* Popover Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-44 origin-top-right rounded-2xl border border-navy/10 bg-white p-2 shadow-xl ring-1 ring-black/5 focus:outline-none animate-in fade-in zoom-in-95 duration-150">
          <div className="flex flex-col gap-0.5" role="menu" aria-orientation="vertical">
            {options.map((opt) => (
              <button
                key={opt.code}
                onClick={() => {
                  setLang(opt.code);
                  setIsOpen(false);
                }}
                className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors ${
                  lang === opt.code
                    ? "bg-teal/10 text-teal font-bold"
                    : "text-navy/80 hover:bg-cream hover:text-navy"
                }`}
                role="menuitem"
              >
                <span>{opt.full}</span>
                {lang === opt.code && <Check size={14} className="text-teal" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
