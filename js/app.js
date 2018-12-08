import skelQuote from './plugins/skelQuote.js'

const buttonEls = document.querySelectorAll('.js-quote-trigger')

const init = () => {
    buttonEls.forEach((buttonEl, buttonIndex) => {
        skelQuote({
            buttonEl,
            buttonIndex
        })
    })
}

init()