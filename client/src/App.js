import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import {HeaderComponent} from "./components/header/header.component";
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
          <HeaderComponent/>
          <SendEmail/>
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
