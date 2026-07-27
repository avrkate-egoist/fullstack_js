const apiUrl = "http://localhost:3000/movies";
let currentPage = 1;
let perPage = 10;
let totalPages = 1;
let totalCount = 0;

const moviesDiv = document.getElementById("movies");
const pageInfo = document.getElementById("pageInfo");
const rangeInfo = document.getElementById("rangeInfo");
const perPageInput = document.getElementById("perPageInput");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

async function fetchData() {
  try {
    const response = await fetch(
      `${apiUrl}?page=${currentPage}&perPage=${perPage}`,
    );
    const result = await response.json();
    console.log(result);
    totalCount = result.totalCount;
    totalPages = Math.ceil(totalCount / perPage);

    const start = (currentPage - 1) * perPage + 1;
    const end = Math.min(start + perPage - 1, totalCount);

    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
    rangeInfo.textContent = `Documents ${start}–${end} of ${totalCount}`;

    renderMovies(result.data);
    updateButtons();
  } catch (error) {
    moviesDiv.innerHTML = '<div style="color: red;">Failed to load data</div>';
  }
}

function renderMovies(movies) {
  moviesDiv.innerHTML = "";
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.className = "movie";
    div.textContent = JSON.stringify(movie, null, 2);
    moviesDiv.appendChild(div);
  });
}

function updateButtons() {
  prevBtn.disabled = currentPage === 1;
  nextBtn.disabled = currentPage === totalPages;
}

perPageInput.addEventListener("change", () => {
  perPage = parseInt(perPageInput.value) || 10;
  currentPage = 1;
  fetchData();
});

prevBtn.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchData();
  }
});

nextBtn.addEventListener("click", () => {
  if (currentPage < totalPages) {
    currentPage++;
    fetchData();
  }
});

fetchData();
