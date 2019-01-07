import * as Email from "../../services/email.service";
import {show as showSnackBar} from '../actions/snackbar.actions'

export const SHOW_UI = "SHOW_UI";
export const DISABLE_UI = 'DISABLE_UI';

export const CHANGE_EMAIL_TEXT = 'CHANGE_EMAIL_TEXT';
export const ADD_EMAIL_ARRAY = 'ADD_EMAIL_ARRAY';
export const DELETE_EMAIL_ARRAY = 'DELETE_EMAIL_ARRAY';


export const disableSend = () => ({
    type: DISABLE_UI,
    payload: {
        key: 'enableSend'
    }
});

export const enableSend = () => ({
    type: SHOW_UI,
    payload:{
        key: 'enableSend'
    }
});

export const showUi = key => ({
    type: SHOW_UI,
    payload: { key }
});

export const onChangeText = (key, value) => ({
    type: CHANGE_EMAIL_TEXT,
    payload: {key, value}
});

export const onAddArray = (key, value) => ({
    type: ADD_EMAIL_ARRAY,
    payload: {key, value}
});

export const onDeleteArray = (key, value) => ({
    type: DELETE_EMAIL_ARRAY,
    payload: {key, value}
});

export const sendEmail = () => {

    return async function(dispatch, getState) {

        dispatch(disableSend());
        dispatch(showSnackBar('Sending email'));

        try{
            const sentEmail = await Email.send(getState().email.form);
            dispatch(showSnackBar(sentEmail))
        }
        catch(err){
            dispatch(showSnackBar(err.message))
        }
        finally {
            dispatch(enableSend())
        }
    }

};