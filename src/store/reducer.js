const initialState = {
    clickCount:0,
    isClicked:'',
    Date : new Date(),
}

const reducer =(state=initialState,actions) =>{
    if(actions.type==='click'){
        return {
            ...state,
            clickCount:state.clickCount +1,
            isClicked:'true',
            Date: new Date(),
        };
    }
    return state;
}

export default reducer;