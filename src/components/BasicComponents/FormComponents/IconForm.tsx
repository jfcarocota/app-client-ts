import React, {Component} from 'react';

export default class IconForm extends Component <IProps, any>{

    constructor(props: IProps){
        super(props);

        this.state = {}
    }
    
    render() {
        const {icon}: {icon: React.ReactNode} = this.props;
        return (
            <div className="input-group-prepend">
                <span className="input-group-text">{icon}</span>
            </div>
        );
    }
}

interface IProps{
    icon: React.ReactNode
}