const initialState = {
    ui:{
        showCc: false,
        showBcc: false,
        disableSend: false
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
        case 'ADD_CC': {
            return {
                ...state,
                form:{
                    ...state.form,
                    cc: state.form.cc.concat(action.payload)
                }
            }
        }
        case 'DELETE_CC': {
            const updatedCC = state.form.cc.filter(x => x !== action.payload);
            return {
                ...state,
                form:{
                    ...state.form,
                    cc: updatedCC
                }
            }
        }
        case 'ADD_BCC': {
            return {
                ...state,
                form:{
                    ...state.form,
                    bcc: state.form.bcc.concat(action.payload)
                }
            }
        }
        case 'DELETE_BCC': {
            const updatedBcc = state.form.bcc.filter(x => x !== action.payload);
            return {
                ...state,
                form:{
                    ...state.form,
                    bcc: updatedBcc
                }
            }
        }
        case 'SHOW_CC':
            return {
                ...state,
                ui:{
                    ...state.ui,
                    showCc: true
                }
            };
        case 'SHOW_BCC':
            return {
                ...state,
                ui:{
                    ...state.ui,
                    showBcc: true
                }
            };
        case 'CHANGE_EMAIL_TEXT':
            return{
                ...state,
                form:{
                    ...state.form,
                    [action.payload.key]: action.payload.value
                }
            };
        default: return state
    }
};

export default reducer

