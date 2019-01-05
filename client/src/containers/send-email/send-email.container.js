import React, { Component } from 'react';
import { connect } from 'react-redux'
import './send-email.container.scss'
import * as emailActionTypes from '../../store/actions/email.actions'

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import Button from "@material-ui/core/Button/Button";
import ChipInput from 'material-ui-chip-input'
import classNames from  'classnames'
import {TooltipButton} from "../../components/tooltip-button/tooltip-button.component";
import * as snackBarActionTypes from "../../store/actions/snackbar.actions";
// import * as emailActionTypes from '../../store/actions/email.actions'

class SendEmail extends Component {

    showHideClass = type =>
        classNames({
            'email-form__group--show': this.props[type],
            'email-form__group--hide': !this.props[type]
        });

    render(){
        return(
            <>
                <Card className='email-form'>
                    <CardHeader
                        className='email-form__header'
                        title="Compose email"
                        titleTypographyProps={{color: 'inherit', align: 'left'}}
                    />

                    <form className='email-form__group'>

                        <div className='email-form__to-field'>

                            <TextField
                                variant='outlined'
                                label='To'
                                onChange={(e) => this.props.onChangeEmailForm('to', e.target.value)}
                                value={this.props.to}
                            />

                            <TooltipButton
                                className="email-form__cc"
                                onClick={this.props.onShowCc}
                                title="Add Cc recipients"
                                label="Cc"
                            />

                            <TooltipButton
                                className="email-form__bcc"
                                onClick={this.props.onShowBcc}
                                title="Add Bcc recipients"
                                label="Bcc"
                            />

                        </div>

                        <div className={this.showHideClass('showCc')}>
                            <ChipInput
                                value={this.props.cc}
                                onAdd={(cc)=>this.props.onAddCc(cc)}
                                onDelete={(cc)=>this.props.onDeleteCc(cc)}
                                variant='outlined'
                                newChipKeyCodes={[13, 32]}
                                fullWidth
                                label='Cc'
                                fullWidthInput={true}
                            />
                        </div>

                        <div className={this.showHideClass('showBcc')}>
                            <ChipInput
                                value={this.props.bcc}
                                onAdd={(bcc) => this.props.onAddBcc(bcc)}
                                onDelete={(bcc) => this.props.onDeleteBcc(bcc)}
                                variant='outlined'
                                newChipKeyCodes={[13, 32]}
                                fullWidth
                                label='Bcc'
                                fullWidthInput={true}
                            />
                        </div>

                        <TextField
                            variant='outlined'
                            label='Subject'
                            onChange={(e) => this.props.onChangeEmailForm('subject', e.target.value)}
                            value={this.props.subject}
                        />

                        <TextField
                            variant='outlined'
                            rows={4}
                            multiline
                            label='Body'
                            onChange={(e) => this.props.onChangeEmailForm('body', e.target.value)}
                            value={this.props.body}
                        />

                    </form>

                    <Button
                        variant="contained"
                        color="primary"
                        className='email-form__submit'
                        onClick={() => this.props.sendEmail(
                            this.props.to,
                            this.props.cc,
                            this.props.bcc,
                            this.props.subject,
                            this.props.body
                        )}
                    >
                        Send
                    </Button>

                </Card>
            </>
        )
    }

}

const mapStateToProps = ({email}) => ({
    showCc: email.ui.showCc,
    showBcc: email.ui.showBcc,
    cc: email.form.cc,
    bcc: email.form.bcc,
    to: email.form.to,
    subject: email.form.subject,
    body: email.form.body,
});

const mapDispatchToProps = dispatch => ({
    onShowCc: () => dispatch({type: emailActionTypes.SHOW_CC}),
    onShowBcc: () => dispatch({type: emailActionTypes.SHOW_BCC}),
    onAddCc: (cc) => dispatch({type: emailActionTypes.ADD_CC, payload: cc}),
    onDeleteCc: (cc) => dispatch({type: emailActionTypes.DELETE_CC, payload: cc}),
    onAddBcc: (bcc) => dispatch({type: emailActionTypes.ADD_BCC, payload: bcc}),
    onDeleteBcc: (bcc) => dispatch({type: emailActionTypes.DELETE_BCC, payload: bcc}),
    sendEmail: (to, cc, bcc, subject, body) => dispatch(emailActionTypes.sendEmail(to, cc, bcc, subject, body)),
    onChangeEmailForm: (key, value) => dispatch({type: emailActionTypes.CHANGE_EMAIL_TEXT, payload: {key, value}}),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail)