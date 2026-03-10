import "./style.css";

const API_KEY = "4e2e08cb";

const searchInput = document.getElementById("search");
const resultContainer = document.getElementById("resultContainer");
const loading = document.getElementById("loading");
const error = document.getElementById("error");

searchInput.addEventListener("input", searchTypeHandler);

async function searchTypeHandler(event) {
  showHideError(false);
  showHideLoad(false);

  const value = (event.target.value || "").trim();
  if (!value) {
    resultContainer.innerHTML = "";
    return;
  }

  if (value.length < 3) {
    return;
  }

  await searchMovie(value);
}

function showMovies(movies) {
  let movieHTML = "";

  const movieSortYear = movies.toSorted(
    (a, b) => Number(a.Year) - Number(b.Year),
  );

  movieSortYear.forEach((movie) => {
    movieHTML += `
      <div class="movie-card">
        <img src="${movie.Poster}" alt="${movie.Title}">
        <div class="movie-info">
          <h3>${movie.Title}</h3>
          <p>${movie.Year}</p>
        </div>
      </div>
    `;
  });
  resultContainer.innerHTML = movieHTML;
}

async function searchMovie(query) {
  showHideLoad(true);
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`,
    );
    const movieData = await response.json();

    if (movieData.Response === "False") {
      throw new Error(movieData.Error);
    }

    showMovies(movieData.Search);
  } catch (err) {
    resultContainer.innerHTML = "";
    error.textContent = err.message;
    showHideError(true);
  } finally {
    showHideLoad(false);
  }
}

function showHideError(isShown) {
  error.classList.toggle("hidden", !isShown);
}

function showHideLoad(isShown) {
  loading.classList.toggle("hidden", !isShown);
}
