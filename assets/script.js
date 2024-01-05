var url = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Comedy&startYear=2000&titleType=movie&endYear=2023';
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

fetch(quoteUrl, quoteOptions)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    //var movieQuote = document.querySelector('.quote');
    //console.log()
    // for ( i = 0; i < data.results.length; i++) {
    //   console.log(data.results[i].originalTitleText.text);
  
    // }
  });


// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }


var movitTitles = document.querySelector('#movie-cards');

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    for ( i = 0; i < data.results.length; i++) {
      console.log(data.results[i].originalTitleText.text);
  
    }
  });
