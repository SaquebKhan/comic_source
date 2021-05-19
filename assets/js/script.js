
// var API_KEY = '10159111235406904'
// var userInput = 


// var requestUrl = 'https://superheroapi.com/api.php/' + API_KEY + '/search/' + userInput;


fetch('https://www.superheroapi.com/api.php/10159111235406904/search/ironman')
  .then(response => {
    return response.json();
  })
  .then(users => {
    console.log(users);
  });

  function myFunction() {
    var x = document.getElementById("myBtn");
    x.disabled = true;
  }