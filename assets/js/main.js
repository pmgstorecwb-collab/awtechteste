// Mobile Menu toggle
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
if (mobileBtn) {
  mobileBtn.addEventListener('click', () => {
    const open = mobileMenu.hasAttribute('hidden') ? false : true;
    if(open){
      mobileMenu.setAttribute('hidden','');
      mobileBtn.setAttribute('aria-expanded','false');
    } else {
      mobileMenu.removeAttribute('hidden');
      mobileBtn.setAttribute('aria-expanded','true');
    }
  });
}
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target){
        const offset = 68;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({top, behavior: 'smooth'});
        if(!mobileMenu.hasAttribute('hidden')) mobileMenu.setAttribute('hidden','');
        if(mobileBtn) mobileBtn.setAttribute('aria-expanded','false');
      }
    }
  });
});
// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
},{threshold: 0.12});
document.querySelectorAll('.card, .sobre, .contato, .hero-inner').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});