"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  FileText,
  ArrowRight,
  Check,
  TrendingUp,
  Clock,
  Zap,
  CreditCard,
  Star,
  Rocket,
  FileSpreadsheet,
  FileCheck
} from "lucide-react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-[#0B0B0C] text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="glow-left" />
      <div className="glow-right" />
      <div className="glow-bottom" />

      {/* Wave lines background - visible like metrics.today */}
      <div className="wave-lines" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[#27272a]/50 backdrop-blur-md bg-[#0B0B0C]/70 supports-[backdrop-filter]:bg-[#0B0B0C]/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">

              <span className="text-lg font-semibold">ReportSwift</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm text-[#a1a1aa]">
              <a href="#features" className="hover:text-white transition-colors">Beneficii</a>
              <a href="#how-it-works" className="hover:text-white transition-colors">Cum Funcționează</a>
              <a href="#pricing" className="hover:text-white transition-colors">Prețuri</a>
            </div>
            <Button className="btn-primary text-sm">
              <span>Înscrie-te</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="eyebrow mb-4">Transformă Datele Tale de Business în</p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
            <span className="accent-text">Rapoarte Profesionale,</span> în Secunde.
          </h1>

          <p className="text-lg text-[#a1a1aa] mb-10 max-w-2xl mx-auto leading-relaxed">
            ReportSwift generează automat rapoarte PDF profesionale din datele tale brute.
            Tu încarci fișierul, noi facem analiza și designul.
          </p>

          {/* Email signup */}
          {!isSuccess ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-4">
              <Input
                type="email"
                placeholder="adresa@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 bg-[#18181b] border-[#27272a] text-white placeholder:text-[#71717a] focus:border-[#3b82f6] focus:ring-[#3b82f6]"
                required
              />
              <Button
                type="submit"
                className="btn-primary h-12 px-6 flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Se trimite...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">Vreau Acces Early Bird <ArrowRight size={16} /></span>
                )}
              </Button>
            </form>
          ) : (
            <div className="max-w-md mx-auto bg-[#111113] border border-[#27272a] rounded-xl p-6 mb-4">
              <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3 text-green-400">
                <Check size={20} />
              </div>
              <p className="text-lg font-medium">Ești pe listă!</p>
              <p className="text-sm text-[#71717a]">Te vom notifica la lansare.</p>
            </div>
          )}

          <p className="text-xs text-[#71717a] flex items-center justify-center gap-4">
            <span className="flex items-center gap-1"><CreditCard size={14} /> Fără card bancar</span>
            <span className="flex items-center gap-1"><Rocket size={14} /> Acces prioritar primii 100 utilizatori</span>
          </p>
        </div>
      </section>

      {/* Dashboard Preview - Mac Window Style */}
      <section className="relative z-10 px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="mac-window animate-border-glow shadow-2xl shadow-blue-500/10">
            <div className="mac-window-header">
              <div className="mac-dot mac-dot-red" />
              <div className="mac-dot mac-dot-yellow" />
              <div className="mac-dot mac-dot-green" />
              <div className="flex-1 text-center">
                <span className="text-xs text-[#71717a]">app.reportswift.ro/dashboard</span>
              </div>
            </div>
            <div className="p-6 bg-[#111113]">
              {/* Dashboard mockup */}
              {/* Workflow Visualizer - Honest & Realistic */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 py-6 px-4">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center gap-4 relative group">
                  <div className="w-16 h-16 rounded-2xl bg-[#27272a]/50 flex items-center justify-center border border-[#27272a] group-hover:border-[#e11d48]/50 transition-colors">
                    <FileSpreadsheet className="text-white group-hover:text-[#e11d48] transition-colors" size={32} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">1. Upload Date</p>
                    <p className="text-xs text-[#a1a1aa]">Excel sau CSV</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-[#27272a]">
                  <ArrowRight size={24} />
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center gap-4 relative group">
                  <div className="w-16 h-16 rounded-2xl bg-[#e11d48]/10 flex items-center justify-center border border-[#e11d48]/20 animate-pulse">
                    <Zap className="text-[#e11d48]" size={32} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">2. Procesare</p>
                    <p className="text-xs text-[#a1a1aa]">Analiză Automată</p>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:block text-[#27272a]">
                  <ArrowRight size={24} />
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center gap-4 relative group">
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <FileCheck className="text-green-500" size={32} />
                  </div>
                  <div>
                    <p className="font-semibold text-white">3. Raport Gata</p>
                    <p className="text-xs text-[#a1a1aa]">PDF Profesional</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Features Section */}
      <section id="features" className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">De Ce ReportSwift?</p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Nu Mai Pierde Ore cu <span className="accent-text">Rapoarte Manuale</span>
            </h2>
            <p className="text-[#a1a1aa] max-w-2xl mx-auto">
              Freelancerii și consultanții pierd 5-10 ore săptămânal scriind rapoarte.
              ReportSwift reduce asta la câteva secunde.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Clock size={24} />,
                title: "Economisești 10+ Ore Săptămânal",
                description: "De la 2-3 ore per raport la doar 30 de secunde. Folosește timpul economisit să-ți crești afacerea."
              },
              {
                icon: <Zap size={24} />,
                title: "Analiză Automată Inteligentă",
                description: "Sistemul analizează datele și generează concluzii profesionale pe care clienții tăi le vor aprecia."
              },
              {
                icon: <FileText size={24} />,
                title: "Export PDF Premium",
                description: "Rapoarte frumoase, cu branding-ul tău, grafice automate și logo-ul companiei tale."
              }
            ].map((feature, i) => (
              <div key={i} className="hover-card rounded-xl p-6 bg-[#0f0f11]">
                <div className="w-12 h-12 rounded-xl bg-[#e11d48]/10 flex items-center justify-center text-[#e11d48] mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="relative z-10 py-24 px-6 bg-[#08080a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Simplu ca 1-2-3</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Cum Funcționează <span className="accent-text">ReportSwift</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Încarcă Datele", desc: "CSV, Excel sau text simplu cu metricile tale. Vânzări, trafic, conversii - orice." },
              { step: "02", title: "Sistemul Analizează", desc: "Datele sunt procesate automat, se identifică trenduri și se scriu insight-uri profesionale." },
              { step: "03", title: "Descarcă PDF", desc: "Primești un raport frumos, gata de trimis clientului. Cu branding-ul tău." }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl font-bold text-[#27272a] mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-[#71717a] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Fit Section - 3 Columns like metrics.today */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="eyebrow mb-4">Pentru Cine Este?</p>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Creat Pentru <span className="accent-text">Fiecare Profesionist</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                role: "Consultant Marketing",
                features: [
                  "Rapoarte Performanță Campanii",
                  "Analiză Social Media",
                  "Breakdown ROI",
                  "Analiză Competitori",
                  "Update-uri Lunare Clienți"
                ]
              },
              {
                role: "Specialist SEO",
                features: [
                  "Raport Poziții Cuvinte Cheie",
                  "Analiză Trafic",
                  "Overview Backlink-uri",
                  "Sumar Audit Tehnic",
                  "Metrici Creștere Organică"
                ]
              },
              {
                role: "Antrenor Fitness",
                features: [
                  "Raport Progres Client",
                  "Performanță Antrenamente",
                  "Tracking Nutriție",
                  "Atingere Obiective",
                  "Sumar Check-in Săptămânal"
                ]
              }
            ].map((col, i) => (
              <div key={i} className="hover-card rounded-xl p-6 bg-[#0f0f11]">
                <p className="eyebrow mb-2">Perfect Pentru</p>
                <h3 className="text-xl font-semibold accent-text mb-6">{col.role}</h3>
                <ul className="space-y-3">
                  {col.features.map((feature, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-[#a1a1aa]">
                      <span className="text-[#e11d48] mt-0.5"><Check size={16} /></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Stats row like metrics.today */}
          <div className="grid grid-cols-3 gap-4 mt-16">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#e11d48]/10 to-transparent border border-[#e11d48]/20">
              <p className="text-2xl font-bold accent-text">+20 alte</p>
              <p className="text-sm text-[#71717a]">Tipuri Rapoarte Marketing</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#3b82f6]/10 to-transparent border border-[#3b82f6]/20">
              <p className="text-2xl font-bold text-[#3b82f6]">+15 alte</p>
              <p className="text-sm text-[#71717a]">Template-uri SEO</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-[#22c55e]/10 to-transparent border border-[#22c55e]/20">
              <p className="text-2xl font-bold text-[#22c55e]">+10 alte</p>
              <p className="text-sm text-[#71717a]">Opțiuni Rapoarte Fitness</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="section-divider max-w-4xl mx-auto" />

      {/* Pricing Section */}
      <section id="pricing" className="relative z-10 py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow mb-4">Preț Early Bird</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="accent-text">50% Reducere</span> pentru Primii 100 Utilizatori
          </h2>
          <p className="text-[#a1a1aa] mb-12">
            Blochează prețul de lansare pentru totdeauna. Fără creșteri de preț, niciodată.
          </p>

          <div className="mac-window">
            <div className="mac-window-header">
              <div className="mac-dot mac-dot-red" />
              <div className="mac-dot mac-dot-yellow" />
              <div className="mac-dot mac-dot-green" />
              <span className="flex-1 text-center text-xs text-[#71717a]">Ofertă Early Bird</span>
            </div>
            <div className="p-8 bg-[#111113]">
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold">10€</span>
                <span className="text-[#71717a]">/lună</span>
              </div>
              <p className="text-sm text-[#71717a] line-through mb-8">Preț normal: 20€/lună</p>

              <ul className="text-left space-y-3 mb-8">
                {[
                  "Rapoarte nelimitate",
                  "Export PDF premium",
                  "Branding personalizat",
                  "Suport prioritar",
                  "Toate update-urile viitoare"
                ].map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <span className="text-green-400"><Check size={16} /></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className="btn-primary w-full h-12 text-base"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <span className="flex items-center gap-2">Rezervă Locul Tău <ArrowRight size={16} /></span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-24 px-6 bg-[#08080a]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Bun Venit la <span className="accent-text">ReportSwift</span>
          </h2>
          <p className="text-[#a1a1aa] mb-8">
            Dacă ești interesat să testezi produsul nostru și să ne oferi feedback valoros,
            completează formularul de mai jos și te vom contacta.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="email@exemplu.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12 bg-[#18181b] border-[#27272a] text-white placeholder:text-[#71717a]"
              required
            />
            <Button type="submit" className="btn-primary h-12 px-8">
              <span>Înscrie-te Acum</span>
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-[#27272a]/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">ReportSwift</span>
          </div>
          <p className="text-sm text-[#71717a]">
            © 2026 ReportSwift. Toate drepturile rezervate.
          </p>
        </div>
      </footer>
    </div>
  );
}
