
const skelQuote = (buttonEl, buttonIndex) => {
    buttonEl.addEventListener('click', generateRandomQuote.bind(this, buttonIndex))
}

const generateRandomQuote = (buttonIndex) => {
    let quote

    switch(buttonIndex) {
        case 0:
            quote = skelQuotesOne[generateRandomNumber(skelQuotesOne.length)]
            break;
        case 1:
            quote = skelQuotesTwo[generateRandomNumber(skelQuotesTwo.length)]
            break;
        case 2:
            quote = skelQuotesThree[generateRandomNumber(skelQuotesThree.length)]
            break;
    }

    showQuoteAlert(quote)
}

const generateRandomNumber = skelQuotesLength =>  Math.floor((Math.random() * skelQuotesLength))
   


const showQuoteAlert = quote => alert(quote)


export default skelQuote