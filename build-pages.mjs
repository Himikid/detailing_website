import { writeFileSync } from 'node:fs';

const business = {
  name: 'Scottish Auto Detailer',
  phone: '07377103417',
  email: 'scottishautodetailer@gmail.com',
  line: 'Elevate your drive.',
  area: 'Greater Glasgow and nearby areas',
  hours: 'Mon-Sat, 8:00-19:00'
};

const sections = [
  { key: 'overview', label: 'Overview' },
  { key: 'services', label: 'Services' },
  { key: 'process', label: 'Process' },
  { key: 'contact', label: 'Contact' }
];

const themes = [
  {
    key: 'theme-01',
    id: '01',
    label: 'Heritage Blue',
    className: 'theme-01',
    vibe: 'Modern Performance Luxury',
    hero: {
      overview: 'Precision mobile detailing with a confident premium tone.',
      services: 'Service menu curated for visible quality and long-lasting finish.',
      process: 'A disciplined workflow that protects paint, cabin, and time.',
      contact: 'High-class care, booked in under a minute.'
    },
    lead: 'A sharp blue-led identity inspired by the existing brand while removing visual noise.'
  },
  {
    key: 'theme-02',
    id: '02',
    label: 'Ivory Prestige',
    className: 'theme-02',
    vibe: 'Editorial Luxury',
    hero: {
      overview: 'A refined boutique style for premium private clients.',
      services: 'Each treatment is positioned like an atelier service.',
      process: 'Quiet, methodical process designed around trust and finish quality.',
      contact: 'Concierge-style booking for a premium customer journey.'
    },
    lead: 'Soft ivory surfaces, elegant typography, and calm spacing for high-ticket perception.'
  },
  {
    key: 'theme-03',
    id: '03',
    label: 'Slate Studio',
    className: 'theme-03',
    vibe: 'Executive Professional',
    hero: {
      overview: 'Corporate-clean presentation with strong trust cues.',
      services: 'Clear service architecture for repeat clients and fleet owners.',
      process: 'Structured delivery model focused on consistency and care.',
      contact: 'Direct and professional booking experience.'
    },
    lead: 'A controlled slate palette that feels dependable, mature, and conversion-focused.'
  },
  {
    key: 'theme-04',
    id: '04',
    label: 'Alpine Reserve',
    className: 'theme-04',
    vibe: 'Calm Premium',
    hero: {
      overview: 'A softer luxury direction with understated confidence.',
      services: 'Balanced package presentation for discerning daily drivers.',
      process: 'Transparent stages that reassure premium clients.',
      contact: 'Simple booking, polished communication, premium feel.'
    },
    lead: 'Muted natural tones and generous whitespace for a clean, composed impression.'
  },
  {
    key: 'theme-05',
    id: '05',
    label: 'Monarch Mono',
    className: 'theme-05',
    vibe: 'Minimal Black Label',
    hero: {
      overview: 'Ultra-clean monochrome concept with luxury restraint.',
      services: 'No-friction service blocks with premium hierarchy.',
      process: 'Lean process design for clients who value efficiency.',
      contact: 'Elegant, direct contact pathways for serious buyers.'
    },
    lead: 'High-contrast monochrome visual language for a timeless premium aesthetic.'
  }
];

const pageTitle = (theme, section) => `${theme.id} ${theme.label} - ${section.label} | ${business.name}`;

const sectionFilename = (theme, section) => `${theme.key}-${section.key}.html`;

function subnav(theme, currentKey) {
  return `<nav class="subnav" data-subnav>${sections
    .map((section) => {
      const href = sectionFilename(theme, section);
      return `<a href="${href}" data-section="${section.key}"${section.key === currentKey ? ' class="active"' : ''}>${section.label}</a>`;
    })
    .join('')}</nav>`;
}

function overviewContent(theme) {
  return `
    <section class="panel">
      <h2>Positioning</h2>
      <p>${theme.lead}</p>
      <div class="chip-row">
        <span>Mobile Valeting</span>
        <span>Premium Finish</span>
        <span>High-Trust Presentation</span>
      </div>
    </section>

    <section class="card-grid two-up">
      <article class="card">
        <h3>Brand Direction</h3>
        <p>${theme.vibe}. Built to feel premium without overwhelming the visitor.</p>
      </article>
      <article class="card">
        <h3>Mobile Experience</h3>
        <p>Short reading blocks, prominent calls-to-action, and clear path to booking.</p>
      </article>
    </section>

    <section class="stats">
      <article><strong>2-3h</strong><span>Typical valet slot</span></article>
      <article><strong>On-site</strong><span>Remote at customer location</span></article>
      <article><strong>Premium</strong><span>Detail + protection finish</span></article>
    </section>
  `;
}

function servicesContent() {
  return `
    <section class="card-grid">
      <article class="card service-card">
        <h3>Interior Valet</h3>
        <ul>
          <li>Steam deep clean for surfaces and fabrics</li>
          <li>Ceramic interior protection against UV and stains</li>
          <li>Wet and dry vacuum across full cabin</li>
        </ul>
      </article>

      <article class="card service-card">
        <h3>Exterior Valet</h3>
        <ul>
          <li>Touchless pre-clean to loosen heavy grime</li>
          <li>pH neutral shampoo wash for paint-safe cleaning</li>
          <li>Wheel cleaner plus corrosion defense layer</li>
        </ul>
      </article>

      <article class="card service-card">
        <h3>Protection Finish</h3>
        <ul>
          <li>Wax seal and shine spray for hydrophobic behavior</li>
          <li>Quick detailer for added gloss and slickness</li>
          <li>Final quality pass before handover</li>
        </ul>
      </article>
    </section>

    <section class="panel">
      <h2>Service Philosophy</h2>
      <p>Every package is focused on finish quality, product safety, and clear value for the customer.</p>
    </section>
  `;
}

function processContent() {
  return `
    <section class="panel">
      <h2>Detailing Workflow</h2>
      <div class="timeline">
        <article>
          <span>01</span>
          <div>
            <h3>Confirm Booking</h3>
            <p>Customer shares vehicle type, location, and preferred slot.</p>
          </div>
        </article>
        <article>
          <span>02</span>
          <div>
            <h3>On-Site Treatment</h3>
            <p>Interior and exterior work completed with premium-safe products.</p>
          </div>
        </article>
        <article>
          <span>03</span>
          <div>
            <h3>Protection + Handover</h3>
            <p>Seal, inspect, and return the vehicle with a clean finish and fresh cabin.</p>
          </div>
        </article>
      </div>
    </section>

    <section class="card-grid two-up">
      <article class="card">
        <h3>Quality Standards</h3>
        <ul>
          <li>Paint-safe wash method</li>
          <li>Non-rushed interior treatment</li>
          <li>Final inspection every session</li>
        </ul>
      </article>
      <article class="card">
        <h3>Client Confidence</h3>
        <ul>
          <li>Clear scope before start</li>
          <li>Consistent service framework</li>
          <li>Direct communication throughout</li>
        </ul>
      </article>
    </section>
  `;
}

function contactContent() {
  return `
    <section class="panel contact-panel">
      <h2>Book Your Valet</h2>
      <p>Premium interior and exterior detailing delivered to your location.</p>
      <div class="contact-list">
        <a href="tel:${business.phone}">Call: ${business.phone}</a>
        <a href="mailto:${business.email}">Email: ${business.email}</a>
      </div>
      <a class="primary-btn" href="tel:${business.phone}">Call To Book</a>
    </section>

    <section class="card-grid two-up">
      <article class="card">
        <h3>Service Area</h3>
        <p>${business.area}</p>
      </article>
      <article class="card">
        <h3>Operating Hours</h3>
        <p>${business.hours}</p>
      </article>
    </section>
  `;
}

function sectionContent(sectionKey, theme) {
  if (sectionKey === 'overview') return overviewContent(theme);
  if (sectionKey === 'services') return servicesContent();
  if (sectionKey === 'process') return processContent();
  return contactContent();
}

function pageHtml(theme, section) {
  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="${theme.label} ${section.label} concept for ${business.name}" />
  <title>${pageTitle(theme, section)}</title>
  <link rel="stylesheet" href="site.css" />
  <script src="script.js" defer></script>
</head>
<body class="${theme.className} section-${section.key}" data-theme="${theme.key}">
  <main class="site-wrap">
    <header class="hero">
      <p class="eyebrow">${business.name} / ${theme.id} ${theme.label}</p>
      <h1>${theme.hero[section.key]}</h1>
      <p class="lead">${business.line}</p>
    </header>

    ${subnav(theme, section.key)}

    ${sectionContent(section.key, theme)}
  </main>

  <footer data-theme-nav></footer>
</body>
</html>
`;
}

function indexHtml() {
  const cards = themes
    .map(
      (theme) => `
      <article class="theme-card ${theme.className}">
        <p class="theme-id">Concept ${theme.id}</p>
        <h2>${theme.label}</h2>
        <p>${theme.lead}</p>
        <div class="theme-links">
          <a href="${theme.key}-overview.html">Open Overview</a>
          <a href="${theme.key}-services.html">Services</a>
          <a href="${theme.key}-process.html">Process</a>
          <a href="${theme.key}-contact.html">Contact</a>
        </div>
      </article>
    `
    )
    .join('');

  return `<!doctype html>
<html lang="en-GB">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="Premium theme concepts for Scottish Auto Detailer" />
  <title>Theme Hub | ${business.name}</title>
  <link rel="stylesheet" href="site.css" />
  <script src="script.js" defer></script>
</head>
<body class="hub" data-theme="hub">
  <main class="site-wrap">
    <header class="hero hub-hero">
      <p class="eyebrow">Theme Hub</p>
      <h1>5 professional concepts, each split into focused subpages.</h1>
      <p class="lead">Use the bottom navigation to switch themes and the local tab navigation to inspect each theme's structure.</p>
    </header>

    <section class="hub-grid">
      ${cards}
    </section>
  </main>

  <footer data-theme-nav></footer>
</body>
</html>
`;
}

writeFileSync('index.html', indexHtml());

for (const theme of themes) {
  for (const section of sections) {
    writeFileSync(sectionFilename(theme, section), pageHtml(theme, section));
  }
}
