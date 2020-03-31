import React, { useState } from 'react';
import Input from '../UI/Input/Input';
import CustomButton from '../UI/Input/Button/Button';
import classes from './Login.module.scss';
import { Link } from 'react-router-dom';
import { defaultAuth } from '../../firebase';

const Login = ({history}) => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [validatioUserName, setValidationUserNmae] = useState(true);
    const [validatioPassword, setValidationPassword] = useState(true);

    const [validationOnSubmitForm, setvalidationOnSubmitForm] = useState(false); /// true on submitting
    const [validationFormFlag, setvalidationFormFlag] = useState(false);  // check if all is valid 


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

    const onUserNameUP = () => {

    }

    const btnSubmit = () => {
        setvalidationOnSubmitForm(true);
        if (validationFormFlag) {
            defaultAuth.signInWithEmailAndPassword(userName, userPassword).then((res) => {
                if (res) {
                    history.push('/feed');
                }
            })
                .catch((err) => {
                    console.log('err', err);
                });
        }

    }
    return (<form className={classes.loginForm}>

        <Input inputType='text' inputLabel='User Name' inputWidth='80%' inputValue={userName}
            onInputChange={(event) => onUserNameChange(event)}
            onPasswordKeyUP={(event) => onUserNameUP(event)} />
        {validatioUserName && validationOnSubmitForm ? <p className={classes.errorMessage}>please enter valid username </p> : null}
        <Input inputType='password' inputLabel='Password' inputWidth='80%'
            inputValue={userPassword}
            onInputChange={(event) => onPasswordChange(event)}
            onPasswordKeyUP={(event) => onUserNameUP(event)}
        />
        {!userPassword && validationOnSubmitForm ? <p className={classes.errorMessage}>please enter password  </p> : null}
        <div className={classes.forgetPassword}>
            <Link to='/forget-password'>Forget Password ?</Link>
        </div>
        <div className={classes.loginBtn}>
            <CustomButton type='submit' color='primary' loginFormSubmit={() => btnSubmit()}>Login</CustomButton>
            <CustomButton type='button' color='secondary'>Cancel</CustomButton>
        </div>
    </form>)
}

export default Login;