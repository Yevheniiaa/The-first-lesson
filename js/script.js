
"use strict";

const numberOfFiles = +prompt("How many movies have you already seen?", "0");
const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


const a = prompt("What's the last movie you watched?", "");  
const b = prompt("How do you score this movie?", "");
const c = prompt("What's the last movie you watched?", "");  
const d = prompt("How do you score this movie?", "");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
