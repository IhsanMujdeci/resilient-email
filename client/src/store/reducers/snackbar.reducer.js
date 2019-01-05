const initialState = {
    show: false
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'SHOW':
            return {
                ...state,
                show: true
            };
        default: return state
    }
};

export default reducer