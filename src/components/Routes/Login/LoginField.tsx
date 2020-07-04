import React, {Component, Fragment} from 'react';
import IconForm from '../../BasicComponents/FormComponents/IconForm';
import InputGroup from '../../BasicComponents/FormComponents/InputGroup';

export default class LoginField extends Component<IProps, any>{

    constructor(props: IProps){
        super(props);
        this.state = {}
    }

    render(){

        const {icon, field}: {icon: React.ReactNode, field: React.ReactNode} = this.props;
        return(
            <InputGroup content={
                <Fragment>
                    <IconForm icon={icon}/>
                    {field}
                </Fragment>
            }/>
        );
    }
}

interface IProps{
    icon: React.ReactNode,
    field: React.ReactNode
}