import React, {useState} from 'react';
import Input from '../UI/Input/Input';
import CustomButton from '../UI/Input/Button/Button';
import classes from './Login.module.scss';
import {defaultAuth} from '../../firebase';

const Login = () => {

    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const btnSubmit =  () => {
        console.log('userPassword', userPassword);
        defaultAuth.signInWithEmailAndPassword(userName, userPassword).then((res) => {
            console.log('res', res);
        })
        .catch((err) =>{
            console.log('err', err);
        });
        
    }
    return (<form className={classes.loginForm}>
        <Input inputType='text' inputLabel='User Name'  inputWidth= '80%'  inputValue = {userName} 
        onInputChange = {(event) => setUserName(event.target.value)}/>
        <Input inputType='password' inputLabel='Password' inputWidth= '80%' 
        inputValue = {userPassword} 
        onInputChange = {(event) => setUserPassword(event.target.value)}
        />
        <div className={classes.loginBtn}>
            <CustomButton type='submit' color='primary' loginFormSubmit = {() => btnSubmit()}>Login</CustomButton>
            <CustomButton type='button' color='secondary'>Cancel</CustomButton>
        </div>
    </form>)
}

export default Login;