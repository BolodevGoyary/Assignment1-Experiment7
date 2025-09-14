const movies = [
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Titanic",
    "Avatar",
    "The Matrix",
    "Jurassic Park",
    "The Avengers",
    "Iron Man",
    "Forrest Gump"
  ]
  
  const searchInput = document.getElementById("search")
  const movieList = document.getElementById("movie-list")
  
  function displayMovies(items) {
    movieList.innerHTML = items.map(movie => `<li>${movie}</li>`).join("")
  }
  
  searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase()
    const filtered = movies.filter(movie => movie.toLowerCase().includes(query))
    displayMovies(filtered)
  })
  
  displayMovies(movies)