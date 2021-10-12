const menu_mobile = document.getElementById('menu_mobile');

var toggleMenu = () => {
   const nav = document.getElementById('nav');
   nav.classList.toggle('active')
};

menu_mobile.addEventListener('click', toggleMenu)