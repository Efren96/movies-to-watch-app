var url = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Comedy&year=2023';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '345270be8dmshbe83add1aba092bp1d159ajsn7ef5dd509c26',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

const quoteUrl = 'https://movie-and-tv-shows-quotes.p.rapidapi.com/quotes/random/quote';
const quoteOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '5050b76713msha0b49ef0e4db710p1491b7jsn6853b8bf6c66',
		'X-RapidAPI-Host': 'movie-and-tv-shows-quotes.p.rapidapi.com'
	}
};

 //declare variables for quote API
var quoteInput = document.querySelector('#message');
var titleInput = document.querySelector('#title');
var quoteBtn = document.querySelector('#getMessage');
var tweetBtn = document.querySelector('#tweet');

 
  //tweet current quote and film
  var twitter = function() {
    var quoteStr = quoteInput.textContent;
    var titleStr = titleInput.textContent;
    window.open("https://twitter.com/compose/tweet?text= " + quoteStr + " - " + titleStr);
    
  };

  /*function to obtain a random quote and display in html*/
  //var randomQuote = 
  function fetchdata(){
  fetch(quoteUrl, quoteOptions)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    var quoteEl = document.createElement('h3'); //creates element
    
    quoteEl.textContent = data.quote; //pulls quote from API into h3 element

    titleInput.textContent = data.quoteFrom; //pulls movie title from API

    quoteInput.appendChild(quoteEl) //appends the h3 element to message id

  })
  
  .then (function addbtn(){
  document.getElementById("tweet").style.display = 'block';
  return false;
  }
  )};

  //Event listeners
  tweetBtn.addEventListener('click', twitter);
  quoteBtn.addEventListener('click', fetchdata);

var movieTitles = document.querySelector('.movie-cards');


fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    for ( i = 0; i < data.results.length; i++) {
      if (data.results[i].primaryImage !== null) {
      console.log(data.results[i].originalTitleText.text);
      console.log(data.results[i].primaryImage.url);
      var movieEl = document.createElement('p');
      movieEl.textContent = data.results[i].originalTitleText.text;
      movieTitles.appendChild(movieEl);
      var imageEl = document.createElement('img');
      movieEl.className = 'card';
      imageEl.setAttribute('src', data.results[i].primaryImage.url);
      imageEl.className = 'card';
      movieEl.appendChild(imageEl);
      var addBtn = document.createElement('button');
      movieEl.appendChild(addBtn);
      addBtn.textContent = "Add+";
      addBtn.className = "add-button"
      } else if (data.results[i].primaryImage == null) {
      movieEl = document.createElement('p');
      movieEl.textContent = data.results[i].originalTitleText.text;
      movieTitles.appendChild(movieEl);
      imageEl = document.createElement('img');
      movieEl.className = 'card';
      imageEl.className = 'card';
      movieEl.appendChild(imageEl);
      imageEl.setAttribute('src', './assets/images/large_movie_poster.png');
      addBtn = document.createElement('button');
      movieEl.appendChild(addBtn);
      addBtn.textContent = "Add+";
      addBtn.className = "add-button"
      }
      
    }
  });
