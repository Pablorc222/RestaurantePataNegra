document.addEventListener('DOMContentLoaded', function () {
  var botonMenu = document.querySelector('.menu-movil');
  var navPrincipal = document.querySelector('.nav-principal');
  if (botonMenu && navPrincipal) {
    botonMenu.addEventListener('click', function () {
      navPrincipal.classList.toggle('nav-abierta');
    });
  }
});
