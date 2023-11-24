# Assignment 1 - ReactJS app.

Name: Lucía Gutiérrez Molina

## Overview.

This repository contains a web application about movies in which the user can see the latest releases, the popular, the best rated and the now-playing movies, see their cast, add them to favorites or to their watch list and create reviews.

### Features.
 
+ Top rated movies page
+ Popular movies page
+ Now playing movies page
+ Movie recommendations for each movie (inside movie details)
+ Movie cast of each movie
+ Actor details with links to movies they participate
+ Must watch page
+ Filter movies by rate
+ Sorting movies
+ Authentication with firebase
+ Pagination

## Setup requirements.

In order to run the application a node.js version must be installed in the computer.
Then you should run the following commands in the movies folder:
1. npm i -g react-scripts
2. npm install --save react react-dom @types/react @types/react-dom
Create a .env file inside the movies folder and include these lines:
REACT_APP_TMDB_KEY=... your API key value ...
FAST_REFRESH=false
Where "... your API key value ..." is the value of your api key

## API endpoints.

+ List of upcoming movies - movie/upcoming
+ List of top rated movies - movie/top_rated
+ List of popular movies - movie/popular
+ List of now playing movies - movie/now_playing
+ Movie details - movie/:id
+ Actor details - person/:id
+ Movie genres = /genre/movie/list
+ Movie images = /movie/:id/images
+ Actor images = /person/:id/images
+ Movie reviews = /movie/:id/reviews
+ Movie recommendations = /movie/:id/recommendations
+ Movie cast = /movie/:id/credits
+ Actor movies = /person/:id/movie_credits

## Routing.

[ List the __new routes__ supported by your app and state the associated page.]

+ /signup - Allows the user to sign up.
+ /login - Allows the user to log in.
+ /reviews/form - Allows the user to write a review.
+ /movies/favorites - List of movies marked as favorites.
+ /movies/mustWatch - List of movies marked as must watch.
+ /movies/upcoming - List of upcoming movies.
+ /movies/top-rated - List of best rated movies.
+ /movies/popular - List of popular movies.
+ /movies/now-playing - List of movies that are played now.
+ /reviews/:id - Detail view of a review.
+ /movies/:id - Detail view of a movie.
+ /actors/:id - Detail view of an actor.
+ /home - List of movies.

[If relevant, state what aspects of your app are protected (i.e. require authentication) and what is public.]

## Independent learning (If relevant).

Authentication with firebase - https://firebase.google.com/
Pagination - https://mui.com/material-ui/react-pagination/
