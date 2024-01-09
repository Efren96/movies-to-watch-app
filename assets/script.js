var url = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Comedy&year=2023';
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
        imageEl.setAttribute('src', './assets/images/large_movie_poster.png');
      }
      
    }
  });
