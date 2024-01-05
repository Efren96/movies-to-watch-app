var url = 'https://moviesdatabase.p.rapidapi.com/titles?genre=Comedy&startYear=2000&titleType=movie&endYear=2023';
var options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '345270be8dmshbe83add1aba092bp1d159ajsn7ef5dd509c26',
		'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
	}
};



var card1 = document.querySelector('#cardImg-1');
var card2 = document.querySelector('#cardImg-2');
var card3 = document.querySelector('#cardImg-3');
var card4 = document.querySelector('#cardImg-4');
var card5 = document.querySelector('#cardImg-5');
var card6 = document.querySelector('#cardImg-6');
var card7 = document.querySelector('#cardImg-7');
var card8 = document.querySelector('#cardImg-8');
var card9 = document.querySelector('#cardImg-9');
var card10 = document.querySelector('#cardImg-10');

fetch(url, options)
  .then(function (response) {
    return response.json();
  })
  .then(data => {
    console.log(data);
    for ( i = 0; i < data.results.length; i++) {
      console.log(data.results[i].originalTitleText.text);
      card1.textContent = data.results[0].originalTitlegiText.text;
      card2.textContent = data.results[1].originalTitleText.text;
      card3.textContent = data.results[2].originalTitleText.text;
      card4.textContent = data.results[3].originalTitleText.text;
      card5.textContent = data.results[4].originalTitleText.text;
      card6.textContent = data.results[5].originalTitleText.text;
      card7.textContent = data.results[6].originalTitleText.text;
      card8.textContent = data.results[7].originalTitleText.text;
      card9.textContent = data.results[8].originalTitleText.text;
      card10.textContent = data.results[9].originalTitleText.text;
    }
  });