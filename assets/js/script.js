document.addEventListener('DOMContentLoaded', () => {
  const mobileBtn = document.querySelector('.mobile-menu');
  const nav = document.querySelector('.nav');

  if (!mobileBtn || !nav) return;

  const toggleMenu = () => {
    const isExpanded = mobileBtn.getAttribute('aria-expanded') === 'true';
    mobileBtn.setAttribute('aria-expanded', String(!isExpanded));
    nav.classList.toggle('is-open');
  };

  const closeMenu = () => {
    mobileBtn.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  };

  // Alterna menu ao clicar no botão
  mobileBtn.addEventListener('click', toggleMenu);

  // Fecha ao clicar em um item do menu
  nav.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    });
  });

  // Fecha ao clicar fora do menu
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileBtn.contains(e.target)) {
      closeMenu();
    }
  });
});


function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 40;

    if (elementTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
