import React, {Component} from 'react';

export default class Container extends Component<IProps, any>{

    constructor(props: IProps){
        super(props);
        this.state = {}
    }
    
    render() {

        const {content}: {content: React.ReactNode} = this.props;

        return (
             <div className="container">
                <div className="d-flex justify-content-center h-100">{content}</div>
             </div>
        );
    }
}

interface IProps{
    content: React.ReactNode
}