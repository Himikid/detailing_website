const themes = [
  { key: 'theme-01', label: '01 Heritage Blue', href: 'theme-01-overview.html' },
  { key: 'theme-02', label: '02 Ivory Prestige', href: 'theme-02-overview.html' },
  { key: 'theme-03', label: '03 Slate Studio', href: 'theme-03-overview.html' },
  { key: 'theme-04', label: '04 Alpine Reserve', href: 'theme-04-overview.html' },
  { key: 'theme-05', label: '05 Monarch Mono', href: 'theme-05-overview.html' }
];

function buildThemeNav() {
  const host = document.querySelector('[data-theme-nav]');
  if (!host) return;

  const current = window.location.pathname.split('/').pop() || 'index.html';
  const nav = document.createElement('div');
  nav.className = 'theme-nav-inner';

  const hub = document.createElement('a');
  hub.href = 'index.html';
  hub.textContent = 'Theme Hub';
  hub.className = 'theme-link';
  if (current === 'index.html') hub.classList.add('active');
  nav.appendChild(hub);

  themes.forEach((theme) => {
    const link = document.createElement('a');
    link.href = theme.href;
    link.textContent = theme.label;
    link.className = 'theme-link';

    if (current.startsWith(theme.key + '-')) {
      link.classList.add('active');
    }

    nav.appendChild(link);
  });

  host.className = 'theme-nav';
  host.appendChild(nav);

  const active = nav.querySelector('.active');
  if (active) active.scrollIntoView({ block: 'nearest', inline: 'center' });
}

function activateSubnav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const subnavLinks = document.querySelectorAll('[data-subnav] a');

  subnavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

buildThemeNav();
activateSubnav();
