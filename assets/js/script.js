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
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      // Close mobile nav if open
      closeMobileNav();
    });
  });

  

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
