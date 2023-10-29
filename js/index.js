import { Router } from "./router.js";

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universe", "/pages/universe.html");
router.add("/exploration", "/pages/exploration.html");
router.add(404, "/pages/404.html");

// Função para adicionar a classe "active" no link da página atual
function setActivePage() {
  const links = document.querySelectorAll('nav ul li a');
  const currentPage = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}



router.handle();
setActivePage();

window.onpopstate = () => {
  router.handle();
  setActivePage();
};
window.route = () => {
  router.route();
  setActivePage();
};