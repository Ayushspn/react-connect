import React from 'react';
import TextField from '@material-ui/core/textfield';
const SearchBox = () => {
    
    return (
        <TextField
        type = 'text'
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            label='search for your Friend'
            style = {{'width' : '100%', 'margin-top' : '100px'}}
        />
    )
}
export default SearchBox;