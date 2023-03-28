// ao escrolar a pagina chama a função
window.onscroll = function () {
  stickHeaderTop();
};

var header = document.querySelector("#header"); // header
var stick = header.offsetTop; // topo da pagina

function stickHeaderTop() {
  if (window.innerWidth > 900) {
    // se a tela tem menos de 900 px
    if (window.pageYOffset > stick) {
      // se o angulo Y da tela esta maior do que o topo da pagina
      header.classList.add("sticky"); // adiciona a classe para o css grudar ao topo
    } else {
      header.classList.remove("sticky"); // remove a classe caso estaja no topo
    }
  }
}

// > 900px menu

const menuBtn = document.querySelector(".menu"); // hamburguer
const involve = document.querySelector("#dropdown__involve");
const dropdown = document.querySelector("#dropdown");
const content = document.querySelector(".dropdown__content"); // cada um busca uma propriedade que está escondida

menuBtn.addEventListener("click", () => {
  var openMenu = document.querySelector(".dropdown__involve"); //verifica se a classe ja esta adicionada, se voltar null ele adiciona, se ja tiver, ele remove
  if (openMenu) {
    // remove caso tenha
    involve.classList.remove("dropdown__involve");
    dropdown.classList.remove("dropdown");
    content.style.display = "none";
  } else {
    // adiciona caso não tenha
    involve.classList.add("dropdown__involve");
    dropdown.classList.add("dropdown");
    content.style.display = "flex";
  }
});

//input

const input = document.querySelectorAll(".email-input"); //pega os dois inputs

input.forEach((i) => {
  // separa cada input
  i.addEventListener("click", () => {
    // para cada input adiciona um evento de clicl
    i.form[0].defaultValue = ""; // ao clicar, tira o value de 'email' para ''
  });
});


