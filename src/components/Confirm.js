import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Container from '@material-ui/core/Container';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import axios from 'axios';

export class FormUserDetails extends Component {
  state = {
    open: false
  };

  continue = async e => {
    e.preventDefault();
    ///PROCESS DATA =>>>>> SEND DATA TO API
    try {
      await axios.post('https://my-game-score.web.app/api/v1/games', {
        name: `${this.props.values.game}`,
        players: this.props.values.players
      });
    } catch (error) {
      console.error(error);
    }

    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const {
      values: { game, description, players }
    } = this.props;

    const names = players.map(p => (
      <ListItem component='p' key={p}>
        <ListItemText primary={`${p}`} />
      </ListItem>
    ));

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title='Confirm Game Data' />
          <Container maxWidth='sm'>
            <List>
              <ListItem primaryText='Game' secondaryText={game} />
              <ListItem
                primaryText={description}
                style={{
                  overflow: 'scroll',
                  height: '250px',
                  textAlign: 'left'
                }}
              />
              <ListItem onClick={this.handleClick}>
                <ListItemText primary='Players' />
                {this.state.open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={this.state.open} timeout='auto' unmountOnExit>
                <List component='div'>{names}</List>
              </Collapse>
            </List>
            <br />
            <RaisedButton
              label='Back'
              style={styles.button}
              onClick={this.back}
            />
            <RaisedButton
              label='Confirm & Continue'
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

export default FormUserDetails;
