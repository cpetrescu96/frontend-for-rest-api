import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';

export class Second extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  renderInputs = num => {
    let arr = [];
    for (let i = 1; i <= num; i++)
      arr.push(
        <div key={i}>
          <TextField
            hintText='Enter the name of the player'
            floatingLabelText={`Player ${i}`}
            onChange={this.props.handlePlayersNamesChange(`${i - 1}`)}
            defaultValue={this.props.values.players[i - 1]}
          />
          <br />
        </div>
      );
    console.log(arr);
    return arr;
  };

  render() {
    const { values } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Enter Player Names' />
          <Container maxWidth='sm'>
            {[this.renderInputs(values.numOfPlayers)]}
            <RaisedButton
              label='Back'
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label='Continue'
              primary={true}
              style={styles.button}
              onClick={this.continue}
            />
          </Container>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  button: {
    margin: 15
  }
};

export default Second;
