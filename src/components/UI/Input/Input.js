import React from 'react';
import TextField from '@material-ui/core/textfield';

const Input = ({ inputType, inputLabel, inputWidth, inputValue , onInputChange}) => {
    switch (inputType) {
        case 'text':
            return (
                <div>
                <TextField  label={inputLabel}  style = {{'width' : inputWidth}} 
                value = {inputValue}
                onChange = {(event) => onInputChange(event)}
                />
                </div>
            )

        case 'password':
            return (
                <div>
                <TextField label={inputLabel} type="password" style = {{'width' : inputWidth}}
                 value = {inputValue}
                onChange = {(event) => onInputChange(event)}
                />
                </div>
            )
        default:
            return (
                <div>
                <input type='text' />
                </div>
            )
    }
}

export default Input;