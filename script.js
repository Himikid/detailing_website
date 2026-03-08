const themes = [
  { href: 'index.html', label: 'Theme Hub' },
  { href: 'theme-01.html', label: '01 Oceanic' },
  { href: 'theme-02.html', label: '02 Sunset' },
  { href: 'theme-03.html', label: '03 Emerald' },
  { href: 'theme-04.html', label: '04 Neon Pop' },
  { href: 'theme-05.html', label: '05 Aqua Glass' },
  { href: 'theme-06.html', label: '06 Terra' },
  { href: 'theme-07.html', label: '07 Lime Pulse' },
  { href: 'theme-08.html', label: '08 Mono Sport' },
  { href: 'theme-09.html', label: '09 Rose Luxe' },
  { href: 'theme-10.html', label: '10 Ice Flow' },
  { href: 'theme-11.html', label: '11 Gold Detail' },
  { href: 'theme-12.html', label: '12 Highland Blue' }
];

const navHost = document.querySelector('[data-theme-nav]');
if (navHost) {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  const navInner = document.createElement('div');
  navInner.className = 'theme-nav-inner';

  themes.forEach((theme) => {
    const link = document.createElement('a');
    link.className = 'theme-link';
    link.href = theme.href;
    link.textContent = theme.label;

    if (theme.href === current || (current === '' && theme.href === 'index.html')) {
      link.classList.add('active');
    }

    navInner.appendChild(link);
  });

  navHost.className = 'theme-nav';
  navHost.appendChild(navInner);

  const active = navHost.querySelector('.theme-link.active');
  if (active) {
    active.scrollIntoView({ inline: 'center', block: 'nearest' });
  }
}
