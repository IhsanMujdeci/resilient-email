import React from 'react';
import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import IconButton from "@material-ui/core/IconButton/IconButton";
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    close: {
        padding: theme.spacing.unit / 2,
    },
});

export const SnackBar = ({label, open, close}) => (
    <div>
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            autoHideDuration={6000}
            onClose={close}
            ContentProps={{
                'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{label}</span>}
            action={[
                <IconButton
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    className={styles.close}
                    onClick={close}
                >
                    <CloseIcon />
                </IconButton>,
            ]}
        />
    </div>
);
