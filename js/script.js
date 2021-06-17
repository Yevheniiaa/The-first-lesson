
"use strict";

 const numberOfFiles = +prompt("How many movies have you already seen?", "0");
 const personalMovieDB = {
    count: numberOfFiles,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

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

console.log(personalMovieDB);

if (numberOfFiles < 10) {
        console.log("You have seen quite a few movies!");
    } else if (numberOfFiles <= 30 && numberOfFiles >= 10) {
        console.log("You are a classical viewer!"); 
    } else if (numberOfFiles > 30) {
        console.log("You a real movie fan");
    } else {
        console.log("Error");
}
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