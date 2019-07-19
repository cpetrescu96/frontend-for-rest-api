import React, { Component } from 'react';
import First from './First';
import Second from './Second';
import Confirm from './Confirm';
import Success from './Success';
import StartForm from './StartForm';
import axios from 'axios';

export class UserForm extends Component {
  state = {
    step: 0,
    game: '',
    name: '',
    description: '',
    isDefaultField: false,
    numOfPlayers: 2,
    games: [],
    gameDescriptions: [],
    players: [],
    rowsPerPage: 5,
    page: 0
  };

  componentDidMount = async () => {
    try {
      await axios
        .get(`https://my-game-score.web.app/api/v1/descriptions`)
        .then(res => {
          this.setState({
            gameDescriptions: res.data
          });
        });
    } catch (error) {
      console.error(error);
    }

    try {
      await axios
        .get(`https://my-game-score.web.app/api/v1/games`)
        .then(res => {
          this.setState({
            games: res.data
          });
        });
    } catch (error) {
      console.error(error);
    }
  };

  changeNumOfPlayers = num => {
    if (parseInt(num) > 1 && parseInt(num) < 17)
      this.setState({
        numOfPlayers: parseInt(num)
      });
  };

  changeGame = name => {
    const desc = this.state.gameDescriptions;
    desc.map(x => {
      if (x.name === name) {
        this.setState({
          description: x.description,
          game: x.name
        });
        return;
      }
    });
  };

  // Procede to the next step

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to the previous step

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change

  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };

  handlePlayersNamesChange = index => e => {
    const { players } = this.state;
    players[index] = e.target.value;

    this.setState({
      players: [...players]
    });
  };

  setPage = (newPage) => {
    this.setState({
      page: newPage
    });
    console.log(this.state.page);
  };

  render() {
    const { step } = this.state;
    const {
      game,
      name,
      description,
      numOfPlayers,
      gameDescriptions,
      games,
      isDefaultField,
      players
    } = this.state;
    const values = {
      game,
      name,
      description,
      numOfPlayers,
      gameDescriptions,
      games,
      isDefaultField,
      players
    };

    switch (step) {
      case 0:
        return (
          <StartForm
            games={ games }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            setPage={ this.setPage }
          />
        );
      case 1:
        return (
          <First
            changeNumOfPlayers={ this.changeNumOfPlayers }
            changeGame={ this.changeGame }
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        );
      case 2:
        return (
          <Second
            nextStep={ this.nextStep }
            prevStep={ this.prevStep }
            handleChange={ this.handleChange }
            values={ values }
            handlePlayersNamesChange={ this.handlePlayersNamesChange }
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={ this.nextStep }
            prevStep={ this.prevStep }
            values={ values }
          />
        );
      case 4:
        return <Success />;
      default:
        return <h1> This is the default. </h1>;
    }
  }
}

export default UserForm;
