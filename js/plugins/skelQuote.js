const skelQuote = (options = {}) => {
  const defaults = {
    buttonIndex: null,
    buttonEl: null
  };

  const settings = { ...defaults, ...options };

  const init = () => {
    const settingsAreNotNull = checkIfSettingsAreNotNull();

    if (settingsAreNotNull) {
      bindEvents();
    } else {
      console.log("error");
    }
  };

  const checkIfSettingsAreNotNull = () => {
    if (settings.buttonIndex !== null && settings.buttonEl !== null) {
      return true
    }
  };

  const bindEvents = () => {
    settings.buttonEl.addEventListener("click", generateRandomQuote);
  };

  const generateRandomQuote = ({ buttonIndex = settings.buttonIndex }) => {
    let quote;
    switch (buttonIndex) {
      case 0:
        quote = skelQuotesOne[generateRandomNumber(skelQuotesOne.length)];
        break;
      case 1:
        quote = skelQuotesTwo[generateRandomNumber(skelQuotesTwo.length)];
        break;
      case 2:
        quote = skelQuotesThree[generateRandomNumber(skelQuotesThree.length)];
        break;
    }
    showQuoteAlert(quote);
  };

  const generateRandomNumber = skelQuotesLength => Math.floor(Math.random() * skelQuotesLength);
  const showQuoteAlert = quote => alert(quote);

  init();
};

export default skelQuote;
