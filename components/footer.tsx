"use client"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary py-16 px-6 md:px-10">
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <p className="font-sans text-xs tracking-[0.25em] uppercase text-foreground mb-4">
              Studio Form
            </p>
            <p className="font-sans text-xs text-muted-foreground leading-relaxed max-w-xs">
              Sculptural furniture at the intersection of art, architecture, and daily life.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Navigate
            </p>
            <ul className="space-y-3">
              {["Collection", "Archive", "About", "Stockists"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="font-sans text-xs text-foreground hover:text-muted-foreground transition-colors tracking-wide"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Contact
            </p>
            <ul className="space-y-3">
              {["studio@studioform.co", "+1 212 555 0170", "Milan / New York"].map((item) => (
                <li key={item}>
                  <p className="font-sans text-xs text-foreground tracking-wide">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-muted-foreground mb-5">
              Newsletter
            </p>
            <p className="font-sans text-xs text-muted-foreground mb-4 leading-relaxed">
              New collections, exhibitions, and occasional writing.
            </p>
            <form
              className="flex border-b border-foreground/30 pb-1"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-transparent font-sans text-xs text-foreground placeholder:text-muted-foreground outline-none"
              />
              <button
                type="submit"
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-foreground hover:text-muted-foreground transition-colors ml-3"
                aria-label="Subscribe to newsletter"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8 border-t border-border">
          <p className="font-sans text-[11px] text-muted-foreground tracking-wide">
            © 2026 Studio Form. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Instagram", "Pinterest", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-sans text-[10px] tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                aria-label={social}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
