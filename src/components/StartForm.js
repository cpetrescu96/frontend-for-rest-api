import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';
import Table from './Table';

export class StartForm extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Hello!' />
          <Container maxWidth='sm'>
            <h1>Are you ready for a new game?</h1>
            <p>You will have a lot of fun!</p>
            <RaisedButton
              label='Confirm & Continue'
              primary={ true }
              style={ styles.button }
              onClick={ this.continue }
            />
          </Container>
          <Table
            games={ this.props.games }
            setRowsPerPage={ this.props.setRowsPerPage }
            setPage={ this.props.setPage }
            rows
            rowsPerPage
            page={ this.props.page }
            nextPage={ this.props.nextPage }
            prevPage={ this.props.prevPage }

          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: { margin: 15 }
};

export default StartForm;
