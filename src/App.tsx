import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

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
    <h1>{this.props.title}</h1>
    );
  }
}

