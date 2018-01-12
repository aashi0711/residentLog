import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import New from './new/new';
import SideBar from './sidebar/sidebar';

class App extends Component {
  render(){
    return(
      <div>
        <SideBar/>
        <New/>
        </div>
    );
  }
}

export default App;
