import React, { Component } from 'react';
import 'typeface-roboto';
import './App.css';
import {HeaderComponent} from "./components/header/header.component";
import SendEmail from "./containers/send-email/send-email.container";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import {SnackBar} from "./components/snackbar/snackbar";
import { connect } from 'react-redux'
import * as snackBarActionTypes from "./store/actions/snackbar.actions";

const theme = createMuiTheme({
        palette: {
            primary: {
                main: '#00968C'
            }
        }
    }
);

class App extends Component {
  render() {
    return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
          <HeaderComponent/>
          <SendEmail/>
          <SnackBar
              label={this.props.snackBarLabel}
              open={this.props.snackBarShow}
              close={this.props.onHideSnackBar}
          />
      </div>
    </MuiThemeProvider>
    );
  }
}

const mapStateToProps = ({snackBar}) => ({
    snackBarShow: snackBar.show,
    snackBarLabel: snackBar.label
});

const mapDispatchToProps = dispatch => ({
    onHideSnackBar: () => dispatch({type: snackBarActionTypes.HIDE_SNACKBAR}),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
