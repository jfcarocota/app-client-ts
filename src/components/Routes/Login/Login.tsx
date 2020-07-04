import React, {Component} from 'react';
import './Login.css';
import Container from '../../BasicComponents/Container';
import Card from '../../BasicComponents/Card';
import FormGroup from '../../BasicComponents/FormComponents/FormGroup';
import ButtonSubmit from '../../BasicComponents/FormComponents/ButtonSubmit';


export default class Login extends Component{

    render() {
        return (
                <Container content={
                    <Card 
                        body={
                            <form>
                                <input type="email"/>
                                <input type="password"/>
                                <FormGroup content={<ButtonSubmit name="Enviar"/>}/>
                            </form>
                        }/>
                }/>
        );
    }
}