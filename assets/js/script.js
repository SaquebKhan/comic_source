var searchInput = document.getElementById("search")
var API_KEY = '10159111235406904'
// var userInput = 


// var requestUrl = 'https://superheroapi.com/api.php/' + API_KEY + '/search/' + userInput;




/* function myFunction() {
   var x = document.getElementById("myBtn");
   x.disabled = true;
 }
 */

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
      console.log(heroes);
    });
  //   window.location.href= 'https://www.superheroapi.com/' + encodeURI(document.getElementById("tag_search").value)
}