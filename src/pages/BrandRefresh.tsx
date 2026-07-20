import { Link } from 'react-router-dom';

const OLD_LOGO_LAST_DATE = '8 July 2026';
const NEW_LOGO_EFFECTIVE_DATE = '9 July 2026';

const brandColors = [
  {
    name: 'Kryil Blue',
    hex: '#25A9E0',
    role: 'Primary accent — the mark, the dot on the "i", interactive states.',
  },
  {
    name: 'Kryil Gray',
    hex: '#747472',
    role: 'Wordmark and secondary structure. Neutral, engineered, quiet.',
  },
];

const changes = [
  {
    title: 'The mark',
    body: 'The enclosing circle becomes a rounded square — a frame with structure rather than an orbit. The K is redrawn as a single continuous path, opening the form up instead of containing it.',
  },
  {
    title: 'The palette',
    body: 'Monochrome gives way to a two-colour system: Kryil Blue for signal, Kryil Gray for structure. The mark now reads at small sizes without relying on background contrast alone.',
  },
  {
    title: 'The wordmark',
    body: 'KRYIL is set in a wider, flatter cut with more even spacing. The "i" carries a detached square dot in blue — a small fixed point that ties the wordmark back to the mark.',
  },
  {
    title: 'The system',
    body: 'One lockup, one icon, defined colour and reversed variants. Every application draws from the same set of files rather than redrawing the logo per medium.',
  },
];

const downloads = [
  { label: 'Full logo — colour (SVG)', href: '/brand/Kryil-Logo-Full-Color.svg' },
  { label: 'Full logo — colour on black (SVG)', href: '/brand/Kryil-Logo-Full-Color-on-Black.svg' },
  { label: 'Icon — colour (SVG)', href: '/brand/Kryil-Icon-Color.svg' },
  { label: 'Full logo — colour (PNG)', href: '/brand/Kryil-Logo-Full-Color.png' },
  { label: 'Full logo — white (PNG)', href: '/brand/Kryil-Logo-Full-White.png' },
  { label: 'Full logo — black (PNG)', href: '/brand/Kryil-Logo-Full-Black.png' },
];

export default function BrandRefresh() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* Hero */}
      <section className="pt-28 pb-20 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <nav className="mb-8 text-sm text-white/40">
            <Link to="/" className="hover:text-[#dff140] transition-colors duration-300">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/70">Brand</span>
          </nav>

          <div className="animate-fade-in-up">
            <p className="text-[#dff140] text-sm font-semibold tracking-[0.2em] uppercase mb-6">
              Brand Update
            </p>
            <h1 className="heading-display text-white mb-6">
              A new mark for KRYIL
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              We have refreshed our logo and colour system. The name has not changed, the company
              has not changed, and no contract, invoice or agreement is affected. What has changed
              is the mark that carries them.
            </p>

            {/* Key dates */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
              <div className="bg-white/5 border border-white/10 rounded-lg" style={{ padding: '28px' }}>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">
                  Previous logo — last date of use
                </p>
                <p className="text-white text-xl font-semibold">{OLD_LOGO_LAST_DATE}</p>
              </div>
              <div className="bg-[#dff140]/10 border border-[#dff140]/30 rounded-lg" style={{ padding: '28px' }}>
                <p className="text-[#dff140]/70 text-xs uppercase tracking-wider mb-2">
                  New logo — effective from
                </p>
                <p className="text-[#dff140] text-xl font-semibold">{NEW_LOGO_EFFECTIVE_DATE}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="pb-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Previous */}
            <div className="bg-white/5 border border-white/10 rounded-lg overflow-hidden">
              <div className="h-56 flex items-center justify-center px-10 bg-black/40">
                <img
                  src="/logo_white.png"
                  alt="Previous KRYIL Infotech logo, retired 8 July 2026"
                  className="max-h-16 w-auto opacity-40 grayscale"
                />
              </div>
              <div className="border-t border-white/10" style={{ padding: '28px' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-white/30" />
                  <p className="text-white/50 text-xs uppercase tracking-wider">Retired</p>
                </div>
                <h2 className="text-white font-semibold text-lg mb-1">Previous logo</h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  In use through {OLD_LOGO_LAST_DATE}. Please remove it from any remaining
                  signature, deck, signage or template.
                </p>
              </div>
            </div>

            {/* Current */}
            <div className="bg-white/5 border border-[#dff140]/30 rounded-lg overflow-hidden">
              <div className="h-56 flex items-center justify-center px-10 bg-black/40">
                <img
                  src="/brand/Kryil-Logo-Full-Color.svg"
                  alt="New KRYIL Infotech logo, effective 9 July 2026"
                  className="max-h-16 w-auto"
                />
              </div>
              <div className="border-t border-[#dff140]/20" style={{ padding: '28px' }}>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#dff140] animate-pulse-slow" />
                  <p className="text-[#dff140] text-xs uppercase tracking-wider">Current</p>
                </div>
                <h2 className="text-white font-semibold text-lg mb-1">New logo</h2>
                <p className="text-white/40 text-sm leading-relaxed">
                  Effective {NEW_LOGO_EFFECTIVE_DATE}. This is the only approved KRYIL Infotech
                  mark going forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What changed */}
      <section className="pb-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-white mb-3">
            What changed
          </h2>
          <div className="h-px w-16 bg-[#dff140] mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {changes.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-lg hover:border-[#dff140]/30 transition-colors duration-300" style={{ padding: '32px' }}
              >
                <h3 className="text-white font-semibold text-lg mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Colours */}
      <section className="pb-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-white mb-3">
            Brand colours
          </h2>
          <div className="h-px w-16 bg-[#dff140] mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {brandColors.map((color) => (
              <div
                key={color.hex}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden"
              >
                <div className="h-32" style={{ backgroundColor: color.hex }} />
                <div className="border-t border-white/10" style={{ padding: '28px' }}>
                  <div className="flex items-baseline justify-between mb-3">
                    <h3 className="text-white font-semibold text-lg">{color.name}</h3>
                    <code className="text-white/50 text-sm tracking-wider">{color.hex}</code>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed">{color.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section className="pb-28 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="heading-section text-white mb-3">
            Download the assets
          </h2>
          <div className="h-px w-16 bg-[#dff140] mb-6" />
          <p className="text-white/50 text-sm leading-relaxed max-w-2xl mb-10">
            Prefer the SVG files wherever the medium allows — they stay sharp at every size. Do not
            recolour, stretch, rotate, add effects to, or rebuild the mark; use these files as
            supplied.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {downloads.map((file) => (
              <a
                key={file.href}
                href={file.href}
                download
                className="group bg-white/5 border border-white/10 rounded-lg flex items-center justify-between gap-4 hover:border-[#dff140]/40 hover:bg-white/[0.07] transition-all duration-300" style={{ padding: '22px 26px' }}
              >
                <span className="text-white/70 text-sm group-hover:text-white transition-colors duration-300">
                  {file.label}
                </span>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="text-white/30 group-hover:text-[#dff140] transition-colors duration-300 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <path d="M7 10l5 5 5-5" />
                  <path d="M12 15V3" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Questions */}
      <section className="pb-32 px-8 md:px-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-lg k-card-pad-lg">
            <h2 className="font-['Lato'] text-2xl font-bold text-white mb-4">
              Questions about the change?
            </h2>
            <p className="text-white/50 text-sm leading-relaxed max-w-2xl mb-8">
              If you are a partner, supplier or customer holding KRYIL materials that still carry
              the previous mark, get in touch and we will send the replacements you need.
            </p>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 bg-[#dff140] text-black font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#e8f756] transition-colors duration-300"
            >
              Contact us
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
