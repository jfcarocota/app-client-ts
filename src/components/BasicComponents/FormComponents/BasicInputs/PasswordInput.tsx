import React, {Component} from 'react';
import InputField from '../InputField';

export default class PasswordInput extends Component<any, any>{

    render() {
        return (
            <InputField type="password" placeholder="password"/>
        );
    }
}