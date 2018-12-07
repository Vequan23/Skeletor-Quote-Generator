import skelQuote from './plugins/skelQuote.js'

const buttonEls = document.querySelectorAll('.js-quote-trigger')

const init = () => {
    buttonEls.forEach((buttonEl, i) => {
        skelQuote(buttonEl, i)
    })
}

init()