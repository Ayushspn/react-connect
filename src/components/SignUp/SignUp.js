import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import CustomButton from '../UI/Input/Button/Button';
import classes from './SignUp.module.scss';
import { defaultAuth } from '../../firebase';
import {withRouter} from 'react-router';

import {useToasts } from 'react-toast-notifications'

const SignUp = ({history}) => {
    const errMssg = [classes.errorMessage, classes.mrgnTop].join(' ');
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userConfirmPassword, setUserConfirmPassword] = useState('');

    const [validatioUserName, setValidationUserNmae] = useState(true);
    const [validatioPassword, setValidationPassword] = useState(true);
    const [validatioConfirmPassword, setValidationConfirmPassword] = useState(true);

    const [validationFormFlag, setvalidationFormFlag] = useState(false); // check for final submit 
    const [validationOnSubmitForm, setvalidationOnSubmitForm] = useState(false); /// true on submitting


    const [validatingComparePassword, setvalidatingComparePassword] = useState(false); // false on compare password

    const {addToast} = useToasts();

    const onUserNameChange = (event) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            setValidationUserNmae(false);
            setvalidationFormFlag(false);
        }
        else {
            setValidationUserNmae(true);
            setvalidationFormFlag(true);
        }

        setUserName(event.target.value);
    }


    const onPasswordChange = (event) => {
        if (event.target.value === '') {
            setValidationPassword(true);
            setvalidationFormFlag(false);
        }
        else {

            setValidationPassword(false);
            setvalidationFormFlag(true);
        }
        setUserPassword(event.target.value);
    }


    const onConfirmPasswordChange = (event) => {
        if (event.target.value === '') {
            setValidationConfirmPassword(true);
            setvalidationFormFlag(false);
        }
        else {

            setValidationConfirmPassword(false);
            setvalidationFormFlag(true);
        }
        setUserConfirmPassword(event.target.value);
    }

    const onPasswordKeyUP = () => {
        if (validationOnSubmitForm && compareConfirmPassword(userPassword, userConfirmPassword)) {
            setvalidatingComparePassword(false);
            setvalidationFormFlag(true);
        }
        else {
            setvalidatingComparePassword(true);
            setvalidationFormFlag(false);
        }
    }

    const compareConfirmPassword = (password, confirmPassword) => {
        return password === confirmPassword;
    }

    const onUserNameUP = () => {
    
    }

    const btnSubmit = () => {
        setvalidationOnSubmitForm(true);
        if (userName && !validatioUserName && !validatingComparePassword && userPassword && userConfirmPassword) {
            defaultAuth.createUserWithEmailAndPassword(userName, userPassword).then((res) => {
                console.log('res', res);
                if(res) {
                    addToast('User Added sucessfully', { appearance: 'success' });
                    history.replace('/login');
                }
            })
                .catch((err) => {
                    addToast(err.message, { appearance: 'error' })
                    //console.log('err', err);
                });
        }


    }
    return (
        <>
            
            <form className={classes.loginForm}>
            {validatingComparePassword && validationOnSubmitForm ? <p className = {errMssg}>password and confirm password do not match</p> : null}
                <Input inputType='text' inputLabel='User Name' inputWidth='80%' inputValue={userName}
                    onInputChange={(event) => onUserNameChange(event)} 
                    onPasswordKeyUP={(event) => onUserNameUP(event)}
                    />
                {validatioUserName && validationOnSubmitForm ? <p className = {classes.errorMessage}>please enter valid username </p> : null}
                <Input inputType='password' inputLabel='Password' inputWidth='80%'
                    inputValue={userPassword}
                    onInputChange={(event) => onPasswordChange(event)}
                    onPasswordKeyUP={(event) => onPasswordKeyUP(event)}
                />
                {!userPassword && validationOnSubmitForm ? <p className = {classes.errorMessage}>please enter password  </p> : null}
                <Input inputType='password' inputLabel='Confirm Password' inputWidth='80%'
                    inputValue={userConfirmPassword}
                    onInputChange={(event) => onConfirmPasswordChange(event)}
                    onPasswordKeyUP={(event) => onPasswordKeyUP(event)}
                />
                {!userConfirmPassword && validationOnSubmitForm ? <p className = {classes.errorMessage}>please enter confirm  password  </p> : null}
                <div className={classes.loginBtn}>
                    <CustomButton type='submit' color='primary' loginFormSubmit={() => btnSubmit()}>Ok</CustomButton>
                    <CustomButton type='button' color='secondary'>Cancel</CustomButton>
                </div>
            </form>
        </>)
}

export default withRouter(SignUp);