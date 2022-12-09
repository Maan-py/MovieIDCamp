// API TMDB

const KEY_API = "api_key=c604bd5442f618f92440c09a4a6497fd";
const URL = "https://api.themoviedb.org/3";
const API = `${URL}/discover/movie?sort_by-popularity.desc&${KEY_API}`;
const IMG = "https://image.tmdb.org/t/p/w500";
const searchURL = `${URL}/search/movie?${KEY_API}`;

const main = document.querySelector("#main");
const form = document.querySelector(".form-element");
const search = document.querySelector("#search");

getMovies(API);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, poster_path, vote_average, overview, id } = movie;
    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");
    movieEl.innerHTML = `
        <img src="${IMG + poster_path}" alt="${title}" />
        <div class="movie-info">
          <h3>${title}</h3>
          <span class="green">${vote_average}</span>
        </div>
        <div class="overview">
          <h3>Deskripsi</h3>
          ${overview}
        </div>
        `;

    main.appendChild(movieEl);
  });
}

form.addEventListener("keyup", (e) => {
  e.preventDefault();

  const searchs = search.value;

  if (searchs) {
    getMovies(`${searchURL}&query=${searchs}`);
  }
});
