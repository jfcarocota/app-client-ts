import React, {Component} from 'react';
import LoginField from './LoginField';
import {FaUser} from "react-icons/fa";
import EmailInput from '../../BasicComponents/FormComponents/BasicInputs/EmailInput';

export default class EmailField extends Component<any, any>{

    render(){
        return(
            <LoginField icon={<FaUser/>} field={<EmailInput/>}/>
        );
    }
}