import React, {Component, Fragment} from 'react';
import './Login.css';
import Container from '../../BasicComponents/Container';
import Card from '../../BasicComponents/Card';
import FormGroup from '../../BasicComponents/FormComponents/FormGroup';
import ButtonSubmit from '../../BasicComponents/FormComponents/ButtonSubmit';
import EmailField from './EmailField';
import PasswordField from './PasswordField';
import {Link} from 'react-router-dom';

export default class Login extends Component{

    render() {
        return (
                <Container content={
                    <Card 
                        body={
                            <form>
                                <FormGroup content={
                                    <Fragment>
                                        <EmailField/>
                                        <PasswordField/>
                                        <ButtonSubmit name="Enviar"/>
                                    </Fragment>
                                }/>
                            </form>
                        }
                        footer={
                            <Fragment>
                                <div className="d-flex justify-content-center links">
                                    Don't have an account?<Link to="#">Sign Up</Link>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <Link to="#">Forgot your password?</Link>
                                </div>
                            </Fragment>
                        }/>
                }/>
        );
    }
}