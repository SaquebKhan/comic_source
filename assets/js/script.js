// Global variables
var searchInput = document.getElementById("search");
var API_KEY = '10159111235406904';
var API_KEY2 = 'f9297eb5';

// Launch Modal
$("#launch-modal").click(function () {
  $(".modal").addClass("is-active");
});
$(".modal-close").click(function () {
  $(".modal").removeClass("is-active");
});

// superheroapi call
function goToSearch() {

  var userSearch = searchInput.value;
  console.log(userSearch);

  var url = 'https://www.superheroapi.com/api.php/' + API_KEY + '/search/' + userSearch;
  var url2 = 'https://www.omdbapi.com/?t=' + userSearch + '&apikey=' + API_KEY2;
  console.log(url);
  console.log(url2);
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(heroes => {
      var heros = heroes.results[0]
      console.log(heroes);
      $('#search').val("");
      // $('#hero-list').empty();
      $('#hero-name').empty();
      $('#hero-publisher').empty();
      $('#hero-height').empty();
      $('#hero-weight').empty();
      $('#hero-combat').empty();
      $('#hero-intelligence').empty();
      $('#hero-durability').empty();
      $('#hero-power').empty();
      $('#hero-speed').empty();
      $('#hero-strength').empty();


      $('#hero-name').append(heros.name);
      $('#hero-publisher').append("Publisher: " + heros.biography.publisher);
      $('#hero-height').append("Height: " + heros.appearance.height[0]);
      $('#hero-weight').append("Weight: " + heros.appearance.weight[0]);
      $('#hero-combat').append("Combat: " + heros.powerstats.combat);
      $('#hero-durability').append("Durability: " + heros.powerstats.durability);
      $('#hero-intelligence').append("Intelligence: " + heros.powerstats.intelligence);
      $('#hero-power').append("Power: " + heros.powerstats.power);
      $('#hero-speed').append("Speed: " + heros.powerstats.speed);
      $('#hero-strength').append("Strength: " + heros.powerstats.strength);

      console.log(heros.image.url);
      $('#hero-img').attr("src", heros.image.url);
// save to local storage
      localStorage.setItem(JSON.stringify(heros), JSON.stringify(userSearch));
      getMovie(url2);
    });

}
// omdbapi call
function getMovie(url) {
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(function (movie) {
      console.log(movie)
      console.log(movie.Title);
      console.log(movie.Poster);
      $('#movie-name').empty();
      $('#movie-rated').empty();
      $('#movie-runtime').empty();
      $('#movie-year').empty();
      $('#movie-director').empty();
      $('#movie-imdb').empty();
      $('#movie-meta').empty();
      $('#movie-genre').empty();
      $('#movie-poster').empty();
      $('#movie-name').append("Movie Title: " + movie.Title);
      $('#movie-rated').append("Rated: " + movie.Rated);
      $('#movie-runtime').append("Runtime: " + movie.Runtime);
      $('#movie-year').append("Year: " + movie.Year);
      $('#movie-director').append("Director: " + movie.Director);
      $('#movie-imdb').append("IMDb Rating: " + movie.imdbRating);
      $('#movie-meta').append("Metascore: " + movie.Metascore);
      $('#movie-genre').append("Genre: " + movie.Genre);
      $('#movie-poster').attr("src", movie.Poster);

    })
    .catch(function (err) {
      console.log(err);
    })
}

