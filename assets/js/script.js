// Basic interactivity: smooth scroll, active nav highlighting, mobile toggle, and small contact stub.

document.addEventListener('DOMContentLoaded', function () {
  // Smooth scroll for nav links
  const links = document.querySelectorAll('.nav-link');
  links.forEach(a => {
    a.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').slice(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

      // Close mobile nav if open
      closeMobileNav();
    });
  });

  // Highlight active nav on scroll
  const sections = Array.from(document.querySelectorAll('main section[id]'));
  function onScroll() {
    const scrollPos = window.scrollY + 120;
    let current = sections[0];
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) current = sec;
    }
    const id = current.id;
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const sideNav = document.getElementById('sideNav');

  function openMobileNav() {
    sideNav.classList.add('open');
  }
  function closeMobileNav() {
    sideNav.classList.remove('open');
  }

  navToggle.addEventListener('click', function () {
    sideNav.classList.toggle('open');
  });

  // Close nav when clicking outside (mobile)
  document.addEventListener('click', function (e) {
    if (!sideNav.contains(e.target) && !navToggle.contains(e.target)) {
      closeMobileNav();
    }
  });

  // year in footer
  document.getElementById('year').textContent = new Date().getFullYear();
});

// Simple contact handler (no backend) — replace with your submission endpoint or third-party form
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  // For now, open mail client as fallback
  const subject = encodeURIComponent(`Portfolio contact from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name}\n${email}`);
  window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`;
}
