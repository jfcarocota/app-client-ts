import React, {Component} from 'react';
//import { FaUser } from "react-icons/fa";
//import IconForm from '../../BasicComponents/FormComponents/IconForm';

export default class InputField extends Component<IProps, any>{

    constructor(props: IProps){
        super(props);
        
        this.state = {}
    }
    
    render() {
        const {type}: {type: string} = this.props;
        return (
            <input type={type} className="form-control" placeholder={this.props.placeholder}/>
        );
    }
}

interface IProps{
    type: string,
    placeholder?: string
}