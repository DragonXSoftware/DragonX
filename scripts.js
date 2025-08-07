

// Smooth scrolling for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Simple feedback on form submission
const form = document.querySelector('form');

// Animate sections on scroll using IntersectionObserver
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

const sectionWrappers = document.querySelectorAll('.section-wrapper');
if (sectionWrappers && sectionWrappers.length > 0) {
  sectionWrappers.forEach(section => {
    observer.observe(section);
  });
}

// Replace alert with toast-style message
function showToast(message) {
  const toast = document.createElement('div');
  toast.textContent = message;
  toast.style.position = 'fixed';
  toast.style.bottom = '30px';
  toast.style.right = '30px';
  toast.style.background = '#238636';
  toast.style.color = '#fff';
  toast.style.padding = '12px 20px';
  toast.style.borderRadius = '4px';
  toast.style.boxShadow = '0 0 10px rgba(0,0,0,0.3)';
  toast.style.zIndex = '9999';
  toast.style.fontSize = '0.95rem';
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

if (form) {
  form.addEventListener('submit', function (e) {
    showToast("Thanks for reaching out! We'll be in touch soon.");
  });
}