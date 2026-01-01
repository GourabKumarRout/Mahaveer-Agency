document.querySelectorAll('a[href^="#"]').forEach(l=>{
l.addEventListener('click',e=>{
e.preventDefault();
document.querySelector(l.getAttribute('href')).scrollIntoView({behavior:'smooth'});
});
});