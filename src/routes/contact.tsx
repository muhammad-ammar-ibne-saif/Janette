import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Calendar, Clock } from "lucide-react";
import {
  SectionLabel, BOOK_URL, PHONE_DISPLAY, PHONE_TEL, EMAIL,
  ADDRESS_LINE_1, ADDRESS_LINE_2, ADDRESS_FULL, Logo,
} from "@/components/site/site-chrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Book Appointment | Janette Lee Chiropractor Peterborough" },
      { name: "description", content: "Book an appointment with Janette Lee, GCC Registered Chiropractor in Peterborough. Call 07754 983276, email or book online via Jane App." },
      { property: "og:title", content: "Contact & Book — Janette Lee Chiropractor Peterborough" },
      { property: "og:description", content: "Book an appointment online, by phone or email. Janette Lee, GCC Registered Chiropractor, Peterborough." },
      { property: "og:image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const areas = ["Back Pain","Neck Pain","Leg Pain","Headaches & Migraines","Joint & Mobility","Pregnancy Related Care","Posture Advice","Wellness & Prevention","Other"];

function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 md:py-24" style={{ background: "var(--gradient-hero)" }}>
        <div className="container-page max-w-3xl">
          <SectionLabel>Contact & Booking</SectionLabel>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            Book your appointment.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Book online instantly via Jane App, call directly, or send a quick enquiry below. I respond to every message within one working day.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BOOK_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all">
              <Calendar className="h-4 w-4" /> Book Online (Jane App)
            </a>
            <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:-translate-y-0.5 transition-all">
              <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
            </a>
            <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:-translate-y-0.5 transition-all">
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <a href={`tel:${PHONE_TEL}`} className="group flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-[var(--gradient-gold)] text-primary-foreground">
                <Phone className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Call Janette</div>
                <div className="mt-1 font-display text-xl">{PHONE_DISPLAY}</div>
              </div>
            </a>
            <a href={`mailto:${EMAIL}`} className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-elegant)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/60 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="mt-1 truncate font-display text-base sm:text-lg">{EMAIL}</div>
              </div>
            </a>
            <div className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/60 text-primary">
                <MapPin className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Visit</div>
                <div className="mt-1 font-display text-lg">{ADDRESS_LINE_1}</div>
                <div className="text-sm text-muted-foreground">{ADDRESS_LINE_2}</div>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-3xl border border-border/70 bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/60 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Hours</div>
                <div className="mt-1 text-sm text-foreground/85">Appointments by booking only — please book online or call.</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-border/70 shadow-[var(--shadow-soft)]">
              <iframe
                title="Janette Lee Chiropractor Peterborough location"
                src="https://www.google.com/maps?q=124+Culley+Court,+Orton+Southgate,+Peterborough,+PE2+6XD&output=embed"
                width="100%"
                height="280"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          <EnquiryForm />
        </div>
      </section>
    </>
  );
}

function EnquiryForm() {
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", area: "", message: "" });
  const inputCls = "w-full rounded-xl border border-border bg-card px-4 py-3 text-sm outline-none transition-colors focus:border-gold focus:ring-2 focus:ring-gold/20";

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `New enquiry from ${form.first} ${form.last}`.trim();
    const body =
`Name: ${form.first} ${form.last}
Email: ${form.email}
Phone: ${form.phone}
Area of concern: ${form.area}

Message:
${form.message}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <form onSubmit={onSubmit} className="rounded-3xl border border-border/70 bg-card p-7 shadow-[var(--shadow-elegant)] md:p-9">
      <h2 className="font-display text-2xl">Send an enquiry</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Your enquiry will be sent to <a href={`mailto:${EMAIL}`} className="text-primary hover:underline break-all">{EMAIL}</a>. I aim to respond within one working day.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">First name</span>
          <input required maxLength={60} value={form.first} onChange={e => setForm({ ...form, first: e.target.value })} className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Last name</span>
          <input required maxLength={60} value={form.last} onChange={e => setForm({ ...form, last: e.target.value })} className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Email</span>
          <input required type="email" maxLength={120} value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className={inputCls} />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Phone</span>
          <input type="tel" maxLength={30} value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className={inputCls} />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Area of concern</span>
          <select required value={form.area} onChange={e => setForm({ ...form, area: e.target.value })} className={inputCls}>
            <option value="" disabled>Select an area…</option>
            {areas.map(a => <option key={a} value={a}>{a}</option>)}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-1.5 block text-xs uppercase tracking-wider text-muted-foreground">Message</span>
          <textarea required rows={5} maxLength={1000} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className={inputCls} />
        </label>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">By submitting you agree to be contacted about your enquiry.</p>
        <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all">
          Send enquiry <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}
