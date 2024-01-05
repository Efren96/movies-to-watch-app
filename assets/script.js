var url = 'https://moviesdatabase.p.rapidapi.com/titles?startYear=2000&titleType=movie&endYear=2022';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '345270be8dmshbe83add1aba092bp1d159ajsn7ef5dd509c26',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

var movieTitles = document.querySelector('.movie-cards');

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    for ( i = 0; i < data.results.length; i++) {
      console.log(data.results[i].originalTitleText.text);
      console.log(data.results[i].primaryImage.url);
      var movieEl = document.createElement('p');
      movieEl.textContent = data.results[i].originalTitleText.text;
      movieTitles.appendChild(movieEl);
      var imageEl = document.createElement('i');
      movieEl.className = 'card';
      imageEl.setAttribute('href', data.results[i].primaryImage.url);
      imageEl.className = 'card img';
      movieEl.appendChild(imageEl);
    }
  });

