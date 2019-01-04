import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import {Header} from "./components/header/header";
import SendEmail from "./containers/send-email/send-email.container";

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <SendEmail/>
      </div>
    );
  }
}

export default App;
