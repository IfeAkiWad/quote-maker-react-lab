export default (state = [],action) => {
    switch (action.type) {
        case 'ADD_QUOTE':
            return {...state, quotes: [...state.quotes, action.quote]}
        case 'REMOVE_QUOTE':
            const removeQuote = state.quotes.filter(quote => quote.id !== quote.id)
            return {...state, quotes: removeQuote}  
    
        default:
            return state;
    }
}

// // TODO: Create action creators as defined in tests
// export const addQuote = quote => {
//     return {
//         type: 'ADD_QUOTE',
//         quote: quote
//     }
// }

// export const removeQuote = quoteId => {
//     return {
//         type: 'REMOVE_QUOTE',
//         quoteId: quoteId
//     }
// }

// export const upvoteQuote = quoteId => {
//     return {
//         type: 'UPVOTE_QUOTE',
//         quoteId: quoteId
//     }
// }

// export const downvoteQuote = quoteId => {
//     return {
//         type: 'DOWNVOTE_QUOTE',
//         quoteId: quoteId
//     }
// }
