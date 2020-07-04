import React, {Component, Fragment} from 'react';
//import './App.css';
import Routes from './components/Routes/Routes';

interface IProps{
  title: string
}

export default class App extends Component<IProps, any>{

  constructor(props: IProps){
    super(props);
    this.state = {}
  }

  render() {
    return (
    <Fragment>
      <h1>{this.props.title}</h1>
      <Routes/>
    </Fragment>
    );
  }
}

