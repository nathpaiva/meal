import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { addRecipe } from '../actions'

class App extends Component {

  state = {
    calendar: null
  };

  componentDidMount() {
    const { store } = this.props;
    store.subscribe(() => {
      this.setState(() => ({
        calendar: store.getState()
      }))
    })
  }

  submitFood = (e) => {
    e.preventDefault();

    this.props.store.dispatch(addRecipe({
      day: 'monday',
      meal: 'breakfast',
      recipe: {
        label: this.input.value
      }
    }));

    this.input.value = '';
  }

  render() {
    return (
      <form>
        <input
          type="text"
          ref={(input) => this.input = input}
          placeholder='Mondays Breakfast'
        />
        <button onClick={this.submitFood}>Save</button>

        <pre>
          Monday's Breakfast: {this.state.calendar && this.state.calendar.monday.breakfast}
        </pre>
      </form>
    );
  }
}

export default App;
