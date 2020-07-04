import React, {Component} from 'react';

export default class ButtonSubmit extends Component<IProps, any>{

    constructor(props: IProps){
        super(props);
        this.state = {}
    }

    render() {
        const {name} : {name: string} = this.props;
        return (
            <button type="submit" className="btn float-right login_btn">{name}</button>
        );
    }
}

interface IProps{
    name: string
}