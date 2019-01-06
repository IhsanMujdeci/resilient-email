import * as emailActions from '../actions/email.actions'

const initialState = {
    ui:{
        showCc: false,
        showBcc: false,
        enableSend: true
    },
    form:{
        to: [],
        bcc: [],
        cc: [],
        subject: "",
        body: ""
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case emailActions.SHOW_UI:
            return{
                ...state,
                ui:{
                    ...state.ui,
                    [action.payload.key]: true
                }
            };
        case emailActions.DISABLE_UI:
            return{
                ...state,
                ui:{
                    ...state.ui,
                    [action.payload.key]: false
                }
            };
        case emailActions.CHANGE_EMAIL_TEXT:
            return{
                ...state,
                form:{
                    ...state.form,
                    [action.payload.key]: action.payload.value
                }
            };
        case emailActions.ADD_EMAIL_ARRAY:
            return {
                ...state,
                form:{
                    ...state.form,
                    [action.payload.key]: state.form[action.payload.key].concat(action.payload.value)
                }
            };
        case emailActions.DELETE_EMAIL_ARRAY:
            const updatedArray = state.form[action.payload.key].filter(x => x !== action.payload.value);
            return {
                ...state,
                form:{
                    ...state.form,
                    [action.payload.key]: updatedArray
                }
            };
        default: return state
    }
};

export default reducer

