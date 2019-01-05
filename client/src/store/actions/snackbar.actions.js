export const SHOW_SNACKBAR = 'SHOW_SNACKBAR';
export const HIDE_SNACKBAR = 'HIDE_SNACKBAR';

export const show = label => {
    return {
        type: SHOW_SNACKBAR,
        payload: label
    }
};