const tombolMenu = document.getElementById('menuToggle');
const tautanNavigasi = document.getElementById('navLinks');

tombolMenu.addEventListener('click', () => {
  const menuTerbuka = tautanNavigasi.classList.toggle('open');
  tombolMenu.setAttribute('aria-expanded', String(menuTerbuka));
  tombolMenu.setAttribute('aria-label', menuTerbuka ? 'Tutup menu' : 'Buka menu');
  tombolMenu.textContent = menuTerbuka ? '×' : '☰';
});

tautanNavigasi.querySelectorAll('a').forEach((tautan) => {
  tautan.addEventListener('click', () => {
    tautanNavigasi.classList.remove('open');
    tombolMenu.setAttribute('aria-expanded', 'false');
    tombolMenu.setAttribute('aria-label', 'Buka menu');
    tombolMenu.textContent = '☰';
  });
});

document.getElementById('year').textContent = new Date().getFullYear();
