import { combineReducers } from 'redux';
import { ADD_RECIPE, REMOVE_FROM_CALENDAR } from '../actions';

const initialCalendarState = {
  sunday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
  monday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
  tuesday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
  wednesday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
  thursday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
  friday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
  saturday: {
    breackfast: null,
    lunch: null,
    dinner: null
  },
};

function calendar(state = initialCalendarState, action) {
  const { day, recipe, meal } = action;

  switch(action.type) {
    case ADD_RECIPE:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: recipe.label,
        }
      };
    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null,
        }
      };
    default:
      return state;
  }
}

function food(state = {}, action) {
  switch(action.type) {
    case ADD_RECIPE:
      const { recipe } = action;

      return {
        ...state,
        [recipe.label]: recipe,
      };
    default:
      return state;
  }
}

export default combineReducers({
  calendar,
  food,
});
