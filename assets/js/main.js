
document.addEventListener('DOMContentLoaded', ()=>{
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('nav');
  const subToggle = document.querySelector('.sub-toggle');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const open = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(open));
    });
  }
  if(subToggle){
    subToggle.addEventListener('click', ()=>{
      const li = subToggle.closest('.has-sub');
      const expanded = subToggle.getAttribute('aria-expanded')==='true';
      subToggle.setAttribute('aria-expanded', String(!expanded));
      li.classList.toggle('open');
    });
  }
});
