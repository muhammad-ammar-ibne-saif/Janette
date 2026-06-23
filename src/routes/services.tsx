import { createFileRoute } from "@tanstack/react-router";
import {
  Activity, HeartPulse, Sparkles, UserRound, Check,
  Shield, Calendar, Clock, Brain, Bone, Footprints, Stethoscope,
} from "lucide-react";
import { SectionLabel, CTASection } from "@/components/site/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Chiropractic Services & Conditions Treated | Peterborough" },
      { name: "description", content: "Chiropractic care in Peterborough for back pain, neck pain, leg pain, headaches, pregnancy related care, postural assessment and more. GCC Registered." },
      { property: "og:title", content: "Services & Conditions — Janette Lee Chiropractor Peterborough" },
      { property: "og:description", content: "Personal chiropractic care for back pain, leg pain, headaches, pregnancy care, postural assessment and wellness in Peterborough." },
      { property: "og:image" },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page max-w-3xl">
          <SectionLabel>Services & Conditions</SectionLabel>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Personal chiropractic care, tailored to you.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Every appointment is built around your goals, your lifestyle and your stage of life — never one-size-fits-all.
          </p>
        </div>
      </section>

      <Services />
      <Process />
      <Conditions />
      <CTASection />
    </>
  );
}

function Services() {
  const items = [
    { icon: Activity, t: "Chiropractic Care", d: "Gentle, precise adjustments to restore alignment, ease tension, and help your body function at its best." },
    { icon: Bone, t: "Back Pain Support", d: "Targeted treatment for acute and chronic back pain, addressing the underlying cause rather than just symptoms." },
    { icon: UserRound, t: "Neck Pain Relief", d: "Calm, effective care for stiff, sore or restricted necks — including tension caused by desk work and posture." },
    { icon: Brain, t: "Headache & Migraine Support", d: "Identifying postural and cervical triggers to ease tension headaches and reduce migraine frequency." },
    { icon: Footprints, t: "Leg Pain Treatment", d: "Treatment for radiating leg pain, nerve irritation and lower-limb discomfort, restoring comfortable movement." },
    { icon: HeartPulse, t: "Joint & Mobility Care", d: "Support for stiff, painful or restricted joints — from shoulders and hips to knees and ankles." },
    { icon: Sparkles, t: "Pregnancy Related Care", d: "Gentle, specialist chiropractic support through pregnancy to ease pelvic and lumbar strain." },
    { icon: Stethoscope, t: "Postural Assessment & Advice", d: "Detailed posture analysis with personalised exercises and ergonomic guidance for everyday life." },
    { icon: Shield, t: "Wellness & Preventative Care", d: "Ongoing care plans to maintain mobility, prevent flare-ups and support long-term wellbeing." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            What I offer.
          </h2>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(s => (
            <article key={s.t} className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-gold/40">
              <div className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-[var(--gradient-sage)] opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60" />
              <div className="relative">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/60 text-primary transition-colors group-hover:bg-[var(--gradient-gold)] group-hover:text-primary-foreground">
                  <s.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-2xl text-foreground">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", icon: Calendar, t: "Initial Consultation", d: "A thorough, unhurried conversation about your health history, symptoms, lifestyle and goals." },
    { n: "02", icon: Activity, t: "Full Assessment", d: "Postural, orthopaedic and neurological testing to identify the true source of your discomfort." },
    { n: "03", icon: HeartPulse, t: "Personalised Plan", d: "A clear, evidence-based plan built around you, with realistic goals and timelines explained." },
    { n: "04", icon: Clock, t: "Ongoing Support", d: "Regular reviews and refinements to support long-term improvement and maintenance." },
  ];
  return (
    <section className="relative py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>My Process</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            A clear, reassuring path to feeling better.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div key={s.n} className="relative rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]">
              <div className="font-display text-5xl text-gold/40">{s.n}</div>
              <div className="mt-4 grid h-11 w-11 place-items-center rounded-xl bg-accent/60 text-primary">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              {i < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gold/40 lg:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Conditions() {
  const all = [
    "Back Pain","Neck Pain","Leg Pain","Headaches","Migraines","Hip Pain",
    "Knee Pain","Shoulder Pain","Pregnancy Pain","Disc Problems",
    "Posture Issues","Joint Stiffness","Muscle Tension","Nerve Pain","Mobility Issues",
  ];
  const highlights = [
    { t: "Back & Spine", d: "From acute lower back pain to long-term spinal issues — restoring comfort and movement at the source." },
    { t: "Headaches", d: "Identifying cervical and postural triggers to ease tension headaches and migraines naturally." },
    { t: "Leg Pain", d: "Targeted treatment to address radiating leg pain, nerve irritation and restricted movement." },
  ];
  return (
    <section id="conditions" className="py-20 md:py-28 scroll-mt-24">
      <div className="container-page">
        <div className="max-w-2xl">
          <SectionLabel>Conditions Treated</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Helping patients move beyond pain.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Whatever you're dealing with, you're not alone. These are some of the most common reasons people come to see me in Peterborough.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map(h => (
            <div key={h.t} className="rounded-3xl border border-gold/30 bg-[var(--gradient-warm)] p-7 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-10 items-center rounded-full bg-card px-4 text-xs uppercase tracking-wider text-gold">
                Focus area
              </div>
              <h3 className="mt-4 font-display text-2xl">{h.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{h.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {all.map(c => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80 hover:border-gold/60 hover:text-foreground transition-colors">
              <Check className="h-3.5 w-3.5 text-sage" /> {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
