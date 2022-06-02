
//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "Girls are like mangoes. While you are waiting for them to ripen, others are eating them with salt..",
	source: "Pete Edochie"
	},
	{
	quote: "A wealthy man will always have followers",
	source: "Igbo proverb"
	},
	{
	quote: "The frowing of the He-goat in the market does not keep it  from getting priced",
	source: "Pete Edochie"
	},
	{
	quote: "The only person you should try to be better than is the person you were yesterday.",
	source: "Anonymous"
	},
	{
	quote: "Never be bullied into silence. Never allow yourself to be made a victim. Accept no one's definition of your life; define yourself.",
	source: "Harvey Fierstein"
	},
	{
	quote: "I am a glutton of tranquility.",
	source: "Wole Soyinka"
	},
	{
	quote: "Resentment is like drinking poison and then hoping it will kill your enemies.",
	source: "Nelson Mandela", 

	},
	{
	quote:  "Life's too mysterious to take too serious.",
	source: "Mary Engelbreit"
	},
	{
	quote: "No one can make you feel inferior without your consent.",
	source: "Eleanor Roosevelt"
	},
	{
	quote: "The woman who follows the crowd will usually go no further than the crowd. The woman who walks alone is likely to find herself in places no one has been before.",
	source: "Albert Einstein"
	},
	{
	quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
	source: "Terry Pratchett", 
	citation: "Witches Abroad",
	year: "1991" 
	},
	{
	quote: "There isn't a way things should be. There's just what happens, and what we do.",
	source: "Terry Pratchett", 
	citation: "A Hat Full of Sky" 
	},
	{
	quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
	source: "Rocky Balboa",
	citation: "Rocky",
	year: "1976"
	},
	{
	quote: "Water may cover the footprint on the ground but it does not cover the words of the mouth. (Igbo).",
	source: "Anonymous"
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	source: "African proverb"
	},
	{
	quote: "It's OK to not be OK, as long as you don't stay that way.",
	source: "Anonymous"
	},
	{
	quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
	source: "Maya Angelou"
	},
	{
	quote: "Believe you can and you're halfway there.",
	source: "T. Roosevelt"
	},
	{
	quote: "May I never be complete. May I never be content. May I never be perfect.",
	source: "Chuck Palahniuk"
	},
	{
	quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
	source: "Marie Curie"
	},
	{

	quote: "Those who don't believe in magic will never find it.",
	source: "Roald Dahl"
	},
	{
	quote: "There is no elevator to success  you have to take the stairs.",
	source: "Anonymous"
	},
	{
	quote: "Until the lions have their own historians, the history of the hunt will always glorify the hunter.",
	source: "Chinua Achebe"
	},
	{
	quote: "It does not do to dwell on dreams and forget to live.",
	source: "Albus Dumbledore", 
	citation: "Harry Potter and the Sorcerer's Stone",
	year: "1997"
	},
	{
	quote: "While we do our good works let us not forget that the real solution lies in a world in which charity will have become unnecessary. ",
	source: "Chinua Achebe",
	citation:"Anthills of the Savannah"
	},
	{
	quote: "Do what you feel in your heart to be right, for you'll be criticized anyway.",
	source: "Eleanor Roosevelt"
	},
	{
	quote: "Do not set yourself on fire in order to keep others warm.",
	source: "Anonymous"
	},
	{
	quote: "What an old man sees while lying down, a young man can never see even when he climbs up in a tree. (Yoruba).",
	source: "Yoruba proverb"
	},
	{
	quote: "It's supposed to be hard. If it were easy, everyone would do it.",
	source: "Jimmy Dugan",
	citation: "A League of Their Own"
	},
	{
	quote: "Ask yourself if what you're doing today will get you closer to where you want to be tomorrow.",
	source: "Anonymous"
	},
	{
	quote: "Life may not be the party we hoped for, but while we're here, we should dance.",
	source: "Anonymous"
	},
	{
	quote: "A bird that flies off the Earth and lands on an anthill is still on the ground.",
	source: "Igbo"
	},
	{
	quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
	source: "Ralph Waldo Emerson"
	},
	{
	quote: "One who has been bitten by a snake lives in fear of worms. [Once bitten, twice shy.] (Igbo).",
	source: "Anonymous"
	},
	{
	quote: "A roaring lion kills no game.",
	source: "Igbo"
	},
	{
	quote: "The white man is very clever.",
	source: "Chinua Achebe",
	},
	{
	quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
	source: "Aristotle"
	}
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);






	
