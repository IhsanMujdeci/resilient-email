const initialState = {
    email:{
        ui:{
            showCc: false,
            showBcc: false,
        },
        form:{
            to: [],
            bcc: [],
            cc: [],
            subject: "",
            body: ""
        }
    },
    sackBar:{
        show: false
    }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SHOW_CC':
            return {
                ...state,
                email: {
                    ...state.email
                },
                showCc: true
            }
        case 'SHOW_BCC':
            return {
                ...state,
                showBcc: true
            }
        case 'ADD_CC': {

        }
    }
    return state
};

export default reducer