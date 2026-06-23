import { createFileRoute, Link } from "@tanstack/react-router";
import Janette from "@/assets/janette.jpeg";
import {
  Activity, HeartPulse, Sparkles, UserRound, Phone, MapPin,
  Check, Star, ArrowRight, Shield, Award, Brain, Bone, Stethoscope,
} from "lucide-react";
import clinic from "@/assets/clinic-interior.jpg";
import {
   SectionLabel, CTASection,
  BOOK_URL, PHONE_DISPLAY, PHONE_TEL,
} from "@/components/site/site-chrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Chiropractor Peterborough | Janette M. Lee — GCC Registered" },
      { name: "description", content: "GCC Registered Chiropractor in Peterborough offering personal, gentle and evidence-based chiropractic care for all ages. Book your appointment today." },
      { property: "og:title", content: "Janette M. Lee — Chiropractor in Peterborough" },
      { property: "og:description", content: "Personal, professional chiropractic care in Peterborough. Book your appointment with Janette Lee today." },
      { property: "og:image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <AboutTeaser />
      <ServicesTeaser />
      <Reviews />
      <CTASection />
    </>
  );
}

function Hero() {
  const stats = [
    { v: "38+", l: "Years' Experience" },
    { v: "GCC", l: "Registered" },
    { v: "All Ages", l: "Welcome" },
    { v: "PE2", l: "Peterborough" },
  ];
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 -z-10 opacity-60">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--gradient-sage)] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[400px] w-[400px] rounded-full bg-[var(--gradient-warm)] blur-3xl" />
      </div>

      <div className="container-page grid gap-12 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:pt-4 lg:pb-20">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-4 py-1.5 text-xs tracking-wide text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            GCC Registered · Peterborough
          </div>

          <h1 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Personal, gentle chiropractic care in <em className="not-italic text-primary">Peterborough</em>.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I'm Janette Lee, an independent GCC Registered Chiropractor with nearly four decades of experience. I help people in Peterborough ease pain, move better, and feel like themselves again.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all">
              Book an Appointment <ArrowRight className="h-4 w-4" />
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-7 py-3.5 text-sm font-medium text-foreground hover:bg-card transition-all backdrop-blur">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 sm:gap-x-4">
            {stats.map(s => (
              <div key={s.l} className="border-l-2 border-gold/70 pl-4">
                <dt className="font-display text-2xl text-foreground sm:text-3xl">{s.v}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative fade-up">
          <div className="absolute -inset-4 rounded-[2rem] bg-[var(--gradient-sage)] blur-2xl opacity-50" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-card shadow-[var(--shadow-elegant)] p-10 sm:p-14 flex items-center justify-center">
           <img
  src={Janette}
  alt="Janette Lee Chiropractor"
  className="w-full aspect-[4/5] rounded-2xl object-cover"
/>
          </div>
          <div className="absolute -bottom-5 left-5 right-5 sm:left-auto sm:right-6 sm:max-w-[280px] flex items-center gap-3 rounded-2xl bg-background/90 p-4 backdrop-blur-md border border-border/60 shadow-[var(--shadow-soft)]">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground">
              <Award className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-base">Janette M. Lee</div>
              <div className="truncate text-xs text-muted-foreground">GCC Registered Chiropractor</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutTeaser() {
  const features = [
    { icon: Shield, t: "GCC Registered", d: "Fully qualified and regulated chiropractor." },
    { icon: MapPin, t: "Peterborough Based", d: "Clinic at 124 Culley Court, PE2 6XD." },
    { icon: HeartPulse, t: "Whole-Person Care", d: "Evidence-based and gentle approach." },
    { icon: UserRound, t: "Patient-Centred", d: "Care plans built around you." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        <div className="relative">
          <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-soft)]">
            <img src={clinic} alt="Calm, welcoming chiropractic clinic in Peterborough" width={1280} height={800} loading="lazy" className="aspect-[5/6] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden sm:block rounded-2xl bg-card p-5 shadow-[var(--shadow-elegant)] border border-border/70 max-w-[230px]">
            <div className="font-display text-3xl text-primary">38+ yrs</div>
            <div className="mt-1 text-xs text-muted-foreground">Caring for Peterborough patients</div>
          </div>
        </div>

        <div>
          <SectionLabel>About Janette</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl leading-tight">
            Warm, professional chiropractic care you can trust.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            I'm Janette Lee, an independent GCC Registered Chiropractor based in Peterborough. Over nearly four decades in practice, I've helped thousands of people find lasting relief from back pain, neck pain, headaches and a wide range of other concerns.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map(f => (
              <div key={f.t} className="group rounded-2xl border border-border/70 bg-card p-4 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/60 text-primary">
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-medium text-sm text-foreground">{f.t}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">{f.d}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all">
              More about Janette <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesTeaser() {
  const items = [
    { icon: Activity, t: "Chiropractic Care", d: "Gentle, precise adjustments to restore alignment and ease tension." },
    { icon: Bone, t: "Back & Neck Pain", d: "Targeted treatment addressing the underlying cause, not just symptoms." },
    { icon: Brain, t: "Headache & Migraine", d: "Identifying postural triggers to ease tension headaches and migraines." },
    { icon: Sparkles, t: "Pregnancy Related Care", d: "Gentle support through pregnancy to ease pelvic and lumbar strain." },
    { icon: Stethoscope, t: "Postural Assessment", d: "Detailed analysis with personalised exercises and ergonomic advice." },
    { icon: Shield, t: "Wellness & Prevention", d: "Ongoing care to maintain mobility and prevent flare-ups." },
  ];
  const tags = ["Back Pain","Neck Pain","Leg Pain","Headaches","Hip Pain","Knee Pain","Shoulder Pain","Pregnancy Pain"];
  return (
    <section className="relative py-20 md:py-28" style={{ background: "var(--gradient-warm)" }}>
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Services & Conditions</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Personal care, tailored to you.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every appointment is built around your goals, your lifestyle and your stage of life.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(s => (
            <article key={s.t} className="group relative overflow-hidden rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)] hover:border-gold/40">
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-accent/60 text-primary group-hover:bg-[var(--gradient-gold)] group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-2xl text-foreground">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {tags.map(c => (
            <span key={c} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-foreground/80">
              <Check className="h-3.5 w-3.5 text-sage" /> {c}
            </span>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:-translate-y-0.5 transition-all">
            View all services & conditions <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  const reviews = [
    { q: "After years of debilitating back pain, Janette gave me my life back. Her knowledge is extraordinary and she genuinely listens.", n: "Sarah M.", c: "Back Pain · Peterborough" },
    { q: "Janette's calm, careful approach made all the difference. The leg pain I'd lived with for months eased after just a few sessions.", n: "James P.", c: "Leg Pain · Peterborough" },
    { q: "Janette supported me through pregnancy with such warmth and expertise. The pelvic discomfort eased quickly and I felt completely at ease.", n: "Laura K.", c: "Pregnancy Care · Peterborough" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Patient Stories</SectionLabel>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
            Trusted by patients across Peterborough.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reviews.map(r => (
            <figure key={r.n} className="flex h-full flex-col rounded-3xl border border-border/70 bg-card p-8 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-5 flex-1 font-display text-xl leading-snug text-foreground">
                "{r.q}"
              </blockquote>
              <figcaption className="mt-6 border-t border-border/70 pt-4">
                <div className="font-medium text-sm">{r.n}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{r.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
