import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import {Header} from "./components/header/header";
import SendEmail from "./containers/send-email/send-email.container";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#00968C'
            }
        }
    }
)

class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
          <Header/>
          <SendEmail/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
