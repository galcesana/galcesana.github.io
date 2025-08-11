// Mobile nav toggle (accessible)
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true' || false;
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navMenu.setAttribute('aria-expanded', String(!expanded));
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

// Current year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();