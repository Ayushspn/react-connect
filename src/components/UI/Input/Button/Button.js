import React from 'react';
import Button from '@material-ui/core/button';
const CustomButton = ({btnType, children, color, loginFormSubmit}) => {
return(<Button type = {btnType} variant="outlined" color={color} onClick = {loginFormSubmit}>{children}</Button>)
    
}

export default CustomButton;

///<Button variant="outlined">Default</Button>