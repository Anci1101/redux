//action creators je funkcija koja samo dispecuje akciju
export const depositMoney = (amount) => {
    return(dispatch) =>{
        dispatch({
            type: 'deposit',
            payload:amount
        })
    }
}

export const withdrawMoney = (amount) =>{
    return(dispatch) => {
        dispatch({
            type: 'withdraw',
            payload: amount
        })
    }
}