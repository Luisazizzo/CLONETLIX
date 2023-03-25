import moviesFile from "./movies.js";

const heroSection = document.querySelector(".hero");
const hamburger = document.querySelector(".hamburger");
const tendina = document.querySelector(".tendina");

hamburger.addEventListener("click", () => {
  tendina.classList.toggle("show");
});

const heroGenerator = (index) => {
  heroSection.innerHTML = `
        <div class="movieInfo">
        <h1>${moviesFile[index].title}</h1>
        <p>${
          moviesFile[index].overview.length > 200
            ? moviesFile[index].overview.slice(0, 200) + "..."
            : moviesFile[index].overview
        }</p>
        <div class="buttons">
            <button class="butt1">Riproduci</button>
            <button class="butt2">Altre info</button>
        </div>
        </div>
        <img src="${moviesFile[index].backdrop_path}" alt="#">
  `;
};

let indiceHero = 0;
heroGenerator(indiceHero);

setInterval(() => {
  if (indiceHero >= moviesFile.length - 1) {
    indiceHero = 0;
  } else {
    indiceHero++;
  }
  heroGenerator(indiceHero);
}, 5000);

const cardCreator = (elemento, appendDiv) => {
  const div = document.createElement("div");
  div.className = "card";
  appendDiv.appendChild(div);

  const img = document.createElement("img");
  img.setAttribute(
    "src",
    "https://image.tmdb.org/t/p/w1280/" + elemento.backdrop_path
  );
  img.setAttribute("alt", elemento.overview);
  div.appendChild(img);

  const contenitore = document.createElement("div");
  contenitore.className = "description";
  div.appendChild(contenitore);

  const divIcone = document.createElement("div");
  divIcone.className = "icone";
  contenitore.appendChild(divIcone);

  const pPlay = document.createElement("p");
  pPlay.textContent = "▶";
  pPlay.className = "play";
  divIcone.appendChild(pPlay);

  const pPiu = document.createElement("p");
  pPiu.textContent = "+";
  pPiu.className = "piu";
  divIcone.appendChild(pPiu);

  const pSimbolo = document.createElement("p");
  pSimbolo.className = "simbolo";
  divIcone.appendChild(pSimbolo);

  const h3 = document.createElement("h3");
  h3.textContent = elemento.title;
  contenitore.appendChild(h3);
};

const mostViewed = document.querySelector("#mostViewed");
const forYou = document.querySelector("#forYou");
const added = document.querySelector("#added");

fetch(
  "https://api.themoviedb.org/3/movie/popular?api_key=d81b4c0951683c467d7125a553aefc87&language=it-IT&page=1"
)
  .then((res) => res.json())
  .then((data) => popolari(data.results));

fetch(
  "https://api.themoviedb.org/3/movie/top_rated?api_key=d81b4c0951683c467d7125a553aefc87&language=it-IT&page=1"
)
  .then((res) => res.json())
  .then((data) => top(data.results));

fetch(
  "https://api.themoviedb.org/3/movie/now_playing?api_key=d81b4c0951683c467d7125a553aefc87&language=it-IT&page=2"
)
  .then((res) => res.json())
  .then((data) => ultimi(data.results));

const popolari = (movies) => {
  movies.forEach((elemento) => {
    elemento.backdrop_path && cardCreator(elemento, mostViewed);
  });
};

const top = (movies) => {
  movies.forEach((elemento) => {
    elemento.backdrop_path && cardCreator(elemento, forYou);
  });
};

const ultimi = (movies) => {
  movies.forEach((elemento) => {
    elemento.backdrop_path && cardCreator(elemento, added);
  });
};

const mostViewedBack = document.querySelector("#mostViewedBack");
const mostViewedForw = document.querySelector("#mostViewedForw");

let mostViewedScroll = 0;

mostViewedForw.addEventListener("click", () => {
  mostViewedScroll += 400;
  mostViewed.scroll({
    top: 0,
    left: mostViewedScroll,
    behavior: "smooth",
  });
  if (mostViewedScroll > 0) {
    mostViewedBack.classList.remove("disabled");
  }
});

mostViewedBack.addEventListener("click", () => {
  if (mostViewedScroll > 0) {
    mostViewedScroll -= 400;
  }
  mostViewed.scroll({
    top: 0,
    left: mostViewedScroll,
    behavior: "smooth",
  });
  if (mostViewedScroll === 0) {
    mostViewedBack.classList.add("disabled");
  }
});

const mostViewedBackTwo = document.querySelector("#mostViewedBackTwo");
const mostViewedForwTwo = document.querySelector("#mostViewedForwTwo");

let forYouScroll = 0;

mostViewedForwTwo.addEventListener("click", () => {
  forYouScroll += 400;
  forYou.scroll({
    top: 0,
    left: forYouScroll,
    behavior: "smooth",
  });
  if (forYouScroll > 0) {
    mostViewedBackTwo.classList.remove("disabled");
  }
});

mostViewedBackTwo.addEventListener("click", () => {
  if (forYouScroll > 0) {
    forYouScroll -= 400;
  }
  forYou.scroll({
    top: 0,
    left: forYouScroll,
    behavior: "smooth",
  });
  if (forYouScroll === 0) {
    mostViewedBackTwo.classList.add("disabled");
  }
});

const mostViewedBackThree = document.querySelector("#mostViewedBackThree");
const mostViewedForwThree = document.querySelector("#mostViewedForwThree");

let addedScroll = 0;

mostViewedForwThree.addEventListener("click", () => {
  addedScroll += 400;
  added.scroll({
    top: 0,
    left: addedScroll,
    behavior: "smooth",
  });
  if (addedScroll > 0) {
    mostViewedBackThree.classList.remove("disabled");
  }
});
mostViewedBackThree.addEventListener("click", () => {
  if (addedScroll > 0) {
    addedScroll -= 400;
  }
  added.scroll({
    top: 0,
    left: addedScroll,
    behavior: "smooth",
  });
  if (addedScroll === 0) {
    mostViewedBackThree.classList.add("disabled");
  }
});
