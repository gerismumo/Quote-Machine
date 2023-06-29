const quotes =[
    {
        id: 1,
        text: "Lorem ipsum dolor sit amet consectetur, adipiscing elit.",
        author: "Gerald"
      },
      {
        id: 2,
        text: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;",
        author: "Mumo"
      },
      {
        id: 3,
        text: "Nullam ac nisi sit amet libero consequat commodo sed id lacus.",
        author: "Michael"
      },
]
let currentQuoteIndex = Math.floor(Math.random() * quotes.length);

function displayQuote() {
  const currentQuote = quotes[currentQuoteIndex];
  $('#text').text(currentQuote.text);
  $('#author').text(currentQuote.author);
}

function toggleQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  displayQuote();
}

$(document).ready(function() {
  displayQuote();
  $('#new-quote').click(toggleQuote);
});












