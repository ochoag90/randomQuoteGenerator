// First found a function that will pick a random number from 0->5 zero being inclusive.
// This means that the first index inside the object, containing the function will also be chosen.
// Found this function on this site -> https://www.w3schools.com/js/js_random.asp
// Checked to see if the an object is passed @ random and it works.

function getRandomQuote()
  {
    let min = Math.ceil(0); //sets the minimum value
    let max = Math.floor(4);  //sets the upper value
    var randomNumber = Math.floor(Math.random() * (max - 0 + 1)) + min; //includes the numbers[0,1,2,3,4]
    return quotes[randomNumber];  //returns the quote that corresponds to that index in the object
  }

// print function similar to what we have been using in the course
function printQuote(message)
      {
    var quoteToPage = getRandomQuote(); //sets quoteToPage eual to the getRandomQuote function and stores that indexed value of the object
    randomColor(); //calls the function randomColor below, which changes the background color and prints out a new quote

    //assembly of the quote and the tags, I added two extra tags.
    //Country of origin of the author of the quote, and a cool fact about the author from wiki.
    var message = '<p class = "quote"> ' + quoteToPage.quote + ' </p>';
        message += '<p class = "source"> ' + quoteToPage.author;
        if(quoteToPage.citation) {
          message += '<span class="citation"> ' + quoteToPage.citation + '</span>';
        }
        if(quoteToPage.year) {
          message += '<span class="year"> ' + quoteToPage.year + '</span>';
        }
        if(quoteToPage.country) {
          message += '<span class="country"> ' + quoteToPage.country + '</span>';
        }
        if(quoteToPage.wiki) {
          message += '<span class="wiki"> ' + quoteToPage.wiki + '</span>';
        }
        message += '</p>';

        var div = document.getElementById('quote-box');   // Where the message is sent to within the html file/structures the page.
          div.innerHTML = message;

        return message; // returns the message each time the print quote is called.
      }

  //This function cycles through the colors that I have chosen. It chooses a random number and populates the backgroynd color to the css page.
  function randomColor() {
    var colors = ['Blue', 'Black', 'Green', 'LightBlue', 'LightSteelBlue', 'Violet', 'MediumVioletRed', 'SaddleBrown', 'Chocolate'];
    var index = Math.floor(Math.random() * colors.length);
    var selectedColor = colors[index];
    // set random background color & call function in the printQuote function.
    document.body.style.backgroundColor = selectedColor; //formats the css file styles.css
  }
  //this function was taken from the mozilla link provided, calls the function myCallback every 10 seconds
  var intervalID = window.setInterval(printQuote, 10000);

  /*function myCallback is called, that function calls the printQuote function which in turns calls the randomColor function and populates
  the css and message to the page.

  function myCallback() {
  printQuote();  // Your code here
  }
  */

  printQuote(); //starts the page on initial load


//This function is called when the user clicks on the button.

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
