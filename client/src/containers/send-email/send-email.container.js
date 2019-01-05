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
    constructor(props){
        super(props);
    }

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

                        <div className='email-form__to-field text-field'>

                            <TextField
                                variant='outlined'
                                label='To'
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

                        <div className={classNames('text-field', {
                                'email-form__group--show': this.props.showCc,
                                'email-form__group--hide': !this.props.showCc
                            }
                        )}>
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


                        <div className={classNames('text-field', {
                                'email-form__group--show': this.props.showBcc,
                                'email-form__group--hide': !this.props.showBcc
                            }
                        )}>
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
                            className='text-field'/>

                        <TextField
                            variant='outlined'
                            rows={4}
                            multiline
                            label='Body'
                            className='text-field'/>

                    </form>

                    <Button variant="contained" color="primary" className='email-form__submit'>
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
});

const mapDispatchToProps = dispatch => ({
    onShowCc: () => dispatch({type: emailActionTypes.SHOW_CC}),
    onShowBcc: () => dispatch({type: emailActionTypes.SHOW_BCC}),
    onAddCc: (cc) => dispatch({type: emailActionTypes.ADD_CC, payload: cc}),
    onDeleteCc: (cc) => dispatch({type: emailActionTypes.DELETE_CC, payload: cc}),
    onAddBcc: (bcc) => dispatch({type: emailActionTypes.ADD_BCC, payload: bcc}),
    onDeleteBcc: (bcc) => dispatch({type: emailActionTypes.DELETE_BCC, payload: bcc})
});

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail)