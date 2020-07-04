import React, {Component} from 'react';
import LoginField from './LoginField';
import {FaLock} from "react-icons/fa";
import PasswordInput from '../../BasicComponents/FormComponents/BasicInputs/PasswordInput';

export default class PasswordField extends Component<any, any>{

    render(){
        return(
            <LoginField icon={<FaLock/>} field={<PasswordInput/>}/>
        );
    }
}