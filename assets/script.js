
// declare variables for movie API home page
var url = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Action&year=2023&titleType=movie';
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
    quoteInput.textContent = "";
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

// fetch request for home page slides
fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    for ( i = 0; i < data.results.length; i++) {
      // if statement for the objects in array with null image
      if (data.results[i].primaryImage !== null) {
      console.log(data.results[i].originalTitleText.text);
      console.log(data.results[i].primaryImage.url);
      var movieEl = document.createElement('p');
      movieEl.textContent = data.results[i].originalTitleText.text;
      movieTitles.appendChild(movieEl);
      var imageEl = document.createElement('img');
      movieEl.className = 'card';
      imageEl.setAttribute('src', data.results[i].primaryImage.url);
      imageEl.className = 'card-img';
      movieEl.appendChild(imageEl);
      var addBtn = document.createElement('button');
      movieEl.appendChild(addBtn);
      addBtn.textContent = "add+";
      addBtn.className = "add-button";
      } else if (data.results[i].primaryImage == null) {
      movieEl = document.createElement('p');
      movieEl.textContent = data.results[i].originalTitleText.text;
      movieTitles.appendChild(movieEl);
      imageEl = document.createElement('img');
      movieEl.className = 'card';
      imageEl.className = 'card-img';
      movieEl.appendChild(imageEl);
      imageEl.setAttribute('src', './assets/images/large_movie_poster.png');
      addBtn = document.createElement('button');
      movieEl.appendChild(addBtn);
      addBtn.textContent = "Add+";
      addBtn.className = "add-button";
      }
      var addBtn = document.querySelector('.add-button');

      addBtn.addEventListener("click", function(event){
        event.preventDefault();
        imageEl = data.results[1].primaryImage.url
        movieEl = data.results[1].originalTitleText.text
        var movieList = {
          movieCard: movieEl,
          imagePoster: imageEl
        };
        localStorage.setItem('movieList', JSON.stringify(movieList));

        var moviesToWatch = document.querySelector('.movie-list');

        movieEl.textContent = data.results[1].originalTitleText.text;
        moviesToWatch.appendChild(movieEl);
        movieEl.className = 'card';
        imageEl.setAttribute('src', data.results[1].primaryImage.url);
        imageEl.className = 'card-img';
        movieEl.appendChild(imageEl);
      });
    }
  });

// variables and link for search button
var urlSearch = 'https://moviesdatabase.p.rapidapi.com/titles/search/title/';
var optionsSearch = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '345270be8dmshbe83add1aba092bp1d159ajsn7ef5dd509c26',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

// state variables for input data and button
var titleInput = document.querySelector('.search-input');
var searchBtn = document.querySelector('.search-button');
// event listener for when you hit search button
searchBtn.addEventListener("click", function(event) {
  event.preventDefault();
  // fetch request with info from search
  fetch(urlSearch + titleInput.value, optionsSearch)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    // this is to clear the screen of previous card elements
    movieTitles.textContent = "";
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
      imageEl.className = 'card-img';
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
      imageEl.className = 'card-img';
      movieEl.appendChild(imageEl);
      imageEl.setAttribute('src', './assets/images/large_movie_poster.png');
      addBtn = document.createElement('button');
      movieEl.appendChild(addBtn);
      addBtn.textContent = "Add+";
      addBtn.className = "add-button"
      }
    }
  })

});

