
const menuBtn=document.querySelector('.menu-btn');const nav=document.querySelector('.navlinks');if(menuBtn){menuBtn.addEventListener('click',()=>{nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('.dropdown>button').forEach(b=>b.addEventListener('click',()=>{if(innerWidth<=980)b.parentElement.classList.toggle('open')}));
document.querySelectorAll('.faq-q').forEach(b=>b.addEventListener('click',()=>{const i=b.closest('.faq-item');i.classList.toggle('open');b.setAttribute('aria-expanded',i.classList.contains('open'))}));
const io='IntersectionObserver'in window?new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.08}):null;document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('visible'));
