const movies = [
  { title: "The Matrix", year: 1999, rating: 10, watched: 7},
  { title: "Wall-E", year: 2008, rating: 0, watched: 21},
  { title: "Pan's Labyrinth", year: 2006, rating: 10, watched: 5},
  { title: "Ghost in the Shell", year: 1995, rating: 10, watched: 5},
  { title: "Moonlight", year: 2016, rating: 10, watched: 2}
];

function displayMovies() {
  const output = document.getElementById("output");
  const moviesTable = document.getElementById("movies-data");
  moviesTable.innerHTML = "";
  output.innerHTML = "";
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  const headers = ["Title", "Year", "Rating", "Watched"];
  headers.forEach(header => {
    const th = document.createElement("th");
    th.textContent = header;
    headerRow.appendChild(th);
  })
  thead.appendChild(headerRow);
  table.appendChild(thead);
  const tbody = document.createElement("tbody");
  movies.forEach(movie => {
    const tr = document.createElement("tr");
    const tdTitle = document.createElement("td");
    const tdYear = document.createElement("td");
    const tdRating = document.createElement("td");
    const tdWatched = document.createElement("td");
    tdTitle.textContent = movie.title;
    tdYear.textContent = movie.year;
    tdRating.textContent = `${movie.rating}/10`;
    tdWatched.textContent = movie.watched;
    tr.appendChild(tdTitle);
    tr.appendChild(tdYear);
    tr.appendChild(tdRating);
    tr.appendChild(tdWatched);
    tbody.appendChild(tr);
  });
  table.appendChild(tbody);
  moviesTable.appendChild(table);
}

displayMovies();