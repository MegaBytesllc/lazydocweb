import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Check,
  Monitor,
  AppWindow,
  Play,
  KeyRound,
  FileText,
  ChevronRight,
  BookOpen,
  Download,
  Cpu,
  Lock,
  Layers3,
  MessageSquareText,
  Terminal,
  Sparkles,
  Shield,
  Workflow,
  Zap,
  ChevronLeft,
  Camera,
  Wand2,
  FolderOutput,
  ScanText,
  Trophy,
  CircleDollarSign,
  Globe,
  BadgeCheck,
} from "lucide-react";

function LazyDocGlyph({ className = "h-8 w-8" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ldoc-grad" x1="8" y1="6" x2="56" y2="58">
          <stop stopColor="#6A8BFF" />
          <stop offset="0.55" stopColor="#7B6DFF" />
          <stop offset="1" stopColor="#A56BFF" />
        </linearGradient>
        <linearGradient id="ldoc-swoosh" x1="28" y1="42" x2="52" y2="30">
          <stop stopColor="#B58CFF" stopOpacity="0.15" />
          <stop offset="0.55" stopColor="#C89AFF" stopOpacity="0.85" />
          <stop offset="1" stopColor="#EEE1FF" />
        </linearGradient>
      </defs>
      <path d="M38 8H19a5 5 0 0 0-5 5v38a5 5 0 0 0 5 5h26a5 5 0 0 0 5-5V20L38 8Z" stroke="url(#ldoc-grad)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M37 8v11a2 2 0 0 0 2 2h11" stroke="url(#ldoc-grad)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M25 27h12M25 35h14" stroke="#DCE6FF" strokeWidth="3" strokeLinecap="round" />
      <path d="M34 42C39 40.2 43.5 37.5 46.8 33.1" stroke="url(#ldoc-swoosh)" strokeWidth="3.8" strokeLinecap="round" />
      <path d="M12 43 32 35 24 54 21 47 12 43Z" fill="#E9EEFF" stroke="#111827" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M44.5 30.5 46 27l1.5 3.5L51 32l-3.5 1.5L46 37l-1.5-3.5L41 32l3.5-1.5Z" fill="#A88BFF" />
      <path d="M51 39 52 36.6l2.4-1-2.4-1-1-2.4-1 2.4-2.4 1 2.4 1 1 2.4Z" fill="#DDD6FE" />
    </svg>
  );
}

function MacIcon({ large = false }) {
  return (
    <div
      className={`${large ? "h-28 w-28 md:h-32 md:w-32" : "h-12 w-12"} relative overflow-hidden rounded-[26px] border border-white/10 flex items-center justify-center shadow-[0_24px_80px_rgba(0,0,0,0.45)]`}
      style={{
        background:
          "radial-gradient(circle at 28% 18%, rgba(255,255,255,0.18), transparent 28%), linear-gradient(145deg, #4E6CFF 0%, #684DFF 48%, #A45CF7 100%)",
      }}
    >
      <div className="absolute inset-[7%] rounded-[22px] bg-white/5" />
      <LazyDocGlyph className={`${large ? "h-20 w-20 md:h-24 md:w-24" : "h-7 w-7"} relative z-10`} />
    </div>
  );
}

function PrimaryButton({ children, className = "", onClick, href }) {
  const cls = `inline-flex items-center justify-center rounded-2xl bg-[#5B7CFA] px-5 py-3 font-medium text-white transition hover:bg-[#6B89FA] shadow-[0_10px_30px_rgba(91,124,250,0.28)] ${className}`;
  if (href) {
    return <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>;
  }
  return (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

function SecondaryButton({ children, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 font-medium text-slate-200 transition hover:bg-white/[0.08] backdrop-blur ${className}`}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-[28px] border border-white/10 bg-white/[0.04] backdrop-blur-sm ${className}`}>{children}</div>;
}

function GridGlow() {
  return (
    <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
  );
}

function SectionTitle({ eyebrow, title, body, align = "center" }) {
  const cls = align === "left" ? "max-w-2xl text-left" : "mx-auto max-w-3xl text-center";
  return (
    <div className={`mb-12 ${cls}`}>
      <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">{eyebrow}</div>
      <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-400">{body}</p>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <Card className="h-full transition duration-300 hover:-translate-y-1 hover:bg-white/[0.06] hover:shadow-[0_18px_50px_rgba(0,0,0,0.24)]">
      <div className="p-6 md:p-7">
        <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-slate-100 shadow-inner shadow-white/5">{icon}</div>
        <h3 className="mb-2 text-xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="leading-7 text-slate-400">{text}</p>
      </div>
    </Card>
  );
}

function FeatureHeroCard({ icon, title, text }) {
  return (
    <Card className="h-full relative overflow-hidden border-white/10 bg-[#0C111B]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,124,250,0.16),transparent_38%)]" />
      <div className="relative p-6 md:p-8">
        <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-100">{icon}</div>
        <h3 className="mb-3 text-2xl font-semibold tracking-tight text-white">{title}</h3>
        <p className="leading-8 text-slate-400">{text}</p>
      </div>
    </Card>
  );
}

function StepCard({ number, title, text }) {
  return (
    <Card className="h-full relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,124,250,0.12),transparent_36%)]" />
      <div className="relative p-6 md:p-7">
        <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#162447] text-sm font-semibold text-[#9FB6FF]">
          {number}
        </div>
        <h3 className="mb-2 text-xl font-semibold text-white">{title}</h3>
        <p className="leading-7 text-slate-400">{text}</p>
      </div>
    </Card>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
      <div className="text-2xl font-semibold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-sm text-slate-500">{label}</div>
    </div>
  );
}

function ComparisonRow({ label, lazydoc, other, header = false }) {
  const base = header ? "text-slate-300 font-medium" : "text-slate-400";
  return (
    <div className={`grid grid-cols-[1.2fr_0.9fr_0.9fr] gap-4 border-b border-white/6 px-4 py-4 md:px-6 ${base}`}>
      <div>{label}</div>
      <div className={header ? "" : "text-white"}>{lazydoc}</div>
      <div>{other}</div>
    </div>
  );
}

function MultiCompareRow({ label, lazydoc, scribe, tango, guidde, header = false }) {
  const base = header ? "text-slate-300 font-medium" : "text-slate-400";
  return (
    <div className={`grid grid-cols-[1.15fr_0.8fr_0.8fr_0.8fr_0.8fr] gap-4 border-b border-white/6 px-4 py-4 md:px-6 ${base}`}>
      <div>{label}</div>
      <div className="text-white">{lazydoc}</div>
      <div>{scribe}</div>
      <div>{tango}</div>
      <div>{guidde}</div>
    </div>
  );
}

function CompareToolCard({ icon, name, tag, text, verdict }) {
  return (
    <Card className="h-full border-white/10 bg-[#0C111B]">
      <div className="p-6 md:p-7">
        <div className="mb-4 inline-flex rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-100">{icon}</div>
        <div className="mb-2 flex items-center justify-between gap-3">
          <h3 className="text-2xl font-semibold tracking-tight text-white">{name}</h3>
          <span className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-400">{tag}</span>
        </div>
        <p className="mb-5 leading-7 text-slate-400">{text}</p>
        <div className="rounded-2xl border border-[#2E3E72] bg-[#10182A] px-4 py-4 text-sm leading-6 text-slate-300">{verdict}</div>
      </div>
    </Card>
  );
}

function PricingCard() {
  return (
    <Card className="h-full border-[#2B3B6C] bg-[#0E1423] relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,124,250,0.18),transparent_32%)]" />
      <div className="relative p-8 md:p-10">
        <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Pricing</div>
        <div className="mb-2 text-5xl font-semibold tracking-tight text-white">$39.99</div>
        <div className="mb-6 text-slate-400">One-time purchase</div>
        <div className="mb-8 space-y-3 text-slate-300">
          {[
            "Full desktop app access",
            "Unlimited recordings",
            "BYOK support",
            "Markdown / PDF export",
            "No monthly subscription",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check className="h-4 w-4 text-[#7CFFB2]" />
              {item}
            </div>
          ))}
        </div>
        <PrimaryButton href="https://megabytesnyc.gumroad.com/l/xoenx" className="w-full py-4">
          Buy LazyDoc <ChevronRight className="ml-1 h-4 w-4" />
        </PrimaryButton>
        <p className="mt-4 text-sm leading-6 text-slate-500">No subscription. No token markup. Your API usage stays yours.</p>
      </div>
    </Card>
  );
}

const FAQ_ITEMS = [
  {
    q: "Do I need an API key to use LazyDoc?",
    a: "Yes. LazyDoc uses your own AI provider — Anthropic, OpenAI, or a local model via Ollama or LM Studio. This keeps your data private and means you only pay for what you actually use. New Anthropic and OpenAI accounts both come with free credits to get started.",
  },
  {
    q: "How much does the AI cost to run?",
    a: "A typical guide generation costs a few cents in API usage. LazyDoc adds zero markup — you pay your provider directly at their standard rates.",
  },
  {
    q: "Can I run LazyDoc completely offline?",
    a: "Yes. Point LazyDoc at a local model running via Ollama or LM Studio and nothing ever leaves your machine. No API key required, no internet needed.",
  },
  {
    q: "Where do my screen recordings go?",
    a: "Nowhere. Recordings are processed locally on your machine. Only the extracted frames are sent to your chosen AI provider. LazyDoc has no backend and no servers.",
  },
  {
    q: "How is this different from Scribe?",
    a: "Scribe is a browser extension — it only captures what happens in Chrome. LazyDoc captures your entire screen, including local apps, terminals, admin consoles, dashboards, and anything else outside the browser.",
  },
  {
    q: "How many machines can I install LazyDoc on?",
    a: "Your one-time license supports up to 3 machine activations. If you need to transfer to a new machine, contact support.",
  },
  {
    q: "Is there a refund policy?",
    a: "Yes. If LazyDoc doesn't work for you, email support within 30 days of purchase and we'll make it right.",
  },
  {
    q: "Will I get future updates?",
    a: "Yes. Your one-time purchase includes all future updates delivered automatically through the built-in updater.",
  },
];

function FAQItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/8">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-6 py-5 text-left text-slate-200 transition hover:text-white"
      >
        <span className="text-base font-medium md:text-lg">{q}</span>
        <span className={`shrink-0 text-slate-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
      >
        <p className="pb-5 text-base leading-8 text-slate-400">{a}</p>
      </div>
    </div>
  );
}

function FAQSection({ inline = false }) {
  const [openIndex, setOpenIndex] = React.useState(null);
  const list = (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] px-6 md:px-10">
      {FAQ_ITEMS.map((item, i) => (
        <FAQItem
          key={i}
          q={item.q}
          a={item.a}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
  if (inline) return list;
  return (
    <section className="py-16 md:py-20">
      <SectionTitle eyebrow="F A Q" title="Everything you were about to Google." body="The questions worth answering before you buy." />
      {list}
    </section>
  );
}

function TestimonialCard({ quote, author, role }) {
  return (
    <Card className="h-full">
      <div className="p-6 md:p-7">
        <MessageSquareText className="mb-4 h-5 w-5 text-[#9FB6FF]" />
        <p className="mb-5 text-lg leading-8 text-slate-300">“{quote}”</p>
        <div className="text-sm font-medium text-white">{author}</div>
        <div className="text-sm text-slate-500">{role}</div>
      </div>
    </Card>
  );
}

function MockAppPanel() {
  return (
    <Card className="overflow-hidden bg-[#070910] shadow-[0_30px_120px_rgba(0,0,0,0.55)]">
      <div className="flex items-center justify-between border-b border-white/5 bg-white/[0.02] px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-red-400/90" />
          <span className="h-3 w-3 rounded-full bg-amber-400/90" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/90" />
        </div>
        <div className="text-[11px] uppercase tracking-[0.28em] text-slate-500">LazyDoc • New Guide</div>
        <div className="rounded-full border border-white/8 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-300">Export</div>
      </div>

      <div className="grid min-h-[540px] md:grid-cols-[295px_1fr]">
        <div className="border-r border-white/5 bg-[#0A0D15] p-5">
          <div className="mb-6 flex items-center gap-3">
            <MacIcon />
            <div>
              <div className="text-lg font-semibold text-white">LazyDoc</div>
              <div className="text-xs uppercase tracking-[0.2em] text-slate-500">Recordings → Guides</div>
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-[#2E3E72] bg-[#121B32] p-4 text-center text-slate-100 shadow-inner shadow-white/5">
              <Monitor className="mx-auto mb-2 h-5 w-5" />
              Screen
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-slate-500">
              <AppWindow className="mx-auto mb-2 h-5 w-5" />
              Window
            </div>
          </div>

          <div className="mb-4 rounded-[24px] border border-white/8 bg-white/[0.03] p-8 text-center text-slate-500">
            <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]">
              <Play className="h-5 w-5" />
            </div>
            Preview
          </div>

          <button className="mb-5 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 font-semibold text-slate-200 transition hover:bg-white/10">
            <span className="mr-2 inline-block h-3 w-3 rounded-full bg-red-500" />
            Start recording
          </button>

          <div className="space-y-3">
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="text-sm font-medium text-slate-200">Generalize steps</div>
              <div className="mt-1 text-sm text-slate-500">Replace exact values with reusable language</div>
            </div>
            <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="text-sm font-medium text-slate-200">Preserve exact inputs</div>
              <div className="mt-1 text-sm text-slate-500">Keep commands, values, and configuration detail</div>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center bg-[#080A10] p-8 md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(91,124,250,0.08),transparent_36%)]" />
          <GridGlow />
          <div className="relative text-center">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-[24px] border border-[#2C3D70] bg-[#11192E] shadow-inner shadow-white/5">
              <FileText className="h-9 w-9 text-slate-300" />
            </div>
            <h3 className="mb-4 text-3xl font-semibold tracking-tight text-slate-200 md:text-4xl">Your guide will appear here</h3>
            <p className="mx-auto max-w-lg text-lg leading-8 text-slate-500">
              Record your screen, click generate, and LazyDoc turns the workflow into step-by-step documentation with screenshots and clean structure.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

function DocCallout({ children, variant = "tip" }) {
  return (
    <div className={`flex gap-3 rounded-2xl border px-5 py-4 ${
      variant === "warning"
        ? "border-amber-800/40 bg-amber-950/20 text-amber-300"
        : "border-[#1E3A6E] bg-[#0D1828] text-blue-300"
    }`}>
      <span className="mt-0.5 shrink-0 text-base">{variant === "warning" ? "⚡" : "💡"}</span>
      <p className="text-sm leading-7">{children}</p>
    </div>
  );
}

function DocStep({ id, number, title, children }) {
  return (
    <section id={id} className="border-b border-white/6 py-12 md:py-14">
      <div className="mb-7 flex items-start gap-4">
        <span className="shrink-0 select-none text-7xl font-black leading-none text-white/[0.06] md:text-8xl">{number}</span>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">{title}</h2>
      </div>
      <div className="space-y-6">{children}</div>
    </section>
  );
}

function HomePage({ setPage }) {
  const [activeSection, setActiveSection] = useState("problem");

  useEffect(() => {
    const ids = ["problem","workflow","frames","ai","editor","collections","export","pricing","customization","security","faq"];
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) {
          current = id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Document Header */}
      <div className="border-b border-white/8 pb-8 mb-0">
        <h1 className="mb-5 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.04]">
          Stop writing docs.<br />
          <span className="bg-gradient-to-r from-[#7EA0FF] via-[#90A2FF] to-[#B88BFF] bg-clip-text text-transparent">Record once.</span>
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-slate-300">
            <MacIcon className="h-4 w-4" /> LazyDoc
          </span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
            <Download className="h-3.5 w-3.5 text-slate-500" /> macOS
          </span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
            <Layers3 className="h-3.5 w-3.5 text-slate-500" /> 11 sections
          </span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
            <CircleDollarSign className="h-3.5 w-3.5 text-slate-500" /> One-time $39.99
          </span>
        </div>
      </div>

      {/* Two-column document layout */}
      <div className="grid gap-0 lg:grid-cols-[260px_1fr]">

        {/* Sidebar — docked TOC */}
        <aside className="hidden lg:block">
          <div className="sticky top-0 h-screen flex flex-col justify-center pr-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-700">Contents</p>
            <nav className="space-y-0.5">
              {[
                { num: "01", label: "The Problem", href: "#problem", id: "problem" },
                { num: "02", label: "Core Workflow", href: "#workflow", id: "workflow" },
                { num: "03", label: "Frame Review", href: "#frames", id: "frames" },
                { num: "04", label: "AI Generation", href: "#ai", id: "ai" },
                { num: "05", label: "Document Editor", href: "#editor", id: "editor" },
                { num: "06", label: "Collections & Vault", href: "#collections", id: "collections" },
                { num: "07", label: "Export", href: "#export", id: "export" },
                { num: "08", label: "Pricing", href: "#pricing", id: "pricing" },
                { num: "09", label: "Customization", href: "#customization", id: "customization" },
                { num: "10", label: "Security & Licensing", href: "#security", id: "security" },
                { num: "11", label: "FAQ", href: "#faq", id: "faq" },
              ].map(({ num, label, href, id }) => {
                const isActive = activeSection === id;
                return (
                  <a
                    key={id}
                    href={href}
                    className={`group flex items-center gap-2 rounded-lg px-2 py-[5px] text-xs transition-all duration-200 ${
                      isActive ? "text-white" : "text-slate-600 hover:text-slate-400"
                    }`}
                  >
                    <span className={`tabular-nums text-[10px] font-semibold transition-colors duration-200 ${isActive ? "text-[#7B9FFF]" : "text-slate-700 group-hover:text-slate-500"}`}>
                      {num}
                    </span>
                    <span className="leading-none">{label}</span>
                    {isActive && (
                      <span className="ml-auto h-1 w-1 shrink-0 rounded-full bg-[#5B7CFA]" />
                    )}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main content */}
        <main className="min-w-0 pt-2 lg:border-l lg:border-white/6 lg:pl-12">

          {/* 01 The Problem */}
          <DocStep id="problem" number="01" title="Documentation dies the second the work is done.">
            <p className="text-lg leading-8 text-slate-400">
              You finish a task, someone asks for the steps, and now you're manually retracing clicks, taking screenshots, and trying to remember what actually happened instead of what you wish happened.
            </p>
            <DocCallout>
              Every time you need to write the same guide twice, that's time LazyDoc gives back.
            </DocCallout>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { icon: <BookOpen className="h-4 w-4" />, label: "Retrace steps from memory", sub: "What actually happened gets replaced by a polite fiction." },
                { icon: <Camera className="h-4 w-4" />, label: "Take screenshots manually", sub: "Nobody enjoys playing documentation paparazzi." },
                { icon: <FolderOutput className="h-4 w-4" />, label: "Rewrite the same guide twice", sub: "Once for yourself, once for everyone else." },
              ].map(({ icon, label, sub }) => (
                <div key={label} className="rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mb-2 inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-slate-400">{icon}</div>
                  <div className="text-sm font-medium text-slate-200">{label}</div>
                  <div className="mt-1 text-xs leading-5 text-slate-500">{sub}</div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 02 Core Workflow */}
          <DocStep id="workflow" number="02" title="Core Workflow">
            <p className="text-lg leading-8 text-slate-400">
              Record your screen, a specific window, or a browser tab. LazyDoc captures frames at a configurable interval, then runs them through AI to produce a clean step-by-step guide — automatically.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src="/ss-record.png" alt="LazyDoc record panel showing Screen and Window capture options" className="w-full" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <Monitor className="h-4 w-4" />, t: "Screen, window, or tab", b: "Choose your capture source — full screen or a single app window." },
                { icon: <Zap className="h-4 w-4" />, t: "Global hotkey", b: "Cmd+Shift+R starts and stops recording from any app, no switching required." },
                { icon: <ScanText className="h-4 w-4" />, t: "Configurable frame interval", b: "Set how often LazyDoc captures and how many frames to keep." },
                { icon: <Workflow className="h-4 w-4" />, t: "AI-powered guide generation", b: "Click Generate and LazyDoc analyzes every frame to write your steps." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 03 Frame Review */}
          <DocStep id="frames" number="03" title="Frame Review">
            <p className="text-lg leading-8 text-slate-400">
              Before AI processing, you're in control. Review every captured frame, cut the noise, reorder steps, and add context so the AI has exactly what it needs to write accurate documentation.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src="/frameselection.png" alt="LazyDoc frame review panel showing captured frame grid with select and deselect controls" className="w-full" />
            </div>
            <DocCallout>
              Adding per-frame context notes is one of the highest-leverage things you can do — a single sentence tells the AI what a screenshot means, cutting out ambiguity entirely.
            </DocCallout>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <Layers3 className="h-4 w-4" />, t: "Drag-and-drop reordering", b: "Rearrange frames into the exact order you want before generating." },
                { icon: <Check className="h-4 w-4" />, t: "Include / exclude frames", b: "One click to remove frames that add noise or repeat content." },
                { icon: <Camera className="h-4 w-4" />, t: "Hover to preview, click to pin", b: "Full-size preview on hover so you know exactly what each frame shows." },
                { icon: <BadgeCheck className="h-4 w-4" />, t: "Set a cover image", b: "Pick any frame as the cover for your exported guide." },
                { icon: <MessageSquareText className="h-4 w-4" />, t: "Per-frame context notes", b: "Add a note to any frame — sent to the AI for more accurate step output." },
                { icon: <FileText className="h-4 w-4" />, t: "Frame-to-step mapping", b: "Each frame maps to a step, so your guide reflects what actually happened." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 04 AI Generation */}
          <DocStep id="ai" number="04" title="AI Generation">
            <p className="text-lg leading-8 text-slate-400">
              LazyDoc supports multiple AI providers out of the box. Bring your Anthropic or OpenAI key, point it at a local Ollama model, or connect any OpenAI-compatible endpoint. Zero markup — your API spend goes directly to your provider.
            </p>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr] items-start">
              <DocCallout variant="warning">
                BYOK means you bring your own API key. LazyDoc adds zero markup. A typical guide costs a few cents.
              </DocCallout>
              <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img src="/ss-settings.png" alt="LazyDoc AI backend settings showing Anthropic, OpenAI, and local Ollama options" className="w-full" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <Cpu className="h-4 w-4" />, t: "Anthropic (Claude)", b: "Best quality. Requires API key. ~$0.07/guide." },
                { icon: <Globe className="h-4 w-4" />, t: "OpenAI / compatible endpoints", b: "ChatGPT API, vLLM, LM Studio, LocalAI, Oobabooga." },
                { icon: <Lock className="h-4 w-4" />, t: "Local AI via Ollama", b: "Free. Private. Runs entirely on your machine — no internet required." },
                { icon: <Zap className="h-4 w-4" />, t: "Diff-aware re-generation", b: "Unchanged frames are cached and skipped — saves time and API cost." },
                { icon: <Wand2 className="h-4 w-4" />, t: "Custom prompt templates", b: "Standard, SOP Mode, Customer-Facing, and user-created templates." },
                { icon: <ScanText className="h-4 w-4" />, t: "Output modifiers", b: "Generalize, Preserve Exact, Formal Style — applied per generation." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src="/ss-newdoc.png" alt="Newly generated LazyDoc guide showing structured step-by-step output" className="w-full" />
            </div>
          </DocStep>

          {/* 05 Document Editor */}
          <DocStep id="editor" number="05" title="Document Editor">
            <p className="text-lg leading-8 text-slate-400">
              Every generated guide opens in a full editor — inline editing, step management, a markdown view with live preview, and a table of contents with smooth scroll. Edit titles, descriptions, tips, code snippets, and steps without leaving the app.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src="/ss-editor.png" alt="LazyDoc editor showing markdown source and live preview side by side" className="w-full" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <FileText className="h-4 w-4" />, t: "Inline editing", b: "Edit titles, descriptions, tips, and code snippets directly in the guide view." },
                { icon: <Layers3 className="h-4 w-4" />, t: "Add, remove, reorder steps", b: "Full control over step order. Add manual steps anywhere in the guide." },
                { icon: <Camera className="h-4 w-4" />, t: "Frame management per step", b: "Add frames from your session to any step, remove or swap them individually." },
                { icon: <Terminal className="h-4 w-4" />, t: "Full markdown editor", b: "Markdown source with live preview and a formatting toolbar — for when you want full control." },
                { icon: <MessageSquareText className="h-4 w-4" />, t: "Tips and code blocks", b: "Tip and code snippet blocks per step for richer, more useful guides." },
                { icon: <Wand2 className="h-4 w-4" />, t: "AI step rewrite", b: "Rewrite any individual step with a custom instruction — no need to regenerate the whole guide." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 06 Collections & Vault */}
          <DocStep id="collections" number="06" title="Collections & Vault">
            <p className="text-lg leading-8 text-slate-400">
              Every guide you generate is automatically saved. Pull up any past guide, open it as a side-by-side reference, or connect your Obsidian vault to browse and search your markdown notes without leaving LazyDoc.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src="/Vault with reference doc pulled up.png" alt="LazyDoc showing vault file list, active guide, and reference panel open side by side" className="w-full" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <BookOpen className="h-4 w-4" />, t: "Auto-saves last 10 guides", b: "Thumbnail previews, date, step count, and software badge per entry." },
                { icon: <Layers3 className="h-4 w-4" />, t: "Open past guides", b: "Load any previous guide or open it as a side-by-side reference panel." },
                { icon: <FolderOutput className="h-4 w-4" />, t: "Obsidian Vault integration", b: "Connect your vault folder and browse all your markdown notes from the sidebar." },
                { icon: <ScanText className="h-4 w-4" />, t: "Vault search", b: "Search across all your notes and open any as a read-only reference panel." },
                { icon: <FileText className="h-4 w-4" />, t: "Slide-in reference drawer", b: "View any collection doc or vault note while editing — no context switching." },
                { icon: <AppWindow className="h-4 w-4" />, t: "Open from anywhere", b: "Access the reference panel from collections, vault, or directly inside the editor." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 07 Export */}
          <DocStep id="export" number="07" title="Export">
            <p className="text-lg leading-8 text-slate-400">
              Ship your guide in the format your team actually uses. PDF, Markdown, Word, a full folder with images, or an HTML file with Open Graph meta tags — all from one button.
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src="/exportscreen.png" alt="LazyDoc generated guide with export dropdown showing Markdown, PDF, HTML, DOCX options" className="w-full" />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <FileText className="h-4 w-4" />, t: "PDF export", b: "Print-optimized layout — ready to share or attach to a ticket." },
                { icon: <Terminal className="h-4 w-4" />, t: "Markdown export", b: "Clean .md file that works in Notion, Obsidian, GitHub, or any docs tool." },
                { icon: <Download className="h-4 w-4" />, t: "DOCX export", b: "Word-compatible for teams that live in Microsoft Office." },
                { icon: <FolderOutput className="h-4 w-4" />, t: "Folder export", b: "Markdown file + images as separate files — portable and version-control friendly." },
                { icon: <Globe className="h-4 w-4" />, t: "HTML export", b: "Self-contained HTML with cover image and Open Graph meta tags." },
                { icon: <Zap className="h-4 w-4" />, t: "Auto-save to output folder", b: "Set a default output folder — no dialog every time you export." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 08 Pricing */}
          <DocStep id="pricing" number="08" title="Everything included. One price.">
            <p className="text-lg leading-8 text-slate-400">
              No subscription tiers. No seat limits. No hidden costs waiting inside a usage dashboard. One purchase, full access, every future update included automatically.
            </p>
            <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
              <PricingCard />
              <div className="grid content-start gap-3">
                {[
                  { icon: <Lock className="h-4 w-4" />, t: "Keys stored locally", b: "API credentials stay on your machine with OS-level encryption. No SaaS backend ever sees them." },
                  { icon: <Shield className="h-4 w-4" />, t: "Up to 3 machine activations", b: "Your license works on up to 3 machines. Transfer to a new machine by contacting support." },
                  { icon: <BadgeCheck className="h-4 w-4" />, t: "7-day offline grace period", b: "LazyDoc works fully offline for 7 days before license re-validation is required." },
                  { icon: <Zap className="h-4 w-4" />, t: "Future updates included", b: "All updates delivered automatically through the built-in updater. No re-purchase." },
                ].map(({ icon, t, b }) => (
                  <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                    <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                    <div>
                      <div className="text-sm font-medium text-slate-200">{t}</div>
                      <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </DocStep>

          {/* 09 FAQ */}
          {/* 09 Customization */}
          <DocStep id="customization" number="09" title="Customization">
            <p className="text-lg leading-8 text-slate-400">
              LazyDoc adapts to how you work — not the other way around. Swap themes, tune the system prompt to match your team's documentation style, run it as a menu bar app, and configure capture settings to match your workflow pace.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img src="/ThemeSeleection.png" alt="LazyDoc theme picker showing Obsidian, Terminal, Rose, Midnight, Paper presets with custom color controls" className="w-full" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img src="/Prompt Editor.png" alt="LazyDoc General settings showing system prompt editor and menu bar mode toggle" className="w-full" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <Sparkles className="h-4 w-4" />, t: "Multiple themes", b: "Switch between built-in themes to match your environment and preference." },
                { icon: <Terminal className="h-4 w-4" />, t: "System prompt editor", b: "Fully customize how the AI writes documentation — tone, format, structure, all of it." },
                { icon: <ScanText className="h-4 w-4" />, t: "Configurable frame settings", b: "Set the capture interval and max frame count to match your workflow pace." },
                { icon: <AppWindow className="h-4 w-4" />, t: "Menu bar mode", b: "Runs as a tray app and hides from the Dock — stays out of your way until you need it." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 10 Security & Licensing */}
          <DocStep id="security" number="10" title="Security & Licensing">
            <p className="text-lg leading-8 text-slate-400">
              Your API keys never leave your machine. Your recordings never touch a LazyDoc server. Licensing is handled at purchase — no account required, with a 7-day offline grace period so you're never blocked.
            </p>
            <DocCallout>
              LazyDoc has no backend. Keys are stored with OS-level encryption and only sent directly to your configured AI provider — nobody else sees them.
            </DocCallout>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { icon: <Lock className="h-4 w-4" />, t: "Keys stored encrypted on-device", b: "API credentials are encrypted at the OS level and never sent anywhere except your configured provider." },
                { icon: <Shield className="h-4 w-4" />, t: "No LazyDoc backend", b: "Recordings are processed locally. No server ever sees your screen data or your keys." },
                { icon: <BadgeCheck className="h-4 w-4" />, t: "License via Gumroad", b: "Activate with your purchase — no account creation, no email subscription required." },
                { icon: <Zap className="h-4 w-4" />, t: "7-day offline grace period", b: "LazyDoc works fully offline for 7 days before license re-validation is required." },
              ].map(({ icon, t, b }) => (
                <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                  <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                  <div>
                    <div className="text-sm font-medium text-slate-200">{t}</div>
                    <div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div>
                  </div>
                </div>
              ))}
            </div>
          </DocStep>

          {/* 11 FAQ */}
          <DocStep id="faq" number="11" title="Everything you were about to Google.">
            <p className="text-lg leading-8 text-slate-400">
              The questions worth answering before you buy.
            </p>
            <FAQSection inline />
          </DocStep>

          {/* Final CTA */}
          <div className="py-12">
            <div className="rounded-[36px] border border-[#2B3B6C] bg-gradient-to-r from-[#101726] via-[#0D1220] to-[#101428] p-8 md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Get started</div>
                  <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">Stop documenting the hard way.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">You already did the work. Let the documentation take care of itself.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <PrimaryButton href="https://megabytesnyc.gumroad.com/l/xoenx" className="px-6 py-4">Get LazyDoc — $39.99</PrimaryButton>
                  <SecondaryButton onClick={() => setPage("features")} className="px-6 py-4">Explore features</SecondaryButton>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>

      <footer className="border-t border-white/6 py-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <MacIcon />
            <div>
              <div className="font-medium text-slate-300">LazyDoc</div>
              <div>BYOK documentation for devs, IT, and people tired of writing the same guide twice.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <button onClick={() => setPage("features")} className="hover:text-white">Features</button>
            <button onClick={() => setPage("compare")} className="hover:text-white">Compare</button>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="mailto:help@lazydoc.app" className="hover:text-white">help@lazydoc.app</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function DocPageShell({ setPage, title, titleAccent, badge, tocItems, activeSection, children }) {
  return (
    <>
      <div className="border-b border-white/8 pb-8 mb-0">
        <button onClick={() => setPage("home")} className="mb-5 inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 transition">
          <ChevronLeft className="h-4 w-4" /> Back to home
        </button>
        <h1 className="mb-5 text-5xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.04]">
          {title}<br />
          <span className="bg-gradient-to-r from-[#7EA0FF] via-[#90A2FF] to-[#B88BFF] bg-clip-text text-transparent">{titleAccent}</span>
        </h1>
        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-slate-300">
            <MacIcon className="h-4 w-4" /> LazyDoc
          </span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
            <Download className="h-3.5 w-3.5 text-slate-500" /> macOS
          </span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
            <Layers3 className="h-3.5 w-3.5 text-slate-500" /> {badge}
          </span>
          <span className="text-slate-600">·</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/8 bg-white/[0.03] px-3 py-1">
            <CircleDollarSign className="h-3.5 w-3.5 text-slate-500" /> One-time $39.99
          </span>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-0 h-screen flex flex-col justify-center pr-8">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.34em] text-slate-700">Contents</p>
            <nav className="space-y-0.5">
              {tocItems.map(({ num, label, href, id }) => {
                const isActive = activeSection === id;
                return (
                  <a key={id} href={href} className={`group flex items-center gap-2 rounded-lg px-2 py-[5px] text-xs transition-all duration-200 ${isActive ? "text-white" : "text-slate-600 hover:text-slate-400"}`}>
                    <span className={`tabular-nums text-[10px] font-semibold transition-colors duration-200 ${isActive ? "text-[#7B9FFF]" : "text-slate-700 group-hover:text-slate-500"}`}>{num}</span>
                    <span className="leading-none">{label}</span>
                    {isActive && <span className="ml-auto h-1 w-1 shrink-0 rounded-full bg-[#5B7CFA]" />}
                  </a>
                );
              })}
            </nav>
          </div>
        </aside>

        <main className="min-w-0 pt-2 lg:border-l lg:border-white/6 lg:pl-12">
          {children}

          <div className="py-12">
            <div className="rounded-[36px] border border-[#2B3B6C] bg-gradient-to-r from-[#101726] via-[#0D1220] to-[#101428] p-8 md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
                <div>
                  <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Get started</div>
                  <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">Stop documenting the hard way.</h2>
                  <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">You already did the work. Let the documentation take care of itself.</p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                  <PrimaryButton href="https://megabytesnyc.gumroad.com/l/xoenx" className="px-6 py-4">Get LazyDoc — $39.99</PrimaryButton>
                  <SecondaryButton onClick={() => setPage("home")} className="px-6 py-4">Back to home</SecondaryButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="border-t border-white/6 py-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <MacIcon />
            <div>
              <div className="font-medium text-slate-300">LazyDoc</div>
              <div>BYOK documentation for devs, IT, and people tired of writing the same guide twice.</div>
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <button onClick={() => setPage("home")} className="hover:text-white">Home</button>
            <button onClick={() => setPage("features")} className="hover:text-white">Features</button>
            <button onClick={() => setPage("compare")} className="hover:text-white">Compare</button>
            <a href="mailto:help@lazydoc.app" className="hover:text-white">help@lazydoc.app</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function FeaturesPage({ setPage }) {
  const [activeSection, setActiveSection] = useState("f-capture");
  const tocItems = [
    { num: "01", label: "Capture", href: "#f-capture", id: "f-capture" },
    { num: "02", label: "Frame Review", href: "#f-frames", id: "f-frames" },
    { num: "03", label: "AI Generation", href: "#f-generate", id: "f-generate" },
    { num: "04", label: "Document Editor", href: "#f-editor", id: "f-editor" },
    { num: "05", label: "Export", href: "#f-export", id: "f-export" },
    { num: "06", label: "BYOK", href: "#f-byok", id: "f-byok" },
    { num: "07", label: "Customization", href: "#f-custom", id: "f-custom" },
    { num: "08", label: "Pricing", href: "#f-pricing", id: "f-pricing" },
  ];

  useEffect(() => {
    const ids = tocItems.map(t => t.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <DocPageShell setPage={setPage} title="Every feature." titleAccent="No fluff." badge="8 sections" tocItems={tocItems} activeSection={activeSection}>

      <DocStep id="f-capture" number="01" title="Capture">
        <p className="text-lg leading-8 text-slate-400">
          Record your full screen, a single app window, or a browser tab while you work. No staging, no fake walkthroughs, no reconstructing from memory later.
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img src="/ss-record.png" alt="LazyDoc record panel" className="w-full" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Monitor className="h-4 w-4" />, t: "Full-screen capture", b: "Record dashboards, terminals, admin panels — anything on your desktop." },
            { icon: <AppWindow className="h-4 w-4" />, t: "Window-only capture", b: "Focus on one app when you don't need the rest of the desktop in frame." },
            { icon: <Play className="h-4 w-4" />, t: "Live preview", b: "See exactly what's being captured before you start recording." },
            { icon: <Zap className="h-4 w-4" />, t: "Global hotkey", b: "Cmd+Shift+R starts and stops from any app — no context switching." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
      </DocStep>

      <DocStep id="f-frames" number="02" title="Frame Review">
        <p className="text-lg leading-8 text-slate-400">
          Before anything goes to AI, you review every frame. Cut noise, reorder steps, set a cover image, and add context notes so the AI knows exactly what each frame means.
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img src="/frameselection.png" alt="LazyDoc frame selection grid" className="w-full" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Layers3 className="h-4 w-4" />, t: "Drag-and-drop reordering", b: "Rearrange frames into the exact sequence before generating." },
            { icon: <Check className="h-4 w-4" />, t: "Include / exclude frames", b: "One click to remove frames that add noise or repeat content." },
            { icon: <Camera className="h-4 w-4" />, t: "Hover to preview", b: "Full-size preview on hover so you know what each frame captures." },
            { icon: <MessageSquareText className="h-4 w-4" />, t: "Per-frame context notes", b: "Add a note to any frame — sent to the AI for more accurate step output." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
      </DocStep>

      <DocStep id="f-generate" number="03" title="AI Generation">
        <p className="text-lg leading-8 text-slate-400">
          Click Generate and LazyDoc analyzes every frame to write a structured, readable guide. Bring your own Anthropic or OpenAI key, use a local Ollama model, or connect any OpenAI-compatible endpoint.
        </p>
        <DocCallout variant="warning">
          BYOK means zero markup. A typical guide generation costs a few cents in API usage — paid directly to your provider, not to LazyDoc.
        </DocCallout>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Cpu className="h-4 w-4" />, t: "Anthropic (Claude)", b: "Best quality output. Requires API key. ~$0.07/guide." },
            { icon: <Globe className="h-4 w-4" />, t: "OpenAI / compatible endpoints", b: "ChatGPT API, vLLM, LM Studio, LocalAI, Oobabooga." },
            { icon: <Lock className="h-4 w-4" />, t: "Local AI via Ollama", b: "Free. Private. Runs entirely on your machine — no internet required." },
            { icon: <Zap className="h-4 w-4" />, t: "Diff-aware re-generation", b: "Unchanged frames are cached — saves time and cuts API cost." },
            { icon: <Wand2 className="h-4 w-4" />, t: "Prompt templates", b: "Standard, SOP Mode, Customer-Facing, and custom user templates." },
            { icon: <ScanText className="h-4 w-4" />, t: "Output modifiers", b: "Generalize, Preserve Exact, Formal Style — applied per generation." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
        <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img src="/ss-newdoc.png" alt="Newly generated LazyDoc guide" className="w-full" />
        </div>
      </DocStep>

      <DocStep id="f-editor" number="04" title="Document Editor">
        <p className="text-lg leading-8 text-slate-400">
          Every generated guide opens in a full editor. Edit inline, manage steps, rewrite with AI, or drop into the markdown source with live preview — all without leaving the app.
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img src="/ss-editor.png" alt="LazyDoc document editor" className="w-full" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <FileText className="h-4 w-4" />, t: "Inline editing", b: "Edit titles, descriptions, tips, and code snippets in the guide view." },
            { icon: <Layers3 className="h-4 w-4" />, t: "Add, remove, reorder steps", b: "Full control over step order. Add manual steps anywhere in the guide." },
            { icon: <Terminal className="h-4 w-4" />, t: "Full markdown editor", b: "Source with live preview and a formatting toolbar for full control." },
            { icon: <Wand2 className="h-4 w-4" />, t: "AI step rewrite", b: "Rewrite any individual step with a custom instruction." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
      </DocStep>

      <DocStep id="f-export" number="05" title="Export">
        <p className="text-lg leading-8 text-slate-400">
          Ship your guide in the format your team actually uses — PDF, Markdown, Word, a full folder with images, or a self-contained HTML file with Open Graph meta tags.
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img src="/exportscreen.png" alt="LazyDoc export options" className="w-full" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <FileText className="h-4 w-4" />, t: "PDF", b: "Print-optimized layout — ready to share or attach to a ticket." },
            { icon: <Terminal className="h-4 w-4" />, t: "Markdown", b: "Clean .md that works in Notion, Obsidian, GitHub, or any docs tool." },
            { icon: <Download className="h-4 w-4" />, t: "DOCX", b: "Word-compatible for teams that live in Microsoft Office." },
            { icon: <FolderOutput className="h-4 w-4" />, t: "Folder export", b: "Markdown + images as separate files — version-control friendly." },
            { icon: <Globe className="h-4 w-4" />, t: "HTML", b: "Self-contained with cover image and Open Graph meta tags." },
            { icon: <Zap className="h-4 w-4" />, t: "Auto-save to output folder", b: "Set a default folder — no dialog every time you export." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
      </DocStep>

      <DocStep id="f-byok" number="06" title="Bring Your Own Key">
        <p className="text-lg leading-8 text-slate-400">
          This isn't a checkbox feature — it's the entire pricing and privacy story. You choose the provider, control the spend, and decide how private the workflow needs to be.
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
          <img src="/ss-settings.png" alt="LazyDoc AI backend settings" className="w-full" />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <KeyRound className="h-4 w-4" />, t: "Hosted providers", b: "Plug in OpenAI or Anthropic for speed and convenience." },
            { icon: <Cpu className="h-4 w-4" />, t: "Local models", b: "Route through Ollama when privacy or cost control matters more." },
            { icon: <Shield className="h-4 w-4" />, t: "No hidden markup", b: "LazyDoc doesn't resell your tokens. Your spend goes to your provider." },
            { icon: <Lock className="h-4 w-4" />, t: "Keys stored on-device", b: "Credentials stay encrypted on your machine — never sent to LazyDoc." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
      </DocStep>

      <DocStep id="f-custom" number="07" title="Customization">
        <p className="text-lg leading-8 text-slate-400">
          Multiple themes, a fully editable system prompt, menu bar mode, and configurable capture settings — LazyDoc adapts to how you work.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <img src="/ThemeSeleection.png" alt="LazyDoc theme picker" className="w-full" />
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <img src="/Prompt Editor.png" alt="LazyDoc system prompt editor" className="w-full" />
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { icon: <Sparkles className="h-4 w-4" />, t: "Multiple themes", b: "Obsidian, Terminal, Rose, Midnight, Paper — switch any time." },
            { icon: <Terminal className="h-4 w-4" />, t: "System prompt editor", b: "Customize how the AI writes — tone, format, structure, all of it." },
            { icon: <ScanText className="h-4 w-4" />, t: "Configurable frame settings", b: "Set the capture interval and max frame count to match your pace." },
            { icon: <AppWindow className="h-4 w-4" />, t: "Menu bar mode", b: "Hides from the Dock and runs in the menu bar — out of your way." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
      </DocStep>

      <DocStep id="f-pricing" number="08" title="Pricing">
        <p className="text-lg leading-8 text-slate-400">
          One price. Everything included. No seat limits, no subscription tiers, no usage dashboard hiding a bill.
        </p>
        <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
          <PricingCard />
          <div className="grid content-start gap-3">
            {[
              { icon: <BadgeCheck className="h-4 w-4" />, t: "All features included", b: "Frame review, AI generation, editor, export, BYOK — nothing gated." },
              { icon: <Shield className="h-4 w-4" />, t: "Up to 3 machine activations", b: "Transfer to a new machine by contacting help@lazydoc.app." },
              { icon: <Lock className="h-4 w-4" />, t: "7-day offline grace period", b: "Works fully offline for 7 days before license re-validation." },
              { icon: <Zap className="h-4 w-4" />, t: "Future updates included", b: "All updates delivered automatically through the built-in updater." },
            ].map(({ icon, t, b }) => (
              <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
                <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
              </div>
            ))}
          </div>
        </div>
      </DocStep>

    </DocPageShell>
  );
}

function ComparePage({ setPage }) {
  const [activeSection, setActiveSection] = useState("c-overview");
  const tocItems = [
    { num: "01", label: "Overview", href: "#c-overview", id: "c-overview" },
    { num: "02", label: "vs Scribe", href: "#c-scribe", id: "c-scribe" },
    { num: "03", label: "vs Tango", href: "#c-tango", id: "c-tango" },
    { num: "04", label: "vs Guidde", href: "#c-guidde", id: "c-guidde" },
    { num: "05", label: "Feature Matrix", href: "#c-matrix", id: "c-matrix" },
    { num: "06", label: "Verdict", href: "#c-verdict", id: "c-verdict" },
  ];

  useEffect(() => {
    const ids = tocItems.map(t => t.id);
    const onScroll = () => {
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <DocPageShell setPage={setPage} title="How LazyDoc" titleAccent="stacks up." badge="6 sections" tocItems={tocItems} activeSection={activeSection}>

      <DocStep id="c-overview" number="01" title="The landscape">
        <p className="text-lg leading-8 text-slate-400">
          There are a handful of tools trying to solve documentation from screen recordings. Most are browser-first, subscription-priced, and locked to their own AI backend. LazyDoc is different on all three counts.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { icon: <Monitor className="h-4 w-4" />, t: "Desktop-first capture", b: "Captures your full screen — not just what's in a browser tab." },
            { icon: <KeyRound className="h-4 w-4" />, t: "Bring your own AI", b: "Your key, your provider, your cost. No token markup ever." },
            { icon: <CircleDollarSign className="h-4 w-4" />, t: "One-time price", b: "$39.99 once. No monthly bill waiting to grow." },
          ].map(({ icon, t, b }) => (
            <div key={t} className="flex gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
              <div className="mt-0.5 shrink-0 text-slate-400">{icon}</div>
              <div><div className="text-sm font-medium text-slate-200">{t}</div><div className="mt-0.5 text-xs leading-5 text-slate-500">{b}</div></div>
            </div>
          ))}
        </div>
        <DocCallout>
          If your workflow ever leaves the browser — terminals, desktop apps, admin panels, local tools — LazyDoc is the only option that captures it fully.
        </DocCallout>
      </DocStep>

      <DocStep id="c-scribe" number="02" title="LazyDoc vs Scribe">
        <p className="text-lg leading-8 text-slate-400">
          Scribe is the biggest name in step-by-step guide generation. It's polished, well-marketed, and works well for browser walkthroughs. But it's a browser extension first — and that's where it stops.
        </p>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
          <ComparisonRow label="" lazydoc="LazyDoc" other="Scribe" header />
          <ComparisonRow label="Capture scope" lazydoc="Full desktop + apps" other="Browser only" />
          <ComparisonRow label="AI generation" lazydoc="Full structured guide" other="Step screenshots + labels" />
          <ComparisonRow label="Bring your own AI" lazydoc="Yes" other="No" />
          <ComparisonRow label="Pricing" lazydoc="$39.99 one-time" other="Subscription" />
          <ComparisonRow label="Best for" lazydoc="Technical desktop workflows" other="Simple browser SOPs" />
        </div>
        <DocCallout variant="warning">
          Scribe can't capture anything outside Chrome. If your workflow touches a terminal, a desktop app, or a local tool, Scribe can't document it.
        </DocCallout>
      </DocStep>

      <DocStep id="c-tango" number="03" title="LazyDoc vs Tango">
        <p className="text-lg leading-8 text-slate-400">
          Tango is built for standardized business process documentation — think enterprise onboarding and process handoffs. It's corporate-friendly but not developer-native, and it doesn't go near your AI stack.
        </p>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
          <ComparisonRow label="" lazydoc="LazyDoc" other="Tango" header />
          <ComparisonRow label="Capture scope" lazydoc="Full desktop + apps" other="Mostly browser" />
          <ComparisonRow label="AI generation" lazydoc="Full structured guide" other="Limited" />
          <ComparisonRow label="Bring your own AI" lazydoc="Yes" other="No" />
          <ComparisonRow label="Developer / IT fit" lazydoc="Strong" other="Medium" />
          <ComparisonRow label="Pricing" lazydoc="$39.99 one-time" other="Subscription" />
        </div>
      </DocStep>

      <DocStep id="c-guidde" number="04" title="LazyDoc vs Guidde">
        <p className="text-lg leading-8 text-slate-400">
          Guidde leans into narrated video walkthroughs and polished visual explainers. It's strong for presentation-style content — weaker for operational documentation, runbooks, and anything that needs to be in Markdown or a knowledge base.
        </p>
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] overflow-hidden">
          <ComparisonRow label="" lazydoc="LazyDoc" other="Guidde" header />
          <ComparisonRow label="Output format" lazydoc="Structured text guide" other="Video walkthrough" />
          <ComparisonRow label="Markdown / PDF export" lazydoc="Yes" other="Limited" />
          <ComparisonRow label="Bring your own AI" lazydoc="Yes" other="No" />
          <ComparisonRow label="Ops / runbook fit" lazydoc="Strong" other="Weak" />
          <ComparisonRow label="Pricing" lazydoc="$39.99 one-time" other="Subscription" />
        </div>
      </DocStep>

      <DocStep id="c-matrix" number="05" title="Feature Matrix">
        <p className="text-lg leading-8 text-slate-400">
          The full side-by-side. Most tools in this category are optimized for browser capture, generic business users, or recurring SaaS revenue.
        </p>
        <Card className="overflow-hidden border-[#24325F] bg-[#0C111B]">
          <MultiCompareRow label="Feature" lazydoc="LazyDoc" scribe="Scribe" tango="Tango" guidde="Guidde" header />
          <MultiCompareRow label="AI-powered guide generation" lazydoc="Full" scribe="Limited" tango="Limited" guidde="Yes" />
          <MultiCompareRow label="Bring your own AI" lazydoc="✓" scribe="✗" tango="✗" guidde="✗" />
          <MultiCompareRow label="Full desktop capture" lazydoc="✓" scribe="Browser only" tango="Browser only" guidde="Mixed" />
          <MultiCompareRow label="Markdown / PDF export" lazydoc="✓" scribe="Partial" tango="Partial" guidde="Limited" />
          <MultiCompareRow label="Developer / IT fit" lazydoc="Strong" scribe="Weak" tango="Medium" guidde="Weak" />
          <MultiCompareRow label="One-time price" lazydoc="✓" scribe="✗" tango="✗" guidde="✗" />
          <MultiCompareRow label="Token cost control" lazydoc="Full" scribe="None" tango="None" guidde="None" />
        </Card>
      </DocStep>

      <DocStep id="c-verdict" number="06" title="Verdict">
        <p className="text-lg leading-8 text-slate-400">
          Scribe is the closest brand competitor. Tango is the process-heavy enterprise option. Guidde is the video-first alternative. None of them combine desktop workflow capture, BYOK flexibility, and a one-time price.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { t: "If your workflow leaves the browser", b: "LazyDoc is the only option that captures it." },
            { t: "If you care about AI cost control", b: "BYOK means your spend goes to your provider, not a platform." },
            { t: "If you're tired of SaaS subscriptions", b: "One purchase. No monthly renewal. Updates included." },
            { t: "If you need ops-ready output", b: "Markdown, PDF, DOCX — not just a video or a screenshot list." },
          ].map(({ t, b }) => (
            <div key={t} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
              <div className="text-sm font-semibold text-slate-200">{t}</div>
              <div className="mt-1.5 text-sm leading-6 text-slate-500">{b}</div>
            </div>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-[1fr_1fr] items-start">
          <PricingCard />
          <div className="rounded-[28px] border border-[#2B3B6C] bg-gradient-to-br from-[#101726] to-[#0A0D15] p-8">
            <div className="mb-3 text-xs uppercase tracking-[0.32em] text-slate-500">Bottom line</div>
            <p className="text-lg leading-8 text-slate-300">LazyDoc wins when the work is technical, mixed, or outside the browser. If that sounds like your workflow, it's the right tool.</p>
            <div className="mt-6">
              <PrimaryButton href="https://megabytesnyc.gumroad.com/l/xoenx" className="w-full justify-center py-4">
                Get LazyDoc — $39.99
              </PrimaryButton>
            </div>
          </div>
        </div>
      </DocStep>

    </DocPageShell>
  );
}

export default function App() {
  const getPage = () => {
    if (typeof window === "undefined") return "home";
    if (window.location.hash === "#features-page") return "features";
    if (window.location.hash === "#compare-page") return "compare";
    return "home";
  };

  const [page, setPageState] = useState(getPage);

  useEffect(() => {
    const onHashChange = () => setPageState(getPage());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const setPage = (next) => {
    if (typeof window !== "undefined") {
      window.location.hash = next === "features" ? "features-page" : next === "compare" ? "compare-page" : "";
    }
    setPageState(next);
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#090B11] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-3xl opacity-25" style={{ background: "radial-gradient(circle, rgba(98,122,255,0.42), transparent 62%)" }} />
        <div className="absolute right-0 top-[10%] h-[480px] w-[480px] rounded-full blur-3xl opacity-20" style={{ background: "radial-gradient(circle, rgba(151,94,255,0.35), transparent 60%)" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        {page === "features" ? <FeaturesPage setPage={setPage} /> : page === "compare" ? <ComparePage setPage={setPage} /> : <HomePage setPage={setPage} />}
      </div>
    </div>
  );
}
