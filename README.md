# movies-to-watch-app

## Description

This application was designed for movie-goers to have a space to save a list of their top five movies that they would like to watch. The user has the freedom to select from over 9,000 available movies being fetched from the movie data API.

If the user is having a hard time selecting a movie, or simply wants to be inspired, they can simply click on the button labeled "Generate A Movie Quote." Clicking this button will then display a randomly selected quote from our movie quote API. Once a quote has been generated, a second button appears labeled "Tweet Quote." Clicking the tweet button will open a seperate window bringing them to their Twitter account with the movie quote ready to post. 

The application begins with starting list of movies fetched from our API. Each of these movies being fetched, creates a card showing the movie poster with a title overlay, and an add button. 

After the user searches up the title, the starting list will be replaced with the results of the search query. Once the user decides on a movie to add to their watch list, they can then click on the add button. Clicking the add button will then move the movie-card from the search results list to the watch list.
Once the movies are listed in the playlist, the movie-card will then have a remove button to simply remove it from the playlist. 

The user’s data will be saved to their local storage. So as a user leaves and comes back to the app, their watchlist will remain how they left it. 

We faced many challenges given the freedom of creativity. The first challenge was properly pulling the required data from our APIs. After using console log, we were finally able to decipher the correct paths for each piece of data needed. 

The second challenge was making our application function in the way that we wanted it to. We first created a separate function for the quote API. The fetched quote is then appended to the proper query selector in our HTML. Given the limited requests we are allowed for using this free API, we wanted the function to fetch only once the API was triggered by an event. This is why we added a generate quote button. 

We then created another function fetching from the Movie Data API. Within this function, after data was fetched, we then created elements and class lists which are then appended to the respective UL element within our HTML. 

The third challenge we discovered was creating an eventlistener on the add buttons which should then move the movie cards to the "Movies To Watch" list. This is currently the challenge we have yet to overcome.


## Screenshot of App: Movie Go+

![image](./assets/images/Screenshot%20(281).png)