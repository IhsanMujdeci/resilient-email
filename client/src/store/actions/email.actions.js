import axios from 'axios';
import {show as showSnackBar} from '../actions/snackbar.actions'

export const SHOW_CC = 'SHOW_CC';
export const SHOW_BCC = 'SHOW_BCC';

export const ADD_CC = 'ADD_CC';
export const DELETE_CC = 'DELETE_CC';

export const ADD_BCC = 'ADD_BCC';
export const DELETE_BCC = 'DELETE_BCC';

export const DISABLE_SEND = 'DISABLE_SEND';
export const ENABLE_SEND = 'ENABLE_SEND';

export const CHANGE_EMAIL_TEXT = 'CHANGE_EMAIL_TEXT';

export const disableSend = () => {
    return {
        type: DISABLE_SEND
    }
};


export const enableSend = () => {
    return {
        type: ENABLE_SEND
    }
};

export const sendEmail = (to,  cc, bcc, subject, body) => {

    return function(dispatch) {

        dispatch(disableSend());
        dispatch(showSnackBar('Sending email'));

        axios.post('http://localhost:3001/email/send', {
            to: [to],
            cc,
            bcc,
            subject,
            text: body
        })
            .then(response => {
                dispatch(showSnackBar(response.data.message))
            })
            .catch( (err) => {
                let errorMessage = "Oops something went wrong";
                if(err && err.response && err.response.data && err.response.data.message){
                    errorMessage = err.response.data.message
                }
                dispatch(showSnackBar(errorMessage))
            })
            .finally(()=>{
                dispatch(enableSend())
            })
    }
};