/* =========================================================
   LARISSA C. L. — SCRIPT PRINCIPAL
   ========================================================= */


/* =========================================================
   DADOS DOS LIVROS
   ========================================================= */

const books = [

  {
    title: "O Vazio Estrelado",

    series: "Fantasia emocional",

    cover: "assets/capas/vazio-estrelado.jpg",

    url: "https://www.amazon.com.br/dp/B0HCGM2V8C",

    rating: "★★★★★ 4,9",

    spineColor: "#4a3a68",

    synopsis: `
      Toda noite, quando fecha os olhos, Isadora embarca em uma nave
      com a mãe rumo a um lugar que ninguém mais consegue ver.

      Mas, quando as perguntas começam a atravessar o espaço entre
      as duas, Isadora precisa descobrir se algumas viagens existem
      apenas porque ainda não estamos prontos para dizer adeus.
    `,

    testimonial: `
      “Uma história delicada, imaginativa e muito mais profunda
      do que parece à primeira vista.”
    `
  },


  {
    title: "A Vidente de Memórias",

    series: "Duologia As Memórias Perdidas · Livro 1",

    cover: "assets/capas/vidente-memorias.jpg",

    url: "https://www.amazon.com.br/dp/B0F7GZW1WX",

    rating: "★★★★★ 4,8",

    spineColor: "#5f4b70",

    synopsis: `
      Algumas memórias não deveriam existir.

      Em uma família de bruxos, segredos podem ser escondidos,
      apagados ou deixados adormecidos por muito tempo.

      Mas quando o passado começa a voltar à superfície, uma jovem
      precisa descobrir quais lembranças são realmente suas e quais
      foram deixadas para trás para protegê-la.
    `,

    testimonial: `
      “Uma fantasia envolvente, cheia de segredos familiares,
      magia e descobertas.”
    `
  },


  {
    title: "O Labirinto das Memórias Perdidas",

    series: "Duologia As Memórias Perdidas · Livro 2",

    cover: "assets/capas/labirinto-memorias.jpg",

    url: "https://www.amazon.com.br/dp/B0GLJM6M1T",

    rating: "★★★★★ 5,0",

    spineColor: "#352d3d",

    synopsis: `
      Algumas portas deveriam continuar fechadas.

      Uma mansão aparentemente abandonada guarda corredores que não
      terminam, memórias que não pertencem apenas ao passado e um
      perigo que talvez nunca tenha realmente desaparecido.

      Para encontrar as respostas, será preciso atravessar um lugar
      onde nem tudo o que se perde deseja ser encontrado.
    `,

    testimonial: `
      “Mais sombrio, misterioso e cheio de revelações.
      Uma continuação que amplia tudo.”
    `
  },


  {
    title: "O Mistério da Primavera",

    series: "Mistério sobrenatural",

    cover: "assets/capas/misterio-primavera.jpg",

    url: "https://www.amazon.com.br/dp/B0FHV4N9TQ",

    rating: "★★★★☆ 4,5",

    spineColor: "#6c4d59",

    synopsis: `
      Mortes aparentemente desconectadas começam a revelar uma
      estranha ligação.

      Entre investigações, visões e acontecimentos sobrenaturais,
      uma verdade enterrada no passado começa a florescer novamente.

      E algumas coisas, quando despertam, não voltam a dormir.
    `,

    testimonial: `
      “Suspense, investigação e sobrenatural em uma história que
      mantém a curiosidade até o fim.”
    `
  },


  {
    title: "A Escolhida das Sombras",

    series: "Fantasia romântica",

    cover: "assets/capas/escolhida-sombras.jpg",

    url: "https://www.amazon.com.br/dp/B0G965YWL4",

    rating: "★★★★★ 5,0",

    spineColor: "#374239",

    synopsis: `
      Uma jovem arqueóloga descobre que não é exatamente humana.

      Enquanto tenta entender sua própria origem, ela se vê envolvida
      em uma história de criaturas, segredos e mitos brasileiros.

      E, no meio de tudo isso, se apaixona por alguém treinado para
      destruir seres como ela.
    `,

    testimonial: `
      “Fantasia, romance e elementos da mitologia brasileira em uma
      história cheia de descobertas.”
    `
  },


  {
    title: "Natal das Memórias",

    series: "Conto do universo de As Memórias Perdidas",

    cover: "assets/capas/natal-memorias.jpg",

    url: "https://www.amazon.com.br/dp/B0G9539KYM",

    rating: "",

    spineColor: "#7a3f46",

    synopsis: `
      Uma história ambientada no universo de As Memórias Perdidas.

      Porque algumas lembranças voltam justamente quando acreditamos
      que seria mais fácil deixá-las para trás.
    `,

    testimonial: `
      “Uma história curta para voltar a um universo conhecido
      e reencontrar aquilo que permanece.”
    `
  },


  {
    title: "Era Uma Vez… A História Não Contada",

    series: "Fantasia",

    cover: "assets/capas/era-uma-vez.jpg",

    url: "https://climaxeditorial.com.br/produto/era-uma-vez/",

    rating: "",

    spineColor: "#70573b",

    synopsis: `
      Nem toda história termina da maneira como foi contada.

      Entre fantasia e imaginação, esta é uma viagem por histórias,
      personagens e caminhos que talvez nunca tenham sido vistos
      da mesma forma.
    `,

    testimonial: `
      “Para quem gosta de olhar para histórias conhecidas e imaginar
      que talvez exista outra versão escondida em algum lugar.”
    `
  }

];


/* =========================================================
   ELEMENTOS
   ========================================================= */

const shelf = document.getElementById("shelf");

const bookDetail = document.getElementById("book-detail");

const detailCover = document.getElementById("detail-cover");

const detailSeries = document.getElementById("detail-series");

const detailTitle = document.getElementById("detail-title");

const detailRating = document.getElementById("detail-rating");

const detailSynopsis = document.getElementById("detail-synopsis");

const detailTestimonial = document.getElementById("detail-testimonial");

const detailActions = document.getElementById("detail-actions");

const detailClose = document.getElementById("detail-close");

const stickyCTA = document.getElementById("sticky-cta");

const stickyCTATitle = document.getElementById("sticky-cta-title");

const stickyCTALink = document.getElementById("sticky-cta-link");

const year = document.getElementById("year");


let currentBook = null;


/* =========================================================
   CRIA A ESTANTE
   ========================================================= */

function createShelf() {

  if (!shelf) return;

  shelf.innerHTML = "";


  books.forEach((book, index) => {

    const spine = document.createElement("button");

    spine.type = "button";

    spine.className = "book-spine";

    spine.setAttribute("role", "listitem");

    spine.setAttribute(
      "aria-label",
      `Abrir detalhes de ${book.title}`
    );


    /*
      Cada lombada recebe uma largura ligeiramente diferente.
      Isso ajuda a estante a parecer mais uma coleção de livros
      e menos uma fileira de botões clonados.
    */

    const widths = [
      48,
      55,
      43,
      58,
      51,
      45,
      54
    ];

    spine.style.width =
      `${widths[index % widths.length]}px`;

    spine.style.background =
      book.spineColor;


    const spineTitle = document.createElement("span");

    spineTitle.className = "book-spine-title";

    spineTitle.textContent = book.title;


    spine.appendChild(spineTitle);


    spine.addEventListener("click", () => {

      openBook(book);

    });


    shelf.appendChild(spine);

  });

}


/* =========================================================
   ABRE UM LIVRO
   ========================================================= */

function openBook(book) {

  if (!book || !bookDetail) return;


  currentBook = book;


  /*
     CAPA
  */

  detailCover.innerHTML = `
    <img
      src="${book.cover}"
      alt="Capa do livro ${book.title}"
    >
  `;


  /*
     SÉRIE / CATEGORIA
  */

  detailSeries.textContent =
    book.series || "";


  /*
     TÍTULO
  */

  detailTitle.textContent =
    book.title;


  /*
     AVALIAÇÃO
  */

  if (book.rating) {

    detailRating.textContent =
      book.rating;

    detailRating.style.display =
      "block";

  } else {

    detailRating.textContent =
      "";

    detailRating.style.display =
      "none";

  }


  /*
     SINOPSE

     O trim remove os espaços extras que existem
     no template literal.
  */

  detailSynopsis.textContent =
    book.synopsis.trim();


  /*
     DEPOIMENTO
  */

  if (book.testimonial) {

    detailTestimonial.textContent =
      book.testimonial.trim();

    detailTestimonial.style.display =
      "block";

  } else {

    detailTestimonial.textContent =
      "";

    detailTestimonial.style.display =
      "none";

  }


  /*
     BOTÕES
  */

  detailActions.innerHTML = `
    <a
      href="${book.url}"
      target="_blank"
      rel="noopener"
      class="detail-buy"
    >
      Onde encontrar o livro ↗
    </a>
  `;


  /*
     MOSTRA A ÁREA
  */

  bookDetail.hidden = false;


  /*
     CTA MOBILE
  */

  updateStickyCTA(book);


  /*
     DESCE ATÉ O LIVRO.

     Pequeno atraso para garantir que o hidden
     já tenha sido removido antes do cálculo.
  */

  setTimeout(() => {

    bookDetail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 50);

}


/* =========================================================
   FECHA DETALHES
   ========================================================= */

function closeBook() {

  if (!bookDetail) return;

  bookDetail.hidden = true;

  currentBook = null;


  if (stickyCTA) {

    stickyCTA.hidden = true;

  }

}


if (detailClose) {

  detailClose.addEventListener("click", closeBook);

}


/* =========================================================
   CARDS "COMECE POR AQUI"
   =========================================================

   O HTML usa:

   data-book-title="A Vidente de Memórias"

   Procuramos o livro com exatamente esse título
   dentro do array books.
*/

const storyPaths =
  document.querySelectorAll(".story-path");


storyPaths.forEach((path) => {

  path.addEventListener("click", () => {

    const bookTitle =
      path.dataset.bookTitle;


    const book =
      books.find(
        (item) =>
          item.title === bookTitle
      );


    if (book) {

      openBook(book);

    }

  });

});


/* =========================================================
   CTA FIXO MOBILE
   ========================================================= */

function updateStickyCTA(book) {

  if (
    !stickyCTA ||
    !stickyCTATitle ||
    !stickyCTALink
  ) return;


  stickyCTATitle.textContent =
    book.title;


  stickyCTALink.href =
    book.url;


  stickyCTA.hidden = false;

}


/*
   Caso o usuário volte ao topo e nenhum livro
   esteja selecionado, o CTA não precisa ficar
   ocupando a tela.
*/

window.addEventListener("scroll", () => {

  if (!stickyCTA) return;


  if (!currentBook) {

    stickyCTA.hidden = true;

    return;

  }


  /*
    Mantém o CTA apenas em telas mobile.
  */

  if (window.innerWidth > 680) {

    stickyCTA.hidden = true;

  } else {

    stickyCTA.hidden = false;

  }

});


window.addEventListener("resize", () => {

  if (!stickyCTA) return;


  if (window.innerWidth > 680) {

    stickyCTA.hidden = true;

  } else if (currentBook) {

    stickyCTA.hidden = false;

  }

});


/* =========================================================
   NEWSLETTER
   ========================================================= */

const newsletterForm =
  document.getElementById("newsletter-form");

const formNote =
  document.getElementById("form-note");


if (newsletterForm) {

  newsletterForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();


      const emailInput =
        newsletterForm.querySelector(
          'input[type="email"]'
        );


      const email =
        emailInput.value.trim();


      /*
        Aqui está apenas a confirmação visual.

        Para realmente cadastrar os e-mails,
        depois será necessário conectar este
        formulário a Brevo, Mailchimp, Buttondown,
        Formspree ou outro serviço.
      */

      if (!email) {

        if (formNote) {

          formNote.textContent =
            "Digite seu e-mail para continuar.";

        }

        return;

      }


      if (formNote) {

        formNote.textContent =
          "Obrigada! Em breve você receberá o capítulo bônus. ✦";

      }


      newsletterForm.reset();

    }
  );

}


/* =========================================================
   ANO AUTOMÁTICO
   ========================================================= */

if (year) {

  year.textContent =
    new Date().getFullYear();

}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    createShelf();

  }
);
