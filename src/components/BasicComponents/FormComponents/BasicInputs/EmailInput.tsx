import React, {Component} from 'react';
import InputField from '../InputField';

export default class EmailInput extends Component<any, any>{

    render() {
        return (
            <InputField type="email" placeholder="email"/>
        );
    }
}
