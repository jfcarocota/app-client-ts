import React, {Component} from 'react';

export default class FormGroup extends Component<IProps, any>{

    constructor(props: IProps){
        super(props);
        this.state = {}
    }

    render() {
        const {content}: {content: React.ReactNode} = this.props;
        return (
            <div className="form-group">{content}</div>
        );
    }
}

interface IProps{
    content: React.ReactNode
}