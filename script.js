const quoteText = document.querySelector('.quote'),
authorName = document.querySelector('.author .name'),
quoteBtn = document.querySelector('button'),
soundBtn = document.querySelector('.sound'),
copyBtn = document.querySelector('.copy'),
twitterBtn = document.querySelector('.twitter');

//  Random quote function
function randomQuote(){
    quoteBtn.classList.add('loading');
    quoteBtn.innerText = "Loading Quote...";
    // Fetching random quotes/data from API and parsing it into Javascript Object
    fetch("https://quotes-api-self.vercel.app/quote")
    .then(res => res.json())
    .then(result => {
        quoteText.innerText = result.quote;
        authorName.innerText = result.author;
        
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove('loading');
    })
}

soundBtn.addEventListener('click', () => {
    // SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener('click', () => {
    // Copying the quote text on CopyBtn click
    // writeText() property writes the specific text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener('click', () => {
    let tweetURL = `https://x.com/intent/tweet?url=${quoteText.innerText}`;
    // Opening a new twitter tab with passing quote in the url
    window.open(tweetURL, "_blank");
});

quoteBtn.addEventListener('click', randomQuote);