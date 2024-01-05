var url = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Comedy&startYear=2000&titleType=movie&year=2012&endYear=2023';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '345270be8dmshbe83add1aba092bp1d159ajsn7ef5dd509c26',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data.results[1].originalTitleText.text);
    for (var i = 0; i < data.length; i++){
        console.log('data');
    }
  }); 