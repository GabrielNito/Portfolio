const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".navbar_menu");

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navmenu.classList.toggle('active');
})
