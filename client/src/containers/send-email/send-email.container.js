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

class SendEmail extends Component {

    showHideClass = type =>
        classNames({
            'email-form__group--show': this.props[type],
            'email-form__group--hide': !this.props[type]
        });

    chipKeyCodes = [13, 32, 9];

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

                            <ChipInput
                                variant='outlined'
                                label='To'
                                onAdd={ value => this.props.onAddArray('to', value) }
                                onDelete={ value => this.props.onDeleteArray('to', value) }
                                value={this.props.to}
                                fullWidthInput={true}
                                newChipKeyCodes={this.chipKeyCodes}
                                blurBehavior={'add'}
                            />

                            <TooltipButton
                                className="email-form__cc"
                                onClick={() => this.props.showUi('showCc')}
                                title="Add Cc recipients"
                                label="Cc"
                            />

                            <TooltipButton
                                className="email-form__bcc"
                                onClick={() => this.props.showUi('showBcc')}
                                title="Add Bcc recipients"
                                label="Bcc"
                            />

                        </div>

                        <div className={this.showHideClass('showCc')}>
                            <ChipInput
                                value={this.props.cc}
                                onAdd={ value => this.props.onAddArray('cc', value) }
                                onDelete={ value => this.props.onDeleteArray('cc', value) }
                                variant='outlined'
                                newChipKeyCodes={this.chipKeyCodes}
                                fullWidth
                                label='Cc'
                                fullWidthInput={true}
                                blurBehavior={'add'}
                            />
                        </div>

                        <div className={this.showHideClass('showBcc')}>
                            <ChipInput
                                value={this.props.bcc}
                                onAdd={ value => this.props.onAddArray('bcc', value)}
                                onDelete={ value => this.props.onDeleteArray('bcc', value) }
                                variant='outlined'
                                newChipKeyCodes={this.chipKeyCodes}
                                fullWidth
                                label='Bcc'
                                fullWidthInput={true}
                                blurBehavior={'add'}
                            />
                        </div>

                        <TextField
                            variant='outlined'
                            label='Subject'
                            onChange={(e) => this.props.onChangeText('subject', e.target.value)}
                            value={this.props.subject}
                        />

                        <TextField
                            variant='outlined'
                            rows={4}
                            multiline
                            label='Body'
                            onChange={(e) => this.props.onChangeText('body', e.target.value)}
                            value={this.props.body}
                        />

                    </form>

                    <Button
                        variant="contained"
                        color="primary"
                        className='email-form__submit'
                        onClick={() => this.props.sendEmail()}
                        disabled={!this.props.enableSend}
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
    enableSend: email.ui.enableSend
});

const mapDispatchToProps = dispatch => ({
    sendEmail: () => dispatch(emailActionTypes.sendEmail()),
    showUi: key => dispatch(emailActionTypes.showUi(key)),
    onChangeText: (key, value) => dispatch(emailActionTypes.onChangeText(key, value)),
    onAddArray: (key, value) => dispatch(emailActionTypes.onAddArray(key, value)),
    onDeleteArray: (key, value) => dispatch(emailActionTypes.onDeleteArray(key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail)