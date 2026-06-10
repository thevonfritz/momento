// Header sticky on scroll
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
});

// Mobile menu
const toggle = document.getElementById('menuToggle');
const links = document.getElementById('navLinks');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('open');
});
links.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('open');
  })
);

// Reveal on scroll
const io = new IntersectionObserver(
  entries => entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  }),
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Lead form -> WhatsApp
const leadForm = document.getElementById('leadForm');
if (leadForm) {
  leadForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const tel = document.getElementById('tel').value;
    const interesse = document.getElementById('interesse').value;
    const msg = document.getElementById('msg').value;
    const txt =
      `Olá! Sou ${nome}.%0AInteresse: ${interesse}%0ATelefone: ${tel}` +
      (msg ? `%0AMensagem: ${msg}` : '');
    window.open(`https://wa.me/5500000000000?text=${txt}`, '_blank');
  });
}

// ===== MODAIS (Política de Privacidade / Termos de Uso) =====
function openModal(id) {
  const overlay = document.getElementById(id);
  if (!overlay) return;
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden'; // trava o scroll do fundo
}
function closeModal(overlay) {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// Abre via [data-modal]
document.querySelectorAll('[data-modal]').forEach(trigger => {
  trigger.addEventListener('click', e => {
    e.preventDefault();
    openModal(trigger.getAttribute('data-modal'));
  });
});

// Fecha no botão X, no clique fora ou no ESC
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay || e.target.closest('.modal-close')) {
      closeModal(overlay);
    }
  });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(closeModal);
  }
});

// Ano dinâmico no rodapé
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
