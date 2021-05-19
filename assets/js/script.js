
// you will also have to setup the referring domains on your marvel developer portal
var PRIV_KEY = "4b97df1af39ab4c6d73df529a9adbfb942641174";
var PUBLIC_KEY = "9af5297c6eb928f733af689d8998f07c";

function getMarvelResponse() {

  // you need a new ts every request                                                                                    
  var ts = new Date().getTime();
  console.log(ts);
  //var hash = CryptoJS.MD5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  var hash = "617b6f20906a2a75f0992bcab0f82ec8";

  // the api deals a lot in ids rather than just the strings you want to use
  var characterId = '1009718'; // wolverine                                                                             


  var url = 'http://gateway.marvel.com:80/v1/public/comics';

  console.log(url);
  $.getJSON(url, {
    ts: ts,
    apikey: PUBLIC_KEY,
    hash: hash,
    characters: characterId
    })
    .done(function(data) {
      // sort of a long dump you will need to sort through
      console.log(data);
    })
    .fail(function(err){
      // the error codes are listed on the dev site
      console.log(err);
    });
};

//getMarvelResponse();

document.getElementById("getinfo").onclick = getMarvelResponse;
