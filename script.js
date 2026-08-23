/* =========================================================
   LARISSA C. L. — SCRIPT PRINCIPAL
   ========================================================= */


/* =========================================================
   LIVROS, CONTOS E ANTOLOGIA
   ========================================================= */

const BOOKS = [

  {
    title: "O Vazio Estrelado",

    series: "Fantasia emocional",

    synopsis: "Toda noite, quando fecha os olhos, Isadora embarca numa nave com a mãe rumo a um lugar que ninguém mais consegue ver. De dia, ela tem onze anos, um pai que deixa bilhetes na geladeira, uma melhor amiga cientista e um medalhão guardado no bolso, o que restou da mãe antes da missão mais importante que já existiu. De noite, ela tem estrelas, corredores infinitos e uma mãe que nunca tem medo de nada. Uma história sobre o que inventamos pra sobreviver ao que não sabe dizer em voz alta, e sobre a coragem de finalmente escutar a verdade.",

    spineColor: "#C9707A",

    cover: "assets/capas/vazio-estrelado.jpg",

    rating: 5.0,

    testimonial: {
      quote: "Tocante, lindo, completamente imersivo.",
      author: "Amanda C., compra verificada"
    },

    links: {

      ebook: {
        label: "Já disponível em e-book!",
        url: "https://www.amazon.com.br/dp/B0HCGM2V8C"
      },

      fisico: {
        label: "Entre em contato para saber mais sobre a versão física.",
        url: "https://www.instagram.com/autora_larissacl/"
      }

    }
  },


  {
    title: "A Vidente de Memórias",

    series: "Crônicas dos Lumengarde · Livro 1",

    synopsis: "Luna descobre um dom que a conecta a memórias que não são suas e a uma linhagem de poder que a cidade preferia manter enterrada. Fantasia de estreia sobre heranças, dons e o peso do que vem antes de nós.",

    spineColor: "#9C5A82",

    cover: "assets/capas/vidente-de-memorias.jpg",

    startHere: true,

    rating: 4.8,

    testimonial: {
      quote: "Leitura ótima, leve e bem fluida — dá vontade de ler mais um capítulo.",
      author: "Katharine P., compra verificada"
    },

    links: {

      ebook: {
        label: "Comprar ebook",
        url: "https://www.amazon.com.br/dp/B0F7GZW1WX"
      },

      fisico: {
        label: "Comprar versão física",
        url: "https://loja.uiclap.com/titulo/ua137329"
      }

    }
  },


  {
    title: "O Labirinto das Memórias Perdidas",

    series: "Crônicas dos Lumengarde · Livro 2",

    synopsis: "O universo dos Lumengarde se aprofunda: luto, ética e pertencimento se entrelaçam numa narrativa mais densa, onde o passado nunca fica realmente para trás.",

    spineColor: "#855090",

    cover: "assets/capas/labirinto-das-memorias-perdidas.jpg",

    rating: 5.0,

    testimonial: {
      quote: "A Lari me fez chorar e devorar esse livro!",
      author: "Carol L., avaliação verificada"
    },

    links: {

      ebook: {
        label: "Comprar ebook",
        url: "https://www.amazon.com.br/dp/B0GLJM6M1T"
      },

      fisico: {
        label: "Comprar versão física",
        url: "https://loja.uiclap.com/titulo/ua149701"
      }

    }
  },


  {
    title: "Natal das Memórias",

    series: "Conto avulso · Universo Crônicas dos Lumengarde",

    synopsis: "Um conto independente ambientado no universo dos Lumengarde, perfeito para quem já leu a série ou quer uma primeira visita a esse mundo antes de mergulhar nos livros completos.",

    spineColor: "#6E4A9E",

    cover: "assets/capas/natal-das-memorias.jpg",

    links: {

      conto: {
        label: "Comprar conto",
        url: "https://www.amazon.com.br/dp/B0G9539KYM"
      }

    }
  },


  {
    title: "A Escolhida das Sombras",

    series: "Fantasia sombria",

    synopsis: "Duas amigas, dons que se cruzam e uma verdade escondida há gerações. Um novo capítulo no universo de mistério e magia de Larissa.",

    spineColor: "#8767B5",

    cover: "assets/capas/escolhida-das-sombras.jpg",

    bestseller: true,

    rating: 5.0,

    testimonial: {
      quote: "Jade não é uma heroína idealizada — e é justamente por isso que se torna tão real.",
      author: "Dri, @maktubliteraria_"
    },

    links: {

      ebook: {
        label: "Comprar ebook",
        url: "https://www.amazon.com.br/dp/B0G965YWL4"
      },

      fisico: {
        label: "Comprar versão física",
        url: "https://loja.uiclap.com/titulo/ua137611"
      }

    }
  },


  {
    title: "A Canção que Afunda o Sol",

    series: "Conto gratuito · Universo A Escolhida das Sombras",

    synopsis: "Um conto gratuito que expande o universo de A Escolhida das Sombras, disponível para leitura direta no Wattpad.",

    spineColor: "#B49AD1",

    cover: "assets/capas/cancao-que-afunda-o-sol.jpg",

    links: {

      wattpad: {
        label: "Ler grátis no Wattpad",
        url: "https://www.wattpad.com/story/406865630-a-can%C3%A7%C3%A3o-que-afunda-o-sol-conto-do-universo-de-a"
      }

    }
  },


  {
    title: "O Mistério da Primavera",

    series: "Suspense psicológico",

    synopsis: "Um detetive, uma série de crimes ritualísticos e uma cidade com mais segredos do que confessa. Mistério com uma pitada de sobrenatural.",

    spineColor: "#4A3F5E",

    cover: "assets/capas/misterio-da-primavera.jpg",

    rating: 5.0,

    testimonial: {
      quote: "Um suspense viciante que desafia as leis da física.",
      author: "Alinne M., @sistersbookaholic"
    },

    links: {

      ebook: {
        label: "Comprar ebook",
        url: "https://www.amazon.com.br/dp/B0FHV4N9TQ"
      },

      fisico: {
        label: "Comprar versão física",
        url: "https://loja.uiclap.com/titulo/ua137328"
      }

    }
  },


  {
    title: "Era Uma Vez… A História Não Contada",

    series: "Antologia · Clímax Editorial",

    synopsis: "Vinte e seis autores revisitam contos de fadas clássicos pelo ponto de vista de quem sempre ficou fora do foco: criados, animais e testemunhas silenciosas. Fantasia sombria com terror simbólico e suspense. Larissa participa com um conto original.",

    spineColor: "#C9A227",

    cover: "assets/capas/era-uma-vez.jpg",

    links: {

      antologia: {
        label: "Comprar a antologia",
        url: "https://climaxeditorial.com.br/produto/era-uma-vez/"
      }

    }
  }

];


/* =========================================================
   ELEMENTOS DA PÁGINA
   ========================================================= */

const shelf = document.getElementById("shelf");

const detail = document.getElementById("book-detail");

const detailCover = document.getElementById("detail-cover");

const detailSeries = document.getElementById("detail-series");

const detailTitle = document.getElementById("detail-title");

const detailRating = document.getElementById("detail-rating");

const detailSynopsis = document.getElementById("detail-synopsis");

const detailTestimonial = document.getElementById("detail-testimonial");

const detailActions = document.getElementById("detail-actions");

const detailClose = document.getElementById("detail-close");

const stickyCta = document.getElementById("sticky-cta");

const stickyCtaTitle = document.getElementById("sticky-cta-title");

const stickyCtaLink = document.getElementById("sticky-cta-link");

const newsletterForm = document.getElementById("newsletter-form");

const formNote = document.getElementById("form-note");

const year = document.getElementById("year");


let currentBook = null;


/* =========================================================
   CRIA A ESTANTE
   ========================================================= */

function renderShelf() {

  if (!shelf) return;


  shelf.innerHTML = "";


  BOOKS.forEach((book, index) => {

    const spine = document.createElement("button");

    spine.type = "button";

    spine.className = "book-spine";

    spine.style.background = book.spineColor;

    spine.setAttribute("role", "listitem");

    spine.setAttribute(
      "aria-label",
      `Abrir ${book.title}`
    );


    const widths = [
      48,
      54,
      45,
      50,
      58,
      43,
      55,
      52
    ];


    spine.style.width =
      `${widths[index % widths.length]}px`;


    const title = document.createElement("span");

    title.className = "book-spine-title";

    title.textContent = book.title;


    spine.appendChild(title);


    /*
       Selo para o livro de entrada da série.
    */

    if (book.startHere) {

      spine.dataset.startHere = "true";

    }


    /*
       Selo de favorito.
    */

    if (book.bestseller) {

      spine.dataset.bestseller = "true";

    }


    spine.addEventListener("click", () => {

      openBook(book);

    });


    shelf.appendChild(spine);

  });

}


/* =========================================================
   ABRE DETALHES DO LIVRO
   ========================================================= */

function openBook(book) {

  if (!book || !detail) return;


  currentBook = book;


  /*
     CAPA
  */

  detailCover.innerHTML = `
    <img
      src="${book.cover}"
      alt="Capa do livro ${book.title}"
      loading="lazy"
    >
  `;


  /*
     SÉRIE
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

    detailRating.innerHTML = `
      <span aria-label="Avaliação média ${book.rating} de 5">
        ★★★★★ ${Number(book.rating).toFixed(1)}
      </span>
    `;

    detailRating.style.display = "";

  } else {

    detailRating.innerHTML = "";

    detailRating.style.display = "none";

  }


  /*
     SINOPSE
  */

  detailSynopsis.textContent =
    book.synopsis || "";


  /*
     RESENHA
  */

  if (book.testimonial) {

    detailTestimonial.innerHTML = `
      <span>“${book.testimonial.quote}”</span>
      <cite>${book.testimonial.author}</cite>
    `;

    detailTestimonial.style.display = "";

  } else {

    detailTestimonial.innerHTML = "";

    detailTestimonial.style.display = "none";

  }


  /*
     BOTÕES DE COMPRA / LEITURA

     Aqui está a parte que tinha sido perdida no
     script anterior. Agora TODOS os links disponíveis
     no objeto links são criados automaticamente.
  */

  detailActions.innerHTML = "";


  if (book.links) {

    Object.entries(book.links).forEach(
      ([type, link]) => {

        if (!link || !link.url) return;


        const action = document.createElement("a");

        action.href = link.url;

        action.target = "_blank";

        action.rel = "noopener";

        action.textContent = link.label;


        /*
           Classes extras permitem estilizar
           ebook, físico, Wattpad etc.
        */

        action.className =
          `detail-action detail-action--${type}`;


        detailActions.appendChild(action);

      }
    );

  }


  /*
     MOSTRA OS DETALHES
  */

  detail.hidden = false;


  /*
     CTA MOBILE

     Preferimos ebook. Se não existir, usamos
     o primeiro link disponível.
  */

  updateStickyCta(book);


  /*
     Scroll até os detalhes.
  */

  setTimeout(() => {

    detail.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });

  }, 50);

}


/* =========================================================
   FECHA DETALHES
   ========================================================= */

function closeBook() {

  if (!detail) return;


  detail.hidden = true;

  currentBook = null;


  if (stickyCta) {

    stickyCta.hidden = true;

  }

}


if (detailClose) {

  detailClose.addEventListener(
    "click",
    closeBook
  );

}


/* =========================================================
   COMEÇE POR AQUI
   ========================================================= */

const storyPaths =
  document.querySelectorAll(".story-path");


storyPaths.forEach((path) => {

  path.addEventListener("click", () => {

    const bookTitle =
      path.dataset.bookTitle;


    const book = BOOKS.find(
      item => item.title === bookTitle
    );


    if (book) {

      openBook(book);

    }

  });

});


/* =========================================================
   CTA DO BANNER DE DESTAQUE (TEASER)

   Em vez de rolar até "Comece por aqui", este botão
   abre direto os detalhes do livro em destaque, igual
   a clicar na lombada dele na estante.
   ========================================================= */

const teaserCta =
  document.getElementById("teaser-cta");


if (teaserCta) {

  teaserCta.addEventListener("click", (event) => {

    const bookTitle =
      teaserCta.dataset.bookTitle;


    const book = BOOKS.find(
      item => item.title === bookTitle
    );


    if (book) {

      event.preventDefault();

      openBook(book);

    }

    /*
       Se por algum motivo o livro não for encontrado,
       o href="#estante" continua funcionando como
       alternativa de segurança.
    */

  });

}


/* =========================================================
   CTA FIXO MOBILE
   ========================================================= */

function updateStickyCta(book) {

  if (
    !stickyCta ||
    !stickyCtaTitle ||
    !stickyCtaLink
  ) return;


  stickyCtaTitle.textContent =
    book.title;


  let link = null;


  /*
     Ordem de preferência do botão mobile.
  */

  if (book.links?.ebook) {

    link = book.links.ebook;

  } else if (book.links?.fisico) {

    link = book.links.fisico;

  } else if (book.links) {

    link =
      Object.values(book.links)[0];

  }


  if (!link) {

    stickyCta.hidden = true;

    return;

  }


  stickyCtaLink.href =
    link.url;


  stickyCtaLink.textContent =
    "Ver livro";


  if (window.innerWidth <= 680) {

    stickyCta.hidden = false;

  }

}


/* =========================================================
   RESPONSIVIDADE DO CTA
   ========================================================= */

window.addEventListener("resize", () => {

  if (!stickyCta) return;


  if (window.innerWidth > 680) {

    stickyCta.hidden = true;

  } else if (currentBook) {

    updateStickyCta(currentBook);

  }

});


/* =========================================================
   NEWSLETTER
   ========================================================= */

if (newsletterForm) {

  newsletterForm.addEventListener(
    "submit",
    async event => {

      event.preventDefault();


      const emailInput =
        newsletterForm.querySelector(
          'input[type="email"]'
        );


      const email =
        emailInput.value.trim();


      if (!email) {

        if (formNote) {

          formNote.textContent =
            "Digite seu e-mail para continuar.";

        }

        return;

      }


      /*
         Envia para o Formspree via fetch, sem
         redirecionar a pessoa para fora do site.
      */

      if (formNote) {

        formNote.textContent =
          "Enviando...";

      }


      try {

        const response = await fetch(
          newsletterForm.action,
          {
            method: "POST",
            body: new FormData(newsletterForm),
            headers: {
              Accept: "application/json"
            }
          }
        );


        if (response.ok) {

          if (formNote) {

            formNote.textContent =
              "Obrigada! Em breve você receberá o capítulo bônus. ✦";

          }

          newsletterForm.reset();

        } else {

          if (formNote) {

            formNote.textContent =
              "Algo deu errado. Tente novamente em instantes.";

          }

        }

      } catch (error) {

        if (formNote) {

          formNote.textContent =
            "Sem conexão no momento. Tente novamente em instantes.";

        }

      }

    }
  );

}


/* =========================================================
   INTERESSE NO KIT IMPRESSO (1ª LEVA)

   Envia os dados (incluindo o endereço completo) para o
   Formspree, para a Larissa simular o frete e responder
   com o valor final.
   ========================================================= */

const kitInterestToggle =
  document.getElementById("kit-interest-toggle");

const kitFormWrap =
  document.getElementById("kit-form-wrap");

const kitForm =
  document.getElementById("kit-form");

const kitFormNote =
  document.getElementById("kit-form-note");


if (kitInterestToggle && kitFormWrap) {

  kitInterestToggle.addEventListener("click", () => {

    const isHidden = kitFormWrap.hidden;

    kitFormWrap.hidden = !isHidden;

    kitInterestToggle.setAttribute(
      "aria-expanded",
      String(isHidden)
    );

    kitInterestToggle.dataset.open =
      isHidden ? "true" : "false";


    if (isHidden) {

      setTimeout(() => {

        kitFormWrap.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });

      }, 50);

    }

  });

}


if (kitForm) {

  kitForm.addEventListener("submit", async event => {

    event.preventDefault();


    const getValue = id => {

      const field =
        document.getElementById(id);

      return field ?
        field.value.trim() :
        "";

    };


    const nome = getValue("kit-nome");
    const email = getValue("kit-email");
    const cep = getValue("kit-cep");
    const cidade = getValue("kit-cidade");
    const estado = getValue("kit-estado");
    const bairro = getValue("kit-bairro");
    const endereco = getValue("kit-endereco");


    if (!nome || !email || !cep || !cidade || !estado || !bairro || !endereco) {

      if (kitFormNote) {

        kitFormNote.textContent =
          "Preencha os campos obrigatórios (nome, e-mail e endereço completo).";

      }

      return;

    }


    /*
       Envia para o Formspree via fetch, sem
       redirecionar a pessoa para fora do site.
    */

    if (kitFormNote) {

      kitFormNote.textContent =
        "Enviando...";

    }


    try {

      const response = await fetch(
        kitForm.action,
        {
          method: "POST",
          body: new FormData(kitForm),
          headers: {
            Accept: "application/json"
          }
        }
      );


      if (response.ok) {

        if (kitFormNote) {

          kitFormNote.textContent =
            "Recebido! A Larissa vai simular o frete pra sua região e te enviar o valor final por e-mail. ✦";

        }

        kitForm.reset();

      } else {

        if (kitFormNote) {

          kitFormNote.textContent =
            "Algo deu errado ao enviar. Tente novamente em instantes.";

        }

      }

    } catch (error) {

      if (kitFormNote) {

        kitFormNote.textContent =
          "Sem conexão no momento. Tente novamente em instantes.";

      }

    }

  });

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

    renderShelf();

  }
);
