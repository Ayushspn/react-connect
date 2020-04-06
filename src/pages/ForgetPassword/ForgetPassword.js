import React, { useState } from 'react';
import Input from '../../components/UI/Input/Input';
import CustomButton from '../../components/UI/Input/Button/Button';
import classes from './ForgetPassword.module.scss';
import {defaultAuth} from '../../firebase';
import {useToasts } from 'react-toast-notifications'
const ForgetPassword = () => {
    const [userName, setUserName] = useState('');
    const [validatioUserName, setValidationUserNmae] = useState(false);
    const [validationOnSubmitForm, setvalidationOnSubmitForm] = useState(false); /// true on submitting

    const onUserNameChange = (event) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
            setValidationUserNmae(false);

        }
        else {
            setValidationUserNmae(true);

        }

        setUserName(event.target.value);
    }
    const {addToast} = useToasts();
    const onUserNameUP = () => {

    }

    const btnSubmit = () => {
        setvalidationOnSubmitForm(true);
        if (!validatioUserName) {
            defaultAuth.sendPasswordResetEmail(userName).then(function() {
                addToast('Mail has been sent, Please check your mail ', { appearance: 'success' });
              }).catch(function(error) {
                addToast(error.message, { appearance: 'error' });
              });
    }
}

    return (
        <form className={classes.loginForm}>
            <Input inputType='text' inputLabel='User Name' inputWidth='80%' inputValue={userName}
                onInputChange={(event) => onUserNameChange(event)}
                onPasswordKeyUP={(event) => onUserNameUP(event)} />
            {((validatioUserName || !userName)  && validationOnSubmitForm)? <p className={classes.errorMessage}>please enter valid username </p> : null}
            <div className={classes.loginBtn}>
            <CustomButton type='submit' color='primary' loginFormSubmit={() => btnSubmit()}>OK</CustomButton>
            </div>
        </form>
    )
}

export default ForgetPassword;