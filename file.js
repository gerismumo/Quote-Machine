document.addEventListener('DOMContentLoaded', function() {
    const quotes = [
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
    ];
  
    const textElement = document.getElementById('text');
    const authorElement = document.getElementById('author');
    const newQuoteButton = document.getElementById('new-quote');
  
    let currentQuoteIndex = 0;
  
    function displayQuote() {
      const currentQuote = quotes[currentQuoteIndex];
      textElement.textContent = currentQuote.text;
      authorElement.textContent = currentQuote.author;
    }
  
    function generateRandomQuoteIndex() {
      return Math.floor(Math.random() * quotes.length);
    }
  
    function changeQuote() {
      currentQuoteIndex = generateRandomQuoteIndex();
      displayQuote();
    }
  
    newQuoteButton.addEventListener('click', changeQuote);
  
    displayQuote();
  });
  

