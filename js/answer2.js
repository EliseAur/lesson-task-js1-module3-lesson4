// ### Question 2

// Add headers to the below API call.
// You can choose whether to create a variable for the headers object seperately 
// from the call and pass the variable in as the second parameter, 
// or pass the headers object in directly.


const options = {
	headers: {
		'X-RapidAPI-Key': 'ecdbb36517msha295402bc6ca3f6p1a583ejsncf3c175d2dcf',
		'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
	}
};

const url = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

async function callUrbanDictionary() {
  const response = await fetch(url, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();