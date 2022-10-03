// JavaScript 1 - Module 3
// Lesson Task 4 Questions

// Question 1

// Using the `CORS_URL` variable below, 
// convert the API call inside the `getElephants` function 
// to use the cors-anywhere link, such that the API call will succeed.


const CORS_URL = "https://noroffcors.herokuapp.com/";

const API_URL = "https://elephant-api.herokuapp.com/elephants";

corsFix = CORS_URL + API_URL;

async function getElephants() {
  const response = await fetch(corsFix);
  const results = await response.json();
  console.log(results);
}

getElephants();