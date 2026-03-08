const pages = [
  { href: 'index.html', label: 'Theme Hub' },
  { href: 'theme-01.html', label: '01 Hypergloss' },
  { href: 'theme-02.html', label: '02 Prestige' },
  { href: 'theme-03.html', label: '03 Rally Grid' },
  { href: 'theme-04.html', label: '04 Clean Studio' },
  { href: 'theme-05.html', label: '05 Street Poster' }
];

const host = document.querySelector('[data-theme-nav]');

if (host) {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const nav = document.createElement('div');
  nav.className = 'theme-nav-inner';

  pages.forEach((page) => {
    const a = document.createElement('a');
    a.href = page.href;
    a.className = 'theme-link';
    a.textContent = page.label;
    if (page.href === current) a.classList.add('active');
    nav.appendChild(a);
  });

  host.className = 'theme-nav';
  host.appendChild(nav);

  const active = nav.querySelector('.active');
  if (active) {
    active.scrollIntoView({ block: 'nearest', inline: 'center' });
  }
}
