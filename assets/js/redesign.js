document.addEventListener('DOMContentLoaded', () => {
  const brand = document.querySelector(
    'header .nav__logo, header .nav-logo, header .site-nav__brand, header .brand, header .logo, .site-nav .nav__logo, .site-nav .nav-logo, .nav .nav__logo, .nav-inner .nav-logo'
  );
  if (brand && !brand.querySelector('img')) {
    const logo = document.createElement('img');
    logo.className = 'global-brand__logo';
    logo.src = '/assets/image/logo.webp';
    logo.alt = '';
    brand.querySelector('.nav-logo-icon')?.remove();
    brand.prepend(logo);
  }

  const nav = document.querySelector('header nav');
  const hasExistingToggle = nav?.querySelector(
    '.nav__burger, .hamburger, .nav-toggle, .menu-toggle, [data-mobile-toggle]'
  );
  const menu = nav?.querySelector('.nav-links');

  if (nav && menu && !hasExistingToggle) {
    nav.setAttribute('data-rgr-mobile-nav', '');
    const toggle = document.createElement('button');
    toggle.className = 'site-menu-toggle';
    toggle.type = 'button';
    toggle.setAttribute('aria-label', 'Toggle navigation menu');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
    nav.append(toggle);
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-rgr-menu-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
      toggle.textContent = isOpen ? '×' : '☰';
    });
    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        nav.classList.remove('is-rgr-menu-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Open navigation menu');
        toggle.textContent = '☰';
      });
    });
  }

  const bookingSearch = document.querySelector('[data-booking-search]');
  bookingSearch?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(bookingSearch);
    const details = [
      'Hi Royal Goa Ride, I would like to check vehicle availability.',
      `Pickup: ${formData.get('pickup-location') || 'Not specified'}`,
      `Drop-off: ${formData.get('dropoff-location') || 'Not specified'}`,
      `Pickup date: ${formData.get('pickup-date') || 'Not specified'}`,
      `Drop-off date: ${formData.get('dropoff-date') || 'Not specified'}`,
      `Vehicle category: ${formData.get('vehicle-category') || 'Any'}`
    ].join('\n');
    const url = `https://wa.me/919975356697?text=${encodeURIComponent(details)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  });

  const vehicleImage = document.querySelector('.hero-img-placeholder');
  if (vehicleImage) {
    const imageByPage = {
      'audi-a3-rental-goa': 'Audi-A3.webp',
      'baleno-rental-goa': 'Maruti Baleno.webp',
      'creta-rental-goa': 'Hyundai-Creta.webp',
      'fortuner-rental-goa': 'Toyota Fortuner.webp',
      'honda-activa-rental-goa': 'honda-activa-125.jpeg',
      'i20-rental-goa': 'Hyundai i20 (Manual).webp',
      'innova-rental-goa': 'Toyota Innova Crysta.webp',
      'luxury-car-rental-goa': 'Mercedes-Benz C300.webp',
      'mahindra-thar-rental-goa': 'Mahindra-Thar-Hardtop.webp',
      'maruti-dzire-rental-goa': '/image/Maruti-Swift-Dzire.jpg',
      'maruti-swift-rental-goa': 'Maruti Swift.webp',
      'mercedes-c300-rental-goa': 'Mercedes-Benz C300.webp',
      'royal-enfield-rental-goa': 'Royal-Enfield.png'
    };
    const pageName = window.location.pathname.split('/').pop()?.replace(/\.html$/, '');
    const imageName = pageName ? imageByPage[pageName] : undefined;

    if (imageName) {
      const image = document.createElement('img');
      image.src = imageName.startsWith('/')
        ? imageName
        : `/assets/image/${encodeURIComponent(imageName)}`;
      image.alt = vehicleImage.querySelector('.hero-img-label')?.textContent?.replace(/\s+/g, ' ').trim()
        || 'Vehicle available for rent in Goa';
      image.width = 960;
      image.height = 640;
      image.loading = 'eager';
      image.decoding = 'async';
      vehicleImage.replaceChildren(image);
    }
  }
});
