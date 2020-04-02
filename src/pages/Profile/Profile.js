import React, { useState, useEffect } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import TextField from '@material-ui/core/textfield';
import Button from '@material-ui/core/button';
import LinearProgress from '@material-ui/core/LinearProgress'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import classes from './Profile.module.scss';
import FileUploader from "react-firebase-file-uploader";
import { fireStorage } from '../../firebase';

import {onProfileUpdate} from '../../redux/profile/profile.actions.creator';
import { connect } from 'react-redux';


const Profile = ({profiledetails}) => {
    const [uploadStart, setUploadStart] = useState(false);
    const [uploadError, setUploadError] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [phoneNumberValidation, setphoneNumberValidation] = useState(false);
    const [profileFormsubmission, setprofileFormsubmission] = useState(false);

    const [disabledBtn, setdisabledBtn] = useState(true);

    const [name, setName] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [profession, setProfession] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    

    const style = {
        width: '88%'
    }

    useEffect(() => {
        if(name && phoneNumber && address && profession && uploadProgress == 100 && phoneNumberValidation) {
            setdisabledBtn(false);
        }
        else {
            setdisabledBtn(true);
        }

    }, [name, phoneNumber, address, profession, uploadProgress])
    const onPhoneNumberChange = (event) => {
        const IndPhoneNum = /^\d{10}$/;
        if (IndPhoneNum.test(event.target.value)){
            setphoneNumberValidation(false);
        }
        else {
            setphoneNumberValidation(true);
        }

        setphoneNumber(event.target.value);
    }

    const onUploadProgress = (event) => {
        setUploadProgress(event);
    }


    const handleUploadSuccess = filename => {
        fireStorage
            .ref(`images/${filename}`)
            .getDownloadURL()
            .then(url => setImageUrl(url));
    };


    const handleSubmit = (event) => {
        event.preventDefault()
        setprofileFormsubmission(true);
        profiledetails({
            name, 
            phoneNumber, 
            address, 
            profession, 
            imageUrl
        })
        
    }
    return (
        <Modal>
            
            <form className={classes.profileForm}
            onSubmit={(event) => handleSubmit(event)}
            >
                <div className={classes.profileIcon} style={{ 'position': 'relative' }}>
                    <FontAwesomeIcon icon={faCamera} style=
                        {{
                            'color': 'white', 'position': 'absolute',
                            'top': '30px', 'left': '34px',
                            'cursor': 'pointer'
                        }}
                        size="2x"
                    />

                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        storageRef={fireStorage.ref("images")}
                        onUploadStart={() => setUploadStart(true)}
                        onUploadError={() => setUploadError(true)}
                        onUploadSuccess={(event) => handleUploadSuccess(event)}
                        onProgress={(event) => onUploadProgress(event)}
                    />
                    
                    {(profileFormsubmission && !imageUrl) ? <p className = {classes.errorMessage}>Please Upload your profile pic</p> : null}
                </div>
                <LinearProgress variant="determinate" value={uploadProgress}  className = {classes.profileBtn}/>
                <TextField label='Name' style={style}
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
                    {(profileFormsubmission && !name) ? <p className = {classes.errorMessage}>Please eneter Name</p> : null}
                <TextField
                    label='Phone Number'
                    type='number'
                    style={style}
                    value={phoneNumber}
                    onChange={(event) => onPhoneNumberChange(event)}

                />
                {(profileFormsubmission && phoneNumberValidation )  ? <p className = {classes.errorMessage}>plesae enter valid phone number</p> : null}
                {(profileFormsubmission && !phoneNumber )  ? <p className = {classes.errorMessage}>plesae enter phone number</p> : null}
                <TextField 
                label='Address' 
                type='text' 
                style={style} 
                value = {address}
                onChange = {(event) => setAddress(event.target.value)}
                />
                {(profileFormsubmission && !address )  ? <p className = {classes.errorMessage}>plesae enter Address</p> : null}
                <TextField label='Profession' type='text' style={style} 
                value = {profession}
                onChange = {(event) => setProfession(event.target.value)}
                />
                {(profileFormsubmission && !profession )  ? <p className = {classes.errorMessage}>plesae enter Profession</p> : null}
                <div className={classes.profileBtn}>
                    <Button type='submit' variant="outlined" disabled = {disabledBtn} color="primary" className={classes.submitBtn}>Submit</Button>
                    <Button type='button' variant="outlined" disabled = {disabledBtn} color="secondary">Cancel</Button>
                </div>
            </form>
        </Modal>
    )
}

const mapDispatchToProps = (dispatch, getState) => {
    return {
        profiledetails : (userDetails) => dispatch(onProfileUpdate(userDetails))
    }
}

export default connect(null, mapDispatchToProps)(Profile);