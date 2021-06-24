//reducer prima 2 parametra,(prvi-initialstate, drugi-akcija)
const reducer = (state = 0, action) => {
    //we want to read action and to return apropriate state
    switch (action.type){
        case 'deposit':
            return state + action.payload
        case 'withdraw':
            return state - action.payload
        default:
            return state
    }
}

export default reducer