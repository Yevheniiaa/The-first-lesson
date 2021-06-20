
"use strict";

 let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How many movies have you already seen?", "0");

    while (numberOfFilms == null || numberOfFilms == "" || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("How many movies have you already seen?", "0");
    }
}

start();

 const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt("What's the last movie you watched?", "");  
        const b = prompt("How do you score this movie?", "");
        
        
        if (a == null || b == null || a.length > 50 || a == "" || b == "") {
            i--;
            console.log("error");
        } else {
            personalMovieDB.movies[a] = b;   
            console.log("done");
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (numberOfFilms < 10) {
            console.log("You have seen quite a few movies!");
        } else if (numberOfFilms <= 30 && numberOfFilms >= 10) {
            console.log("You are a classical viewer!"); 
        } else if (numberOfFilms > 30) {
            console.log("You a real movie fan");
        } else {
            console.log("Error");
    }
}

detectPersonalLevel();

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

/*
function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);
*/


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        let question = prompt(`Your favourite genre is under number ${i}`, "");
       
        if ( question != null || question != "" ) {
            personalMovieDB.genres.push(question);     
        //personalMovieDB.genres[i - 1] = question;
        } else {
            i--;
        }
    } 
}

writeYourGenres();


function beStrong(lang, callback) {
    console.log(`I'm learning English and ${lang}.`);
    callback();
}

function done() {
    console.log("Good for you!");
}

beStrong("JavaScript", done);

/*
beStrong("JavaScript", function done() {
  console.log("Good for you!");  
});
*/











/*let i = 0;
while (i < 2) {
    i++;
    const a = prompt("What's the last movie you watched?", "");  
    const b = prompt("How do you score this movie?", "");
        
    if (a == null || b == null || a.length > 50 || a == "" || b == "") {
        i--;
        console.log("error");
    } else {
        personalMovieDB.movies[a] = b;   
        console.log("done");
    }
}
console.log(personalMovieDB);
   
let i = 0;
do {
    i++;
    const a = prompt("What's the last movie you watched?", "");  
    const b = prompt("How do you score this movie?", "");
    
    if (a == null || b == null || a.length > 50 || a == "" || b == "") {
        i--;
        console.log("error");
    } else {
        personalMovieDB.movies[a] = b;   
        console.log("done");
    }
    
} while (i < 2);
console.log(personalMovieDB);





for (let i = 0; i < 40; i++) {
    if (i == 35) {
           break;
    }
    console.log(i);
}
*/

// let sentence = "Exercisesin English, Grammar";
// console.log(sentence.substr(3,5));