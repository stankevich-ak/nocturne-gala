(() => {
  const path = window.location.pathname;
  const eventPage = ['/blood-moon-ball/', '/celestial-winter-masquerade/', '/spring-gala/', '/end-of-summer-picnic/'].some(prefix => path.startsWith(prefix));
  const active = path === '/' ? 'home' : path.startsWith('/events') || eventPage ? 'events' : path.startsWith('/blog') ? 'blog' : path.startsWith('/contact') ? 'contact' : '';
  const nav = document.getElementById('nav');
  if (nav) {
    nav.innerHTML = `
      <a href="/" class="nav-brand">
        <img class="nav-logo" src="/logo.svg" alt="Nocturne Gala logo"/>
        <span class="nav-brand-text">Nocturne Gala</span>
      </a>
      <div class="nav-links">
        <a href="/"${active === 'home' ? ' class="active" aria-current="page"' : ''}>Home</a>
        <a href="/events/"${active === 'events' ? ' class="active" aria-current="page"' : ''}>Events</a>
        <a href="/blog/"${active === 'blog' ? ' class="active" aria-current="page"' : ''}>Blog</a>
        <a href="/contact/"${active === 'contact' ? ' class="active" aria-current="page"' : ''}>Contact</a>
      </div>`;
  }

  const footer = document.querySelector('footer');
  if (footer) {
    footer.innerHTML = `
      <nav class="footer-nav" aria-label="Footer navigation">
        <a href="/">Home</a><a href="/events/">Events</a><a href="/blog/">Blog</a><a href="/contact/">Contact</a>
      </nav>
      <div class="footer-divider"></div>
      <div class="footer-social">
        <a href="https://www.instagram.com/nocturnegala/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/nocturnegala" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.tiktok.com/@nocturnegala" target="_blank" rel="noopener">TikTok</a>
      </div>
      <div class="footer-email"><a href="mailto:enchanted.gala.connect@gmail.com">enchanted.gala.connect@gmail.com</a></div>
      <p class="footer-copy">&copy; 2026 Nocturne Gala &middot; Historic Social Dancing &middot; British Columbia, Canada</p>`;
  }
})();
