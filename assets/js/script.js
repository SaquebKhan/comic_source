var searchInput = document.getElementById("search")
var API_KEY = '10159111235406904'
// var userInput = 


// var requestUrl = 'https://superheroapi.com/api.php/' + API_KEY + '/search/' + userInput;



function goToSearch() {

  var userSearch = searchInput.value;
  console.log(userSearch);
  var url = 'https://www.superheroapi.com/api.php/' + API_KEY + '/search/' + userSearch;
  console.log(url);
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then(heroes => {
      var heros = heroes.results[0]
      console.log(heroes);
      $('#hero-name').append(heros.name);
      $('#hero-combat').append("Combat: " + heros.powerstats.combat);
      $('#hero-durability').append("Durability: " + heros.powerstats.durability);
      $('#hero-intelligence').append("Intelligence: " + heros.powerstats.intelligence);
      $('#hero-power').append("Power: " + heros.powerstats.power);
      $('#hero-speed').append("Speed: " + heros.powerstats.speed);
      $('#hero-strength').append("Strength: " + heros.powerstats.strength);
      
      
      console.log(heros.image.url);
      $('#hero-img').attr("src", heros.image.url)
      
    });
  
}
