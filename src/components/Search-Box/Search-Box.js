import React from 'react';
import TextField from '@material-ui/core/textfield';
const SearchBox = ({onSearchBoxValueChange,searchBoxvalue}) => {
    
    return (
        <TextField
        type = 'text'
            onChange={(event) => onSearchBoxValueChange(event)}
            label='search for your Friend'
            value = {searchBoxvalue}
            style = {{'width' : '100%', 'margin-top' : '100px'}}
        />
    )
}
export default SearchBox;