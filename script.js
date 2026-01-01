// Mobile nav toggle (accessible)
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent document click from immediately closing
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.setAttribute('aria-expanded', String(!expanded));
  });

  // Close menu when clicking on a navigation link
  const navLinks = navMenu.querySelectorAll('a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener('click', (e) => {
    const isClickInsideMenu = navMenu.contains(e.target);
    const isClickOnToggle = navToggle.contains(e.target);
    const isMenuOpen = navToggle.getAttribute('aria-expanded') === 'true';
    
    if (isMenuOpen && !isClickInsideMenu && !isClickOnToggle) {
      navToggle.setAttribute('aria-expanded', 'false');
      navMenu.setAttribute('aria-expanded', 'false');
    }
  });
}

// Theme: prefer saved, else system
const themeBtn = document.getElementById('themeToggle');
const root = document.documentElement;
const storedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
function setTheme(mode){ root.setAttribute('data-theme', mode); localStorage.setItem('theme', mode); }
setTheme(storedTheme || (systemDark ? 'dark' : 'light'));
if (themeBtn){ themeBtn.addEventListener('click', ()=> setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark')); }

// IntersectionObserver for reveal animations
const io = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{ if (e.isIntersecting){ e.target.classList.add('is-visible'); io.unobserve(e.target); }});
},{ rootMargin: '0px 0px -10% 0px' });

document.querySelectorAll('.reveal').forEach(el=> io.observe(el));

// IntersectionObserver for section animations
const sectionObserver = new IntersectionObserver((entries)=>{
  entries.forEach((e)=>{ 
    if (e.isIntersecting){ 
      e.target.classList.add('in-view'); 
      sectionObserver.unobserve(e.target); 
    }
  });
},{ rootMargin: '0px 0px -15% 0px', threshold: 0.1 });

document.querySelectorAll('section').forEach(section=> {
  // Check if section is already in view on page load
  const rect = section.getBoundingClientRect();
  const isInView = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
  if (isInView) {
    section.classList.add('in-view');
  } else {
    sectionObserver.observe(section);
  }
});

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();