import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import '../App.css';

export class First extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange, changeNumOfPlayers, changeGame } = this.props;

    const arrOfNames = values.gameDescriptions.map(x => {
      return x.name;
    });
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='My Game Score' />
          <Container maxWidth='sm'>
            <TextField
              style={{ width: '80%', height: '100px' }}
              hintText='Enter the name of your game. It has to be valid and you can use a maximum of 75 characters.'
              floatingLabelText='Name'
              onChange={handleChange('game')}
              value={values.game}
            />
            <br />
            <TextField
              className={'description'}
              multiLine
              fullWidth
              hintText='Enter the rules and description of the game. These sentences has to have at least 100 characters and maximum 3000 characters.'
              floatingLabelText='Game description'
              onChange={handleChange('description')}
              value={values.description}
              style={{
                height: '250px'
              }}
            />
            <br />
            <FormControl style={{ width: '66%' }}>
              <InputLabel htmlFor='game-helper'>Game</InputLabel>
              <Select
                value={values.game}
                onChange={event => changeGame(event.target.value)}
                input={<Input name='game' id='game-helper' />}
              >
                <MenuItem value={'None'}>{`None`}</MenuItem>
                {arrOfNames.map(x => (
                  <MenuItem key={x} value={`${x}`}>{`${x}`}</MenuItem>
                ))}
              </Select>
              <FormHelperText>Choose the game you wanna play!</FormHelperText>
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor='players-helper'>
                Number of players
              </InputLabel>
              <Select
                value={values.numOfPlayers}
                onChange={event => changeNumOfPlayers(event.target.value)}
                input={<Input name='players' id='players-helper' />}
              >
                {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(x => {
                  return <MenuItem key={x} value={`${x}`}>{`${x}`}</MenuItem>;
                })}
              </Select>
              <FormHelperText>Choose the number of players!</FormHelperText>
            </FormControl>
            <br />

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

export default First;
