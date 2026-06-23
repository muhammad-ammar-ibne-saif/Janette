import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Menu, X, ArrowRight, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const BOOK_URL =
  "https://janetteleechiropractor.janeapp.co.uk/#staff_member/1";
export const PHONE_DISPLAY = "07754 983276";
export const PHONE_TEL = "07754983276";
export const EMAIL = "info@janetteleechiropractorpeterborough.com";
export const ADDRESS_LINE_1 = "124 Culley Court, Orton Southgate";
export const ADDRESS_LINE_2 = "Peterborough, PE2 6XD";
export const ADDRESS_FULL =
  "124 Culley Court, Orton Southgate, Peterborough, PE2 6XD";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/services", label: "Conditions", hash: "conditions" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ className = "h-14 w-auto" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Janette Lee Chiropractor Peterborough"
      width={1024}
      height={1024}
      className={className}
      decoding="async"
    />
  );
}
export const LOGO = Logo;

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-gold">
      <span className="h-px w-8 bg-gold" />
      {children}
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/70 shadow-[0_2px_20px_-12px_rgba(0,0,0,0.15)]"
            : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <div className="container-page flex items-center justify-between py-3">
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="Janette Lee Chiropractor Peterborough — Home"
          >
            <Logo className="h-20 w-auto sm:h-18 md:h-24" />
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n, i) => (
              <Link
                key={`${n.to}-${n.label}-${i}`}
                to={n.to}
                hash={"hash" in n ? n.hash : undefined}
                className="text-sm text-foreground/75 hover:text-primary transition-colors"
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary font-medium" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${PHONE_TEL}`}
              className="hidden md:inline-flex items-center gap-2 text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4 text-gold" /> {PHONE_DISPLAY}
            </a>
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all"
            >
              Book Appointment <ArrowRight className="h-4 w-4" />
            </a>
            {/* Hamburger / Close toggle — single button, no duplicate */}
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card hover:bg-primary/10 transition-colors"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/*
       * Mobile Menu — rendered OUTSIDE <header> as a sibling so that
       * fixed positioning is not clipped by the sticky stacking context.
       * z-50 sits above z-40 header.
       */}
      {open && (
        <div className="fixed inset-0 z-50 bg-white lg:hidden flex flex-col overflow-y-auto">
          {/* Top bar — mirrors the header height for visual continuity */}
          <div className="container-page flex items-center justify-between py-3 border-b border-border/60 shrink-0">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              aria-label="Janette Lee Chiropractor Peterborough — Home"
            >
              <Logo className="h-16 w-auto" />
            </Link>
            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border hover:bg-primary/10 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Nav links */}
          <nav className="container-page mt-2 flex flex-col flex-1">
            {nav.map((n, i) => (
              <Link
                key={`m-${n.to}-${n.label}-${i}`}
                to={n.to}
                hash={"hash" in n ? n.hash : undefined}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "!text-primary" }}
                className="border-b border-border/60 py-4 font-display text-2xl text-foreground hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}

            {/* CTA buttons */}
            <div className="mt-8 mb-10 space-y-3">
              <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full rounded-full bg-primary px-6 py-4 text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                Book Appointment <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center justify-center gap-2 w-full rounded-full border border-border px-6 py-4 text-foreground font-medium hover:bg-primary/5 transition-colors"
              >
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-card">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo className="h-20 w-auto" />
            <p className="mt-4 text-sm text-muted-foreground">
              GCC Registered Chiropractor in Peterborough offering personal,
              gentle care for all ages — nearly four decades of experience.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-gold">
              Navigate
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="hover:text-foreground">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-foreground">
                  About Janette
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-foreground">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  hash="conditions"
                  className="hover:text-foreground"
                >
                  Conditions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-gold">
              Book
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href={BOOK_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground"
                >
                  Book Online (Jane App)
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-foreground"
                >
                  Call to book
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-foreground"
                >
                  Email to book
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-wider text-gold">
              Contact
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <a
                  href={`tel:${PHONE_TEL}`}
                  className="hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="hover:text-foreground break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-gold" />
                <span>{ADDRESS_FULL}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>
            © 2026 Janette Lee Chiropractor Peterborough · All rights reserved
          </div>
          <div>GCC Registered Chiropractor</div>
        </div>
      </div>
    </footer>
  );
}

export function CTASection() {
  return (
    <section
      className="py-16 md:py-20"
      style={{ background: "var(--gradient-sage)" }}
    >
      <div className="container-page text-center">
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground">
          Ready to feel better?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-foreground/70">
          Book online with Jane App, call directly, or send a quick enquiry — I
          respond within one working day.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-elegant)] hover:-translate-y-0.5 transition-all"
          >
            Book Appointment <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:-translate-y-0.5 transition-all"
          >
            <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
          </a>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3.5 text-sm font-medium text-foreground hover:-translate-y-0.5 transition-all"
          >
            <Mail className="h-4 w-4" /> Send an enquiry
          </Link>
        </div>
      </div>
    </section>
  );
}