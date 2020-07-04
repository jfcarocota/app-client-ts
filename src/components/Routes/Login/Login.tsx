import React, {Component, Fragment} from 'react';
import './Login.css';
import Container from '../../BasicComponents/Container';
import Card from '../../BasicComponents/Card';
import FormGroup from '../../BasicComponents/FormComponents/FormGroup';
import ButtonSubmit from '../../BasicComponents/FormComponents/ButtonSubmit';
import IconForm from '../../BasicComponents/FormComponents/IconForm';
import InputGroup from '../../BasicComponents/FormComponents/InputGroup';
import { FaUser, FaLock } from "react-icons/fa";
import EmailInput from '../../BasicComponents/FormComponents/BasicInputs/EmailInput';
import PasswordInput from '../../BasicComponents/FormComponents/BasicInputs/PasswordInput';


export default class Login extends Component{

    render() {
        return (
                <Container content={
                    <Card 
                        body={
                            <form>
                                <FormGroup content={
                                    <Fragment>
                                        <InputGroup content={
                                            <Fragment>
                                                <IconForm icon={<FaUser/>}/>
                                                <EmailInput/>
                                            </Fragment>
                                        }/>
                                        <InputGroup content={
                                            <Fragment>
                                                <IconForm icon={<FaLock/>}/>
                                                <PasswordInput/>
                                            </Fragment>
                                        }/>
                                        <ButtonSubmit name="Enviar"/>
                                    </Fragment>
                                }/>
                            </form>
                        }/>
                }/>
        );
    }
}