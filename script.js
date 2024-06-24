// Seleciona o elemento do menu mobile e o corpo da página
const menuMobile = document.querySelector('.menu-mobile');
const body = document.querySelector('body');

// Evento de clique no menu mobile para alternar classes e ativar/desativar menu
menuMobile.addEventListener('click', () => {
  // Utiliza operador ternário para alternar entre ícones e classes do menu
  menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
  
  // Alterna a classe no corpo da página para ativar ou desativar o menu
  body.classList.toggle("menu-nav-active");
});

// Seleciona todos os itens de navegação
const navItem = document.querySelectorAll('.nav-item');

// Evento de clique nos itens de navegação para fechar o menu ao clicar em um item
navItem.forEach(item => {
  item.addEventListener("click", () => {
    if (body.classList.contains("menu-nav-active")) {
      body.classList.remove("menu-nav-active");
      menuMobile.classList.replace("bi-x", "bi-list");
    }
  });
});

// Seleciona todos os elementos com atributo data-anime
const itemsToAnimate = document.querySelectorAll("[data-anime]");

// Função para verificar quando animar os elementos
const animeScroll = () => {
  // Calcula a posição do topo da janela mais 85% da altura da janela visível
  const windowTop = window.scrollY + window.innerHeight * 0.85;

  // Itera sobre os elementos a serem animados
  itemsToAnimate.forEach(element => {
    // Adiciona a classe 'animate' se o topo do elemento for visível na janela
    if (windowTop > element.offsetTop){
      element.classList.add("animate");
    }
  });
};

// Chama a função uma vez para animar os elementos inicialmente
animeScroll();

// Evento de scroll para chamar a função animeScroll sempre que a página for rolada
window.addEventListener("scroll", () => {
  animeScroll();
});
