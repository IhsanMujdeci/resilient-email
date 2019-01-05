import * as snackBarActionType from '../actions/snackbar.actions'

const initialState = {
    show: false,
    label: ''
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case snackBarActionType.SHOW_SNACKBAR:
            return {
                ...state,
                show: true,
                label: action.payload
            };
        case snackBarActionType.HIDE_SNACKBAR:
            return {
                ...state,
                show: false,
                label: ''
            };
        default: return state
    }
};

export default reducer