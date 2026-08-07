/* =========================================================
   SEUS LIVROS, CONTOS E ANTOLOGIA — edite este array livremente.
   Cada item:
     title       -> título
     series      -> série/gênero (aparece em cima do título)
     synopsis    -> sinopse curta (2-4 frases)
     spineColor  -> cor da lombada na estante (var(--gold) / var(--plum) / hex)
     startHere   -> true para exibir o selo "Comece aqui" (livro 1 de uma série)
     bestseller  -> true para exibir o selo "Favorito das leitoras"
     rating      -> nota média (número, ex: 4.8) com base nas avaliações que você tiver à mão
     testimonial -> { quote, author } — um depoimento curto de leitora pra mostrar no card
     links       -> objeto com as opções de compra/leitura disponíveis.
                    Chaves possíveis: ebook, fisico, conto, wattpad, antologia
                    Cada uma tem { label, url }. Remova a chave se não existir
                    ainda (o botão simplesmente não aparece).
   ========================================================= */
const BOOKS = [
    {
    title: "O Vazio Estrelado",
    synopsis: "Toda noite, quando fecha os olhos, Isadora embarca numa nave com a mãe rumo a um lugar que ninguém mais consegue ver. De dia, ela tem onze anos, um pai que deixa bilhetes na geladeira, uma melhor amiga cientista e um medalhão guardado no bolso, o que restou da mãe antes da missão mais importante que já existiu. De noite, ela tem estrelas, corredores infinitos e uma mãe que nunca tem medo de nada. Uma história sobre o que inventamos pra sobreviver ao que não sabe dizer em voz alta, e sobre a coragem de finalmente escutar a verdade.",
    spineColor: "#C9707A",
    cover: "assets/capas/vazio-estrelado.jpg",
    rating: 5.0,
    testimonial: {
      quote: "Tocante, lindo, completamente imersivo.",
      author: "Amanda C., compra verificada"
    },
    links: {
      ebook: { label: "Já disponível em e-book!", url: "https://www.amazon.com.br/dp/B0HCGM2V8C" },
      fisico: { label: "Entre em contato para saber mais sobre a versão física.", url: "https://www.instagram.com/autora_larissacl/" }

    }
  },
   {
    title: "A Vidente de Memórias",
    series: "Crônicas dos Lumengarde · Livro 1",
    synopsis: "Luna descobre um dom que a conecta a memórias que não são suas — e a uma linhagem de poder que a cidade preferia manter enterrada. Fantasia de estreia sobre heranças, dons e o peso do que vem antes de nós.",
    spineColor: "#9C5A82",
    cover: "assets/capas/vidente-de-memorias.jpg",
    startHere: true,
    rating: 4.8,
    testimonial: {
      quote: "Leitura ótima, leve e bem fluida — dá vontade de ler mais um capítulo.",
      author: "Katharine P., compra verificada"
    },
    links: {
      ebook: { label: "Comprar ebook", url: "https://www.amazon.com.br/dp/B0F7GZW1WX" },
      fisico: { label: "Comprar versão física", url: "https://loja.uiclap.com/titulo/ua137329" }
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
      ebook: { label: "Comprar ebook", url: "https://www.amazon.com.br/dp/B0GLJM6M1T" },
      fisico: { label: "Comprar versão física", url: "https://loja.uiclap.com/titulo/ua149701" }
    }
  },
  {
    title: "Natal das Memórias",
    series: "Conto avulso · Universo Crônicas dos Lumengarde",
    synopsis: "Um conto independente ambientado no universo dos Lumengarde, perfeito para quem já leu a série ou quer uma primeira visita a esse mundo antes de mergulhar nos livros completos.",
    spineColor: "#6E4A9E",
    cover: "assets/capas/natal-das-memorias.jpg",
    links: {
      conto: { label: "Comprar conto", url: "https://www.amazon.com.br/dp/B0G9539KYM" }
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
      ebook: { label: "Comprar ebook", url: "https://www.amazon.com.br/dp/B0G965YWL4" },
      fisico: { label: "Comprar versão física", url: "https://loja.uiclap.com/titulo/ua137611" }
    }
  },
  {
    title: "A Canção que Afunda o Sol",
    series: "Conto gratuito · Universo A Escolhida das Sombras",
    synopsis: "Um conto gratuito que expande o universo de A Escolhida das Sombras, disponível para leitura direta no Wattpad.",
    spineColor: "#B49AD1",
    cover: "assets/capas/cancao-que-afunda-o-sol.jpg",
    links: {
      wattpad: { label: "Ler grátis no Wattpad", url: "https://www.wattpad.com/story/406865630-a-can%C3%A7%C3%A3o-que-afunda-o-sol-conto-do-universo-de-a" }
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
      ebook: { label: "Comprar ebook", url: "https://www.amazon.com.br/dp/B0FHV4N9TQ" },
      fisico: { label: "Comprar versão física", url: "https://loja.uiclap.com/titulo/ua137328" }
    }
  },
  {
    title: "Era Uma Vez… A História Não Contada",
    series: "Antologia · Clímax Editorial",
    synopsis: "Vinte e seis autores revisitam contos de fadas clássicos pelo ponto de vista de quem sempre ficou fora do foco — criados, animais, testemunhas silenciosas. Fantasia sombria com terror simbólico e suspense. Larissa participa com um conto original.",
    spineColor: "#C9A227",
    cover: "assets/capas/era-uma-vez.jpg",
    links: {
      antologia: { label: "Comprar a antologia", url: "https://climaxeditorial.com.br/produto/era-uma-vez/" }
    }
  }
];

/* ========================================================= */
/* Contagem regressiva do próximo lançamento.                 */
/* Para trocar a data, edite RELEASE_DATE abaixo (mês é 0-11,  */
/* ou seja agosto = 7). Quando o título deixar de ser segredo, */
/* é só editar o texto direto no index.html (.teaser-title).   */
/* ========================================================= */
const RELEASE_DATE = new Date(2026, 7, 3); // 3 de agosto de 2026

function updateCountdown() {
  const el = document.getElementById("teaser-countdown");
  if (!el) return;

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const diffDays = Math.round((RELEASE_DATE - today) / (1000 * 60 * 60 * 24));

  if (diffDays > 1) {
    el.textContent = `Faltam ${diffDays} dias`;
  } else if (diffDays === 1) {
    el.textContent = "Falta 1 dia";
  } else if (diffDays === 0) {
    el.textContent = "É hoje.";
  } else {
    el.textContent = "Já disponível — confira na estante em breve.";
  }
}

updateCountdown();

/* ========================================================= */

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

function renderShelf() {
  BOOKS.forEach((book, i) => {
    const spine = document.createElement("div");
    spine.className = "spine";
    spine.style.background = book.spineColor;
    spine.setAttribute("role", "listitem");
    spine.setAttribute("tabindex", "0");
    spine.setAttribute("aria-label", `Abrir ${book.title}`);
    spine.dataset.index = i;

    if (book.startHere) {
      const badge = document.createElement("span");
      badge.className = "spine-badge spine-badge--start";
      badge.textContent = "Comece aqui";
      spine.appendChild(badge);
    } else if (book.bestseller) {
      const badge = document.createElement("span");
      badge.className = "spine-badge spine-badge--favorite";
      badge.textContent = "Favorito das leitoras";
      spine.appendChild(badge);
    }

    const label = document.createElement("span");
    label.className = "spine-label";
    label.textContent = book.title;
    spine.appendChild(label);

    spine.addEventListener("click", () => openBook(i));
    spine.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openBook(i);
      }
    });

    shelf.appendChild(spine);
  });
}

function openBook(i) {
  const book = BOOKS[i];

  document.querySelectorAll(".spine").forEach((el) => el.classList.remove("active"));
  document.querySelector(`.spine[data-index="${i}"]`).classList.add("active");

  detailCover.style.background = book.spineColor;
  detailCover.innerHTML = "";
  if (book.cover) {
    const img = document.createElement("img");
    img.src = book.cover;
    img.alt = `Capa de ${book.title}`;
    detailCover.appendChild(img);
  } else {
    detailCover.textContent = book.title;
  }
  detailSeries.textContent = book.series || "";
  detailTitle.textContent = book.title;
  detailSynopsis.textContent = book.synopsis;

  // Prova social — nota
  if (book.rating) {
    const fullStars = Math.round(book.rating);
    const stars = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
    const ratingLabel = book.rating.toFixed(1).replace(".", ",");
    detailRating.innerHTML = `<span class="stars">${stars}</span><span>${ratingLabel} · avaliações verificadas</span>`;
  } else {
    detailRating.innerHTML = "";
  }

  // Prova social — depoimento
  if (book.testimonial) {
    const cite = document.createElement("cite");
    cite.textContent = book.testimonial.author;
    detailTestimonial.innerHTML = `“${book.testimonial.quote}”`;
    detailTestimonial.appendChild(cite);
  } else {
    detailTestimonial.innerHTML = "";
  }

  detailActions.innerHTML = "";
  const linkKeys = Object.keys(book.links || {});
  if (linkKeys.length === 0) {
    const soon = document.createElement("p");
    soon.className = "form-note";
    soon.textContent = "Link em breve.";
    detailActions.appendChild(soon);
  } else {
    linkKeys.forEach((key, idx) => {
      const link = book.links[key];
      const a = document.createElement("a");
      a.className = idx === 0 ? "btn btn-primary" : "btn btn-secondary";
      a.href = link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = link.label;
      a.addEventListener("click", () => {
        if (typeof fbq !== "undefined") {
          fbq("trackCustom", "ClickComprarLivro", {
            content_name: book.title,
            tipo: key
          });
        }
      });
      detailActions.appendChild(a);
    });
  }

  // CTA fixo (mobile)
  if (stickyCta) {
    if (linkKeys.length > 0) {
      const firstLink = book.links[linkKeys[0]];
      stickyCtaTitle.textContent = book.title;
      stickyCtaLink.href = firstLink.url;
      stickyCtaLink.textContent = firstLink.label;
      stickyCta.hidden = false;
      document.body.classList.add("has-sticky-cta");
    } else {
      stickyCta.hidden = true;
      document.body.classList.remove("has-sticky-cta");
    }
  }

  detail.hidden = false;
  detail.scrollIntoView({ behavior: "smooth", block: "nearest" });

  if (typeof fbq !== "undefined") {
    fbq("track", "ViewContent", {
      content_name: book.title,
      content_category: book.series
    });
  }
}

detailClose.addEventListener("click", () => {
  detail.hidden = true;
  document.querySelectorAll(".spine").forEach((el) => el.classList.remove("active"));
  if (stickyCta) {
    stickyCta.hidden = true;
    document.body.classList.remove("has-sticky-cta");
  }
});

renderShelf();


const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojgqkkl";

const form = document.getElementById("newsletter-form");
const note = document.getElementById("form-note");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (FORMSPREE_ENDPOINT.includes("SEU_ID_AQUI")) {
    note.textContent = "Formulário ainda não configurado — veja o README para conectar ao Formspree.";
    return;
  }

  const email = form.email.value;
  note.textContent = "Enviando...";

  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    });

    if (response.ok) {
      note.textContent = "Inscrição recebida! Em breve você vai receber o capítulo bônus por e-mail.";
      form.reset();
      if (typeof fbq !== "undefined") {
        fbq("track", "Lead");
      }
    } else {
      note.textContent = "Não consegui enviar agora — tenta de novo em instantes.";
    }
  } catch (err) {
    note.textContent = "Não consegui enviar agora — verifica sua conexão e tenta de novo.";
  }
});

/* Footer year */
document.getElementById("year").textContent = new Date().getFullYear();
