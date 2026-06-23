import { createFileRoute } from "@tanstack/react-router";
import { Shield, MapPin, HeartPulse, UserRound, Award, Check } from "lucide-react";
import clinic from "@/assets/clinic-interior.jpg";
import { SectionLabel, CTASection } from "@/components/site/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Janette Lee | GCC Registered Chiropractor Peterborough" },
      { name: "description", content: "Meet Janette M. Lee — an independent GCC Registered Chiropractor in Peterborough with nearly 40 years of experience providing personal, gentle care." },
      { property: "og:title", content: "About Janette Lee — Chiropractor in Peterborough" },
      { property: "og:description", content: "Nearly four decades of experience providing personal, gentle chiropractic care in Peterborough." },
      { property: "og:image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: Shield, t: "GCC Registered", d: "Fully qualified and regulated by the General Chiropractic Council." },
    { icon: MapPin, t: "Peterborough Based", d: "Clinic at 124 Culley Court, Orton Southgate, PE2 6XD." },
    { icon: HeartPulse, t: "Whole-Person Care", d: "Evidence-based, gentle care that treats the cause, not just symptoms." },
    { icon: UserRound, t: "Patient-Centred", d: "Unhurried appointments and care plans built entirely around you." },
  ];
  const principles = [
    "Listen carefully and never rush an appointment",
    "Explain clearly what's happening and why",
    "Use gentle, evidence-based techniques",
    "Tailor every plan to your goals and lifestyle",
    "Welcome patients of all ages and stages of life",
    "Refer or work alongside other professionals when it's right for you",
  ];
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page">
          <div className="max-w-3xl">
            <SectionLabel>About</SectionLabel>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Meet Janette M. Lee.
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Independent GCC Registered Chiropractor in Peterborough, with nearly four decades of helping patients move beyond pain and feel themselves again.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="relative lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-[2rem] border border-border/60 shadow-[var(--shadow-elegant)]">
              <img src={clinic} alt="Janette Lee's calm chiropractic clinic in Peterborough" width={1280} height={1600} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-2 hidden sm:flex items-center gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-elegant)] border border-border/70 max-w-[260px]">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[var(--gradient-gold)] text-primary-foreground">
                <Award className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="font-display text-base">38+ years</div>
                <div className="text-xs text-muted-foreground">Caring for Peterborough patients</div>
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>My Story</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl leading-tight">
              Calm, careful and unhurried care.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I qualified as a chiropractor nearly forty years ago and have been in private practice ever since. Over those decades, I've supported thousands of people through pain, recovery, pregnancy, and the ordinary aches of everyday life.
              </p>
              <p>
                I'm now an independent practitioner based in Peterborough, where I run my own clinic at 124 Culley Court. Working independently lets me give every patient the time and attention they deserve — no rushed appointments, no one-size-fits-all plans.
              </p>
              <p>
                My approach is gentle and personal. I take the time to listen, properly assess what's going on, and explain everything in clear, plain English so you feel reassured every step of the way.
              </p>
            </div>

            <h3 className="mt-10 font-display text-2xl">What I believe in</h3>
            <ul className="mt-5 grid gap-2.5">
              {principles.map(p => (
                <li key={p} className="flex items-start gap-3 rounded-2xl border border-border/70 bg-card p-4">
                  <Check className="h-5 w-5 shrink-0 text-sage mt-0.5" />
                  <span className="text-sm text-foreground/85">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24" style={{ background: "var(--gradient-warm)" }}>
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <SectionLabel>Why patients choose me</SectionLabel>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl md:text-5xl">
              Experience you can feel.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(v => (
              <div key={v.t} className="rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/60 text-primary">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
