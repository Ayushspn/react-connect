import React from 'react';
import Modal from '../../components/UI/Modal/Modal';
import TextField from '@material-ui/core/textfield';

import classes from './Profile.module.scss';
const Profile = () => {
    const style = {
        width : '88%'
    }
    return (
        <Modal>
            
            <form className = {classes.profileForm}> 
            <div className = {classes.profileIcon}></div>
            <TextField  label='Name' style = {style}/>
            <TextField  label='Phone Number' type = 'number' style = {style}/>
            <TextField  label='Address' type = 'text' style = {style}/>
            <TextField  label='Profession' type = 'text' style = {style}/>
            </form>
        </Modal>
    )
}

export default Profile;