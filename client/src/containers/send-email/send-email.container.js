import React, { Component } from 'react';
import { connect } from 'react-redux'
import './send-email.container.scss'
import * as emailActionTypes from '../../store/actions/email.actions'

import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import CardHeader from '@material-ui/core/CardHeader';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button/Button";
import ChipInput from 'material-ui-chip-input'
import classNames from  'classnames'


class SendEmail extends Component {

    yourChips = [];

    constructor(props){
        super(props);
    }

    handleAddChip = (chip) => {
        this.yourChips.push(chip)
    };

    handleDeleteChip = (chip, index) => {
        this.yourChips.splice(index, 1)
    };

    render(){

        return(
            <>
                <Card className='email-form'>
                    <CardHeader
                        className='email-form__header'
                        title="Compose email"
                        titleTypographyProps={{color: 'inherit', align: 'left'}}
                    />

                    <FormGroup className='email-form__group'>
                        <div className='email-form__to-field'>
                            <TextField variant='outlined' label='To' className='text-field'/>

                            <div
                                className="email-form__cc"
                                onClick={this.props.onShowCc}>
                                <Tooltip
                                    title="Add Cc recipients"
                                >
                                    <Typography
                                        variant={"body2"}>Cc
                                    </Typography>
                                </Tooltip>
                            </div>

                            <div onClick={this.props.onShowBcc}>
                                <Tooltip
                                    title="Add Bcc recipients"
                                    className="email-form__bcc">
                                    <Typography
                                        variant={"body2"}>Bcc
                                    </Typography>
                                </Tooltip>
                            </div>

                        </div>
                    </FormGroup>


                    <FormGroup className={classNames(
                        'email-form__group',
                        {
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
                    </FormGroup>


                    <FormGroup className={classNames(
                        'email-form__group',
                        {
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
                    </FormGroup>

                    <FormGroup className='email-form__group'>
                        <TextField variant='outlined' label='Subject' className='text-field'/>
                    </FormGroup>

                    <FormGroup className='email-form__group email-form__multiline-texts'>
                        <TextField
                            variant='outlined'
                            rows={4}
                            multiline
                            label='Body'
                            className='text-field'/>
                    </FormGroup>

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