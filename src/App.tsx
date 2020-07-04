import React, {Component, Fragment} from 'react';
import './App.css';
import Routes from './components/Routes/Routes';

interface IProps{
  title: string
}

interface IState{
  tasks: []
}

export default class App extends Component<IProps, IState>{

  constructor(props: IProps){
    super(props);
    this.state = {
      tasks: []
    }
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

