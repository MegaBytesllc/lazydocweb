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

function PrimaryButton({ children, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`inline-flex items-center justify-center rounded-2xl bg-[#5B7CFA] px-5 py-3 font-medium text-white transition hover:bg-[#6B89FA] shadow-[0_10px_30px_rgba(91,124,250,0.28)] ${className}`}>
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
        <div className="mb-2 text-5xl font-semibold tracking-tight text-white">$29.99</div>
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
        <PrimaryButton className="w-full py-4">
          Buy LazyDoc <ChevronRight className="ml-1 h-4 w-4" />
        </PrimaryButton>
        <p className="mt-4 text-sm leading-6 text-slate-500">No subscription. No token markup. Your API usage stays yours.</p>
      </div>
    </Card>
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

function HomePage({ setPage }) {
  return (
    <>
      <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <MacIcon />
          <div>
            <div className="text-lg font-semibold tracking-tight">LazyDoc</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">BYOK documentation for devs</div>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a href="#problem" className="hover:text-white">Problem</a>
          <button onClick={() => setPage("features")} className="hover:text-white">Features</button>
          <button onClick={() => setPage("compare")} className="hover:text-white">Compare</button>
          <a href="#pricing" className="hover:text-white">Pricing</a>
        </div>
        <PrimaryButton>Get LazyDoc — $29.99</PrimaryButton>
      </nav>

      <section className="grid items-center gap-12 pb-24 pt-2 lg:grid-cols-[1.02fr_1fr] lg:gap-16">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#2A3B69] bg-[#10182A] px-4 py-2 text-sm text-slate-300">
            <KeyRound className="h-4 w-4 text-[#85A6FF]" />
            Bring your own API key. Keep control.
          </div>
          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
            Stop writing docs. <span className="bg-gradient-to-r from-[#7EA0FF] via-[#90A2FF] to-[#B88BFF] bg-clip-text text-transparent">Record once.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
            Capture your workflow, run it through your own AI, and generate clean step-by-step documentation without subscriptions, token markup, or post-task cleanup hell.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <PrimaryButton>
              Get LazyDoc — $29.99 <ArrowRight className="ml-2 h-4 w-4" />
            </PrimaryButton>
            <SecondaryButton onClick={() => setPage("features")}>Explore features</SecondaryButton>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            <Stat value="BYOK" label="Use OpenAI, Anthropic, or local models" />
            <Stat value="0%" label="Token markup added by LazyDoc" />
            <Stat value="1x" label="One-time price, not a monthly tax" />
          </div>
        </div>

        <MockAppPanel />
      </section>

      <section id="problem" className="pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <SectionTitle
            eyebrow="The problem"
            title="Documentation dies the second the work is done."
            body="You finish a task, someone asks for the steps, and now you are manually retracing clicks, taking screenshots, and trying to remember what actually happened instead of what you wish happened."
            align="left"
          />
          <Card className="relative overflow-hidden bg-[#0D111B]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(164,92,247,0.18),transparent_32%)]" />
            <div className="relative grid gap-4 p-6 md:grid-cols-2 md:p-8">
              {[
                ["Retrace steps from memory", "What actually happened gets replaced by a polite fiction."],
                ["Take screenshots manually", "Nobody enjoys playing documentation paparazzi."],
                ["Rewrite the same guide twice", "Once for yourself, once for everyone else."],
                ["Lose the details", "Then the next person starts from zero anyway."],
              ].map(([title, text]) => (
                <div key={title} className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                  <div className="mb-2 text-lg font-medium text-white">{title}</div>
                  <div className="text-slate-500 leading-7">{text}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </section>

      <section className="pb-24">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="relative overflow-hidden border-[#24325F] bg-[#0E1423] p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(91,124,250,0.16),transparent_34%)]" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-500">The fix</div>
              <h2 className="mb-4 text-4xl font-semibold tracking-tight text-white">If you did the work, the doc should already exist.</h2>
              <p className="max-w-xl text-lg leading-8 text-slate-400">LazyDoc captures the workflow while it is happening, then turns it into something your team can actually use.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-slate-200">Structured steps</div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-slate-200">Screenshots</div>
                <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-3 text-slate-200">Readable output</div>
              </div>
            </div>
          </Card>
          <Card className="relative overflow-hidden border-[#24325F] bg-[#0A0F19] p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(164,92,247,0.14),transparent_34%)]" />
            <div className="relative grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <Workflow className="mb-3 h-5 w-5 text-[#9FB6FF]" />
                <div className="mb-1 font-medium text-white">Record</div>
                <div className="text-sm leading-6 text-slate-500">Capture your actual workflow.</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <Zap className="mb-3 h-5 w-5 text-[#9FB6FF]" />
                <div className="mb-1 font-medium text-white">Generate</div>
                <div className="text-sm leading-6 text-slate-500">Run it through your configured model.</div>
              </div>
              <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-5">
                <Download className="mb-3 h-5 w-5 text-[#9FB6FF]" />
                <div className="mb-1 font-medium text-white">Ship</div>
                <div className="text-sm leading-6 text-slate-500">Export docs people can follow.</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="features" className="pb-24">
        <SectionTitle eyebrow="Why LazyDoc" title="Built for people who actually do the work." body="Not for teams that live in polished browser demos. For developers, IT, infrastructure, support, and anyone tired of writing the same guide after the fact." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard icon={<Monitor className="h-5 w-5" />} title="Record screen or window" text="Capture the exact workflow without stopping every two seconds to explain what you clicked." />
          <FeatureCard icon={<Sparkles className="h-5 w-5" />} title="Generate clean guides" text="Get step-by-step output with screenshots, titles, and readable structure instead of a wall of chaos." />
          <FeatureCard icon={<Download className="h-5 w-5" />} title="Export developer-friendly" text="Ship guides as Markdown, polished docs, PDFs, or internal wiki content without rebuilding everything by hand." />
          <FeatureCard icon={<Cpu className="h-5 w-5" />} title="Bring your own model" text="Use OpenAI, Anthropic, or your local LLM. Your stack, your billing, your rules." />
        </div>
      </section>

      <section id="compare" className="pb-24">
        <SectionTitle eyebrow="Comparison" title="Scribe is for browsers. LazyDoc is for real workflows." body="If your work touches local apps, terminals, dashboards, admin consoles, or anything outside Chrome, you need a different class of tool." />
        <Card className="overflow-hidden border-[#24325F] bg-[#0C111B]">
          <ComparisonRow label="Feature" lazydoc="LazyDoc" other="Scribe" header />
          <ComparisonRow label="AI-powered docs" lazydoc="Full generation" other="Limited" />
          <ComparisonRow label="Bring your own AI" lazydoc="Yes" other="No" />
          <ComparisonRow label="Desktop and system capture" lazydoc="Yes" other="Browser-first" />
          <ComparisonRow label="Works with dev workflows" lazydoc="Yes" other="Not really" />
          <ComparisonRow label="Subscription required" lazydoc="No" other="Yes" />
          <ComparisonRow label="Token cost control" lazydoc="You control it" other="Hidden" />
        </Card>
        <p className="mt-5 text-center text-lg text-slate-400">LazyDoc does not live in your browser. It lives where your work happens.</p>
      </section>

      <section id="how" className="pb-24">
        <SectionTitle eyebrow="How it works" title="A simple loop. No ceremony." body="Record, process, generate, export. That is the whole point. Nobody wants a 14-step onboarding ritual for documentation software." />
        <div className="grid gap-5 md:grid-cols-4">
          <StepCard number="1" title="Record" text="Capture your screen or a single app window while you do the actual work." />
          <StepCard number="2" title="Process" text="LazyDoc analyzes the workflow using your configured provider or local model." />
          <StepCard number="3" title="Generate" text="Create a clean guide with screenshots, headings, and steps that make sense." />
          <StepCard number="4" title="Export" text="Push it to Markdown, PDF, or wherever your team keeps the official truth." />
        </div>
      </section>

      <section className="pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-[32px] border-[#2B3B6C] bg-gradient-to-br from-[#101726] to-[#0A0D15]">
            <div className="p-8 md:p-10">
              <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">BYOK advantage</div>
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">We don’t charge you for AI. That’s your job.</h3>
              <p className="max-w-2xl text-lg leading-8 text-slate-400">Most AI tools resell compute at a markup and bury it in pricing. LazyDoc doesn’t sit between you and your model. You pick the provider. You own the spend.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "No token markup",
                  "No forced cloud dependency",
                  "Swap models anytime",
                  "Use local LLMs if you want",
                  "Pay providers directly",
                  "No vendor lock-in games",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </Card>

          <div id="pricing">
            <PricingCard />
          </div>
        </div>
      </section>

      <section className="pb-24">
        <SectionTitle eyebrow="Use cases" title="Useful immediately." body="This is not a vague AI toy. It solves a painfully specific problem across engineering, IT, support, onboarding, and internal enablement." />
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard icon={<Terminal className="h-5 w-5" />} title="For developers" text="Document setup flows, feature walkthroughs, QA paths, deploy steps, and weird fixes before they disappear into Slack archaeology." />
          <FeatureCard icon={<Layers3 className="h-5 w-5" />} title="For IT and ops" text="Build runbooks while troubleshooting, preserve tribal knowledge, and stop rebuilding instructions from memory under pressure." />
          <FeatureCard icon={<BookOpen className="h-5 w-5" />} title="For onboarding" text="Turn repeated walkthroughs into durable guides so new hires stop needing a personal tour guide for every tool." />
        </div>
      </section>

      <section className="pb-24">
        <SectionTitle eyebrow="Trust" title="The security questions already have answers." body="Because the first thing a technical buyer is going to ask is where the key lives, where the recordings go, and whether this turns into a compliance migraine." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard icon={<Lock className="h-5 w-5" />} title="Keys stored locally" text="Keep API credentials on device instead of tossing them into yet another random SaaS backend." />
          <FeatureCard icon={<Terminal className="h-5 w-5" />} title="Works with your stack" text="Pair it with hosted providers or local models depending on cost, privacy, and how allergic you are to recurring bills." />
          <FeatureCard icon={<Shield className="h-5 w-5" />} title="Portable outputs" text="Generated docs are exportable and usable outside the product, which means your knowledge does not get trapped." />
          <FeatureCard icon={<Cpu className="h-5 w-5" />} title="Desktop-first workflow" text="A native-feeling macOS experience and a site that actually matches the product instead of pretending it is another generic dashboard." />
        </div>
      </section>

      <section className="pb-24">
        <SectionTitle eyebrow="What people will say" title="The kind of reaction you want." body="A decent product should make people feel relieved, slightly smug, and mildly annoyed they were doing it the hard way before." />
        <div className="grid gap-5 md:grid-cols-3">
          <TestimonialCard quote="This replaced half my Notion cleanup work." author="Alex R." role="Platform engineer" />
          <TestimonialCard quote="We finally have runbooks created during the actual incident instead of rewritten three days later." author="Sam T." role="Infrastructure lead" />
          <TestimonialCard quote="The BYOK part sold me. I do not need another SaaS marking up token costs like it’s doing me a favor." author="Jordan K." role="Indie developer" />
        </div>
      </section>

      <section className="pb-10">
        <div className="rounded-[36px] border border-[#2B3B6C] bg-gradient-to-r from-[#101726] via-[#0D1220] to-[#101428] p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Final CTA</div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Stop documenting the hard way.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">You already did the work. Let the documentation take care of itself.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <PrimaryButton className="px-6 py-4">Get LazyDoc — $29.99</PrimaryButton>
              <SecondaryButton onClick={() => setPage("features")} className="px-6 py-4">Explore features</SecondaryButton>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/6 py-8 text-sm text-slate-500">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <MacIcon />
            <div>
              <div className="font-medium text-slate-300">LazyDoc</div>
              <div>BYOK documentation for devs, IT, and people tired of writing the same guide twice.</div>
            </div>
          </div>
          <div className="flex gap-6">
            <button onClick={() => setPage("features")} className="hover:text-white">Features</button>
            <button onClick={() => setPage("compare")} className="hover:text-white">Compare</button>
            <a href="#pricing" className="hover:text-white">Pricing</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function FeaturesPage({ setPage }) {
  return (
    <>
      <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <MacIcon />
          <div>
            <div className="text-lg font-semibold tracking-tight">LazyDoc</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Feature overview</div>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <button onClick={() => setPage("home")} className="hover:text-white">Home</button>
          <a href="#capture" className="hover:text-white">Capture</a>
          <a href="#generate" className="hover:text-white">Generate</a>
          <a href="#export" className="hover:text-white">Export</a>
          <a href="#byok" className="hover:text-white">BYOK</a>
          <button onClick={() => setPage("compare")} className="hover:text-white">Compare</button>
        </div>
        <PrimaryButton>Get LazyDoc — $29.99</PrimaryButton>
      </nav>

      <section className="pb-20 pt-2">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <button onClick={() => setPage("home")} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
              <ChevronLeft className="h-4 w-4" /> Back to home
            </button>
            <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Feature page</div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
              Everything LazyDoc does, <span className="bg-gradient-to-r from-[#7EA0FF] via-[#90A2FF] to-[#B88BFF] bg-clip-text text-transparent">without the SaaS nonsense.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              Capture real workflows, generate usable documentation, export it anywhere, and keep your AI stack under your control.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>Get LazyDoc — $29.99</PrimaryButton>
              <SecondaryButton onClick={() => setPage("home")}>Back to landing page</SecondaryButton>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <FeatureHeroCard icon={<Camera className="h-5 w-5" />} title="Capture what actually happened" text="Record your full screen or a single app window while you work. No staging. No fake walkthrough. No memory reconstruction later." />
            <FeatureHeroCard icon={<Wand2 className="h-5 w-5" />} title="Generate clean documentation" text="Turn recorded workflows into readable step-by-step guides with structure, screenshots, and useful flow instead of noise." />
            <FeatureHeroCard icon={<FolderOutput className="h-5 w-5" />} title="Export where your team lives" text="Ship docs as Markdown, PDF, or polished internal content without trapping the output inside another tool." />
            <FeatureHeroCard icon={<ScanText className="h-5 w-5" />} title="Use your own model" text="OpenAI, Anthropic, or local LLMs. You choose the provider, the spend, and the privacy posture." />
          </div>
        </div>
      </section>

      <section id="capture" className="pb-24">
        <SectionTitle eyebrow="Capture" title="Record the workflow while it is real." body="The biggest documentation failure happens after the task is done. LazyDoc captures the work as it happens, so you stop rebuilding the steps from memory later." />
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="overflow-hidden bg-[#0B1018]">
            <div className="grid min-h-[420px] md:grid-cols-[260px_1fr]">
              <div className="border-r border-white/6 bg-[#0A0D15] p-5">
                <div className="mb-4 text-xs uppercase tracking-[0.28em] text-slate-500">Capture modes</div>
                <div className="space-y-3">
                  <div className="rounded-2xl border border-[#2E3E72] bg-[#121B32] p-4 text-slate-100">Screen recording</div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">Window recording</div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">Live preview</div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-300">One-click start</div>
                </div>
              </div>
              <div className="relative flex items-center justify-center p-8">
                <GridGlow />
                <div className="relative rounded-[30px] border border-white/10 bg-white/[0.03] p-8 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/[0.04]"><Camera className="h-7 w-7 text-slate-200" /></div>
                  <div className="text-2xl font-semibold text-white">Capture once</div>
                  <div className="mt-3 max-w-md text-slate-500 leading-7">LazyDoc starts with the same thing you are already doing: the actual work.</div>
                </div>
              </div>
            </div>
          </Card>
          <div className="grid gap-5">
            <FeatureCard icon={<Monitor className="h-5 w-5" />} title="Full-screen capture" text="Record dashboards, terminals, settings panels, admin portals, and anything else your workflow touches." />
            <FeatureCard icon={<AppWindow className="h-5 w-5" />} title="Window-only capture" text="Focus on one application when you do not need the noise of the whole desktop." />
            <FeatureCard icon={<Play className="h-5 w-5" />} title="Live preview" text="See what is being captured before you commit to generating output from it." />
          </div>
        </div>
      </section>

      <section id="generate" className="pb-24">
        <SectionTitle eyebrow="Generate" title="Turn recordings into guides people can actually use." body="LazyDoc is not trying to create a transcript of chaos. It produces structured, readable output with steps that make sense and screenshots where they matter." />
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard icon={<Sparkles className="h-5 w-5" />} title="Step-by-step structure" text="Turn raw activity into readable instructions instead of a timeline dump nobody wants to parse." />
          <FeatureCard icon={<FileText className="h-5 w-5" />} title="Readable formatting" text="Clear headings, sensible step flow, and output that looks like it belongs in a real runbook." />
          <FeatureCard icon={<Workflow className="h-5 w-5" />} title="Generalize or preserve detail" text="Choose whether you want reusable language or exact commands, values, and configuration specifics." />
        </div>
      </section>

      <section id="export" className="pb-24">
        <SectionTitle eyebrow="Export" title="Your output should not be trapped inside the product." body="Once the guide is generated, it should be easy to move it into your wiki, docs repo, knowledge base, or incident process without ceremony." />
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-5">
            <FeatureCard icon={<Download className="h-5 w-5" />} title="Markdown export" text="Drop it into docs-as-code, Git repos, internal notes, or a README without reformatting everything by hand." />
            <FeatureCard icon={<FolderOutput className="h-5 w-5" />} title="PDF-ready output" text="Create something shareable fast when a polished static document is the easiest way to move work forward." />
            <FeatureCard icon={<BookOpen className="h-5 w-5" />} title="Wiki-friendly content" text="Move the generated guide into whatever system your team already uses to keep the official version of truth." />
          </div>
          <Card className="relative overflow-hidden bg-[#0B1018] p-8 md:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(91,124,250,0.12),transparent_34%)]" />
            <div className="relative">
              <div className="mb-4 inline-flex rounded-full border border-white/8 bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-[0.28em] text-slate-500">Export targets</div>
              <div className="grid gap-4 sm:grid-cols-2">
                {["Markdown", "PDF", "Internal wiki", "Runbooks", "Knowledge base", "Handoff docs"].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-4 text-slate-200">{item}</div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section id="byok" className="pb-24">
        <SectionTitle eyebrow="BYOK" title="Bring your own model. Keep your own leverage." body="This is not a cute checkbox feature. It is the whole pricing and control story. You decide which provider to use, what it costs, and how private the workflow needs to be." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeatureCard icon={<KeyRound className="h-5 w-5" />} title="Use hosted providers" text="Plug in OpenAI or Anthropic when you want speed and convenience." />
          <FeatureCard icon={<Cpu className="h-5 w-5" />} title="Use local models" text="Route generation through your own stack when privacy or cost control matters more." />
          <FeatureCard icon={<Shield className="h-5 w-5" />} title="No hidden markup" text="LazyDoc does not quietly resell your tokens with a smile and a monthly bill." />
          <FeatureCard icon={<Lock className="h-5 w-5" />} title="Keep keys local" text="Your credentials stay on device instead of disappearing into another SaaS backend." />
        </div>
      </section>

      <section className="pb-24">
        <SectionTitle eyebrow="Feature summary" title="What you are actually buying." body="A desktop tool that captures real workflows, turns them into usable documentation, exports them anywhere, and does not hold your AI usage hostage." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <FeatureHeroCard icon={<Camera className="h-5 w-5" />} title="Capture" text="Record screen or window workflows as they happen." />
          <FeatureHeroCard icon={<Wand2 className="h-5 w-5" />} title="Generate" text="Produce readable documentation with structure and screenshots." />
          <FeatureHeroCard icon={<FolderOutput className="h-5 w-5" />} title="Export" text="Move output into Markdown, PDFs, and team knowledge systems." />
          <FeatureHeroCard icon={<ScanText className="h-5 w-5" />} title="Control" text="Use your own AI provider and keep cost, privacy, and flexibility." />
        </div>
      </section>

      <section className="pb-10">
        <div className="rounded-[36px] border border-[#2B3B6C] bg-gradient-to-r from-[#101726] via-[#0D1220] to-[#101428] p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Ready to use it?</div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Everything above is included for $29.99.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">One-time purchase. Bring your own AI. Keep your own leverage.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <PrimaryButton className="px-6 py-4">Get LazyDoc — $29.99</PrimaryButton>
              <SecondaryButton onClick={() => setPage("home")} className="px-6 py-4">Back to home</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ComparePage({ setPage }) {
  return (
    <>
      <nav className="mb-16 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <MacIcon />
          <div>
            <div className="text-lg font-semibold tracking-tight">LazyDoc</div>
            <div className="text-xs uppercase tracking-[0.22em] text-slate-500">Comparison page</div>
          </div>
        </div>
        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <button onClick={() => setPage("home")} className="hover:text-white">Home</button>
          <button onClick={() => setPage("features")} className="hover:text-white">Features</button>
          <a href="#table" className="hover:text-white">Matrix</a>
          <a href="#verdict" className="hover:text-white">Verdict</a>
        </div>
        <PrimaryButton>Get LazyDoc — $29.99</PrimaryButton>
      </nav>

      <section className="pb-20 pt-2">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <button onClick={() => setPage("home")} className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.08]">
              <ChevronLeft className="h-4 w-4" /> Back to home
            </button>
            <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Compare LazyDoc</div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-7xl md:leading-[1.02]">
              How LazyDoc stacks up against the <span className="bg-gradient-to-r from-[#7EA0FF] via-[#90A2FF] to-[#B88BFF] bg-clip-text text-transparent">top 3 similar tools.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400 md:text-xl">
              If you are choosing between Scribe, Tango, and Guidde, the biggest difference is simple: LazyDoc is built for real desktop workflows and lets you bring your own AI instead of renting theirs forever.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <PrimaryButton>Get LazyDoc — $29.99</PrimaryButton>
              <SecondaryButton onClick={() => setPage("features")}>See feature breakdown</SecondaryButton>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <CompareToolCard icon={<Trophy className="h-5 w-5" />} name="LazyDoc" tag="Best fit" text="Best for developers, IT, and power users who need desktop capture, AI flexibility, and a one-time price instead of another SaaS bill." verdict="If your workflow leaves the browser, LazyDoc is the strongest fit." />
            <CompareToolCard icon={<Globe className="h-5 w-5" />} name="Scribe" tag="Browser-first" text="Strong name recognition and polished onboarding, but it leans heavily toward browser workflows and subscription pricing." verdict="Good for simple browser walkthroughs. Less compelling for mixed desktop and technical workflows." />
            <CompareToolCard icon={<BadgeCheck className="h-5 w-5" />} name="Tango" tag="Enterprise" text="A structured process documentation tool aimed at larger orgs, but it feels more corporate and less developer-native." verdict="Better for standardized business process capture than flexible technical documentation." />
            <CompareToolCard icon={<CircleDollarSign className="h-5 w-5" />} name="Guidde" tag="Video-first" text="Leans into video walkthroughs and narrated visual guides more than technical, reusable documentation from real workflows." verdict="Useful for presentation-style walkthroughs, weaker for ops docs and BYOK control." />
          </div>
        </div>
      </section>

      <section id="table" className="pb-24">
        <SectionTitle eyebrow="Comparison matrix" title="The differences are not subtle." body="Most tools in this category are optimized for browser capture, generic business users, or recurring SaaS revenue. LazyDoc is optimized for people doing real work on real machines." />
        <Card className="overflow-hidden border-[#24325F] bg-[#0C111B]">
          <MultiCompareRow label="Feature" lazydoc="LazyDoc" scribe="Scribe" tango="Tango" guidde="Guidde" header />
          <MultiCompareRow label="AI-powered documentation" lazydoc="Full generation" scribe="Limited" tango="Limited" guidde="Yes" />
          <MultiCompareRow label="Bring your own AI" lazydoc="Yes" scribe="No" tango="No" guidde="No" />
          <MultiCompareRow label="Desktop and system capture" lazydoc="Yes" scribe="Mostly browser" tango="Mostly browser" guidde="Mixed" />
          <MultiCompareRow label="Developer / IT fit" lazydoc="Strong" scribe="Weak" tango="Medium" guidde="Weak" />
          <MultiCompareRow label="One-time purchase" lazydoc="Yes" scribe="No" tango="No" guidde="No" />
          <MultiCompareRow label="Control over token costs" lazydoc="You control it" scribe="No" tango="No" guidde="No" />
          <MultiCompareRow label="Best at" lazydoc="Technical workflows" scribe="Simple browser SOPs" tango="Process adoption" guidde="Video-style explainers" />
        </Card>
      </section>

      <section className="pb-24">
        <SectionTitle eyebrow="Top 3 alternatives" title="Who you are actually competing with." body="These are the three most relevant tools to beat on clarity, positioning, and workflow fit." />
        <div className="grid gap-5 md:grid-cols-3">
          <FeatureCard icon={<Globe className="h-5 w-5" />} title="Scribe" text="The biggest name in step-by-step guide generation. Strong browser experience, weaker fit for desktop-heavy technical workflows." />
          <FeatureCard icon={<BadgeCheck className="h-5 w-5" />} title="Tango" text="Enterprise-oriented process documentation. Better for corporate process capture than dev-first documentation from live workflows." />
          <FeatureCard icon={<Play className="h-5 w-5" />} title="Guidde" text="More presentation and video oriented. Stronger for polished walkthroughs than for operational docs, runbooks, and BYOK usage." />
        </div>
      </section>

      <section id="verdict" className="pb-24">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="rounded-[32px] border-[#2B3B6C] bg-gradient-to-br from-[#101726] to-[#0A0D15]">
            <div className="p-8 md:p-10">
              <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Verdict</div>
              <h3 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">LazyDoc wins when the work is technical, mixed, or outside the browser.</h3>
              <p className="max-w-2xl text-lg leading-8 text-slate-400">Scribe is the closest brand competitor, Tango is the process-heavy enterprise option, and Guidde is the presentation-style alternative. None of them combine desktop workflow capture, BYOK flexibility, and one-time pricing the way LazyDoc does.</p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200">Best for developers, IT, ops, and internal tooling teams</div>
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-slate-200">Best for teams that care about model choice and cost control</div>
              </div>
            </div>
          </Card>
          <PricingCard />
        </div>
      </section>

      <section className="pb-10">
        <div className="rounded-[36px] border border-[#2B3B6C] bg-gradient-to-r from-[#101726] via-[#0D1220] to-[#101428] p-8 md:p-12">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <div className="mb-4 text-xs uppercase tracking-[0.32em] text-slate-500">Final CTA</div>
              <h2 className="text-4xl font-semibold tracking-tight text-white md:text-5xl">Skip the browser-first compromise.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">Use the tool built for actual workflows, not just polished demos.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <PrimaryButton className="px-6 py-4">Get LazyDoc — $29.99</PrimaryButton>
              <SecondaryButton onClick={() => setPage("home")} className="px-6 py-4">Back to home</SecondaryButton>
            </div>
          </div>
        </div>
      </section>
    </>
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#090B11] text-white">
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
