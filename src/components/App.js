import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import { addRecipe } from '../actions'

class App extends Component {
  render() {
    console.log("this.props ", this.props );
    return (
      <div>
        Hello world 123
      </div>
    );
  }
}

function mapStateToProps(calendar) {
  const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

  const mealsCalendar = dayOrder.map((day) => ({
    day,
    meals: Object.keys(calendar[day]).reduce((meals, meal) => {
      meals[meal] = calendar[day][meal] ? calendar[day][meal] : null

      return meals;
    }, {})
  }));

  return {
    calendar: mealsCalendar,
  };
}

export default connect(mapStateToProps)(App);
