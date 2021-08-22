const text=document.getElementById("quote");
const author=document.getElementById("author");
const tweetButton=document.getElementById("tweet");

const getNewQuote = async () =>
{
    //api for quotes
    var url="https://type.fit/api/quotes";    

    // fetch the data from api
    const response=await fetch(url);
    console.log(typeof response);
    //convert response to json and store it in quotes array
    const allQuotes = await response.json();

    // Generates a random number between 0 and the length of the quotes array
    const indx = Math.floor(Math.random()*allQuotes.length);

    //Store the quote present at the randomly generated index
    const quote=allQuotes[indx].text;

    //Store the author of the respective quote
    const auth=allQuotes[indx].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    //function to dynamically display the quote and the author
    text.innerHTML=quote;
    author.innerHTML="~ "+auth;

    //tweet the quote
    tweetButton.href="https://twitter.com/intent/tweet?text="+quote+" ~ "+auth;
}
getNewQuote();







// grab a reference for necessary HTML elements
// .joke-text
const jokeText = document.querySelector('#joketext');
// .new-joke-btn 
const newJokeBtn = document.querySelector('#jokebtn');
// .tweet-btn (link)


// add 'click' eventListener to .new-joke-btn
newJokeBtn.addEventListener('click', getJoke);

// immediately call getJoke()
getJoke();

// getJoke() function definition
function getJoke() {
  // make an API request to https://icanhazdadjoke.com/'
  fetch('https://icanhazdadjoke.com/', {
    headers: {
      'Accept': 'application/json'
    }
  }).then(function(response) {
    /* convert Stringified JSON response to Javascript Object */
    return response.json();
  }).then(function(data) {
    /* replace innerText of .joke-text with data.joke */
    // extract the joke text
    const joke = data.joke;
    // do the replacement
    jokeText.innerText = joke;
  }).catch(function(error) {
    // if some error occured
    jokeText.innerText = 'Oops! Some error happened :(';
    // removes the old href from .tweet-btn if found any
    tweetBtn.removeAttribute('href');
    // console log the error
    console.log(error);
  });
}
getJoke();