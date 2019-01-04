import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import './send-email.container.scss'
import CardHeader from '@material-ui/core/CardHeader';
import FormGroup from '@material-ui/core/FormGroup';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button/Button";
import ChipInput from 'material-ui-chip-input'

class SendEmail extends Component {

    yourChips = [];

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
                        title="Send email"
                        titleTypographyProps={{color: 'inherit', align: 'left'}}
                    />

                    <FormGroup className='email-form__group'>
                        <div className='email-form__to-field'>
                            <TextField variant='outlined' label='To' className='text-field'/>

                            <Tooltip title="Add Cc recipients" className="email-form__cc">
                                <Typography variant={"body2"}>Cc</Typography>
                            </Tooltip>
                            <Tooltip title="Add Bcc recipients" className="email-form__bcc">
                                <Typography variant={"body2"}>Bcc</Typography>
                            </Tooltip>
                        </div>
                    </FormGroup>

                    <FormGroup className='email-form__group'>
                        <ChipInput
                            value={this.yourChips}
                            onAdd={this.handleAddChip}
                            onDelete={this.handleDeleteChip}
                            variant='outlined'
                            newChipKeyCodes={[13, 32]}
                            fullWidth
                            label='Cc'
                            fullWidthInput={true}
                        />
                    </FormGroup>

                    <FormGroup className='email-form__group'>
                        <ChipInput
                            value={this.yourChips}
                            onAdd={this.handleAddChip}
                            onDelete={this.handleDeleteChip}
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

                    <FormGroup className='email-form__group'>
                        <TextField variant='outlined' label='Body' className='text-field'/>
                    </FormGroup>

                    <Button variant="contained" color="primary" className='email-form__submit'>
                        Primary
                    </Button>

                </Card>
            </>
        )
    }

}

export default SendEmail