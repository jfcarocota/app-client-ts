import React, {Component, Fragment} from 'react';
import InputGroup from '../../BasicComponents/FormComponents/InputGroup';
import IconForm from '../../BasicComponents/FormComponents/IconForm';

export default class LoginInputContainer extends Component <IProps, any>{

    constructor(props: IProps){
        super(props);
        this.state = {}
    }

    render() {
        const {icon, input} : {icon: React.ReactNode, input: React.ReactNode} = this.props;
        return (
              <InputGroup content={
                 <Fragment>
                    <IconForm icon={icon}/>
                    {input}
                 </Fragment>
              }/>
        );
    }
}

interface IProps{
    icon: React.ReactNode,
    input: React.ReactNode
}

