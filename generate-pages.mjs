import { writeFileSync } from 'node:fs';

const contactPhone = '07377103417';
const contactEmail = 'scottishautodetailer@gmail.com';

const themes = [
  {
    file: 'theme-01.html',
    id: '01',
    name: 'Oceanic Performance',
    chip: 'Street-Ready Gloss',
    bodyClass: 'theme-01 layout-split',
    headline: 'Scottish Auto Detailer. Crisp shine with deep-clean confidence.',
    subline: 'A sporty, high-contrast style inspired by your logo colors and fast turnaround mobile valeting.',
    tags: ['Remote Valeting', 'Mobile First', 'Paint Safe', 'Fresh Interior'],
    sectionTitle: 'Performance Flow',
    sectionBody: `<div class="grid-two"><div class="panel"><h3>What This Theme Feels Like</h3><p class="small">Premium but approachable. Great if your friend wants bold confidence and a modern, trustworthy edge.</p></div><div class="panel"><h3>Good For</h3><p class="small">Fast social media traffic, quote requests, and new-customer first impressions.</p></div></div>`
  },
  {
    file: 'theme-02.html',
    id: '02',
    name: 'Sunset Garage',
    chip: 'Warm & Friendly',
    bodyClass: 'theme-02 layout-magazine',
    headline: 'Clean car, warm brand. A friendlier detailing style.',
    subline: 'A bright, welcoming look that leans community-focused while keeping a premium finish.',
    tags: ['Friendly Tone', 'Community Feel', 'Mobile Booking', 'Simple CTA'],
    sectionTitle: 'Service Journey',
    sectionBody: `<div class="timeline"><div class="timeline-step"><span class="dot">1</span><div><h3>Arrive & Assess</h3><p class="small">Quick visual check and prep around your vehicle.</p></div></div><div class="timeline-step"><span class="dot">2</span><div><h3>Detail & Protect</h3><p class="small">Interior recovery and gloss-focused exterior treatment.</p></div></div><div class="timeline-step"><span class="dot">3</span><div><h3>Final Walkaround</h3><p class="small">Finish check, fresh scent, and on-road ready presentation.</p></div></div></div>`
  },
  {
    file: 'theme-03.html',
    id: '03',
    name: 'Emerald Studio',
    chip: 'Eco-Clean Aesthetic',
    bodyClass: 'theme-03 layout-dual',
    headline: 'A cleaner look for a cleaner cabin and paint finish.',
    subline: 'Green-forward visual language for clients who value freshness and safe wash products.',
    tags: ['Soft Eco Vibe', 'Fresh Finish', 'Balanced Contrast', 'Modern'],
    sectionTitle: 'Why It Works On Mobile',
    sectionBody: `<div class="grid-two"><div class="panel"><h3>Thumb-Friendly</h3><p class="small">Large tap targets and tighter text blocks make browsing quick from social links.</p></div><div class="panel"><h3>Quick Scanning</h3><p class="small">Clear section breaks, bold headings, and direct contact routes reduce drop-off.</p></div></div>`
  },
  {
    file: 'theme-04.html',
    id: '04',
    name: 'Neon Pop Detail',
    chip: 'Bold Social Style',
    bodyClass: 'theme-04 layout-poster',
    headline: 'Loud color, sharp sections, and a high-energy booking vibe.',
    subline: 'Built for attention in reels, stories, and quick taps from ad traffic.',
    tags: ['High Impact', 'Social Ready', 'Young Audience', 'Standout'],
    sectionTitle: 'Visual Notes',
    sectionBody: `<div class="panel"><h3>Poster Layout Direction</h3><ul><li>Big top banner and punchy headline stack.</li><li>Simple body cards to keep legibility clean.</li><li>Strong CTA contrast so contact actions stand out.</li></ul></div>`
  },
  {
    file: 'theme-05.html',
    id: '05',
    name: 'Aqua Glass',
    chip: 'Light + Glossy',
    bodyClass: 'theme-05 layout-showcase',
    headline: 'Crystal-clean presentation for premium valet positioning.',
    subline: 'Subtle glass-card styling and calm blues for clients who want polished detail work.',
    tags: ['Premium Feel', 'Clean UI', 'Calm Palette', 'Professional'],
    sectionTitle: 'Feature Stack',
    sectionBody: `<div class="services"><article class="card"><h3>Finish Focused</h3><p class="small">Great if you want the service to feel premium and detail-obsessed.</p></article><article class="card"><h3>Strong Trust Cues</h3><p class="small">Contact details and process are always visible without clutter.</p></article></div>`
  },
  {
    file: 'theme-06.html',
    id: '06',
    name: 'Terra Workshop',
    chip: 'Rugged & Practical',
    bodyClass: 'theme-06 layout-editorial',
    headline: 'A grounded workshop style with strong service readability.',
    subline: 'Earthy tones and editorial spacing make this feel practical, honest, and local.',
    tags: ['Honest Tone', 'Workshop Feel', 'Readable', 'Trusted'],
    sectionTitle: 'Customer Promise',
    sectionBody: `<div class="panel"><h3>Detailing Without The Fluff</h3><p class="small">Clear packages, transparent process, and consistent results across interior refresh and exterior protection.</p></div>`
  },
  {
    file: 'theme-07.html',
    id: '07',
    name: 'Lime Pulse',
    chip: 'Energetic & Fresh',
    bodyClass: 'theme-07 layout-bento',
    headline: 'High energy, quick reads, and punchy section blocks.',
    subline: 'Bento-style card layout for mobile users who skim first and decide fast.',
    tags: ['Fast Scan', 'Bold Blocks', 'Youthful', 'High Contrast'],
    sectionTitle: 'Bento Highlights',
    sectionBody: `<div class="services"><article class="card"><h3>Skimmable Cards</h3><p class="small">Users get the main offering quickly in short modules.</p></article><article class="card"><h3>Fast Contact</h3><p class="small">Phone and email are always near the final CTA.</p></article><article class="card"><h3>Theme Personality</h3><p class="small">Distinct color identity for memorable branding.</p></article></div>`
  },
  {
    file: 'theme-08.html',
    id: '08',
    name: 'Mono Sport',
    chip: 'Minimal Sport Tech',
    bodyClass: 'theme-08 layout-futurist',
    headline: 'Clean monochrome with tech-driven detailing presentation.',
    subline: 'A restrained palette for premium clients who like modern, no-nonsense branding.',
    tags: ['Tech Look', 'Monochrome', 'Premium Fleet', 'Corporate'],
    sectionTitle: 'Use Cases',
    sectionBody: `<div class="grid-two"><div class="panel"><h3>Private Cars</h3><p class="small">Strong for personal bookings with a refined style.</p></div><div class="panel"><h3>Small Business Fleet</h3><p class="small">Feels professional for vans, executive cars, and repeat schedules.</p></div></div>`
  },
  {
    file: 'theme-09.html',
    id: '09',
    name: 'Rose Luxe',
    chip: 'Luxury Boutique',
    bodyClass: 'theme-09 layout-luxe',
    headline: 'Boutique detailing style with luxury-first visuals.',
    subline: 'Soft highlights and premium spacing tailored for high-end presentation.',
    tags: ['Luxury', 'Boutique Feel', 'Premium Clients', 'Elegant'],
    sectionTitle: 'Premium Signals',
    sectionBody: `<div class="panel"><ul><li>Elegant spacing and typography hierarchy.</li><li>Balanced color accents for premium tone.</li><li>Clear value-led copy instead of cluttered offers.</li></ul></div>`
  },
  {
    file: 'theme-10.html',
    id: '10',
    name: 'Ice Flow',
    chip: 'Cool Clean Layout',
    bodyClass: 'theme-10 layout-flare',
    headline: 'Cold-clean visual style for fresh interior and paintwork presentation.',
    subline: 'Sharp cyan tones with motion-inspired panels for a dynamic preview look.',
    tags: ['Crisp', 'Dynamic', 'Blue Tones', 'Modern Motion'],
    sectionTitle: 'Quick Compare Notes',
    sectionBody: `<div class="panel"><h3>Best If You Want</h3><ul><li>Modern, energetic styling.</li><li>High clarity on service benefits.</li><li>A polished look with minimal text overload.</li></ul></div>`
  },
  {
    file: 'theme-11.html',
    id: '11',
    name: 'Gold Detail House',
    chip: 'Classic Premium',
    bodyClass: 'theme-11 layout-city',
    headline: 'A classic premium style with old-school trust cues.',
    subline: 'Gold accents and structured cards for a dependable, established business feel.',
    tags: ['Established Brand', 'Classic Premium', 'Trust Led', 'Solid'],
    sectionTitle: 'Trust Layer',
    sectionBody: `<div class="grid-two"><div class="panel"><h3>Reliable Finish</h3><p class="small">Paint-safe products and repeatable finish quality.</p></div><div class="panel"><h3>Direct Booking</h3><p class="small">Simple phone/email call-to-action with no friction.</p></div></div>`
  },
  {
    file: 'theme-12.html',
    id: '12',
    name: 'Highland Blue',
    chip: 'Scotland-Inspired',
    bodyClass: 'theme-12 layout-minimal',
    headline: 'A polished Scottish identity with modern clean spacing.',
    subline: 'Balanced blue palette, straightforward copy, and confidence-first mobile flow.',
    tags: ['Local Identity', 'Modern Classic', 'Easy Read', 'Conversion Focus'],
    sectionTitle: 'Final Theme Pitch',
    sectionBody: `<div class="panel"><h3>Why This Is A Strong Default</h3><p class="small">It keeps the bold blue identity from the logo, stays highly readable on phones, and feels premium without being overdesigned.</p></div>`
  }
];

const serviceInterior = [
  'Steam and deep cleaning to lift dirt, bacteria, and odors from fabric and hard surfaces.',
  'Ceramic interior detailer and protection for UV resistance and easier wipe-down maintenance.',
  'Wet and dry vacuum across seats, carpets, and hard-to-reach spaces.',
  'Air freshener finishing touch for a clean cabin scent.'
];

const serviceExterior = [
  'Touchless pre-clean to loosen heavy dirt and traffic film before contact wash.',
  'pH neutral shampoo wash that protects existing waxes and sealants.',
  'Wheel cleaner to break down brake dust and road grime.',
  'Wheel corrosion protector for ferrous metal durability.',
  'Quick detailer for extra gloss and slickness.'
];

const serviceProtection = [
  'Wax seal and shine spray layer for hydrophobic paint protection.',
  'Deeper gloss look with easier rinse-off maintenance.',
  'Designed to keep the vehicle looking fresher between visits.'
];

const list = (items) => `<ul>${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;

const shell = ({ title, bodyClass, chip, headline, subline, tags, sectionTitle, sectionBody }) => `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Scottish Auto Detailer mobile-first theme preview" />
  <title>${title} | Scottish Auto Detailer Theme Preview</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
<body class="${bodyClass}">
  <main class="page">
    <section class="hero fade">
      <div class="brand-row">
        <div class="brand">Scottish Auto Detailer</div>
        <span class="theme-chip">${chip}</span>
      </div>
      <h1>${headline}</h1>
      <p>${subline}</p>
    </section>

    <section class="panel fade">
      <h2>Interior Valet</h2>
      ${list(serviceInterior)}
    </section>

    <section class="services fade">
      <article class="card">
        <h3>Exterior Valet</h3>
        ${list(serviceExterior)}
      </article>
      <article class="card">
        <h3>Protection Finish</h3>
        ${list(serviceProtection)}
      </article>
    </section>

    <section class="panel fade">
      <h2>${sectionTitle}</h2>
      ${sectionBody}
    </section>

    <section class="cta fade">
      <h2>Book Your Remote Valet</h2>
      <p class="small">Elevate your drive and keep your vehicle road-ready with premium interior and exterior care.</p>
      <div class="tag-row">
        ${tags.map((tag) => `<span class="tag">${tag}</span>`).join('')}
      </div>
      <div class="contact">
        <a href="tel:${contactPhone}">Call: ${contactPhone}</a>
        <a href="mailto:${contactEmail}">Email: ${contactEmail}</a>
      </div>
      <a class="pill-btn" href="tel:${contactPhone}">Call To Book</a>
    </section>
  </main>

  <footer data-theme-nav></footer>
</body>
</html>
`;

const indexHtml = `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Choose a visual theme for Scottish Auto Detailer website" />
  <title>Theme Hub | Scottish Auto Detailer</title>
  <link rel="stylesheet" href="styles.css" />
  <script src="script.js" defer></script>
</head>
<body class="theme-01 layout-showcase">
  <main class="page">
    <section class="hero fade">
      <div class="brand-row">
        <div class="brand">Scottish Auto Detailer</div>
        <span class="theme-chip">Theme Selection Hub</span>
      </div>
      <h1>Pick the look before building full functionality.</h1>
      <p>12 mobile-focused front-end directions with different color systems, spacing styles, and section personalities.</p>
      <a class="pill-btn" href="theme-01.html">Start Previewing Themes</a>
    </section>

    <section class="panel fade">
      <h2>How To Use This Preview</h2>
      <ul>
        <li>Swipe the bottom navigation to jump between theme options.</li>
        <li>Focus on first impression, readability, and booking CTA clarity on mobile.</li>
        <li>Pick a base style, then we can finalize content and features afterwards.</li>
      </ul>
    </section>

    <section class="services fade">
      ${themes.map((theme) => `<article class="card"><h3>${theme.id}. ${theme.name}</h3><p class="small">${theme.chip}</p><a class="pill-btn" href="${theme.file}">Open Theme ${theme.id}</a></article>`).join('')}
    </section>

    <section class="cta fade">
      <h2>Business Contact Details Embedded</h2>
      <p class="small">Phone and email are already present in every theme preview so your friend can judge conversion flow quickly.</p>
      <div class="contact">
        <a href="tel:${contactPhone}">Call: ${contactPhone}</a>
        <a href="mailto:${contactEmail}">Email: ${contactEmail}</a>
      </div>
    </section>
  </main>

  <footer data-theme-nav></footer>
</body>
</html>
`;

writeFileSync('index.html', indexHtml);

themes.forEach((theme) => {
  const html = shell({
    title: `${theme.id} ${theme.name}`,
    bodyClass: theme.bodyClass,
    chip: theme.chip,
    headline: theme.headline,
    subline: theme.subline,
    tags: theme.tags,
    sectionTitle: theme.sectionTitle,
    sectionBody: theme.sectionBody
  });

  writeFileSync(theme.file, html);
});
