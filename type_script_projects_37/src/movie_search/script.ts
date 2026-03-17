const API_KEY: string = "4e2e08cb";

const searchInput = document.getElementById("search") as HTMLInputElement;
const resultContainer = document.getElementById(
  "resultContainer",
) as HTMLElement;
const loading = document.getElementById("loading") as HTMLElement;
const error = document.getElementById("error") as HTMLElement;

searchInput.addEventListener("input", searchTypeHandler);

async function searchTypeHandler(event: Event): Promise<void> {
  showHideError(false);
  showHideLoad(false);

  const value: string = ((event.target as HTMLInputElement).value || "").trim();

  if (!value) {
    resultContainer.innerHTML = "";
    return;
  }

  if (value.length < 3) {
    return;
  }

  await searchMovie(value);
}

interface Movie {
  Title: string;
  Year: string;
  Poster: string;
}

interface MovieResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

function showMovies(movies: Movie[]): void {
  let movieHTML: string = "";

  const movieSortYear: Movie[] = movies.toSorted(
    (a, b) => Number(a.Year) - Number(b.Year),
  );

  movieSortYear.forEach((movie: Movie) => {
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

async function searchMovie(query: string): Promise<void> {
  showHideLoad(true);
  try {
    const response: Response = await fetch(
      `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`,
    );
    const movieData: MovieResponse = await response.json();

    if (movieData.Response === "False") {
      throw new Error(movieData.Error);
    }

    showMovies(movieData.Search);
  } catch (err) {
    resultContainer.innerHTML = "";
    error.textContent = (err as Error).message;
    showHideError(true);
  } finally {
    showHideLoad(false);
  }
}

function showHideError(isShown: boolean): void {
  error.classList.toggle("hidden", !isShown);
}

function showHideLoad(isShown: boolean): void {
  loading.classList.toggle("hidden", !isShown);
}
