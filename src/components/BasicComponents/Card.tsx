import React, {Component} from 'react';

export default class Card extends Component<IProps, any>{
    constructor(props: IProps){
        super(props);
        this.state = {}
    }

    render() {
        const {body}: {body: React.ReactNode} = this.props;
        return (
            <div className="card">
                <div className="card-body">
                    {body}
                </div>
                <div className="card-footer">
                    {this.props.footer}
                </div>
            </div>
        );
    }
}

interface IProps{
    body: React.ReactNode,
    footer?: React.ReactNode
}
